"use client"
import React from 'react';

export default function CraftIALogo({ size = 40, className = "" }) {
  return (
    <div 
      className={`flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: size * 0.7, height: size * 0.7 }}
      >
        {/* Neural network nodes */}
        <circle cx="10" cy="12" r="2" fill="white" opacity="0.6" />
        <circle cx="30" cy="12" r="2" fill="white" opacity="0.6" />
        <circle cx="10" cy="28" r="2" fill="white" opacity="0.6" />
        <circle cx="30" cy="28" r="2" fill="white" opacity="0.6" />
        
        {/* Connection lines */}
        <line x1="10" y1="12" x2="20" y2="20" stroke="white" strokeWidth="1" opacity="0.3" />
        <line x1="30" y1="12" x2="20" y2="20" stroke="white" strokeWidth="1" opacity="0.3" />
        <line x1="10" y1="28" x2="20" y2="20" stroke="white" strokeWidth="1" opacity="0.3" />
        <line x1="30" y1="28" x2="20" y2="20" stroke="white" strokeWidth="1" opacity="0.3" />
        
        {/* Central C letter stylized */}
        <path 
          d="M26 12C26 12 22 8 16 10C10 12 8 18 8 20C8 22 10 28 16 30C22 32 26 28 26 28" 
          stroke="white" 
          strokeWidth="3" 
          strokeLinecap="round"
          fill="none"
        />
        
        {/* AI dot accent */}
        <circle cx="28" cy="20" r="2.5" fill="white" />
        <circle cx="28" cy="20" r="4" stroke="white" strokeWidth="1" opacity="0.4" />
      </svg>
    </div>
  );
}