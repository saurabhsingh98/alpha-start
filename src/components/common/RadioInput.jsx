import React from 'react';

export const Radio = ({
  label,
  options,
  value,
  onChange,
  error,
  disabled = false,
  required = false,
  orientation = 'vertical',
  className = '',
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div
        className={`flex gap-4 ${
          orientation === 'vertical' ? 'flex-col' : 'flex-row flex-wrap'
        }`}
      >
        {options.map((option) => (
          <label
            key={option.value}
            className={`flex items-center gap-2 cursor-pointer ${
              (disabled || option.disabled) ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <input
              type="radio"
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange(e.target.value)}
              disabled={disabled || option.disabled}
              className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer"
            />
            <span className="text-sm text-gray-700">{option.label}</span>
          </label>
        ))}
      </div>
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};
