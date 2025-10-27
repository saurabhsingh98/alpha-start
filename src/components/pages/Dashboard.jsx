
import Header from '../common/Header.jsx'
import { CreatePost } from './CreatePost'
import { Feeds } from './Feeds.jsx'

const Dashboard = () => {
  
  return (
    <>
      <Header/>  
      <CreatePost />
      <Feeds />
    </>
  )
}

export default Dashboard