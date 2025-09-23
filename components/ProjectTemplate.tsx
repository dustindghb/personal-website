'use client';

import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Container,
  Paper,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Dialog,
  DialogContent,
  DialogActions,
  Button
} from '@mui/material';
import { ChevronLeft, ChevronRight, PlayArrow, Close } from '@mui/icons-material';
import Image from 'next/image';

// Helper function to extract YouTube video ID from URL
const getYouTubeVideoId = (url: string): string => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : '';
};

interface MediaItem {
  src: string;
  caption: string;
  type: 'image' | 'video' | 'youtube';
  alt?: string;
}

interface ProjectTemplateProps {
  title: string;
  media: MediaItem[];
  overview: string;
  bulletPoints: string[];
}

const ProjectTemplate: React.FC<ProjectTemplateProps> = ({
  title,
  media,
  overview,
  bulletPoints
}) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextMedia = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % media.length);
  };

  const prevMedia = () => {
    setCurrentMediaIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  const openFullscreen = () => {
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  const currentMedia = media.length > 0 ? media[currentMediaIndex] : null;

  return (
    <Container maxWidth="lg" sx={{ bgcolor: '#0a0a0a', minHeight: '100vh', pt: 2 }}>
      <Box py={4}>
        {/* Project Title */}
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom 
          align="center" 
          sx={{ 
            color: 'white', 
            mb: 6,
            fontWeight: 200,
            letterSpacing: '-0.02em',
            background: 'linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}
        >
          {title}
        </Typography>

        {/* Media Carousel */}
        {media.length > 0 && (
          <Paper 
            elevation={0} 
            sx={{ 
              mb: 6, 
              bgcolor: '#1c1c1c',
              border: '1px solid #1a1a1a',
              borderRadius: '12px',
              color: '#ffffff',
              overflow: 'hidden',
              position: 'relative',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
            }}
          >
            <Box sx={{ position: 'relative', height: '500px' }}>
              {/* Media Display */}
              <Box 
                sx={{ 
                  position: 'relative', 
                  width: '100%', 
                  height: '100%',
                  cursor: currentMedia?.type === 'youtube' ? 'default' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onClick={currentMedia?.type === 'youtube' ? undefined : openFullscreen}
              >
                {currentMedia?.type === 'image' ? (
                  <Image
                    src={currentMedia.src}
                    alt={currentMedia.alt || currentMedia.caption}
                    fill
                    style={{ 
                      objectFit: 'contain',
                      background: 'rgba(0,0,0,0.1)'
                    }}
                  />
                ) : currentMedia?.type === 'video' ? (
                  <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                    <video
                      src={currentMedia.src}
                      controls
                      style={{ 
                        width: '100%', 
                        height: '100%',
                        objectFit: 'contain'
                      }}
                    />
                  </Box>
                ) : (
                  // YouTube video - show embedded player directly
                  <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${getYouTubeVideoId(currentMedia?.src || '')}?rel=0&modestbranding=1`}
                      title={currentMedia?.caption}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ border: 'none', borderRadius: '8px' }}
                    />
                  </Box>
                )}
                
                {/* Play button overlay for regular videos */}
                {currentMedia?.type === 'video' && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      bgcolor: 'rgba(0,0,0,0.7)',
                      borderRadius: '50%',
                      p: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <PlayArrow sx={{ fontSize: 48, color: 'white' }} />
                  </Box>
                )}
              </Box>

              {/* Navigation Arrows */}
              {media.length > 1 && (
                <>
                  <IconButton
                    onClick={prevMedia}
                    sx={{
                      position: 'absolute',
                      left: 20,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      bgcolor: '#474747',
                      color: 'white',
                      border: '1px solid rgba(255,255,255,0.2)',
                      backdropFilter: 'blur(10px)',
                      '&:hover': {
                        bgcolor: '#5a5a5a',
                        border: '1px solid rgba(255,255,255,0.3)',
                        transform: 'translateY(-50%) scale(1.1)'
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <ChevronLeft />
                  </IconButton>
                  <IconButton
                    onClick={nextMedia}
                    sx={{
                      position: 'absolute',
                      right: 20,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      bgcolor: '#474747',
                      color: 'white',
                      border: '1px solid rgba(255,255,255,0.2)',
                      backdropFilter: 'blur(10px)',
                      '&:hover': {
                        bgcolor: '#5a5a5a',
                        border: '1px solid rgba(255,255,255,0.3)',
                        transform: 'translateY(-50%) scale(1.1)'
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <ChevronRight />
                  </IconButton>
                </>
              )}

              {/* Media Counter */}
              {media.length > 1 && (
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 20,
                    right: 20,
                    bgcolor: 'rgba(255,255,255,0.1)',
                    color: 'white',
                    px: 3,
                    py: 1.5,
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    border: '1px solid rgba(255,255,255,0.2)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  {currentMediaIndex + 1} / {media.length}
                </Box>
              )}
            </Box>

            {/* Caption */}
            <Box sx={{ p: 4, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#b0b0b0', 
                  textAlign: 'center',
                  fontWeight: 300,
                  lineHeight: 1.6,
                  fontSize: '0.95rem'
                }}
              >
                {currentMedia?.caption}
              </Typography>
            </Box>
          </Paper>
        )}

        {/* Overview Section - Only show if overview is provided */}
        {overview && (
          <Paper 
            elevation={0} 
            sx={{ 
              mb: 6, 
              p: 5, 
              bgcolor: '#1c1c1c',
              border: '1px solid #1a1a1a',
              borderRadius: '12px',
              color: '#ffffff',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
            }}
          >
            <Typography 
              variant="h4" 
              component="h2" 
              gutterBottom 
              sx={{ 
                color: '#ffffff', 
                fontWeight: 300, 
                mb: 4,
                letterSpacing: '-0.01em'
              }}
            >
              Overview
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#d0d0d0', 
                lineHeight: 1.7,
                fontSize: '1.05rem',
                fontWeight: 300
              }}
            >
              {overview}
            </Typography>
          </Paper>
        )}

        {/* Key Features/Points Section */}
        <Paper 
          elevation={0} 
          sx={{ 
            p: 5, 
            bgcolor: '#1c1c1c',
            border: '1px solid #1a1a1a',
            borderRadius: '12px',
            color: '#ffffff',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
          }}
        >
          <Typography 
            variant="h4" 
            component="h2" 
            gutterBottom 
            sx={{ 
              color: '#ffffff', 
              fontWeight: 300, 
              mb: 4,
              letterSpacing: '-0.01em'
            }}
          >
            Key Achievements
          </Typography>
          <List sx={{ pl: 0 }}>
            {bulletPoints.map((point, index) => (
              <ListItem key={index} sx={{ pl: 0, py: 1.5, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <ListItemText
                  primary={
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: '#d0d0d0', 
                        lineHeight: 1.7,
                        fontSize: '1.05rem',
                        fontWeight: 300,
                        position: 'relative',
                        pl: 2,
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          left: 0,
                          top: '50%',
                          transform: 'translateY(-50%)',
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          bgcolor: '#ffffff',
                          opacity: 0.7
                        }
                      }}
                    >
                      {point}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Box>

      {/* Fullscreen Dialog */}
      <Dialog
        open={isFullscreen}
        onClose={closeFullscreen}
        maxWidth={false}
        sx={{
          '& .MuiDialog-paper': {
            bgcolor: '#0a0a0a',
            color: 'white',
            maxWidth: '95vw',
            maxHeight: '95vh',
            width: '95vw',
            height: '95vh',
            borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 25px 50px rgba(0,0,0,0.5)'
          }
        }}
      >
        <DialogContent sx={{ p: 0, position: 'relative', height: '100%' }}>
          <IconButton
            onClick={closeFullscreen}
            sx={{
              position: 'absolute',
              top: 20,
              right: 20,
              bgcolor: 'rgba(255,255,255,0.1)',
              color: 'white',
              zIndex: 1,
              border: '1px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)',
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.2)',
                border: '1px solid rgba(255,255,255,0.3)',
                transform: 'scale(1.1)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            <Close />
          </IconButton>
          
          <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
            {currentMedia?.type === 'image' ? (
              <Image
                src={currentMedia.src}
                alt={currentMedia.alt || currentMedia.caption}
                fill
                style={{ 
                  objectFit: 'contain'
                }}
              />
            ) : currentMedia?.type === 'video' ? (
              <video
                src={currentMedia.src}
                controls
                autoPlay
                style={{ 
                  width: '100%', 
                  height: '100%',
                  objectFit: 'contain'
                }}
              />
            ) : (
              // YouTube video in fullscreen - show embedded player
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${getYouTubeVideoId(currentMedia?.src || '')}?autoplay=1&rel=0`}
                title={currentMedia?.caption}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ border: 'none' }}
              />
            )}
          </Box>

          {/* Fullscreen Navigation */}
          {media.length > 1 && (
            <>
              <IconButton
                onClick={prevMedia}
                sx={{
                  position: 'absolute',
                  left: 20,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  bgcolor: '#474747',
                  color: 'white',
                  zIndex: 1,
                  border: '1px solid rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(10px)',
                  '&:hover': {
                    bgcolor: '#5a5a5a',
                    border: '1px solid rgba(255,255,255,0.3)',
                    transform: 'translateY(-50%) scale(1.1)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <ChevronLeft />
              </IconButton>
              <IconButton
                onClick={nextMedia}
                sx={{
                  position: 'absolute',
                  right: 20,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  bgcolor: '#474747',
                  color: 'white',
                  zIndex: 1,
                  border: '1px solid rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(10px)',
                  '&:hover': {
                    bgcolor: '#5a5a5a',
                    border: '1px solid rgba(255,255,255,0.3)',
                    transform: 'translateY(-50%) scale(1.1)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <ChevronRight />
              </IconButton>
            </>
          )}

          {/* Fullscreen Caption */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              bgcolor: 'rgba(0,0,0,0.7)',
              backdropFilter: 'blur(10px)',
              p: 3,
              textAlign: 'center',
              borderTop: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            <Typography 
              variant="h6" 
              sx={{ 
                color: 'white',
                fontWeight: 300,
                fontSize: '1.1rem'
              }}
            >
              {currentMedia?.caption}
            </Typography>
          </Box>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default ProjectTemplate;
