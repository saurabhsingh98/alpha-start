import { useState, useEffect } from 'react'
import { io } from 'socket.io-client'
import { alpha_api, SOCKET_URL } from '../../constants/api.js'
import { getApiHandler } from '../../helpers/apihandler.js'
import Header from '../common/Header.jsx'

const Notifications = () => {
    const [notifications, setNotifications] = useState([])
    const userId = localStorage.getItem('user_id') || 'User Id Missing'

    useEffect(() => {
        try {
            const fetchNotifications = async () => {
                const response = await getApiHandler(alpha_api.GET_NOTIFICATIONS(userId))
                setNotifications(response)
            }
            fetchNotifications()
            
        } catch (error) {
            console.log("-----ERROR IN FETCHING API NOTIFICATIONS-----", error)
        }
    }, [])

    useEffect(() => {
        try {
            const socket = io(SOCKET_URL)
            socket.on('connect', () => {
                console.log('-----Connected to server for notifications-----')
            })
            socket.emit('register', userId)
    
            socket.on('disconnect', () => {
                console.log('-----Disconnected from server for notifications-----')
            })
            socket.on('notification', (notification) => {
                setNotifications((prevNotifications) => [...prevNotifications, notification])
            })
            return () => {
                socket.disconnect()
            }
        } catch (error) {
            console.log("-----ERROR IN SOCKET NOTIFICATIONS-----", error)
        }
    }, [])

    return (
        <>
            <Header />
            {notifications.map((notification) => (
                <div key={notification._id}>
                    <div>{notification.message}</div>
                    <div>{notification.createdAt}</div>
                    <div>{notification.type}</div>
                </div>
            ))}
        </>
    )
}

export default Notifications