import React, { useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

export default function Modal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    function handleEscape(e) {
      if (e.key === 'Escape') {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-lg shadow-2xl max-w-md w-full mx-4 max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          {title && <h2 className="text-xl font-semibold text-gray-900">{title}</h2>}
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors ml-auto"
            aria-label="Close modal"
          >
            <AiOutlineClose className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {children}
        </div>
      </div>
    </div>
  );
}
