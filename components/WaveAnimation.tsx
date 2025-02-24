const WaveAnimation = () => {
  return (
    <svg
      viewBox="0 0 1440 100"  // Increased height from 40 to 100
      preserveAspectRatio="none"
      style={{
        width: '100%',
        height: '100px',  // Increased height from 40px to 100px
        display: 'block',
        marginBottom: -1,
      }}
    >
      {/* First Wave */}
      <path
        fill="rgba(255,255,255,0.1)"
        d="M0,40 C320,80 420,60 640,45 C860,30 960,70 1280,90 L1440,100 L0,100 Z"
      >
        <animate
          attributeName="d"
          dur="5s"
          repeatCount="indefinite"
          values="
            M0,40 C320,80 420,60 640,45 C860,30 960,70 1280,90 L1440,100 L0,100 Z;
            M0,40 C320,30 420,85 640,65 C860,45 960,80 1280,50 L1440,100 L0,100 Z;
            M0,40 C320,80 420,60 640,45 C860,30 960,70 1280,90 L1440,100 L0,100 Z"
        />
      </path>
      
      {/* Second Wave */}
      <path
        fill="rgba(255,255,255,0.05)"
        d="M0,60 C320,40 420,85 640,65 C860,45 960,90 1280,70 L1440,100 L0,100 Z"
      >
        <animate
          attributeName="d"
          dur="7s"
          repeatCount="indefinite"
          values="
            M0,60 C320,40 420,85 640,65 C860,45 960,90 1280,70 L1440,100 L0,100 Z;
            M0,60 C320,90 420,45 640,85 C860,65 960,40 1280,100 L1440,100 L0,100 Z;
            M0,60 C320,40 420,85 640,65 C860,45 960,90 1280,70 L1440,100 L0,100 Z"
        />
      </path>
    </svg>
  );
};

export default WaveAnimation;