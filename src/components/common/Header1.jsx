import React, { useState } from 'react';
import Modal from './Modal.jsx'
import NotificationModal from './NotificationModal.jsx'

export const Header = ({
  logo,
  title,
  navigation = [],
  actions,
  isNotificationModalOpen = false,
  setIsNotificationModalOpen,
  className = '',
}) => {

  return (
    <header className={`bg-white border-b border-gray-200 ${className}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              {logo}
              {title && <span className="text-xl font-semibold text-gray-900">{title}</span>}
            </div>

            {navigation.length > 0 && (
              <nav className="hidden md:flex items-center gap-6">
                {navigation.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className={`
                      text-sm font-medium transition-colors duration-200
                      ${
                        item.active
                          ? 'text-blue-600'
                          : 'text-gray-600 hover:text-gray-900'
                      }
                    `}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            )}
          </div>

          <div className="hidden md:flex items-center gap-4">{actions}</div>

        </div>
          {
            isNotificationModalOpen && 
            <NotificationModal title={"Notification"} isOpen={isNotificationModalOpen} onClose={setIsNotificationModalOpen}/>
          }
      </div>
    </header>
  );
};
