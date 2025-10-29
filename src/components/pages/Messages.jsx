import { useState } from 'react'
import Profile from '../profile/AddProfile.jsx'
import Loader from '../common/Loader.jsx'

const Messages = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  return (
    <div>
      <Profile isOpen={isProfileOpen} setIsOpen={setIsProfileOpen} />
      <div>Messages</div>
    </div>
  )
}

export default Messages