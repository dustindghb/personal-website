'use client';
import { useState, KeyboardEvent, useEffect } from 'react';
import { TextField, Box, Button, IconButton, Typography } from '@mui/material';
import { useRouter, usePathname } from 'next/navigation';
import { validPaths } from '@/config/navigation';
import { GitHub, LinkedIn, Code } from '@mui/icons-material';
import WaveAnimation from './WaveAnimation';

export default function Terminal() {
  const [mounted, setMounted] = useState(false);
  const [command, setCommand] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; 
  }

  const pathSegments = pathname === '/' ? ['Home'] : ['Home', ...pathname.split('/').filter(Boolean)]

  const handlePathClick = (index: number) => {
    if (index === 0) {
      router.push('/');
    } else {
      const newPath = '/' + pathSegments.slice(1, index + 1).join('/');
      router.push(newPath);
    }
  };

  const handleCommand = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' && command) {
      // Save command to history
      setCommandHistory(prev => [...prev, command]);
      setHistoryIndex(-1); // Reset history index after command execution
      
      // Process command
      if (command === 'cd ..') {
        const segments = pathname.split('/').filter(Boolean);
        if (segments.length > 0) {
          const newPath = segments.slice(0, -1).join('/');
          router.push(newPath ? `/${newPath}` : '/');
        }
      } else if (command.startsWith('cd ')) {
        const targetPath = command.slice(3).replace(/^\/+|\/+$/g, '').toLowerCase();
        if (validPaths[targetPath]) {
          router.push(`/${targetPath}`);
        }
      } else if (command === 'history') {
        // Display command history (potentially implement visual feedback)
        console.log('Command history:', commandHistory);
      } else if (command === 'clear') {
        // Option to clear history
        setCommandHistory([]);
      }
      setCommand('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      // Navigate up through command history
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCommand(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      // Navigate down through command history
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCommand(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        // Clear command when reaching the end of history
        setHistoryIndex(-1);
        setCommand('');
      }
    }
  };

  return (
    <Box sx={{
      position: 'fixed',
      bottom: 0,
      left: '250px', // Account for sidebar width
      right: 0,
      zIndex: 900, // Set to same as sidebar to keep divider visible
      // Remove border here to prevent double-line effect
    }}>
      <WaveAnimation />
      <Box sx={{ 
        p: 2,
        bgcolor: '#222222',
        height: '60px', // Increased height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        boxShadow: '0px -4px 12px rgba(0,0,0,0.4)',
        borderTop: '3px solid rgba(255,255,255,0.5)',
        position: 'relative', // Added for footer positioning
      }}>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center',
          gap: 1,
        }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 1,
            flexShrink: 0, 
            overflowX: 'auto', 
            '&::-webkit-scrollbar': { display: 'none' }, 
            scrollbarWidth: 'none', 
          }}>
            {pathSegments.map((segment, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                <Button
                  onClick={() => handlePathClick(index)}
                  sx={{
                    color: 'white',
                    bgcolor: 'rgba(255, 255, 255, 0.08)',
                    borderRadius: 1,
                    px: 1,
                    py: 0.5,
                    minWidth: 'auto',
                    textTransform: 'none',
                    fontFamily: 'monospace',
                    fontSize: '0.9rem',
                    whiteSpace: 'nowrap',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.15)',
                    }
                  }}
                >
                  {segment}
                </Button>
                {index < pathSegments.length - 1 && (
                  <Box sx={{ 
                    color: 'white',
                    mx: 1,
                    fontSize: '0.9rem',
                    fontFamily: 'monospace',
                    flexShrink: 0
                  }}>/</Box>
                )}
              </Box>
            ))}
          </Box>
          <Box sx={{ 
            color: 'white',
            fontFamily: 'monospace',
            fontSize: '0.9rem',
            flexShrink: 0
          }}>&gt;</Box>
          <TextField
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={handleCommand}
            placeholder='Enter a command in the "terminal" to navigate the website'
            variant="standard"
            fullWidth
            sx={{
              flex: 1,
              '& .MuiInput-root': {
                color: 'white',
                '&:before, &:after': {
                  borderBottomColor: 'transparent'
                }
              },
              '& .MuiInput-input': {
                pl: 1,
                fontFamily: 'monospace',
                fontSize: '0.9rem'
              }
            }}
            InputProps={{
              disableUnderline: true
            }}
          />
        </Box>
        
        {/* Footer in bottom right corner */}
        <Box
          sx={{
            position: 'absolute',
            right: 16,
            top: '50%',
            transform: 'translateY(-10%)',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            color: 'rgba(255,255,255,0.5)',
            zIndex: 1000,
          }}
        >
          <Typography 
            variant="caption" 
            sx={{ 
              fontFamily: 'monospace',
              fontSize: '0.75rem',
              display: { xs: 'none', sm: 'flex' },
              alignItems: 'center',
              gap: 0.5,
              mr: 1,
              whiteSpace: 'nowrap',
            }}
          >
            <Code fontSize="inherit" />
            Designed by Dustin Duong
          </Typography>
          
          <IconButton 
            href="https://github.com/dustinduong" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            size="small"
            sx={{ 
              color: 'rgba(255,255,255,0.5)',
              padding: '4px',
              '&:hover': { 
                color: 'white',
                backgroundColor: 'rgba(255,255,255,0.08)' 
              }
            }}
          >
            <GitHub fontSize="small" />
          </IconButton>
          
          <IconButton 
            href="https://www.linkedin.com/in/dustin-duong-ab505b2a5/" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            size="small"
            sx={{ 
              color: 'rgba(255,255,255,0.5)',
              padding: '4px',
              '&:hover': { 
                color: 'white',
                backgroundColor: 'rgba(255,255,255,0.08)' 
              }
            }}
          >
            <LinkedIn fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}