'use client';
import { Box, Typography } from '@mui/material';
import dynamic from 'next/dynamic';

// Dynamically import Terminal with no SSR
const Terminal = dynamic(() => import('../components/Terminal'), { ssr: false });

export default function Home() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to my website
      </Typography>
      <Terminal />
    </Box>
  );
}