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
      <div>Alpha Start</div>
      <div>Notification</div>
      <div>User</div>
    </div>
  );
};

export default Header;
