import React from 'react';

const Header = () => {
  console.log("------INSIDE HEADER----");

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
      <div>Jobs</div>
      <div>Connections</div>
      <div>Messaging</div>
      <div>Notification</div>
      <div>User</div>
    </div>
  );
};

export default Header;
