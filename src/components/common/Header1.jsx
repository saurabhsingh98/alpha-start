import React, { useState } from 'react';

export const Header = ({
  logo,
  title,
  navigation = [],
  actions,
  className = '',
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const MenuIcon = (
    <svg
      className="w-6 h-6 text-gray-600"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );

  const XIcon = (
    <svg
      className="w-6 h-6 text-gray-600"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

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
                {navigation.map((item) => (
                  <a
                    key={item.href}
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

          {navigation.length > 0 && (
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {isMobileMenuOpen ? XIcon : MenuIcon}
            </button>
          )}
        </div>
      </div>

      {isMobileMenuOpen && navigation.length > 0 && (
        <div className="md:hidden border-t border-gray-200">
          <nav className="px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`
                  block px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200
                  ${
                    item.active
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }
                `}
              >
                {item.label}
              </a>
            ))}
            {actions && <div className="pt-4 border-t border-gray-200">{actions}</div>}
          </nav>
        </div>
      )}
    </header>
  );
};
