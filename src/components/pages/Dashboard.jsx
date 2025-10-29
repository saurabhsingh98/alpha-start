
import { getApiHandler } from '../../helpers/apihandler.js'
import Header from '../common/Header.jsx'
import { CreatePost } from './CreatePost'
import { Feeds } from './Feeds.jsx'
import { useState, useEffect } from 'react'
import { alpha_api } from '../../constants/api.js'

import { useDispatch } from "react-redux";
import { setUserProfile } from "../../reduxStore/slices/userSlice.js";

const Dashboard = () => {
  const dispatch = useDispatch();

  // const [userProfile, setUserProfile] = useState({})
  useEffect(()=>{
    const fetchUserProfile = async () => {
    try {
      const response = await getApiHandler(`${alpha_api.GET_PROFILE}/68f1e46902fd41ec8fbd01e6`)
        console.log("----------response------", response)
        dispatch(setUserProfile(response))
      } catch (error) {
        console.log("--------ERROR WHILE FETCHING PROFILE----")
      }
    }
    fetchUserProfile()
  },[])

  return (
    <>
      <Header/>  
      <CreatePost />
      <Feeds />
    </>
  )
}

export default Dashboard