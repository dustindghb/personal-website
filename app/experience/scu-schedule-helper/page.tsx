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
  Tabs,
  Tab,
  Container,
  Divider
} from '@mui/material';
import { 
  GitHub, 
  OpenInNew, 
  Extension, 
  School, 
  Storage,
  Psychology,
  Api,
  Close,
  CalendarToday,
  Code,
  TrendingUp,
  Group
} from '@mui/icons-material';

type DocumentFile = {
  title: string;
  description: string;
  filename: string;
  previewImages: string[]; 
  fileType: 'pdf' | 'image'; 
};

export default function SCUScheduleHelper() {
  const [tabValue, setTabValue] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [currentDoc, setCurrentDoc] = useState<DocumentFile | null>(null);
  const [currentPreviewIndex, setCurrentPreviewIndex] = useState(0);

  const technologies = [
    'Chrome Extension', 'Next.js', 'Material UI', 'Workday API', 'Jira', 'Firebase'
  ];

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleOpenPreview = (doc: DocumentFile) => {
    setCurrentDoc(doc);
    setCurrentPreviewIndex(0);
    setOpenModal(true);
  };

  const handleClosePreview = () => {
    setOpenModal(false);
  };

  const handleNextPreview = () => {
    if (currentDoc) {
      setCurrentPreviewIndex((prev) => 
        prev < currentDoc.previewImages.length - 1 ? prev + 1 : prev
      );
    }
  };

  const handlePrevPreview = () => {
    setCurrentPreviewIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const documentationFiles: DocumentFile[] = [
    { 
      title: "User & System Requirements", 
      description: "Comprehensive documentation of user stories, system specifications, and functional requirements developed during our software development class", 
      filename: "/ssh-docs/RequirementsDocument.pdf",
      previewImages: [
        "/ssh-docs/RequirementsPreview1.png",
        "/ssh-docs/RequirementsPreview2.png",
        "/ssh-docs/RequirementsPreview3.png",
      ],
      fileType: 'pdf'
    },
    { 
      title: "Class & Activity Diagrams", 
      description: "UML class diagrams showing system components and their relationships, alongside activity diagrams illustrating key workflows", 
      filename: "/ssh-docs/ClassDiagram.png",
      previewImages: [
        "/ssh-docs/ClassDiagram.png", 
      ],
      fileType: 'image'
    },
    { 
      title: "Architecture Diagram", 
      description: "High-level system architecture diagram showing the relationship between frontend, backend, and data pipeline components", 
      filename: "/ssh-docs/ArchitectureDiagram.png",
      previewImages: [
        "/ssh-docs/ArchitectureDiagram.png", 
      ],
      fileType: 'image'
    },
    { 
      title: "File Organization & Project Structure", 
      description: "Detailed documentation of our codebase organization, file structure, and component hierarchy", 
      filename: "/ssh-docs/FileStructure.png",
      previewImages: [
        "/ssh-docs/FileOrganizationDiagram.jpg", 
      ],
      fileType: 'image'
    }
  ];

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
          SCU Schedule Helper
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CalendarToday sx={{ fontSize: 16, color: '#6b7280' }} />
            <Typography variant="body2" sx={{ color: '#6b7280', fontWeight: 400 }}>
              August 2024 - Present
            </Typography>
          </Box>
          <Box sx={{ 
            width: 1, 
            height: 1, 
            bgcolor: '#6b7280', 
            borderRadius: '50%' 
          }} />
          <Typography variant="body2" sx={{ color: '#6b7280', fontWeight: 400 }}>
            Chrome Extension
          </Typography>
        </Box>

        <Typography variant="h6" sx={{ 
          color: '#9ca3af', 
          lineHeight: 1.7, 
          mb: 6,
          maxWidth: '700px',
          fontWeight: 400
        }}>
          SCU Schedule Helper is a comprehensive Chrome extension designed to streamline the course registration process at Santa Clara University. 
          The extension integrates directly into the Workday system, providing students with enhanced tools for course discovery, scheduling, and academic planning.
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
            href="https://github.com/mattyHerzig/SCU-Schedule-Helper" 
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
            href="https://chromewebstore.google.com/detail/scu-schedule-helper/feinilelhamnodbmhjhacnajbbhapdhj?hl=en" 
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
            Chrome Store
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
                  <Extension sx={{ color: '#9ca3af', fontSize: 20 }} />
                </Box>
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 400 }}>
                  Workday Integration
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, fontWeight: 400 }}>
                Seamless integration with SCU's Workday system, providing course and professor query capabilities directly within the registration interface.
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
                  <Psychology sx={{ color: '#9ca3af', fontSize: 20 }} />
                </Box>
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 400 }}>
                  AI Academic Advisor
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, fontWeight: 400 }}>
                Intelligent AI advisor that provides personalized course recommendations and academic guidance based on user preferences and degree requirements.
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
                  <Group sx={{ color: '#9ca3af', fontSize: 20 }} />
                </Box>
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 400 }}>
                  Friend Network
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, fontWeight: 400 }}>
                Social features allowing students to connect with friends, share course schedules, and coordinate class registrations together.
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
                <Extension sx={{ color: '#9ca3af', mr: 2, fontSize: 20 }} />
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 400 }}>
                  Chrome Extension Architecture
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, fontWeight: 400 }}>
                Built a robust Chrome extension using Manifest V3 with content scripts that inject into Workday pages, 
                providing seamless integration without disrupting the existing user experience.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Code sx={{ color: '#9ca3af', mr: 2, fontSize: 20 }} />
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 400 }}>
                  Next.js Popup Interface
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, fontWeight: 400 }}>
                Developed a modern, responsive popup interface using Next.js and Material UI, providing an intuitive 
                user experience for course search, filtering, and schedule management.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Storage sx={{ color: '#9ca3af', mr: 2, fontSize: 20 }} />
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 400 }}>
                  Backend Services
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, fontWeight: 400 }}>
                Implemented Firebase backend services for user authentication, data persistence, and real-time 
                synchronization of user preferences and course schedules.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Psychology sx={{ color: '#9ca3af', mr: 2, fontSize: 20 }} />
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 400 }}>
                  AI Integration
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, fontWeight: 400 }}>
                Integrated AI services for course recommendations and academic advising, analyzing user preferences 
                and degree requirements to provide personalized guidance.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ borderColor: '#374151', mb: 10 }} />

      {/* Project Management */}
      <Box sx={{ mb: 10 }}>
        <Typography variant="h3" sx={{ 
          fontWeight: 300, 
          color: 'white',
          mb: 6,
          letterSpacing: '-0.02em'
        }}>
          Project Management & Growth
        </Typography>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Group sx={{ color: '#9ca3af', mr: 2, fontSize: 20 }} />
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 400 }}>
                  Team Leadership
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, fontWeight: 400 }}>
                Led a team of developers using Jira for project management, coordinating feature development, 
                bug fixes, and user feedback integration. Managed sprints and ensured timely delivery of updates.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <TrendingUp sx={{ color: '#9ca3af', mr: 2, fontSize: 20 }} />
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 400 }}>
                  Marketing & User Growth
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#9ca3af', lineHeight: 1.6, fontWeight: 400 }}>
                Implemented automated marketing campaigns that increased user base by 60%, utilizing email 
                marketing, social media promotion, and word-of-mouth strategies to drive adoption.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ borderColor: '#374151', mb: 10 }} />

      {/* Documentation Section */}
      <Box sx={{ mb: 10 }}>
        <Typography variant="h3" sx={{ 
          fontWeight: 300, 
          color: 'white',
          mb: 6,
          letterSpacing: '-0.02em'
        }}>
          Documentation & Architecture
        </Typography>
        <Box sx={{ 
          borderBottom: 1, 
          borderColor: '#374151', 
          mb: 6 
        }}>
          <Tabs 
            value={tabValue} 
            onChange={handleTabChange} 
            sx={{ 
              '& .MuiTab-root': { 
                color: '#6b7280',
                fontWeight: 400,
                '&.Mui-selected': { 
                  color: '#ffffff',
                  fontWeight: 500
                }
              },
              '& .MuiTabs-indicator': {
                bgcolor: '#ffffff'
              }
            }}
          >
            <Tab label="Requirements" />
            <Tab label="Architecture" />
            <Tab label="Class Diagrams" />
            <Tab label="File Structure" />
          </Tabs>
        </Box>
        
        <Grid container spacing={4}>
          {documentationFiles.map((doc, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box 
                sx={{ 
                  p: 4, 
                  border: '1px solid #374151',
                  borderRadius: 2,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  '&:hover': { 
                    border: '1px solid #6b7280'
                  }
                }}
                onClick={() => handleOpenPreview(doc)}
              >
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 400, mb: 2 }}>
                  {doc.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#9ca3af', mb: 3, lineHeight: 1.6, fontWeight: 400 }}>
                  {doc.description}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Chip 
                    label={doc.fileType.toUpperCase()} 
                    size="small" 
                    sx={{ 
                      bgcolor: doc.fileType === 'pdf' ? '#1f2937' : 'transparent',
                      color: '#9ca3af',
                      border: '1px solid #374151',
                      fontWeight: 400,
                      fontSize: '0.75rem'
                    }}
                  />
                  <Typography variant="caption" sx={{ color: '#6b7280', fontWeight: 400 }}>
                    Click to preview
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
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
                Chrome Extension, Next.js, Material UI, React
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ color: 'white', fontWeight: 400, mb: 2 }}>
                Backend & Services
              </Typography>
              <Typography variant="body2" sx={{ color: '#9ca3af', fontWeight: 400 }}>
                Firebase, Workday API, AI Services
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ color: 'white', fontWeight: 400, mb: 2 }}>
                Tools & Management
              </Typography>
              <Typography variant="body2" sx={{ color: '#9ca3af', fontWeight: 400 }}>
                Jira, Git, Chrome Web Store
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Documentation Modal */}
      <Modal
        open={openModal}
        onClose={handleClosePreview}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2
        }}
      >
        <Box sx={{ 
          position: 'relative', 
          maxWidth: '90vw', 
          maxHeight: '90vh',
          bgcolor: '#111827',
          borderRadius: 2,
          p: 3,
          border: '1px solid #374151'
        }}>
          <IconButton
            onClick={handleClosePreview}
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              color: '#9ca3af',
              bgcolor: '#1f2937',
              '&:hover': { bgcolor: '#374151' }
            }}
          >
            <Close />
          </IconButton>
          
          {currentDoc && (
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ mb: 3, color: 'white', fontWeight: 400 }}>
                {currentDoc.title}
              </Typography>
              <Box sx={{ position: 'relative', maxHeight: '70vh', overflow: 'hidden' }}>
                {currentDoc.fileType === 'pdf' ? (
                  <iframe
                    src={currentDoc.filename}
                    width="100%"
                    height="600"
                    style={{ border: 'none', borderRadius: 8 }}
                  />
                ) : (
                  <Box
                    component="img"
                    src={currentDoc.previewImages[currentPreviewIndex]}
                    alt={currentDoc.title}
                    sx={{
                      maxWidth: '100%',
                      maxHeight: '70vh',
                      objectFit: 'contain',
                      borderRadius: 2
                    }}
                  />
                )}
              </Box>
              
              {currentDoc.previewImages.length > 1 && (
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 3 }}>
                  <IconButton 
                    onClick={handlePrevPreview} 
                    disabled={currentPreviewIndex === 0}
                    sx={{ 
                      color: '#9ca3af',
                      bgcolor: '#1f2937',
                      '&:hover': { bgcolor: '#374151' },
                      '&.Mui-disabled': { color: '#4b5563' }
                    }}
                  >
                    ←
                  </IconButton>
                  <Typography variant="body2" sx={{ alignSelf: 'center', color: '#9ca3af', fontWeight: 400 }}>
                    {currentPreviewIndex + 1} / {currentDoc.previewImages.length}
                  </Typography>
                  <IconButton 
                    onClick={handleNextPreview} 
                    disabled={currentPreviewIndex === currentDoc.previewImages.length - 1}
                    sx={{ 
                      color: '#9ca3af',
                      bgcolor: '#1f2937',
                      '&:hover': { bgcolor: '#374151' },
                      '&.Mui-disabled': { color: '#4b5563' }
                    }}
                  >
                    →
                  </IconButton>
                </Box>
              )}
            </Box>
          )}
        </Box>
      </Modal>
    </Container>
  );
}