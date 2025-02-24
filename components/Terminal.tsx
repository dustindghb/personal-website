'use client';
import { useState, KeyboardEvent, useEffect } from 'react';
import { TextField, Box, Button } from '@mui/material';
import { useRouter, usePathname } from 'next/navigation';
import { validPaths } from '@/config/navigation';
import WaveAnimation from './WaveAnimation';

export default function Terminal() {
  const [mounted, setMounted] = useState(false);
  const [command, setCommand] = useState('');
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Prevent hydration mismatch by not rendering anything on server
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
      }
      setCommand('');
    }
  };

  return (
    <Box>
      <WaveAnimation />
      <Box sx={{ 
        p: 2,
        bgcolor: '#666666',
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
            flexShrink: 0, // Prevent breadcrumb from shrinking
            overflowX: 'auto', // Allow horizontal scroll if needed
            '&::-webkit-scrollbar': { display: 'none' }, // Hide scrollbar
            scrollbarWidth: 'none', // Firefox
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
            placeholder="Enter a command"
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
      </Box>
    </Box>
  );
}
