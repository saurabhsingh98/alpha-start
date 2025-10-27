import React, { useState } from 'react'
import { HiArrowRight, HiBell, HiUserGroup } from 'react-icons/hi'
import { TiMessages } from 'react-icons/ti'
import { Notifications } from '../pages/Notifications'

const Header = () => {
    const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")

    const onSearchChange = (e) => {
      setSearchQuery(e.target.value)
    }

    return (
      <>
        <header className="bg-white border-b border-gray-200">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="flex items-center justify-between h-16">

              <div className="flex items-center gap-50 justify-between w-full">

                <div className="flex items-center gap-3">
                  <div className="text-xl font-bold text-[#0077B5]">Alpha Start</div>
                  <div className="text-sm font-medium text-gray-600">
                    <input 
                      type="search" 
                      name="search" 
                      id="search" 
                      placeholder="Search" 
                      className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                      value={searchQuery} 
                      onChange={onSearchChange} 
                    />
                  </div>
                  <div className="items-center gap-2">
                    <HiArrowRight className="w-6 h-6 text-gray-600 mx-auto" />
                    <div className="text-sm font-medium text-gray-600">Jobs</div>
                  </div>
                  <div className="items-center gap-2">
                    <HiUserGroup className="w-6 h-6 text-gray-600 mx-auto" />
                    <div className="text-sm font-medium text-gray-600">Connections</div>
                  </div>
                  <div className="items-center gap-2">
                    <TiMessages className="w-6 h-6 text-gray-600 mx-auto" />
                    <div className="text-sm font-medium text-gray-600">Messages</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="items-center gap-2" onClick={()=>setIsNotificationModalOpen(!isNotificationModalOpen)}>
                    <HiBell className="mx-auto w-6 h-6 text-gray-600" />
                    <div className="text-sm font-medium text-gray-600 mx-auto">Notification</div>
                  </div>
                  <div className="text-sm font-medium text-gray-600 border rounded-full p-2">
                    <img src={"/images/user.png"} alt="user" className="w-6 h-6 rounded-full" />
                    <div>John Doe</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    )
}

export default Header