'use client';
import { useState, KeyboardEvent, useEffect } from 'react';
import { TextField, Box, Button, IconButton, Typography } from '@mui/material';
import { useRouter, usePathname } from 'next/navigation';
import { validPaths } from '@/config/navigation';
import { GitHub, LinkedIn, Code } from '@mui/icons-material';
import WaveAnimation from './WaveAnimation';

// Define generic state management for history tracking
type HistoryState<T> = {
  items: T[];
  currentIndex: number;
};

// Union type for terminal command types
type TerminalCommand = 
  | { type: 'navigation'; path: string }
  | { type: 'system'; action: 'clear' | 'history' | 'back' };

// Interface for component props with optional configurations
interface TerminalProps {
  initialCommand?: string;
  maxHistoryItems?: number;
  showFooter?: boolean;
  terminalHeight?: number;
  customStyles?: Partial<{
    terminal: React.CSSProperties;
    input: React.CSSProperties;
    buttons: React.CSSProperties;
  }>;
}

//Utility type for path segments
type PathSegment = {
  name: string;
  fullPath: string;
  isActive: boolean;
};

export default function Terminal({
  initialCommand = '',
  maxHistoryItems = 50,
  showFooter = true,
  terminalHeight = 60,
  customStyles = {}
}: TerminalProps) {
  const [mounted, setMounted] = useState(false);
  const [command, setCommand] = useState<string>(initialCommand);
  
  // Using the generic history state type
  const [history, setHistory] = useState<HistoryState<string>>({
    items: [],
    currentIndex: -1
  });
  
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; 
  }

  // Create path segments with the utility type
  const createPathSegments = (path: string): PathSegment[] => {
    if (path === '/') return [{ name: 'Home', fullPath: '/', isActive: true }];
    
    const segments = path.split('/').filter(Boolean);
    return [
      { name: 'Home', fullPath: '/', isActive: false },
      ...segments.map((segment, index) => {
        const fullPath = '/' + segments.slice(0, index + 1).join('/');
        return {
          name: segment,
          fullPath,
          isActive: index === segments.length - 1
        };
      })
    ];
  };

  const pathSegments = createPathSegments(pathname || '/');

  // Type guard to check if a path exists in valid paths
  const isValidPath = (path: string): boolean => {
    return Object.keys(validPaths).includes(path);
  };

  const handlePathClick = (path: string) => {
    router.push(path);
  };

  // Process different command types
  const processCommand = (cmd: string): TerminalCommand | null => {
    if (!cmd.trim()) return null;
    
    if (cmd === 'cd ..') {
      return { type: 'system', action: 'back' };
    } else if (cmd === 'clear') {
      return { type: 'system', action: 'clear' };
    } else if (cmd === 'history') {
      return { type: 'system', action: 'history' };
    } else if (cmd.startsWith('cd ')) {
      const targetPath = cmd.slice(3).replace(/^\/+|\/+$/g, '').toLowerCase();
      return { type: 'navigation', path: targetPath };
    }
    
    return null;
  };

  const executeCommand = (terminalCommand: TerminalCommand | null) => {
    if (!terminalCommand) return;
    
    if (terminalCommand.type === 'system') {
      switch (terminalCommand.action) {
        case 'clear':
          setHistory({ items: [], currentIndex: -1 });
          break;
        case 'history':
          console.log('Command history:', history.items);
          break;
        case 'back':
          const segments = pathname.split('/').filter(Boolean);
          if (segments.length > 0) {
            const newPath = segments.slice(0, -1).join('/');
            router.push(newPath ? `/${newPath}` : '/');
          }
          break;
      }
    } else if (terminalCommand.type === 'navigation') {
      if (isValidPath(terminalCommand.path)) {
        router.push(`/${terminalCommand.path}`);
      }
    }
  };

  const handleCommand = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' && command) {
      // Save command to history with limit
      const updatedItems = [...history.items, command].slice(-maxHistoryItems);
      setHistory({ items: updatedItems, currentIndex: -1 });
      
      // Process and execute command
      const terminalCommand = processCommand(command);
      executeCommand(terminalCommand);
      
      setCommand('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.items.length > 0 && history.currentIndex < history.items.length - 1) {
        const newIndex = history.currentIndex + 1;
        setHistory({ ...history, currentIndex: newIndex });
        setCommand(history.items[history.items.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (history.currentIndex > 0) {
        const newIndex = history.currentIndex - 1;
        setHistory({ ...history, currentIndex: newIndex });
        setCommand(history.items[history.items.length - 1 - newIndex]);
      } else if (history.currentIndex === 0) {
        setHistory({ ...history, currentIndex: -1 });
        setCommand('');
      }
    }
  };

  return (
    <Box sx={{
      position: 'fixed',
      bottom: 0,
      left: '250px',
      right: 0,
      zIndex: 900,
      ...(customStyles.terminal || {})
    }}>
      <WaveAnimation />
      <Box sx={{ 
        p: 2,
        bgcolor: '#222222',
        height: `${terminalHeight}px`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        boxShadow: '0px -4px 12px rgba(0,0,0,0.4)',
        borderTop: '3px solid rgba(255,255,255,0.5)',
        position: 'relative',
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
                  onClick={() => handlePathClick(segment.fullPath)}
                  sx={{
                    color: 'white',
                    bgcolor: segment.isActive ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.08)',
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
                    },
                    ...(customStyles.buttons || {})
                  }}
                >
                  {segment.name}
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
              },
              ...(customStyles.input || {})
            }}
            InputProps={{
              disableUnderline: true
            }}
          />
        </Box>
        
        {/* Footer in bottom right corner - conditionally shown */}
        {showFooter && (
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
              href="https://github.com/dustindghb" 
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
        )}
      </Box>
    </Box>
  );
}