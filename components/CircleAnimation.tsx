'use client';
import { useEffect, useState } from 'react';

const CircleAnimation = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <svg
      viewBox="0 0 400 400"
      style={{
        width: '133%',  
        height: '133%', 
        position: 'absolute',
        top: '-17%',    
        left: '-17%'    
      }}
    >
      {/* First oscillating circle */}
      <circle
        cx="200"
        cy="200"
        r="153"  
        fill="rgba(255,255,255,0.1)"
      >
        <animate
          attributeName="r"
          dur="8s"
          repeatCount="indefinite"
          values="153;173;140;180;153" 
        />
        <animate
          attributeName="cx"
          dur="12s"
          repeatCount="indefinite"
          values="200;180;227;173;200"  
        />
        <animate
          attributeName="cy"
          dur="10s"
          repeatCount="indefinite"
          values="200;227;173;213;200"  
        />
      </circle>

      {/* Second oscillating circle */}
      <circle
        cx="200"
        cy="200"
        r="120"  
        fill="rgba(255,255,255,0.15)"
      >
        <animate
          attributeName="r"
          dur="10s"
          repeatCount="indefinite"
          values="120;140;107;133;120"  
        />
        <animate
          attributeName="cx"
          dur="15s"
          repeatCount="indefinite"
          values="200;227;173;220;200"  
        />
        <animate
          attributeName="cy"
          dur="14s"
          repeatCount="indefinite"
          values="200;167;227;180;200" 
        />
      </circle>
    </svg>
  );
};

export default CircleAnimation;