import { Box, Typography } from '@mui/material';
import Terminal from '../components/Terminal';

export default function Home() {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to my website
      </Typography>
      <Terminal />
    </Box>
  );
}

