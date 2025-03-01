'use client';
import { Box, Typography, Divider, Grid, Link, Button } from '@mui/material';
import { Code, Storage, OpenInNew, LockOutlined, GitHub } from '@mui/icons-material';
import { useState } from 'react';

export default function Vigenere() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const cipherImages = [
    "/viginerePreview.png",
    "/viginerePreview2.png" 
  ];

  const handleImageClick = (imagePath: string) => {
    setSelectedImage(imagePath);
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
  };

  return (
    <Box sx={{ maxWidth: '1000px', margin: '0 auto', padding: '24px', bgcolor: '#383838', color: 'white', minHeight: '100vh' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h3" gutterBottom sx={{ mb: 0 }}>
          Vigenere Cipher Webevent
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Link 
            href="https://github.com/dustindghb/thetatau-webevent" 
            target="_blank" 
            rel="noopener noreferrer" 
            sx={{ color: 'white', display: 'flex', alignItems: 'center' }}
          >
            <Typography variant="body2" sx={{ mr: 0.5 }}>GitHub</Typography>
            <GitHub fontSize="small" />
          </Link>
          <Link 
            href="https://tt-webevent.web.app/flores" 
            target="_blank" 
            rel="noopener noreferrer" 
            sx={{ color: 'white', display: 'flex', alignItems: 'center' }}
          >
            <Typography variant="body2" sx={{ mr: 0.5 }}>View Website</Typography>
            <OpenInNew fontSize="small" />
          </Link>
        </Box>
      </Box>

      {/* Image Gallery Section */}
      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Vigenere Cipher Preview
        </Typography>
        <Grid container spacing={2}>
          {cipherImages.map((image, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box
                sx={{
                  borderRadius: 2,
                  overflow: 'hidden',
                  height: 300,
                  position: 'relative',
                  cursor: 'pointer',
                  '&:hover': {
                    '& .image-overlay': {
                      opacity: 1
                    }
                  }
                }}
                onClick={() => handleImageClick(image)}
              >
                <Box
                  component="img"
                  src={image}
                  alt={`Vigenere Cipher Visualization ${index + 1}`}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <Box
                  className="image-overlay"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    opacity: 0,
                    transition: 'opacity 0.2s',
                    color: 'white',
                  }}
                >
                  <Typography variant="body1">
                    Click to enlarge
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Divider sx={{ bgcolor: 'rgba(255,255,255,0.12)' }} />

      {/* Inspiration Section */}
      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Overview
        </Typography>
        <Typography variant="body1">
          Vigenere Cipher Webevent is a coded webapp featuring productivity resources and an interactive puzzle competition.
          Built with React and NextJs, this project increased fraternity engagement by 15% through its innovative approach to
          cryptography challenges. The platform implements a comprehensive Google authentication system, data retrieval, and
          publishing mechanisms powered by Firebase.
        </Typography>
      </Box>

      <Divider sx={{ bgcolor: 'rgba(255,255,255,0.12)' }} />

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          How It Was Built
        </Typography>

        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
              <Code sx={{ mr: 1 }} />
              <Typography variant="h6">Frontend</Typography>
            </Box>
            <Typography variant="body2">
              • React framework<br />
              • Next.js for server-side rendering<br />
              • Responsive design principles<br />
              • Custom CSS and animations
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
              <Storage sx={{ mr: 1 }} />
              <Typography variant="h6">Backend & Auth</Typography>
            </Box>
            <Typography variant="body2">
              • Google authentication system<br />
              • User profile management<br />
              • Secure data access controls<br />
              • Real-time notifications
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
              <Storage sx={{ mr: 1 }} />
              <Typography variant="h6">Database</Typography>
            </Box>
            <Typography variant="body2">
              • Firebase Realtime Database<br />
              • Data retrieval system<br />
              • Publishing system<br />
              • User progress tracking
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
              <LockOutlined sx={{ mr: 1 }} />
              <Typography variant="h6">Cryptography</Typography>
            </Box>
            <Typography variant="body2">
              • Vigenere cipher implementation<br />
              • Progressive puzzle difficulty<br />
              • Secure answer validation<br />
              • Leaderboard system
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ bgcolor: 'rgba(255,255,255,0.12)' }} />

      {/* Challenges, Accomplishments, and Next Steps */}
      <Box sx={{ my: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" gutterBottom>
              Challenges
            </Typography>
            <Typography variant="body1">
              A lot of time and patience was spent in the creative process of creating a Vigenere cipher. Researching productivity resources and how to implement them in a user friendly way was another challenge.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h5" gutterBottom>
              Accomplishments
            </Typography>
            <Typography variant="body1">
              It was interesting learning what Vigenere ciphers were, making my own, and then materializing it into a website. I learned how to route pages with Next.js, how to make
              forms route to a database in Firebase, how to implement authentication with Firebase, and how to host on Firebase.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Full-size image modal */}
      {selectedImage && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.9)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            padding: 3
          }}
          onClick={handleCloseImage}
        >
          <Box
            sx={{
              position: 'relative',
              maxWidth: '90%',
              maxHeight: '90%',
            }}
          >
            <Box
              component="img"
              src={selectedImage}
              alt="Enlarged Vigenere Cipher View"
              sx={{
                maxWidth: '100%',
                maxHeight: '90vh',
                objectFit: 'contain',
                borderRadius: 2
              }}
            />
            <Typography 
              variant="body2" 
              sx={{ 
                position: 'absolute', 
                bottom: -30, 
                left: 0, 
                right: 0, 
                textAlign: 'center',
                color: 'white' 
              }}
            >
              Click anywhere to close
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
}