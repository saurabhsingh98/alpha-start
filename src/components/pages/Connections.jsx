import React, { useState, useEffect } from 'react'
import { getApiHandler } from '../../helpers/apihandler.js'
import { alpha_api } from '../../constants/api.js'

const Connections = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        try {
            const fetchUsers = async () => {
                const response = await getApiHandler(alpha_api.GET_USERS)
                setUsers(response)
            }
            fetchUsers()
        } catch (error) {
            console.log("-----ERROR IN FETCHING USERS-----", error)
        }
    }, [])
    
  return (
    <div>
      <div className="flex flex-wrap gap-4 justify-center items-center m-10">
        {users?.map((user, index) => (
            <div key={index} className='w-1/2 h-1/2 bg-gray-200 rounded-lg'>
                <div>{user.firstName}</div>
                <div>{user.lastName}</div>
                <div>{user.headline}</div>
                <div>{user.location}</div>
                <div>{user.industry}</div>
                <div>{user.summary}</div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Connections