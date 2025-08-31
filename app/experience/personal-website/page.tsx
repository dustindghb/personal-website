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
  Language,
  Code,
  Storage,
  Close,
  CalendarToday,
  TrendingUp,
  Palette
} from '@mui/icons-material';

export default function PersonalWebsite(): React.ReactElement {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const technologies = [
    'Next.js', 'React', 'TypeScript', 'Material UI', 'Vercel', 'Responsive Design'
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
          Personal Website
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CalendarToday sx={{ fontSize: 16, color: '#6b7280' }} />
            <Typography variant="body2" sx={{ color: '#6b7280', fontWeight: 400 }}>
              January 2025 - Present
            </Typography>
          </Box>
          <Box sx={{ 
            width: 1, 
            height: 1, 
            bgcolor: '#6b7280', 
            borderRadius: '50%' 
          }} />
          <Typography variant="body2" sx={{ color: '#6b7280', fontWeight: 400 }}>
            Portfolio Website
          </Typography>
        </Box>

        <Typography variant="h6" sx={{ 
          color: '#9ca3af', 
          lineHeight: 1.7, 
          mb: 6,
          maxWidth: '700px',
          fontWeight: 400
        }}>
          Designed and developed a modern, responsive personal portfolio website showcasing my professional experience, 
          projects, and technical skills. The website features a clean, minimalist design with smooth animations, 
          interactive elements, and optimized performance for an exceptional user experience.
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
            href="https://github.com/dustindghb/personal-website" 
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
            href="https://personal-website-dustin-duong.vercel.app/" 
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
            Live Website
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
                  <Palette sx={{ color: '#9ca3af', fontSize: 20 }} />
                </Box>
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 400 }}>
                  Modern Design
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, fontWeight: 400 }}>
                Clean, minimalist design with a focus on typography and spacing, featuring smooth animations 
                and interactive elements that enhance user engagement without overwhelming the content.
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
                  <Language sx={{ color: '#9ca3af', fontSize: 20 }} />
                </Box>
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 400 }}>
                  Responsive Layout
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, fontWeight: 400 }}>
                Fully responsive design that adapts seamlessly to all screen sizes and devices, ensuring 
                optimal viewing experience on desktop, tablet, and mobile platforms.
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
                  Performance Optimized
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, fontWeight: 400 }}>
                Optimized for speed and performance with efficient code structure, lazy loading, and 
                modern web technologies to ensure fast loading times and smooth user interactions.
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
                  Next.js Framework
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, fontWeight: 400 }}>
                Built with Next.js 15 for optimal performance, SEO, and developer experience. Implemented 
                server-side rendering and static generation for improved loading speeds and search engine visibility.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Storage sx={{ color: '#9ca3af', mr: 2, fontSize: 20 }} />
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 400 }}>
                  Material UI Components
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, fontWeight: 400 }}>
                Utilized Material UI for consistent, accessible, and customizable components. Implemented 
                custom theming and component overrides to achieve the desired minimalist aesthetic.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Palette sx={{ color: '#9ca3af', mr: 2, fontSize: 20 }} />
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 400 }}>
                  TypeScript Integration
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, fontWeight: 400 }}>
                Implemented TypeScript for enhanced code quality, type safety, and developer productivity. 
                Created comprehensive type definitions for all components and data structures.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Language sx={{ color: '#9ca3af', mr: 2, fontSize: 20 }} />
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 400 }}>
                  Responsive Design System
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, fontWeight: 400 }}>
                Developed a comprehensive responsive design system using CSS Grid and Flexbox, ensuring 
                consistent layouts and optimal user experience across all device sizes and orientations.
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
                Challenge: Design Consistency
              </Typography>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, mb: 3, fontWeight: 400 }}>
                Maintaining consistent design language and visual hierarchy across multiple pages while 
                ensuring the minimalist aesthetic remains clean and professional.
              </Typography>
              <Typography variant="h6" sx={{ color: '#d1d5db', fontWeight: 500, mb: 2 }}>
                Solution: Design System
              </Typography>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, fontWeight: 400 }}>
                Created a comprehensive design system with standardized typography, spacing, colors, and 
                component patterns to ensure consistency across all pages and components.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ color: '#9ca3af', fontWeight: 500, mb: 2 }}>
                Challenge: Performance Optimization
              </Typography>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, mb: 3, fontWeight: 400 }}>
                Balancing rich interactive features with fast loading times and smooth performance, 
                especially on mobile devices with limited resources.
              </Typography>
              <Typography variant="h6" sx={{ color: '#d1d5db', fontWeight: 500, mb: 2 }}>
                Solution: Optimized Architecture
              </Typography>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, fontWeight: 400 }}>
                Implemented code splitting, lazy loading, and optimized asset delivery to minimize 
                bundle size and improve loading performance across all devices and network conditions.
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
                Frontend Framework
              </Typography>
              <Typography variant="body2" sx={{ color: '#9ca3af', fontWeight: 400 }}>
                Next.js 15, React 18, TypeScript
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ color: 'white', fontWeight: 400, mb: 2 }}>
                UI & Styling
              </Typography>
              <Typography variant="body2" sx={{ color: '#9ca3af', fontWeight: 400 }}>
                Material UI, CSS Grid, Flexbox
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ color: 'white', fontWeight: 400, mb: 2 }}>
                Deployment & Hosting
              </Typography>
              <Typography variant="body2" sx={{ color: '#9ca3af', fontWeight: 400 }}>
                Vercel, Git, CI/CD Pipeline
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