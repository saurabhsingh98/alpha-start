import React, { useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

export default function NotificationModal({ isOpen, onClose, title, children, size = 'lg' }) {
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

  // Dynamically assign width class based on size prop
  const sizeClass = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-3xl',
  }[size] || 'max-w-md';

  return (
    <div className="relative top-20 z-50 flex items-center justify-center pointer-events-none">
      {/* ✅ Transparent clickable background (no blur / no black) */}
      <div
        className="absolute inset-0"
        onClick={onClose}
        style={{ backgroundColor: 'transparent' }}
      />

      <div
        className={`relative bg-white rounded-lg shadow-2xl w-full mx-4 max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200 ${sizeClass} pointer-events-auto`}
      >
        <div className="flex items-center justify-between p-1 border-b border-gray-200">
          {title && <h4 className="text-base font-semibold text-gray-900">{title}</h4>}
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
