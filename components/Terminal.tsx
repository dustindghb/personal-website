'use client';
import { useState, KeyboardEvent } from 'react';
import { TextField, Paper, Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function Terminal() {
  // Initialize with null to avoid hydration mismatch
  const [command, setCommand] = useState<string | null>(null);
  const router = useRouter();

  const handleCommand = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' && command) {
      if (command.startsWith('cd ')) {
        const path = command.slice(3);
        router.push(path);
      }
      setCommand('');
    }
  };

  // Use early return for initial render
  if (command === null) {
    setCommand('');
    return null;
  }

  return (
    <Box component="div">
      <Paper
        elevation={1}
        sx={{
          bgcolor: 'grey.900',
          p: 3,
          mt: 3,
          borderRadius: 1,
        }}
      >
        <Box sx={{ color: 'success.main', mb: 2 }}>
          <Typography variant="body2" component="div">
            Available commands:
            <br />
            cd /about
            <br />
            cd /projects
          </Typography>
        </Box>
        <TextField
          fullWidth
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyDown={handleCommand}
          placeholder="Enter command..."
          variant="outlined"
          inputProps={{
            'aria-label': 'command input',
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              color: 'success.main',
              '& fieldset': {
                borderColor: 'grey.700',
              },
              '&:hover fieldset': {
                borderColor: 'grey.600',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'success.main',
              },
            },
          }}
        />
      </Paper>
    </Box>
  );
}
