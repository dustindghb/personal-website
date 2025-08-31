'use client';

import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Grid,
  Chip,
  Link,
  IconButton,
  Modal,
  Container,
  Divider
} from '@mui/material';
import { 
  GitHub, 
  Security,
  Code,
  Storage,
  Close,
  CalendarToday,
  Lock,
  TrendingUp
} from '@mui/icons-material';

export default function VigenereCipher(): React.ReactElement {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const technologies = [
    'Firebase', 'React', 'JavaScript', 'HTML/CSS', 'Cryptography', 'Web Security'
  ];



  const handleCloseImage = () => {
    setSelectedImage(null);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Hero Section */}
      <Box sx={{ mb: 10 }}>
        <Typography variant="h2" sx={{ 
          fontWeight: 300, 
          color: 'white',
          mb: 2,
          letterSpacing: '-0.02em'
        }}>
          Vigenère Cipher
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CalendarToday sx={{ fontSize: 16, color: '#6b7280' }} />
            <Typography variant="body2" sx={{ color: '#6b7280', fontWeight: 400 }}>
              December 2024
            </Typography>
          </Box>
          <Box sx={{ 
            width: 1, 
            height: 1, 
            bgcolor: '#6b7280', 
            borderRadius: '50%' 
          }} />
          <Typography variant="body2" sx={{ color: '#6b7280', fontWeight: 400 }}>
            Web Application
          </Typography>
        </Box>

        <Typography variant="h6" sx={{ 
          color: '#9ca3af', 
          lineHeight: 1.7, 
          mb: 6,
          maxWidth: '700px',
          fontWeight: 400
        }}>
          Developed a comprehensive web application that demonstrates the Vigenère cipher encryption and decryption process. 
          The application features an interactive interface for users to encrypt and decrypt messages, with real-time visualization 
          of the cryptographic process and educational content about the historical significance of this classical cipher.
        </Typography>

        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 6 }}>
          {technologies.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              sx={{
                bgcolor: 'transparent',
                color: '#9ca3af',
                border: '1px solid #374151',
                fontWeight: 400,
                fontSize: '0.75rem',
                '&:hover': { 
                  border: '1px solid #6b7280',
                  color: '#d1d5db'
                }
              }}
            />
          ))}
        </Box>

        <Box sx={{ display: 'flex', gap: 3 }}>
          <Link 
            href="https://github.com/dustindghb/vigenere-cipher" 
            target="_blank" 
            rel="noopener noreferrer" 
            sx={{ 
              display: 'inline-flex', 
              alignItems: 'center',
              gap: 1,
              px: 4,
              py: 2,
              bgcolor: 'white',
              color: 'black',
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: '0.875rem',
              transition: 'all 0.2s',
              '&:hover': { 
                bgcolor: '#f3f4f6'
              }
            }}
          >
            <GitHub sx={{ fontSize: 16 }} />
            View on GitHub
          </Link>
        </Box>
      </Box>

      <Divider sx={{ borderColor: '#374151', mb: 10 }} />

      {/* Key Features */}
      <Box sx={{ mb: 10 }}>
        <Typography variant="h3" sx={{ 
          fontWeight: 300, 
          color: 'white',
          mb: 6,
          letterSpacing: '-0.02em'
        }}>
          Key Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Box sx={{ 
                  p: 1, 
                  bgcolor: '#1f2937', 
                  borderRadius: 1,
                  mr: 2
                }}>
                  <Security sx={{ color: '#9ca3af', fontSize: 20 }} />
                </Box>
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 400 }}>
                  Interactive Encryption
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, fontWeight: 400 }}>
                Real-time encryption and decryption of text using the Vigenère cipher algorithm, with step-by-step visualization 
                of the cryptographic process for educational purposes.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Box sx={{ 
                  p: 1, 
                  bgcolor: '#1f2937', 
                  borderRadius: 1,
                  mr: 2
                }}>
                  <Lock sx={{ color: '#9ca3af', fontSize: 20 }} />
                </Box>
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 400 }}>
                  Key Management
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, fontWeight: 400 }}>
                Secure key generation and management system, allowing users to create custom keys or use auto-generated 
                keys for encryption and decryption operations.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Box sx={{ 
                  p: 1, 
                  bgcolor: '#1f2937', 
                  borderRadius: 1,
                  mr: 2
                }}>
                  <TrendingUp sx={{ color: '#9ca3af', fontSize: 20 }} />
                </Box>
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 400 }}>
                  Educational Content
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, fontWeight: 400 }}>
                Comprehensive educational resources about the Vigenère cipher, including historical context, 
                mathematical principles, and practical applications in modern cryptography.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ borderColor: '#374151', mb: 10 }} />

      {/* Technical Implementation */}
      <Box sx={{ mb: 10 }}>
        <Typography variant="h3" sx={{ 
          fontWeight: 300, 
          color: 'white',
          mb: 6,
          letterSpacing: '-0.02em'
        }}>
          Technical Implementation
        </Typography>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Code sx={{ color: '#9ca3af', mr: 2, fontSize: 20 }} />
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 400 }}>
                  React Frontend
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, fontWeight: 400 }}>
                Built a responsive React application with modern hooks and state management, providing an intuitive 
                user interface for text input, key management, and real-time encryption/decryption visualization.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Storage sx={{ color: '#9ca3af', mr: 2, fontSize: 20 }} />
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 400 }}>
                  Firebase Backend
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, fontWeight: 400 }}>
                Integrated Firebase for user authentication, data persistence, and real-time synchronization of 
                encrypted messages and user preferences across different sessions.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Security sx={{ color: '#9ca3af', mr: 2, fontSize: 20 }} />
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 400 }}>
                  Cryptographic Algorithm
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, fontWeight: 400 }}>
                Implemented the Vigenère cipher algorithm with proper character handling, supporting both uppercase 
                and lowercase letters, numbers, and special characters while maintaining security standards.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <TrendingUp sx={{ color: '#9ca3af', mr: 2, fontSize: 20 }} />
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 400 }}>
                  Performance Optimization
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, fontWeight: 400 }}>
                Optimized the application for performance with efficient algorithms, lazy loading, and responsive 
                design to ensure smooth user experience across all devices and screen sizes.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ borderColor: '#374151', mb: 10 }} />

      {/* Challenges & Solutions */}
      <Box sx={{ mb: 10 }}>
        <Typography variant="h3" sx={{ 
          fontWeight: 300, 
          color: 'white',
          mb: 6,
          letterSpacing: '-0.02em'
        }}>
          Challenges & Solutions
        </Typography>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ color: '#9ca3af', fontWeight: 500, mb: 2 }}>
                Challenge: Character Encoding
              </Typography>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, mb: 3, fontWeight: 400 }}>
                Handling different character sets and ensuring consistent encryption/decryption across various 
                input types including special characters and Unicode symbols.
              </Typography>
              <Typography variant="h6" sx={{ color: '#d1d5db', fontWeight: 500, mb: 2 }}>
                Solution: Robust Character Handling
              </Typography>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, fontWeight: 400 }}>
                Implemented comprehensive character validation and normalization, ensuring the cipher works 
                correctly with all ASCII characters while maintaining security and performance.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ color: '#9ca3af', fontWeight: 500, mb: 2 }}>
                Challenge: Real-time Visualization
              </Typography>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, mb: 3, fontWeight: 400 }}>
                Creating an intuitive and educational visualization of the encryption process that helps users 
                understand the mathematical principles behind the Vigenère cipher.
              </Typography>
              <Typography variant="h6" sx={{ color: '#d1d5db', fontWeight: 500, mb: 2 }}>
                Solution: Interactive Step-by-step Display
              </Typography>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, fontWeight: 400 }}>
                Developed an interactive visualization system that shows each step of the encryption process, 
                including character mapping, key application, and result generation in real-time.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ borderColor: '#374151', mb: 10 }} />

      {/* Technologies Used */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h3" sx={{ 
          fontWeight: 300, 
          color: 'white',
          mb: 6,
          letterSpacing: '-0.02em'
        }}>
          Technologies Used
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ color: 'white', fontWeight: 400, mb: 2 }}>
                Frontend
              </Typography>
              <Typography variant="body2" sx={{ color: '#9ca3af', fontWeight: 400 }}>
                React, JavaScript, HTML/CSS, Material UI
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ color: 'white', fontWeight: 400, mb: 2 }}>
                Backend & Services
              </Typography>
              <Typography variant="body2" sx={{ color: '#9ca3af', fontWeight: 400 }}>
                Firebase, Authentication, Real-time Database
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ color: 'white', fontWeight: 400, mb: 2 }}>
                Security & Deployment
              </Typography>
              <Typography variant="body2" sx={{ color: '#9ca3af', fontWeight: 400 }}>
                Vigenère Cipher, Vercel, HTTPS
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Image Modal */}
      <Modal
        open={!!selectedImage}
        onClose={handleCloseImage}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2
        }}
      >
        <Box sx={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh' }}>
          <IconButton
            onClick={handleCloseImage}
            sx={{
              position: 'absolute',
              top: -40,
              right: 0,
              color: 'white',
              bgcolor: 'rgba(0, 0, 0, 0.5)',
              '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.7)' }
            }}
          >
            <Close />
          </IconButton>
          {selectedImage && (
            <Box
              component="img"
              src={selectedImage}
              alt="Project Preview"
              sx={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                borderRadius: 2
              }}
            />
          )}
        </Box>
      </Modal>
    </Container>
  );
}