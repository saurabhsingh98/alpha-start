
import React from 'react'
import { Header } from '../common/Header1'
import { CreatePost } from './CreatePost'

const Dashboard = () => {

  return (
    <>
      <Header
          search={true}
          title={"AlpHa StaRt"}
          navigation={[
            { label: 'Jobs' },
            { label: 'Connections' },
            { label: 'Messaging' },
            { label: 'Notification' },
            { label: 'Profile' },
          ]}
        />  
      <CreatePost />
    </>
  )
}

export default Dashboard