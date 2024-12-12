import React from 'react';

interface SelectProps {
  options: string[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({ options, selectedValue, onChange }) => {
  return (
    <select
      className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      value={selectedValue}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
