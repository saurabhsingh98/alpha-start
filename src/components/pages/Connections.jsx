import React, { useState, useEffect } from 'react'
import { getApiHandler } from '../../helpers/apihandler.js'
import { alpha_api } from '../../constants/api.js'
import Loader from '../common/Loader.jsx'
import { DEFAULT_PROFILE_PICTURE } from '../../constants/constant.js'
import toast from 'react-hot-toast'
import { postApiHandler } from '../../helpers/apihandler.js'

const handleFollowUser = async (targetUserId, setFollowing) => {
  try {
    setFollowing(true)
    const response = await postApiHandler(alpha_api.FOLLOW_USER(targetUserId))
    toast.success("-----USER FOLLOWED SUCCESSFULLY-----")
  } catch (error) {
    console.log("-----ERROR IN FOLLOWING USER-----", error)
    toast.error("-----ERROR IN FOLLOWING USER-----")
  }finally{
    setFollowing(false)
  }
}

const Connections = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [following, setFollowing] = useState(false)

  const [followingUsers, setFollowingUsers] = useState([])

  const fetchFollowingUsers = async () => {
    try {
      setLoading(true)
      const response = await getApiHandler(alpha_api.GET_FOLLOWING_USERS(localStorage.getItem('user_id')))
      setFollowingUsers(response)
    } catch (error) {
      toast.error("-----ERROR IN FETCHING FOLLOWING USERS-----")
      console.log("-----ERROR IN FETCHING FOLLOWING USERS-----", error)
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    try {
      setLoading(true)
      const fetchUsers = async () => {
        const response = await getApiHandler(alpha_api.GET_USERS)
        toast.success("-----USERS FETCHED SUCCESSFULLY-----")
        setUsers(response)
      }
      fetchUsers()
    } catch (error) {
      toast.error("-----ERROR IN FETCHING USERS-----")
      console.log("-----ERROR IN FETCHING USERS-----", error)
    }
    finally {
      setLoading(false)
    }
  }, [])


  if (loading) {
    return <div className='flex justify-center items-center h-screen'><Loader /></div>
  }
  return (
    <div>
      <div className="flex flex-wrap gap-8 justify-center items-center m-10">
        {users?.map((user, index) => (
          <div
            key={index}
            className="w-80 bg-white rounded-xl shadow-md flex flex-col items-center p-6 hover:shadow-xl transition-shadow"
          >
            <img
              src={user.profilePicture || DEFAULT_PROFILE_PICTURE}
              alt={`${user.firstName} ${user.lastName}`}
              className="w-20 h-20 rounded-full object-cover border-2 border-blue-400 mb-3"
            />
            <h3 className="text-lg font-semibold text-gray-900">
              {user.firstName} {user.lastName}
            </h3>
            <p className="text-blue-700 font-medium text-sm">{user.headline}</p>
            {user.location && (
              <div className="text-gray-500 text-sm mt-1 flex items-center gap-1">
                <span className="material-icons text-base">location_on</span>
                {user.location}
              </div>
            )}
            {user.industry && (
              <div className="text-gray-500 text-sm mt-1 flex items-center gap-1">
                <span className="material-icons text-base">business_center</span>
                {user.industry}
              </div>
            )}
            {user.summary && (
              <p className="text-gray-600 text-xs mt-2">{user.summary}</p>
            )}
            <button
              className={`mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors ${following ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={following}
              onClick={() => { handleFollowUser(user.userId, setFollowing) }}
            >
              Follow
            </button>
          </div>
        ))}
      </div>

    {/* // LIST OF USERS TO U CAN MESSAGE */}
    </div>
  )
}

export default Connections