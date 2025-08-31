'use client';

import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Grid,
  Chip,
  Link,
  Paper,
  IconButton,
  Modal,
  Container,
  Divider
} from '@mui/material';
import { 
  GitHub, 
  OpenInNew, 
  Psychology,
  Api,
  Storage,
  Close,
  CalendarToday,
  Code,
  TrendingUp
} from '@mui/icons-material';

export default function FederalReserveAgent(): React.ReactElement {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const technologies = [
    'n8n', 'AWS Comprehend', 'Federal Reserve APIs', 'RAG', 'CRUD Operations', 'Sentiment Analysis'
  ];

  const handleImageClick = (imagePath: string) => {
    setSelectedImage(imagePath);
  };

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
          Federal Reserve Agent
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CalendarToday sx={{ fontSize: 16, color: '#6b7280' }} />
            <Typography variant="body2" sx={{ color: '#6b7280', fontWeight: 400 }}>
              May 2025
            </Typography>
          </Box>
          <Box sx={{ 
            width: 1, 
            height: 1, 
            bgcolor: '#6b7280', 
            borderRadius: '50%' 
          }} />
          <Typography variant="body2" sx={{ color: '#6b7280', fontWeight: 400 }}>
            Hackathon Project
          </Typography>
        </Box>

        <Typography variant="h6" sx={{ 
          color: '#9ca3af', 
          lineHeight: 1.7, 
          mb: 6,
          maxWidth: '700px',
          fontWeight: 400
        }}>
          Developed an intelligent RAG (Retrieval-Augmented Generation) agent that provides comprehensive insights into Federal Reserve regulations and proposals. 
          The system integrates with Federal Reserve APIs to perform real-time data retrieval and implements advanced sentiment analysis to evaluate public feedback on legislation.
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

        <Link 
          href="https://devpost.com/software/dotgov" 
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
          <OpenInNew sx={{ fontSize: 16 }} />
          View on Devpost
        </Link>
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
                  <Psychology sx={{ color: '#9ca3af', fontSize: 20 }} />
                </Box>
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 400 }}>
                  RAG Agent
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, fontWeight: 400 }}>
                Intelligent agent trained on Federal Reserve regulations and proposals, providing accurate and contextual responses to user queries about financial policies.
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
                  <Api sx={{ color: '#9ca3af', fontSize: 20 }} />
                </Box>
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 400 }}>
                  API Integration
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, fontWeight: 400 }}>
                Seamless integration with Federal Reserve APIs for real-time data retrieval and CRUD operations on regulatory documents and proposals.
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
                  <Storage sx={{ color: '#9ca3af', fontSize: 20 }} />
                </Box>
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 400 }}>
                  Sentiment Analysis
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, fontWeight: 400 }}>
                Advanced sentiment analysis using AWS Comprehend to evaluate public comments and feedback on proposed legislation and regulations.
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
                  Workflow Automation
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, fontWeight: 400 }}>
                Built comprehensive automation workflows using n8n to orchestrate data retrieval, processing, and analysis pipelines. 
                The system automatically fetches new regulations and proposals, processes them through the RAG model, and updates the knowledge base.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <TrendingUp sx={{ color: '#9ca3af', mr: 2, fontSize: 20 }} />
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 400 }}>
                  Data Processing
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, fontWeight: 400 }}>
                Implemented robust data processing pipelines that handle various document formats from the Federal Reserve, 
                including PDFs, XML feeds, and structured data. The system maintains data integrity and provides real-time updates.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Api sx={{ color: '#9ca3af', mr: 2, fontSize: 20 }} />
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 400 }}>
                  API Architecture
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, fontWeight: 400 }}>
                Designed a scalable API architecture that interfaces with multiple Federal Reserve endpoints, 
                implementing proper error handling, rate limiting, and data validation to ensure reliable data retrieval.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Psychology sx={{ color: '#9ca3af', mr: 2, fontSize: 20 }} />
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 400 }}>
                  Sentiment Analysis Pipeline
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, fontWeight: 400 }}>
                Integrated AWS Comprehend for advanced natural language processing, analyzing public comments 
                on proposed regulations to provide insights into public sentiment and concerns.
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
                Challenge: Complex Regulatory Language
              </Typography>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, mb: 3, fontWeight: 400 }}>
                Federal Reserve documents contain complex legal and financial terminology that traditional NLP models struggle to understand.
              </Typography>
              <Typography variant="h6" sx={{ color: '#d1d5db', fontWeight: 500, mb: 2 }}>
                Solution: Specialized RAG Model
              </Typography>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, fontWeight: 400 }}>
                Developed a specialized RAG model fine-tuned on financial and regulatory documents, 
                improving accuracy and contextual understanding of complex policy language.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ color: '#9ca3af', fontWeight: 500, mb: 2 }}>
                Challenge: Real-time Data Integration
              </Typography>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, mb: 3, fontWeight: 400 }}>
                Federal Reserve APIs have varying response times and data formats, making real-time integration challenging.
              </Typography>
              <Typography variant="h6" sx={{ color: '#d1d5db', fontWeight: 500, mb: 2 }}>
                Solution: Robust API Layer
              </Typography>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, fontWeight: 400 }}>
                Built a resilient API integration layer with caching, retry logic, and data normalization 
                to handle API inconsistencies and ensure reliable data flow.
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
                Workflow & Automation
              </Typography>
              <Typography variant="body2" sx={{ color: '#9ca3af', fontWeight: 400 }}>
                n8n, Docker, REST APIs
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ color: 'white', fontWeight: 400, mb: 2 }}>
                AI & NLP
              </Typography>
              <Typography variant="body2" sx={{ color: '#9ca3af', fontWeight: 400 }}>
                AWS Comprehend, RAG, Sentiment Analysis
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ color: 'white', fontWeight: 400, mb: 2 }}>
                Data & APIs
              </Typography>
              <Typography variant="body2" sx={{ color: '#9ca3af', fontWeight: 400 }}>
                Federal Reserve APIs, CRUD Operations, JSON/XML
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
