'use client';

import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Container,
  useTheme,
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
  type: 'project' | 'certificate';
  path?: string; // Optional for projects only
  image?: string; // Optional for certificates only
  externalLink?: string;
}

const timelineEntries: TimelineEntry[] = [
  {
    id: 'scu-schedule-helper',
    label: 'SCU Schedule Helper',
    description: 'Designed and developed a Chrome extension for SCU Workday course registration, featuring a course and professor query bar, embedded information within Workday, customizable preferences, a friend network, and an AI academic advisor. Helping 300+ active users.',
    year: 'September 2024 - Present',
    type: 'project',
    path: '/projects/scu-schedule-helper'
  },
  {
    id: 'personal-website',
    label: 'Personal Website',
    description: 'Built this personal website by designing the UI in Figma, implementing the frontend with Next.js, styling it with Material UI components for a modern, responsive experience, and hosting on vercel.',
    year: 'February 2025',
    type: 'project',
    path: '/projects/personal-website'
  },
    {
    id: 'vira-poc',
    label: 'Vira - Apprenticeship Platform (POC)',
    description: 'Developed proof of concept platform where apprentices can seek guidance from agents trained from data given from professionals, depending on career interests',
    year: 'February 2025',
    type: 'project',
    path: '/projects/vira-poc'
  },
  {
    id: 'viginere-cypher',
    label: 'Viginere Cypher Webevent',
    description: 'Coded interactive Vigenère cipher puzzle webevent with Next.js and MaterialUI hosted on Firebase with form system for answers',
    year: 'August 2024',
    type: 'project',
    path: '/projects/viginere-cypher'
  },
  {
    id: 'dice-animations',
    label: 'Dice Animations App',
    description: 'Developed Unity app with interactive dice animations and simulations for given percent probability',
    year: 'February 2024',
    type: 'project',
    path: '/projects/dice-animations'
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
    year: 'January 2024',
    type: 'certificate',
    image: '/certificates/databases-1.png'
  },
  
];

export default function Projects(): React.ReactElement {
  const theme = useTheme();
  const [filter, setFilter] = useState<'all' | 'project' | 'certificate'>('all');
  const [openImage, setOpenImage] = useState<string | null>(null);
  
  const filteredEntries = timelineEntries.filter(entry => {
    if (filter === 'all') return true;
    return entry.type === filter;
  });

  const handleFilterChange = (event: React.SyntheticEvent, newValue: 'all' | 'project' | 'certificate') => {
    setFilter(newValue);
  };
  
  const handleOpenImage = (imageSrc: string) => {
    setOpenImage(imageSrc);
  };
  
  const handleCloseImage = () => {
    setOpenImage(null);
  };
  
  return (
    <Container maxWidth="lg" sx={{ bgcolor: '#2e2e2e', minHeight: '100vh', pt: 2 }}>
      <Box py={4}>
        <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ color: 'white' }}>
          My Timeline
        </Typography>
        <Typography variant="body1" paragraph mb={2} align="center" sx={{ color: '#ccc' }}>
          A chronological journey through my projects and certifications.
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
                  bgcolor: entry.type === 'certificate' ? '#aaa' : '#999',
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
                      label={entry.type === 'certificate' ? 'Certificate' : 'Project'} 
                      sx={{ 
                        height: 24, 
                        bgcolor: entry.type === 'certificate' ? '#555' : '#444',
                        color: 'white',
                        borderColor: 'transparent'
                      }}
                    />
                  </Box>
                  
                  {/* Only show images for certificates */}
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
                  
                  {/* Add links for projects only */}
                  {entry.type === 'project' && entry.path && (
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
                          View Project Details
                        </Typography>
                      </Link>
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