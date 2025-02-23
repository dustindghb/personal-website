'use client';
import { useState, KeyboardEvent } from 'react';
import { TextField, Paper, Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function Terminal() {
  const [command, setCommand] = useState<string>('');
  const router = useRouter();

  const handleCommand = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      if (command.startsWith('cd ')) {
        const path = command.slice(3);
        router.push(path);
      }
      setCommand('');
    }
  };

  return (
    <Paper
      elevation={3}
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
        onKeyPress={handleCommand}
        placeholder="Enter command..."
        variant="outlined"
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
  );
}