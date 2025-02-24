'use client';
import { Box, Typography } from '@mui/material';

export default function Home() {
  return (
    <Box sx = {{}}>
      <Typography variant="h2" sx={{ mb: 2 }}>
        Welcome to my website!
      </Typography>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Here you can find a portfolio of my projects.
      </Typography>
      <Typography variant="h6" sx={{ mb: 2 }}>
        You may notice the structure is reminiscent of VSCode. You can navigate through my projects with the terminal and cd commands or use the sidebar.
      </Typography>
      <Typography sx={{ mb: 4 }}>
      </Typography>
    </Box>
  );
}