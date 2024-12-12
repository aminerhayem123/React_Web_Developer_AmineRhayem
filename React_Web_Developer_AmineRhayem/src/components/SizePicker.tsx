// src/components/SizePicker.tsx
import React from 'react';

interface SizePickerProps {
  sizes: string[];
  selected: string;
  onChange: (size: string) => void;
  disabled?: boolean;
}

export const SizePicker = ({ sizes, selected, onChange, disabled }: SizePickerProps) => {
  return (
    <div className="flex gap-2">
      {sizes.map((size) => (
        <button
          key={size}
          className={`py-1 px-2 text-sm rounded-md border ${selected === size ? 'bg-gray-500/50 text-white' : 'bg-transparent border-gray-300'}`}
          onClick={() => onChange(size)}
          disabled={disabled}
        >
          {size}
        </button>
      ))}
    </div>
  );
};
