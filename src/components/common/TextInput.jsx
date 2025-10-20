import React from 'react';

export const TextInput = ({
  label,
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  required = false,
  type = 'text',
  className = '',
  multiline = false,       // <-- New prop
  rows = 4,                // <-- Optional, default height of textarea
}) => {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          rows={rows}
          className={`
            px-4 py-2.5 rounded-lg border transition-all duration-200 resize-none
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-500
            ${error ? 'border-red-500' : 'border-gray-300 hover:border-gray-400'}
          `}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className={`
            px-4 py-2.5 rounded-lg border transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-500
            ${error ? 'border-red-500' : 'border-gray-300 hover:border-gray-400'}
          `}
        />
      )}

      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};
