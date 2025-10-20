import React from 'react';

export const NumberInput = ({
  label,
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  required = false,
  min,
  max,
  step = 1,
  className = '',
}) => {
  const handleChange = (e) => {
    const val = e.target.value;
    if (val === '') {
      onChange('');
    } else {
      const numVal = parseFloat(val);
      if (!isNaN(numVal)) {
        onChange(numVal);
      }
    }
  };

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        type="number"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        min={min}
        max={max}
        step={step}
        className={`
          px-4 py-2.5 rounded-lg border transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
          disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-500
          ${error ? 'border-red-500' : 'border-gray-300 hover:border-gray-400'}
        `}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};
