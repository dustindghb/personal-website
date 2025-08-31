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
  OpenInNew, 
  SportsEsports,
  Code,
  Storage,
  Close,
  CalendarToday,
  Animation,
  TrendingUp
} from '@mui/icons-material';

export default function DiceAnimations(): React.ReactElement {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const technologies = [
    'Unity', 'C#', 'Game Development', '3D Graphics', 'Animation', 'Mobile App'
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
          Dice Animations
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CalendarToday sx={{ fontSize: 16, color: '#6b7280' }} />
            <Typography variant="body2" sx={{ color: '#6b7280', fontWeight: 400 }}>
              November 2024
            </Typography>
          </Box>
          <Box sx={{ 
            width: 1, 
            height: 1, 
            bgcolor: '#6b7280', 
            borderRadius: '50%' 
          }} />
          <Typography variant="body2" sx={{ color: '#6b7280', fontWeight: 400 }}>
            Unity Game
          </Typography>
        </Box>

        <Typography variant="h6" sx={{ 
          color: '#9ca3af', 
          lineHeight: 1.7, 
          mb: 6,
          maxWidth: '700px',
          fontWeight: 400
        }}>
          Developed a Unity-based mobile game featuring realistic 3D dice animations and physics simulations. 
          The game provides an immersive dice-rolling experience with customizable dice sets, realistic physics, 
          and smooth animations that respond to user interactions and environmental factors.
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
            href="https://github.com/dustindghb/dice-animations" 
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
          <Link 
            href="https://play.google.com/store/apps/details?id=com.dustindghb.diceanimations" 
            target="_blank" 
            rel="noopener noreferrer" 
            sx={{ 
              display: 'inline-flex', 
              alignItems: 'center',
              gap: 1,
              px: 4,
              py: 2,
              bgcolor: 'transparent',
              color: '#9ca3af',
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: '0.875rem',
              border: '1px solid #374151',
              transition: 'all 0.2s',
              '&:hover': { 
                border: '1px solid #6b7280',
                color: '#d1d5db'
              }
            }}
          >
            <OpenInNew sx={{ fontSize: 16 }} />
            Google Play
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
                  <Animation sx={{ color: '#9ca3af', fontSize: 20 }} />
                </Box>
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 400 }}>
                  Realistic Physics
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, fontWeight: 400 }}>
                Implemented realistic physics simulations using Unity&apos;s built-in physics engine, creating authentic 
                dice-rolling behavior with proper collision detection, gravity, and momentum.
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
                  <SportsEsports sx={{ color: '#9ca3af', fontSize: 20 }} />
                </Box>
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 400 }}>
                  Customizable Dice
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, fontWeight: 400 }}>
                Extensive customization options including different dice types, materials, colors, and textures, 
                allowing users to create personalized dice sets for various games and preferences.
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
                  Mobile Optimization
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, fontWeight: 400 }}>
                Optimized for mobile devices with touch controls, responsive UI, and performance tuning to ensure 
                smooth gameplay across different screen sizes and device capabilities.
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
                  Unity Game Engine
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, fontWeight: 400 }}>
                Developed using Unity 2022.3 LTS with C# scripting, implementing object-oriented design patterns 
                for modular game systems, efficient memory management, and cross-platform compatibility.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Storage sx={{ color: '#9ca3af', mr: 2, fontSize: 20 }} />
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 400 }}>
                  3D Graphics & Animation
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, fontWeight: 400 }}>
                Created high-quality 3D models and animations using Blender, implementing shader systems for 
                realistic materials, lighting effects, and particle systems for enhanced visual appeal.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Animation sx={{ color: '#9ca3af', mr: 2, fontSize: 20 }} />
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 400 }}>
                  Physics System
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, fontWeight: 400 }}>
                Implemented custom physics interactions using Unity&apos;s Rigidbody system, including collision detection, 
                force application, and realistic bouncing behavior for authentic dice-rolling mechanics.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <SportsEsports sx={{ color: '#9ca3af', mr: 2, fontSize: 20 }} />
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 400 }}>
                  User Interface
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, fontWeight: 400 }}>
                Designed an intuitive touch-based interface with gesture recognition, customizable controls, 
                and accessibility features to ensure a smooth user experience across all devices.
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
                Challenge: Physics Accuracy
              </Typography>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, mb: 3, fontWeight: 400 }}>
                Creating realistic dice physics that accurately simulate real-world behavior including proper 
                bouncing, rolling, and settling patterns while maintaining performance on mobile devices.
              </Typography>
              <Typography variant="h6" sx={{ color: '#d1d5db', fontWeight: 500, mb: 2 }}>
                Solution: Optimized Physics Engine
              </Typography>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, fontWeight: 400 }}>
                Implemented a custom physics system with optimized collision detection, realistic material properties, 
                and efficient force calculations to achieve authentic dice behavior without performance degradation.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ color: '#9ca3af', fontWeight: 500, mb: 2 }}>
                Challenge: Mobile Performance
              </Typography>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, mb: 3, fontWeight: 400 }}>
                Ensuring smooth gameplay and consistent frame rates across different mobile devices with varying 
                hardware capabilities and screen resolutions.
              </Typography>
              <Typography variant="h6" sx={{ color: '#d1d5db', fontWeight: 500, mb: 2 }}>
                Solution: Adaptive Quality System
              </Typography>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, fontWeight: 400 }}>
                Developed an adaptive quality system that automatically adjusts graphics settings, physics complexity, 
                and animation quality based on device performance to maintain optimal gameplay experience.
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
                Game Engine
              </Typography>
              <Typography variant="body2" sx={{ color: '#9ca3af', fontWeight: 400 }}>
                Unity 2022.3 LTS, C#, .NET Framework
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ color: 'white', fontWeight: 400, mb: 2 }}>
                Graphics & Design
              </Typography>
              <Typography variant="body2" sx={{ color: '#9ca3af', fontWeight: 400 }}>
                Blender, Unity Shaders, Particle Systems
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ color: 'white', fontWeight: 400, mb: 2 }}>
                Platform & Deployment
              </Typography>
              <Typography variant="body2" sx={{ color: '#9ca3af', fontWeight: 400 }}>
                Android, Google Play Store, Mobile Optimization
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