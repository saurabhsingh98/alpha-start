import React from 'react';

export const Checkbox = ({
  label,
  checked,
  onChange,
  disabled = false,
  error,
  className = '',
}) => {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label
        className={`flex items-center gap-2 cursor-pointer ${
          disabled ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        <div className="relative">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            disabled={disabled}
            className="sr-only"
          />
          <div
            className={`
              w-5 h-5 rounded border-2 transition-all duration-200
              flex items-center justify-center
              ${checked ? 'bg-blue-600 border-blue-600' : 'bg-white border-gray-300 hover:border-gray-400'}
              ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
            `}
          >
            {checked && (
              <svg
                className="w-3.5 h-3.5 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
        </div>
        {label && <span className="text-sm text-gray-700">{label}</span>}
      </label>
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};
