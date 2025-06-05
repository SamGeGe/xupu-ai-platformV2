import React from 'react';
import { Cpu } from 'lucide-react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-950">
      <div className="text-center">
        <div className="relative mb-4">
          <div className="inline-block h-16 w-16 border-4 border-indigo-200/30 border-t-blue-400 rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Cpu className="h-6 w-6 text-blue-400" />
          </div>
        </div>
        <p className="text-indigo-200 text-sm">加载中...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner; 