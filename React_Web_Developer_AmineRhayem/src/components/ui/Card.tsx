import React from 'react';

interface CardProps {
  title: string;
  imageUrl: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, imageUrl, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-800 mr-2 mb-2">
          Tag
        </span>
      </div>
    </div>
  );
};

export default Card;