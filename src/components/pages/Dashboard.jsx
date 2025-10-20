
import React from 'react'
// import Header from '../common/Header'
import { Header } from '../common/Header1'
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

    </>
  )
}

export default Dashboard