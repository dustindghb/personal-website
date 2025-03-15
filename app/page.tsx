'use client';
import { Box, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface TypedTextProps {
  text: string;
  delay?: number;
  onComplete?: () => void;
}

const TypedText = ({ text, delay = 30, onComplete = () => {} }: TypedTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      
      return () => clearTimeout(timeout);
    } else {
      onComplete();
    }
  }, [currentIndex, delay, text, onComplete]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span>
      {displayedText}
      {currentIndex < text.length && showCursor && <span className="cursor">|</span>}
    </span>
  );
};

export default function Home() {
  const [activeSection, setActiveSection] = useState<number>(0);
  const sections: string[] = [
    "Welcome to my website!",
    "I'm Dustin, a computer science student interested in embedded LLMs, web development, and building cool things.",
    "Here you can find a portfolio of my work and more."
  ];

  return (
    <Box sx={{ 
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: 'calc(100vh - 200px)',
      textAlign: 'center',
      padding: 2,
      maxWidth: '800px',
      margin: '0 auto',
      zIndex: 1
    }}>
      <Box sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 1
        }
      }}>
        <Image
          src="/background.jpg" 
          alt="Background"
          fill
          style={{ 
            objectFit: 'cover',
            opacity: 0.8
          }}
          priority
        />
      </Box>

      {/* Content */}
      <Box sx={{ position: 'relative', zIndex: 2 }}>
        <Typography variant="h2" sx={{ mb: 4, minHeight: '3rem', textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
          {activeSection === 0 ? (
            <TypedText 
              text={sections[0]} 
              onComplete={() => setTimeout(() => setActiveSection(1), 500)}
            />
          ) : sections[0]}
        </Typography>
        
        <Typography variant="h4" sx={{ mb: 4, minHeight: '3rem', textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
          {activeSection >= 1 ? (
            activeSection === 1 ? (
              <TypedText 
                text={sections[1]} 
                onComplete={() => setTimeout(() => setActiveSection(2), 500)}
              />
            ) : sections[1]
          ) : ''}
        </Typography>
        
        <Typography variant="h6" sx={{ mb: 4, minHeight: '6rem', textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
          {activeSection >= 2 && (
            <TypedText text={sections[2]} />
          )}
        </Typography>
      </Box>
      
      <style jsx global>{`
        .cursor {
          font-weight: bold;
          color: white;
        }
      `}</style>
    </Box>
  );
}