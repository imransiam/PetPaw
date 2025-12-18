import React from 'react';
import { Helmet } from 'react-helmet';
import { FaPaw } from 'react-icons/fa';

const Loading = () => {
  return (
    <>
      <Helmet>
        <title>PawMart - Loading...</title>
      </Helmet>

      {/* Centered full-screen loading container */}
      <div className="min-h-[70vh] flex flex-col items-center justify-center gap-6">
        
        {/* Animated Paw Icon */}
        <div className="relative flex items-center justify-center">
          {/* Outer Ripple Effect using DaisyUI classes */}
          <div className="absolute animate-ping h-16 w-16 rounded-full bg-orange-400 opacity-20"></div>
          
          {/* Main Paw Icon */}
          <FaPaw className="text-6xl text-orange-600 animate-bounce" />
        </div>

        {/* DaisyUI Loading Elements */}
        <div className="flex flex-col items-center gap-2">
          <span className="loading loading-dots loading-lg text-orange-600"></span>
          <p className="text-xl font-bold text-orange-700 dark:text-orange-400 tracking-widest animate-pulse">
            PAWMART
          </p>
        </div>

        {/* Subtle background text */}
        <p className="text-sm opacity-50 italic">Waking up the puppies...</p>
      </div>
    </>
  );
};

export default Loading;