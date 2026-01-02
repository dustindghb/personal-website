'use client';

import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Container,
  Tabs,
  Tab,
  Chip
} from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Link from 'next/link';
import Image from 'next/image';

// Define TypeScript interfaces for our data structures
interface TimelineEntry {
  id: string;
  label: string;
  description: string;
  year: string;
  type: 'project' | 'certificate' | 'experience';
  path?: string; // Optional for projects only
  image?: string; // Optional for certificates only
  externalLink?: string;
}

const timelineEntries: TimelineEntry[] = [
  {
    id: 'virtual-fitting-room',
    label: 'Virtual Fitting Room',
    description: 'Built full-stack virtual try-on platform with Java Spring Boot backend and Next.js frontend on Google Cloud Run, handling 600 requests/min with 99.9% uptime. Implemented OAuth2 authentication, Bucket4j rate limiting, and Cloudflare CDN. Designed cloud infrastructure on GCP with Cloud Run, Cloud SQL PostgreSQL, and Cloud Storage. Integrated Stripe payments and PostHog analytics.',
    year: 'October 2025 - Present',
    type: 'project',
    path: '/project-experience/virtual-fitting-room'
  },
  {
    id: 'regulations-gov-tool',
    label: 'Regulations.gov Document Matcher',
    description: 'Built privacy-focused desktop app with Tauri (Rust + React/TypeScript) and Ollama for AI-powered government document search and personalized recommendations using local RAG architecture. Engineered automated Docker pipeline with N8N to fetch 1000+ documents weekly from regulations.gov APIs. Implemented force-directed graph matching algorithm achieving 95% accuracy.',
    year: 'August 2025 - October 2025',
    type: 'project',
    path: '/project-experience/regulations-gov-tool'
  },
  {
    id: 'stage4-solutions',
    label: 'Stage 4 Solutions - SDE Intern',
    description: 'Engineered lead identification Chrome extension with real-time AI analysis achieving 300% improvement in lead generation speed to 300+ leads/hr. Built data management system with client filtering, LinkedIn degree tracking, and automated CSV export. Authored documentation and contributed HubSpot CRM automation workflow plans.',
    year: 'June 2025 - September 2025',
    type: 'experience',
    path: '/work-experience/stage4solutions'
  },
  {
    id: 'distributed-agent-system',
    label: 'Distributed Agent Communication System',
    description: 'Engineered concurrent UDP server in Go handling real-time agent docking and peer-to-peer invitation routing with JWT-based authentication and RSA public key verification. Implemented NAT traversal using UDP hole punching and keep-alive packets to establish direct peer-to-peer connections between agents behind firewalls.',
    year: 'June 2025 - July 2025',
    type: 'project',
    path: '/project-experience/dstation'
  },
  {
    id: 'personal-website',
    label: 'Personal Website',
    description: 'Built this personal website by designing the UI in Figma, implementing the frontend with Next.js, styling it with Material UI components for a modern, responsive experience, and hosting on vercel.',
    year: 'February 2024',
    type: 'project',
    path: '/project-experience/personal-website'
  },
  {
    id: 'scu-schedule-helper',
    label: 'SCU Schedule Helper - Chrome Extension',
    description: 'Collaborated in 3-person team to build Chrome extension with 800+ active users, executing full SDLC including Figma prototypes, UML diagrams, user interviews, and Chrome Web Store deployment. Developed professor/course rating search page, preference settings, friend network, and Workday registration page injection with ratings. Scraped data from 60,000+ SCU course evaluation PDFs and RateMyProfessor. Built CRUD operations using AWS Lambda functions with DynamoDB. Increased adoption by 200 through automated newsletters.',
    year: 'August 2024 - September 2025',
    type: 'project',
    externalLink: 'https://chromewebstore.google.com/detail/scu-schedule-helper/feinilelhamnodbmhjhacnajbbhapdhj?hl=en'
  },
  {
    id: 'rec-exchange',
    label: 'REC Exchange - SDE Intern',
    description: 'Conducted market research, identified customers, and developed responsive landing page with Next.js.',
    year: 'April 2024 - June 2024',
    type: 'experience'
  },
  {
    id: 'viginere-cypher',
    label: 'Viginere Cypher Webevent',
    description: 'Coded interactive Vigenère cipher puzzle webevent with Next.js and MaterialUI hosted on Firebase with form system for answers',
    year: 'August 2024',
    type: 'project',
    path: '/project-experience/viginere-cypher'
  },
  {
    id: 'APIs',
    label: 'APIs',
    description: 'Learned how to design, build and optimize RESTful APIs using Django, including understanding API architecture principles, implementing data backbones for web applications, exploring emerging API technologies, and creating comprehensive API documentation and testing protocols to ensure robust performance.',
    year: 'April 2024',
    type: 'certificate',
    image: '/certificates/apis-1.png'
  },
  {
    id: 'dice-animations',
    label: 'Dice Animations App',
    description: 'Developed Unity app with interactive dice animations and simulations for given percent probability',
    year: 'February 2024',
    type: 'project',
    path: '/project-experience/dice-animations'
  },
  {
    id: 'django-web',
    label: 'Django Web Framework and Development',
    description: 'Built robust web applications using the Django framework, including designing models for database interactions, creating views and templates for the user interface, implementing secure coding practices, and following industry best practices for developing, testing and deploying full-featured web applications with Python, HTML, and CSS.',
    year: 'Feb 2024',
    type: 'certificate',
    image: '/certificates/django-web-1.png'
  },
  {
    id: 'version-control-git',
    label: 'version control with Git',
    description: 'Learned and practiced the basics of version control with Git and GitHub.',
    year: 'January 2024',
    type: 'certificate',
    image: '/certificates/version-control-1.png'
  },
  {
    id: 'back-end',
    label: 'Backend Development',
    description: 'Learned the essentials of web development, including HTML, CSS, and UI frameworks like Bootstrap and React, enabling me to create responsive webpages and understand the core technologies that power the internet.',
    year: 'January 2024',
    type: 'certificate',
    image: '/certificates/backend-1.png'
  },
  {
    id: 'python',
    label: 'Programming in Python',
    description: 'Practiced essential Python programming fundamentals, including syntax, data structures, control flow, object-oriented concepts, error handling, and test-driven development, providing me with the foundational skills needed for back-end development and database engineering.',
    year: 'January 2024',
    type: 'certificate',
    image: '/certificates/python-1.png'
  },
  {
    id: 'front-end',
    label: 'Frontend Development',
    description: 'Practiced essential front-end development skills, including HTML, CSS, JavaScript, and responsive design principles, enabling me to create engaging and interactive user interfaces that work seamlessly across different devices and browsers.',
    year: 'January 2024',
    type: 'certificate',
    image: '/certificates/frontend-1.png'
  },
  {
    id: 'databases',
    label: 'Databases',
    description: 'Learned comprehensive database fundamentals for back-end development, including database management systems, SQL syntax, data manipulation techniques, and relational database design principles, enabling me to effectively store, search, extract and manipulate data for end-user applications.',
    year: 'September 2023',
    type: 'certificate',
    image: '/certificates/databases-1.png'
  },
];

