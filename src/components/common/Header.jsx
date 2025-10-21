import React,{useState} from 'react';
import Modal from './Modal.jsx'


const Header = () => {
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false)
  console.log("--------INSIDE HEADER------");


  console.log("-------SEE NOTIFICATION--------")

  return (
    <div
      style={{
        display: 'flex',
        gap: '4rem',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px',
        backgroundColor: '#f5f5f5',
        color: 'black',
        borderBottom: '1px solid #ddd',
        fontWeight: 'bold',
        fontSize: '16px',
      }}
    >
      <div style={{fontFamily:'sans-serif', color: '#30baaf9e'}}>Alpha Start</div>
      <div style={{fontFamily:'sans-serif', color: '#30baaf9e'}}>
        <input type="search" name="" id="" />
      </div>
      <div className='bg-amber-300'>Jobs</div>
      <div>Connections</div>
      <div>Messaging</div>
      <div onClick={()=>setIsNotificationModalOpen(!isNotificationModalOpen)}>Notification</div>
      <div>User</div>
      <Modal isOpen={isNotificationModalOpen} onClose={()=>setIsNotificationModalOpen(!isNotificationModalOpen)} title="Notification">
        <div>Notification</div>
      </Modal>
    </div>
  );
};

export default Header;
