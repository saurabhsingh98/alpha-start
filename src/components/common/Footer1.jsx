import React from 'react';

export const Footer = ({
  logo,
  title,
  description,
  sections = [],
  socialLinks = [],
  copyright,
  className = '',
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-gray-50 border-t border-gray-200 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              {logo}
              {title && <span className="text-xl font-semibold text-gray-900">{title}</span>}
            </div>
            {description && <p className="text-sm text-gray-600 mb-6">{description}</p>}
            {socialLinks.length > 0 && (
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            )}
          </div>

          {sections.length > 0 && (
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
              {sections.map((section) => (
                <div key={section.title}>
                  <h3 className="text-sm font-semibold text-gray-900 mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            {copyright || `© ${currentYear} All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  );
};
