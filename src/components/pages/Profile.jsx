import Header from '../common/Header.jsx'
import { DEFAULT_PROFILE_PICTURE, DEFAULT_WALLPAPER } from '../../constants/constant.js'
import { Button } from '../common/Button.jsx'
import { useState } from 'react'

import { FaEdit, FaPlus } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import ProfileInput from '../profile/AddProfile.jsx';
import ExperienceInput from '../profile/AddExperience.jsx'
import EducationInput from '../profile/AddEducation.jsx'

const Profile = () => {
  const userProfile = useSelector((state) => state.userProfile.user) || {}
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false)
  const [isAddExperienceOpen, setIsAddExperienceOpen] = useState(false)
  const [isAddEducationOpen, setIsAddEducationOpen] = useState(false)

  return (
    <div>
      <Header />
      <div className='bg-gray-200 rounded-lg items-center justify-center w-1/2 h-[40vh] mx-auto mt-2'>
        
        <div className='w-full h-1/3'>
            {/* background image wallpaper */}
            <div className='w-full h-full'>
                <img src={DEFAULT_WALLPAPER} alt="wallpaper" className="w-full h-full object-cover rounded-t-lg" />
            </div>
        </div>
        <div className='w-full h-2/3'>
            <div className='w-full h-full'>
                <img src={userProfile?.profilePicture || DEFAULT_PROFILE_PICTURE} alt="profile" className="w-20 h-20 rounded-full mx-auto absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

                <div className='w-full h-1/2 m-5 p-4'>
                    <h2 className='text-2xl font-bold'>{userProfile?.firstName} {userProfile?.lastName}</h2>
                    {/* description */}
                    <p className='text-gray-600'>{userProfile?.headline}</p>
                    {/* location */}
                    <p className='text-gray-600'>{userProfile?.location}</p>
                    {/* industry */}
                    <p className='text-gray-600'>{userProfile?.industry}</p>
                    {/* summary */}
                    <p className='text-gray-600'>{userProfile?.summary}</p>
                </div>
                
                <div className='flex items-center justify-center gap-5 w-full h-1/2 m-5 p-4'>
                    <Button onClick={()=>setIsEditProfileOpen(true)}><FaEdit /> Edit Profile</Button>
                    <Button onClick={()=>setIsAddExperienceOpen(true)}><FaPlus /> Add Experience</Button>
                    <Button onClick={()=>setIsAddEducationOpen(true)}><FaPlus /> Add Education</Button>
                    <ProfileInput isOpen={isEditProfileOpen} setIsOpen={setIsEditProfileOpen} />
                    <ExperienceInput isOpen={isAddExperienceOpen} setIsOpen={setIsAddExperienceOpen} />
                    <EducationInput isOpen={isAddEducationOpen} setIsOpen={setIsAddEducationOpen} />
                </div>
                    
            </div>

        </div>
      </div>
    </div>
  )
}

export default Profile