import React from 'react'
import Header from '../common/Header.jsx'
import { CreatePost } from './CreatePost'
import { Feeds } from './Feeds.jsx'
import { Notifications } from './Notifications.jsx'

const Dashboard = () => {
  
  return (
    <>
      <Header/>  
      <CreatePost />
      <Feeds />
      <Notifications />
    </>
  )
}

export default Dashboard