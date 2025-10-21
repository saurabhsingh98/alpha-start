import React,{useState} from 'react'
import { Header } from '../common/Header1'
import { CreatePost } from './CreatePost'
import { HiBell } from 'react-icons/hi'

const Dashboard = () => {
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false)
  
  return (
    <>
      <Header
          search={true}
          title={"AlpHa StaRt"}
          isNotificationModalOpen={isNotificationModalOpen}
          setIsNotificationModalOpen={setIsNotificationModalOpen}
          navigation={[
            { label: 'Jobs' },
            { label: 'Connections' },
            { label: 'Messaging' },
            { label: 'Profile' },
          ]
        }
        actions={
          <>
          <div>
          <HiBell className="w-6 h-6 text-gray-600" onClick={()=>setIsNotificationModalOpen(!isNotificationModalOpen)} />
            <div>Notification</div>
            <div>Notification</div>
            <div>Notification</div>
            <div>Notification</div>
            <div>Notification</div>
            <div>Notification</div>
            <div>Notification</div>
            <div>Notification</div>
            <div>Notification</div>
            <div>Notification</div>
            <div>Notification</div>
            <div>Notification</div>
            <div>Notification</div>
            <div>Notification</div>
            <div>Notification</div>
            <div>Notification</div>
            <div>Notification</div>
            <div>Notification</div>
            <div>Notification</div>
            <div>Notification</div>
            <div>Notification</div>
            <div>Notification</div>
            <div>Notification</div>
            <div>Notification</div>
            <div>Notification</div>
            <div>Notification</div>
          </div>
          <div>
            <img src={"/images/user.png"} alt="user" className="w-6 h-6 rounded-full" />
            <div>John Doe</div>
          </div>
          </>
        }
        />  
      <CreatePost />
    </>
  )
}

export default Dashboard