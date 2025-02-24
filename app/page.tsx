'use client';
import { Box, Typography } from '@mui/material';

export default function Home() {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Hi! I'm Dustin Duong a computer science student
      </Typography>
      <Typography sx={{ mb: 4 }}>
        I have general expertise in the frontend and backend but am specializing in embedded and small LLMs
      </Typography>
    </Box>
  );
}