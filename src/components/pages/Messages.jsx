import { useState } from 'react'
import Header from '../common/Header.jsx'
import Profile from '../profile/Profile.jsx'


const Messages = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  return (
    <div>
      <Header />
      <Profile isOpen={isProfileOpen} setIsOpen={setIsProfileOpen} />
      <div>Messages</div>
    </div>
  )
}

export default Messages