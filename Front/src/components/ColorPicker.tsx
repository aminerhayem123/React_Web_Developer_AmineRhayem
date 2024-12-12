// src/components/ColorPicker.tsx

interface ColorPickerProps {
  colors: string[];
  selected: string;
  onChange: (color: string) => void;
  disabled?: boolean;
}

export const ColorPicker = ({ colors, selected, onChange, disabled }: ColorPickerProps) => {
  return (
    <div className="flex gap-2">
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => onChange(color)}
          className={`w-8 h-8 rounded-full border ${color === selected ? 'border-gray-500' : 'border-gray-300'}`}
          style={{ backgroundColor: color }}
          disabled={disabled}
        >
          {color === selected && (
            <div className="w-full h-full border-2 border-white rounded-full" />
          )}
        </button>
      ))}
    </div>
  );
};
