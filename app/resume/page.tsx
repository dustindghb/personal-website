'use client';

import { Box, Typography, Button, Paper } from '@mui/material';
import { Download, OpenInNew } from '@mui/icons-material';

export default function ResumePage() {
  const resumePath = "/resume.pdf";

  const handleOpenInNewTab = () => {
    window.open(resumePath, '_blank');
  };

  return (
    <Box sx={{ 
      maxWidth: '1000px', 
      margin: '0 auto', 
      padding: '24px', 
      bgcolor: 'rgba(56, 56, 56, 0.7)', 
      color: 'white', 
      minHeight: '100vh',
      borderRadius: 2,
      backdropFilter: 'blur(10px)'
    }}>
      <Typography variant="h3" gutterBottom>
        My Resume
      </Typography>
      
      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        Here you can view and download my resume. Feel free to reach out if you have any questions about my experience or qualifications.
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
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', mb: 3, color: 'white' }}>
          <Typography variant="h5">
            Resume Preview
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="contained"
              startIcon={<Download />}
              href={resumePath}
              download="Dustin_Duong_Resume.pdf"
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
            <Button
              variant="outlined"
              startIcon={<OpenInNew />}
              onClick={handleOpenInNewTab}
              sx={{
                borderColor: '#9fc5e8',
                color: '#9fc5e8',
                '&:hover': {
                  borderColor: '#7fb0d7',
                  color: '#7fb0d7',
                }
              }}
            >
              Open in New Tab
            </Button>
          </Box>
        </Box>
        
        {/* PDF Preview */}
        <Box 
          sx={{ 
            width: '100%', 
            height: { xs: '70vh', md: '80vh' }, 
            bgcolor: '#333',
            borderRadius: 1,
            overflow: 'hidden',
            border: '1px solid #555'
          }}
        >
          <iframe
            src={resumePath}
            title="Resume PDF"
            style={{
              width: '100%',
              height: '100%',
              border: 'none'
            }}
          />
        </Box>
      </Paper>
    </Box>
  );
}