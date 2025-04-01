'use client';

import { useState, useEffect } from 'react';
import { Box, Typography, Button, Paper, CircularProgress } from '@mui/material';
import { Download } from '@mui/icons-material';

export default function ResumePage() {
  const [loading, setLoading] = useState<boolean>(true);
  
  const resumePath = "/myResume.pdf";
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box sx={{ maxWidth: '1000px', margin: '0 auto', padding: '24px', bgcolor: '#383838', color: 'white', minHeight: '100vh' }}>
      <Typography variant="h3" gutterBottom>
        My Resume
      </Typography>
      
      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        Here you can preview and download my resume. Feel free to reach out if you have any questions about my experience or qualifications.
      </Typography>
      
      <Paper 
        elevation={3} 
        sx={{ 
          p: 3, 
          bgcolor: '#424242', 
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', mb: 2, color: 'white' }}>
          <Typography variant="h5">
            Resume Preview
          </Typography>
          <Button
            variant="contained"
            startIcon={<Download />}
            href={resumePath}
            target="_blank"
            download="myResume.pdf"
            sx={{
              bgcolor: '#9fc5e8',
              color: '#333',
              '&:hover': {
                bgcolor: '#7fb0d7',
              }
            }}
          >
            Download PDF
          </Button>
        </Box>
        
        {/* PDF Preview Container */}
        <Box 
          sx={{ 
            width: '100%', 
            height: { xs: '70vh', md: '80vh' }, 
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            bgcolor: '#333',
            borderRadius: 1,
            overflow: 'hidden',
            justifyContent: 'center'
          }}
        >
          {loading ? (
            <CircularProgress sx={{ color: '#9fc5e8' }} />
          ) : (
            <Box 
              component="iframe"
              src="/myResume.pdf"
              title="Resume PDF"
              sx={{ 
                width: '100%',
                height: '100%',
                border: 'none',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
              }}
            />
          )}
        </Box>
      </Paper>
    </Box>
  );
}