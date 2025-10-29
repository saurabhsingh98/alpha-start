import { DEFAULT_PROFILE_PICTURE, DEFAULT_WALLPAPER } from '../../constants/constant.js'
import { Button } from '../common/Button.jsx'
import { useState } from 'react'

import { FaEdit, FaPlus } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import ProfileInput from '../profile/AddProfile.jsx';
import ExperienceInput from '../profile/AddExperience.jsx'
import EducationInput from '../profile/AddEducation.jsx'
import Education from '../profile/Education.jsx'

const Profile = () => {
  const userProfile = useSelector((state) => state.userProfile.user) || {}
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false)
  const [isAddExperienceOpen, setIsAddExperienceOpen] = useState(false)
  const [isAddEducationOpen, setIsAddEducationOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto mt-6">
        {/* Profile Card */}
        <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Wallpaper */}
          <div className="h-40 bg-gray-300">
            <img
              src={DEFAULT_WALLPAPER}
              alt="wallpaper"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Profile Picture - overlap */}
          <div className="absolute left-1/2 top-28 transform -translate-x-1/2 -translate-y-1/2">
            <img
              src={userProfile?.profilePicture || DEFAULT_PROFILE_PICTURE}
              alt="profile"
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover bg-white"
            />
          </div>
          {/* Profile Info and Actions */}
          <div className="pt-20 pb-6 px-8 flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              {userProfile?.firstName} {userProfile?.lastName || <span className="font-normal text-gray-400">No Name</span>}
            </h2>
            {userProfile?.headline && (
              <p className="text-blue-800 font-medium mt-1">{userProfile.headline}</p>
            )}
            <div className="flex items-center gap-3 mt-2 text-gray-600">
              {userProfile?.location && (
                <span className="inline-block">
                  <span className="material-icons text-base align-middle">location_on</span>
                  {userProfile.location}
                </span>
              )}
              {userProfile?.industry && (
                <span className="inline-block">
                  <span className="material-icons text-base align-middle">business_center</span>
                  {userProfile.industry}
                </span>
              )}
            </div>
            {userProfile?.summary && (
              <p className="mt-3 text-gray-700 max-w-xl">{userProfile.summary}</p>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Button onClick={() => setIsEditProfileOpen(true)} className="flex items-center gap-2">
                <FaEdit />
                Edit Profile
              </Button>
              <Button onClick={() => setIsAddExperienceOpen(true)} className="flex items-center gap-2">
                <FaPlus />
                Add Experience
              </Button>
              <Button onClick={() => setIsAddEducationOpen(true)} className="flex items-center gap-2">
                <FaPlus />
                Add Education
              </Button>
            </div>
            {/* Modals */}
            <ProfileInput
              isOpen={isEditProfileOpen}
              setIsOpen={setIsEditProfileOpen}
            />
            <ExperienceInput
              isOpen={isAddExperienceOpen}
              setIsOpen={setIsAddExperienceOpen}
            />
            <EducationInput
              isOpen={isAddEducationOpen}
              setIsOpen={setIsAddEducationOpen}
            />
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-8">
          <Education />
        </div>
      </div>
    </div>
  )
}

export default Profile