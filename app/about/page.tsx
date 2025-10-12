'use client';
import { Box, Typography, Grid, Paper } from '@mui/material';
import Image from 'next/image';
import CircleAnimation from '../../components/CircleAnimation';

export default function About() {
  // Clustered technologies by theme
  const technologyClusters = [
    {
      category: "AI & Machine Learning",
      items: [
        { name: 'Ollama', logo: '/tech-logos/ollama.png' },
        { name: 'OpenAI', logo: '/tech-logos/openai.svg' },
        { name: 'ChromaDB', logo: '/tech-logos/chromadb.png' },
        { name: 'Hugging Face', logo: '/tech-logos/huggingface.svg' },
        { name: 'LangChain', logo: '/tech-logos/langchain.png' },
      ]
    },
    {
      category: "Web Development",
      items: [
        { name: 'React.js', logo: '/tech-logos/react.png' },
        { name: 'Next.js', logo: '/tech-logos/nextjs.png' },
        { name: 'Node.js', logo: '/tech-logos/nodejs.svg' },
        { name: 'Material UI', logo: '/tech-logos/materialui.svg' },
      ]
    },
    {
      category: "Backend & APIs",
      items: [
        { name: 'Spring Boot', logo: '/tech-logos/spring.png' },
        { name: 'Postman', logo: '/tech-logos/postman.svg' },
        { name: 'AWS Lambda', logo: '/tech-logos/awslambda.png' },
        { name: 'AWS API Gateway', logo: '/tech-logos/aws-api-gateway.svg' },
      ]
    },
    {
      category: "Cloud & Infrastructure",
      items: [
        { name: 'Google Cloud', logo: '/tech-logos/gcloud.png' },
        { name: 'AWS', logo: '/tech-logos/aws.png' },
        { name: 'Firebase', logo: '/tech-logos/firebase.svg' },
        { name: 'Docker', logo: '/tech-logos/docker.svg' },
      ]
    },
    {
      category: "Developer Tools",
      items: [
        { name: 'Git', logo: '/tech-logos/git.png' },
        { name: 'Figma', logo: '/tech-logos/figma.png' },
      ]
    },
    {
      category: "Databases",
      items: [
        { name: 'MySQL Workbench', logo: '/tech-logos/mysql.svg' },
        { name: 'DynamoDB', logo: '/tech-logos/aws-dynamodb.svg' },
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
            Hi, I&apos;m Dustin and I&apos;m a Computer Science and Management Information Systems double major at Santa Clara University, graduating in June 2027. I also have the option to graduate in June 2026 with a major in Computer Science and minor in MIS.
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
                
                <Grid container spacing={2} sx={{ mt: 1 }}>
                  {cluster.items.map((tech) => (
                    <Grid item xs={6} key={tech.name}>
                      <Paper 
                        elevation={2} 
                        sx={{ 
                          p: 2, 
                          display: 'flex', 
                          flexDirection: 'column', 
                          alignItems: 'center',
                          justifyContent: 'center',
                          height: 120,
                          bgcolor: '#cccccc', 
                          color: '#333333',    
                          transition: 'transform 0.2s, box-shadow 0.2s',
                          '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                          }
                        }}
                      >
                        <Box sx={{ 
                          width: 50, 
                          height: 50, 
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
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}