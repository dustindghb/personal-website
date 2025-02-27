'use client';
import { Box, Typography, Grid, Paper } from '@mui/material';
import Image from 'next/image';
import CircleAnimation from '../../components/CircleAnimation';

export default function About() {
  const technologies = [
    { name: 'Spring Boot', logo: '/tech-logos/spring.png' },
    { name: 'React.js', logo: '/tech-logos/react.png' },
    { name: 'Git', logo: '/tech-logos/git.png' },
    { name: 'MySQL Workbench', logo: '/tech-logos/mysql.svg' },
    { name: 'Postman', logo: '/tech-logos/postman.svg' },
    { name: 'Google Cloud', logo: '/tech-logos/gcloud.png' },
    { name: 'AWS', logo: '/tech-logos/aws.png' },
    { name: 'Firebase', logo: '/tech-logos/firebase.svg' },
    { name: 'Next.js', logo: '/tech-logos/nextjs.png' },
    { name: 'Node.js', logo: '/tech-logos/nodejs.svg' },
    { name: 'Figma', logo: '/tech-logos/figma.png' },
    { name: 'Docker', logo: '/tech-logos/docker.svg' },
  ];

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        About Me
      </Typography>
      
      <Grid container spacing={4} sx={{ mt: 2 }}>
        {/* Text content on the left */}
        <Grid item xs={12} md={7}>
          <Typography variant="h6" gutterBottom>
            Hi, my name is Dustin and I&apos;m a third-year student at Santa Clara University pursuing a B.S. in computer science with an emphasis in software engineering, expecting to graduate in Mar 2026.
          </Typography>

          <Typography variant="h6" sx={{ mt: 3 }} gutterBottom>
            My passion for problem-solving, innovation, and creating is what led me to pursue technology and software engineering. 
            With experience in developing innovative software projects, working with diverse teams, and successfully delivering solutions,
            I am excited to apply these skills.
          </Typography>
          
          <Typography variant="h6" sx={{ mt: 3 }} gutterBottom>
            I have experience in the front-end building websites and chrome extensions with Next.js,
            using component libraries like Material UI and Shad.CN. I have experience in the backend as well, working technologies 
            like Springboot, Redis, and AWS services, and OpenAI API. Dedicated to continuously learning, I excel in dynamic and 
            collaborative software engineering environments.
          </Typography>
        </Grid>
        
        {/* Circular profile image on the right */}
        <Grid item xs={12} md={5} sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'flex-start'
        }}>
          <Box sx={{ 
            width: 300,
            height: 300,
            position: 'relative',
          }}>
            {/* Animation wrapper - bigger than the image container */}
            <Box sx={{ 
              position: 'absolute', 
              width: '140%', 
              height: '140%', 
              top: '-20%', 
              left: '-20%',
              zIndex: 0,
              pointerEvents: 'none'
            }}>
              <CircleAnimation />
            </Box>
            
            {/* Image container */}
            <Box sx={{ 
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '4px solid rgba(255,255,255,0.3)',
              position: 'relative',
              boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
              bgcolor: 'rgba(255,255,255,0.08)',
              zIndex: 1
            }}>
              <Image
                src="/profilepicture.jpg"
                alt="Dustin's profile picture"
                fill
                style={{
                  objectFit: 'cover'
                }}
                priority
              />
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Technologies Section */}
      <Box sx={{ mt: 6, mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Technologies I&apos;m Familiar With
        </Typography>
        
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {technologies.map((tech) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={tech.name}>
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 2, 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 120,
                  bgcolor: '#cccccc', // Light gray background
                  color: '#333333',    // Dark text for better contrast
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                  }
                }}
              >
                <Box sx={{ 
                  width: 60, 
                  height: 60, 
                  position: 'relative',
                  mb: 1
                }}>
                  <Image
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    fill
                    style={{
                      objectFit: 'contain'
                    }}
                  />
                </Box>
                <Typography variant="body2" align="center">
                  {tech.name}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}