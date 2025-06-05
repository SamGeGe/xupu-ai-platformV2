import React, { useState } from 'react';
import { FeatureButtonProps } from '../types';

const FeatureButton: React.FC<FeatureButtonProps> = ({ icon, title, description, onClick, variant = 'default' }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsPressed(true);
      onClick();
    }
  };

  const handleKeyUp = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setIsPressed(false);
    }
  };

  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);
  const handleMouseLeave = () => setIsPressed(false);

  if (variant === 'special') {
    return (
      <button
        onClick={onClick}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        className={`bg-gradient-to-br from-purple-600/40 to-fuchsia-600/40 backdrop-blur-md border border-purple-500/30 rounded-lg p-3 w-full transition-all duration-300 hover:from-purple-500/50 hover:to-fuchsia-500/50 hover:shadow-lg hover:shadow-purple-700/20 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-indigo-950 text-center group relative overflow-hidden ${
          isPressed ? 'scale-95' : ''
        }`}
        aria-label={`${title}: ${description}`}
        tabIndex={0}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,0,255,0.1),transparent_70%)]" />
        <div className="relative flex flex-col items-center gap-2">
          <div className={`bg-gradient-to-br from-fuchsia-400 to-purple-500 p-2 rounded-lg text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-purple-500/30 group-focus:scale-110 ${
            isPressed ? 'scale-95' : ''
          }`}>
            {icon}
          </div>
          <div className="text-center">
            <h3 className="text-base font-bold text-white mb-0.5 group-hover:text-fuchsia-200 group-focus:text-fuchsia-200 transition-colors">
              {title}
            </h3>
            <p className="text-xs text-purple-200/80 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      className={`bg-indigo-900/30 backdrop-blur-md border border-indigo-700/30 rounded-lg p-3 w-full transition-all duration-300 hover:bg-indigo-800/50 hover:shadow-lg hover:shadow-indigo-700/20 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-indigo-950 text-center group ${
        isPressed ? 'scale-95' : ''
      }`}
      aria-label={`${title}: ${description}`}
      tabIndex={0}
    >
      <div className="flex flex-col items-center gap-2">
        <div className={`bg-gradient-to-br from-blue-400 to-indigo-500 p-2 rounded-lg text-white transition-all duration-300 group-hover:scale-110 group-focus:scale-110 ${
          isPressed ? 'scale-95' : ''
        }`}>
          {icon}
        </div>
        <div className="text-center">
          <h3 className="text-base font-bold text-white mb-0.5 group-hover:text-blue-300 group-focus:text-blue-300 transition-colors">
            {title}
          </h3>
          <p className="text-xs text-indigo-200/80 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </button>
  );
};

export default FeatureButton;