export default function TimelinePage(): React.ReactElement {
  const [filter, setFilter] = useState<'all' | 'experience' | 'project' | 'certificate'>('all');
  
  const filteredEntries = timelineEntries.filter(entry => {
    if (filter === 'all') return true;
    return entry.type === filter;
  });

  const handleFilterChange = (event: React.SyntheticEvent, newValue: 'all' | 'experience' | 'project' | 'certificate') => {
    setFilter(newValue);
  };
  
  const handleOpenImage = (imageSrc: string) => {
    console.log('Image clicked:', imageSrc);
  };
  
  return (
    <Container maxWidth="lg" sx={{ bgcolor: '#2e2e2e', minHeight: '100vh', pt: 2 }}>
      <Box py={4}>
        <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ color: 'white' }}>
          My Timeline
        </Typography>
        <Typography variant="body1" paragraph mb={2} align="center" sx={{ color: '#ccc' }}>
          A chronological journey through my work experience, projects, and certifications.
        </Typography>
        
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mb: 4 }}>
          <Tabs 
            value={filter} 
            onChange={handleFilterChange}
            TabIndicatorProps={{
              style: { backgroundColor: "white" }
            }}
            textColor="inherit"
            sx={{ 
              '& .MuiTab-root': { color: '#aaa' },
              '& .Mui-selected': { color: 'white' }
            }}
            centered
          >
            <Tab label="All" value="all" />
            <Tab label="Experience" value="experience" />
            <Tab label="Projects" value="project" />
            <Tab label="Certificates" value="certificate" />
          </Tabs>
        </Box>
        
        <Timeline position="alternate" sx={{ 
          '.MuiTimelineItem-root:before': {
            flex: 0,
            padding: 0
          }
        }}>
          {filteredEntries.map((entry, index) => (
            <TimelineItem key={entry.id}>
              <TimelineOppositeContent
                sx={{ 
                  m: 'auto 0', 
                  color: '#ccc',
                  flex: 0.15,
                  ...(entry.type === 'certificate' ? { py: 4 } : {})
                }}
                align="right"
                variant="h6"
              >
                {entry.year}
              </TimelineOppositeContent>
              
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: '#777', height: entry.type === 'certificate' ? '40px' : '20px' }} />
                <TimelineDot sx={{ 
                  bgcolor: entry.type === 'certificate' ? '#aaa' : entry.type === 'experience' ? '#4CAF50' : '#2196F3',
                  boxShadow: 'none'
                }} />
                {index < filteredEntries.length - 1 && (
                  <TimelineConnector sx={{ bgcolor: '#777', minHeight: entry.type === 'certificate' ? '100px' : '60px' }} />
                )}
              </TimelineSeparator>
              
              <TimelineContent sx={{ py: 3, px: 3 }}>
                <Box sx={{ 
                  mb: 5, 
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateX(8px)',
                  },
                  borderLeft: '2px solid #666',
                  pl: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  ...(entry.type === 'certificate' ? {
                    py: 3,
                    px: 2,
                    bgcolor: 'rgba(255,255,255,0.03)',
                    borderRadius: 1,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                  } : {})
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ...(entry.type === 'certificate' ? { justifyContent: 'center', mb: 1 } : {}) }}>
                    <Typography variant="h6" component="h2" sx={{ 
                      color: 'white',
                      fontWeight: 'bold',
                    }}>
                      {entry.label}
                    </Typography>
                    <Chip 
                      size="small" 
                      label={entry.type === 'certificate' ? 'Certificate' : entry.type === 'experience' ? 'Experience' : 'Project'} 
                      sx={{ 
                        height: 24, 
                        bgcolor: entry.type === 'certificate' ? '#555' : entry.type === 'experience' ? '#4CAF50' : '#2196F3',
                        color: 'white',
                        borderColor: 'transparent'
                      }}
                    />
                  </Box>
                  
                  {/* Certificates */}
                  {entry.type === 'certificate' && entry.image && (
                    <Box sx={{ 
                      position: 'relative', 
                      height: '280px', 
                      width: '100%', 
                      maxWidth: '560px', 
                      overflow: 'hidden', 
                      borderRadius: 1,
                      mx: 'auto',
                      cursor: 'pointer',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.02)'
                      }
                    }}
                    onClick={() => handleOpenImage(entry.image!)}
                    >
                      <Image
                        src={entry.image}
                        alt={entry.label}
                        fill
                        style={{ 
                          objectFit: 'contain',
                          background: 'rgba(0,0,0,0.03)'
                        }}
                      />
                    </Box>
                  )}
                  
                  <Typography variant="body1" sx={{ 
                    color: '#ccc',
                    ...(entry.type === 'certificate' ? {
                      textAlign: 'center',
                      mt: 1,
                      mb: 1
                    } : {})
                  }}>
                    {entry.description}
                  </Typography>
                  
                  {/* Add links for projects and work experience */}
                  {entry.path && (
                    <Box sx={{ mt: 1 }}>
                      <Link 
                        href={entry.path}
                        style={{
                          color: '#aaa',
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          transition: 'color 0.2s',
                        }}
                      >
                        <Typography variant="body2" sx={{ 
                          textDecoration: 'underline', 
                          color: '#aaa',
                          '&:hover': { color: 'white' }
                        }}>
                          View Details
                        </Typography>
                      </Link>
                    </Box>
                  )}

                  {/* External links */}
                  {entry.externalLink && (
                    <Box sx={{ mt: 1 }}>
                      <a 
                        href={entry.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: '#aaa',
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          transition: 'color 0.2s',
                        }}
                      >
                        <Typography variant="body2" sx={{ 
                          textDecoration: 'underline', 
                          color: '#aaa',
                          '&:hover': { color: 'white' }
                        }}>
                          View External Link
                        </Typography>
                      </a>
                    </Box>
                  )}
                </Box>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    </Container>
  );
}
