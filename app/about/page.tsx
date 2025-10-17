'use client';
import { Box, Typography, Grid, Paper } from '@mui/material';
import Image from 'next/image';
import CircleAnimation from '../../components/CircleAnimation';

export default function About() {
  // Technologies grouped by categories based on project experience
  const technologyClusters = [
    {
      category: "AI & Machine Learning",
      items: [
        'Ollama',
        'OpenAI',
        'LangChain',
        'Qdrant',
        'Gemini',
      ]
    },
    {
      category: "Frontend Development",
      items: [
        'React.js',
        'Next.js',
        'TypeScript',
        'Material UI',
        'Chrome Extension (Manifest V3)',
      ]
    },
    {
      category: "Backend & APIs",
      items: [
        'Express.js',
        'AWS Lambda',
        'RESTful APIs',
        'JWT Authentication',
        'RSA Public Key Verification',
      ]
    },
    {
      category: "Cloud & Infrastructure",
      items: [
        'AWS',
        'Docker',
        'N8N',
        'Supabase',
        'AWS SES',
      ]
    },
    {
      category: "Programming Languages",
      items: [
        'Go',
        'Rust',
        'JavaScript',
        'TypeScript',
        'Python',
      ]
    },
    {
      category: "Databases & Storage",
      items: [
        'SQLite',
        'Qdrant Vector Database',
        'AWS DynamoDB',
        'MySQL',
      ]
    },
    {
      category: "Development Tools",
      items: [
        'Git',
        'Figma',
        'Postman',
        'Tauri',
        'Unity',
      ]
    },
    {
      category: "Data & Automation",
      items: [
        'Web Scraping',
        'N8N Workflows',
        'HubSpot Automation',
        'EDGAR APIs',
        'Docker Containerization',
      ]
    },
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
            Hi, I&apos;m Dustin and I&apos;m a Computer Science and Management Information Systems double major at Santa Clara University. I have the flexibility to graduate in June 2026 with a major in Computer Science and minor in MIS, or June 2027 with a double major in Computer Science and Management Information Systems.
          </Typography>

          <Typography variant="h6" sx={{ mt: 3 }} gutterBottom>
            I enjoy working with all layers of the stack, and have both internship and project experience doing so. With my background in tech and business, I identify solutions that people need and building them. Here you can find some of them and the technologies I have experience with.
          </Typography>

          <Typography variant="h6" sx={{ mt: 3 }} gutterBottom>
            In my free time, I enjoy biking, cooking, and playing pickup volleyball.
          </Typography>
        </Grid>
        
        {/* Circular profile image on the right */}
        <Grid item xs={12} md={5} sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'flex-start'
        }}>
          <Box sx={{ 
            width: 187.5,
            height: 187.5,
            position: 'relative',
          }}>
            {/* Animation wrapper */}
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

      {/* Technologies Section - Grouped by category */}
      <Box sx={{ mt: 6, mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Technologies I&apos;m Familiar With
        </Typography>

        {/* Clusters layout */}
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {technologyClusters.map((cluster) => (
            <Grid item xs={12} sm={6} lg={4} key={cluster.category}>
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 3, 
                  mb: 2,
                  bgcolor: '#333333', 
                  color: '#ffffff',  
                  borderRadius: 2,
                }}
              >
                <Typography variant="h6" component="h3" gutterBottom sx={{ 
                  borderBottom: '2px solid #ffffff',
                  paddingBottom: 1,
                  color: '#ffffff', 
                  fontWeight: 'bold'
                }}>
                  {cluster.category}
                </Typography>
                
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mt: 1 }}>
                  {cluster.items.map((tech) => (
                    <Box 
                      key={tech}
                      sx={{ 
                        p: 1.5,
                        bgcolor: '#444444',
                        borderRadius: 1,
                        border: '1px solid #555555',
                        transition: 'all 0.2s ease-in-out',
                        '&:hover': {
                          bgcolor: '#555555',
                          borderColor: '#666666',
                          transform: 'translateY(-2px)',
                        }
                      }}
                    >
                      <Typography variant="body2" sx={{ 
                        color: '#ffffff',
                        fontSize: '0.85rem',
                        fontWeight: 'medium'
                      }}>
                        {tech}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}