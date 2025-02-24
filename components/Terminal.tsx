'use client';
import { useState, KeyboardEvent } from 'react';
import { TextField, Box, Typography } from '@mui/material';
import { useRouter, usePathname } from 'next/navigation';
import { validPaths } from '@/config/navigation';
import WaveAnimation from './WaveAnimation';

export default function Terminal() {
  const [command, setCommand] = useState<string>('');
  const router = useRouter();
  const pathname = usePathname();

  const getCurrentPathDisplay = () => {
    const segments = pathname.split('/').filter(Boolean);
    return segments.length === 0 ? 'Home' : segments.join('/');
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
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography sx={{ mr: 1 }}>/{getCurrentPathDisplay()} &gt;</Typography>
          <TextField
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={handleCommand}
            placeholder="Enter a command"
            variant="standard"
            sx={{
              flex: 1,
              '& .MuiInput-root': {
                color: 'white',
                '&:before, &:after': {
                  borderBottomColor: 'transparent'
                }
              },
              '& .MuiInput-input': {
                pl: 1
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
