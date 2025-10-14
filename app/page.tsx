'use client';
import { Box, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

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
    "I'm a CS and MIS double major at Santa Clara University, graduating in June 2027.",
    "Here you can find a portfolio of my work and more.",
    "Alternatively, I'm able to graduate in June 2026 with a major in Computer Science and minor in Management Information Systems."
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
          {activeSection >= 2 ? (
            activeSection === 2 ? (
              <TypedText 
                text={sections[2]} 
                onComplete={() => setTimeout(() => setActiveSection(3), 500)}
              />
            ) : sections[2]
          ) : ''}
        </Typography>
        
        <Typography variant="body2" sx={{ 
          mb: 4, 
          minHeight: '3rem',
          opacity: 0.9, 
          fontSize: '0.9rem',
          textShadow: '1px 1px 2px rgba(0,0,0,0.7)'
        }}>
          {activeSection >= 3 && (
            <TypedText text={sections[3]} />
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