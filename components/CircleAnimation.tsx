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
        width: '133%',  // Reduced from 200% to about 133% (1/3 smaller)
        height: '133%', // Reduced from 200% to about 133% (1/3 smaller)
        position: 'absolute',
        top: '-17%',    // Adjusted from -50% to -17% to maintain centering
        left: '-17%'    // Adjusted from -50% to -17% to maintain centering
      }}
    >
      {/* First oscillating circle */}
      <circle
        cx="200"
        cy="200"
        r="153"  // Reduced from 230 by about 1/3
        fill="rgba(255,255,255,0.1)"
      >
        <animate
          attributeName="r"
          dur="8s"
          repeatCount="indefinite"
          values="153;173;140;180;153"  // Reduced values by about 1/3
        />
        <animate
          attributeName="cx"
          dur="12s"
          repeatCount="indefinite"
          values="200;180;227;173;200"  // Adjusted to maintain proportional movement
        />
        <animate
          attributeName="cy"
          dur="10s"
          repeatCount="indefinite"
          values="200;227;173;213;200"  // Adjusted to maintain proportional movement
        />
      </circle>

      {/* Second oscillating circle */}
      <circle
        cx="200"
        cy="200"
        r="120"  // Reduced from 180 by about 1/3
        fill="rgba(255,255,255,0.15)"
      >
        <animate
          attributeName="r"
          dur="10s"
          repeatCount="indefinite"
          values="120;140;107;133;120"  // Reduced values by about 1/3
        />
        <animate
          attributeName="cx"
          dur="15s"
          repeatCount="indefinite"
          values="200;227;173;220;200"  // Adjusted to maintain proportional movement
        />
        <animate
          attributeName="cy"
          dur="14s"
          repeatCount="indefinite"
          values="200;167;227;180;200"  // Adjusted to maintain proportional movement
        />
      </circle>
    </svg>
  );
};

export default CircleAnimation;