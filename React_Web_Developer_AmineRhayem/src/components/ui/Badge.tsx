import React from 'react';

interface BadgeProps {
  label: string;
  color?: string;
}

const Badge: React.FC<BadgeProps> = ({ label, color = 'bg-blue-500' }) => {
  return (
    <span
      className={`inline-block ${color} rounded-full px-3 py-1 text-sm font-semibold text-white`}
    >
      {label}
    </span>
  );
};

export default Badge;
