'use client';

import { useState } from 'react';
import { Box, Typography, Divider, Grid, Link, Tabs, Tab, Button, Paper, IconButton, Modal } from '@mui/material';
import { Code, Storage, Devices, OpenInNew, PictureAsPdf, Download, Close, ArrowBack, ArrowForward } from '@mui/icons-material';

// PDF documentation files type
type DocumentFile = {
  title: string;
  description: string;
  filename: string;
  previewImages: string[]; // Array of preview image paths
};

export default function Vira() {
  const [tabValue, setTabValue] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [currentDoc, setCurrentDoc] = useState<DocumentFile | null>(null);
  const [currentPreviewIndex, setCurrentPreviewIndex] = useState(0);

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

  // Documentation files - you'll need to replace these with your actual PDF files and preview images
  const documentationFiles: DocumentFile[] = [
    { 
      title: "Product Requirements Document", 
      description: "12-page document detailing system requirements, user specifications, and development timeline", 
      filename: "vira_requirements_document.pdf",
      previewImages: [
        "/documents/previews/vira_requirements_1.jpg",
        "/documents/previews/vira_requirements_2.jpg",
        "/documents/previews/vira_requirements_3.jpg",
      ]
    },
    { 
      title: "System Architecture", 
      description: "Class diagrams, database schema, API specifications, and integration diagrams", 
      filename: "vira_architecture.pdf",
      previewImages: [
        "/documents/previews/vira_architecture_1.jpg",
        "/documents/previews/vira_architecture_2.jpg",
      ]
    },
    { 
      title: "User Research", 
      description: "Summaries from user interviews and tests, including feature prioritization feedback", 
      filename: "vira_user_research.pdf",
      previewImages: [
        "/documents/previews/vira_user_research_1.jpg",
        "/documents/previews/vira_user_research_2.jpg",
      ]
    },
    { 
      title: "AI Implementation Guide", 
      description: "Career-specific agent design, prompt engineering strategies, and data vector storage", 
      filename: "vira_ai_implementation.pdf",
      previewImages: [
        "/documents/previews/vira_ai_implementation_1.jpg",
        "/documents/previews/vira_ai_implementation_2.jpg",
      ]
    }
  ];

  return (
    <Box sx={{ maxWidth: '1000px', margin: '0 auto', padding: '24px', bgcolor: '#383838', color: 'white', minHeight: '100vh' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h3" gutterBottom>
          Vira - Reviving Apprenticeship
        </Typography>
        <Link 
          href="https://devpost.com/software/vira-vi4umh" 
          target="_blank" 
          rel="noopener noreferrer" 
          sx={{ color: '#9fc5e8', display: 'flex', alignItems: 'center' }}
        >
          <Typography variant="body2" sx={{ mr: 0.5 }}>View on DevPost</Typography>
          <OpenInNew fontSize="small" />
        </Link>
      </Box>

      <Tabs 
        value={tabValue} 
        onChange={handleTabChange} 
        sx={{ 
          borderBottom: 1, 
          borderColor: 'divider', 
          mb: 3,
          '& .MuiTab-root': { color: 'white' },
          '& .Mui-selected': { color: 'white !important' },
          '& .MuiTabs-indicator': { backgroundColor: 'white' }
        }}
      >
        <Tab label="Project Overview" />
        <Tab label="Documentation" />
      </Tabs>

      {/* Overview Tab */}
      {tabValue === 0 && (
        <>
          {/* Inspiration Section */}
          <Box sx={{ my: 4 }}>
            <Typography variant="h5" gutterBottom>
              Inspiration
            </Typography>
            <Typography variant="body1">
              Vira aims to be a platform that reconnects masters with aspiring learners, reviving the apprenticeship where wisdom transfers through meaningful relationships,
              not just information—because true mastery has always been cultivated through the personalized guidance, tacit knowledge, and character development that only a
              dedicated mentor can provide.
            </Typography>
          </Box>

          {/* Video Demo Section */}
          <Box sx={{ my: 4 }}>
            <Typography variant="h5" gutterBottom>
              Demo Video
            </Typography>
            <Box sx={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', bgcolor: '#000' }}>
              <iframe 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                src="https://www.youtube.com/embed/iZoKzfgWEf0" 
                title="Vira Demo"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </Box>
          </Box>

          <Divider sx={{ bgcolor: 'rgba(255,255,255,0.12)' }} />

          {/* What it Does Section */}
          <Box sx={{ my: 4 }}>
            <Typography variant="h5" gutterBottom>
              What Vira Does
            </Typography>
            <Typography variant="body1" paragraph>
              Vira is a platform where mentorship is an equal opportunity for everyone regardless of their background.
            </Typography>

            <Box sx={{ mt: 2 }}>
              <Typography variant="h6">
                Work Experience Opportunities:
              </Typography>
              <Typography variant="body1" paragraph>
                Vira&apos;s gig work platform allows professionals to share side projects they would like volunteers for. 
                This not only incentivizes professionals to share their work experience, but also offers the opportunity 
                for hands on learning for users.
              </Typography>
            </Box>

            <Box sx={{ mt: 2 }}>
              <Typography variant="h6">
                Mentorship and Guidance Opportunities:
              </Typography>
              <Typography variant="body1" paragraph>
                Vira&apos;s work experience form allows professionals to share their diverse work experiences and 
                routes those experiences to career-specific agents. These agents reference that data to offer 
                guidance for users.
              </Typography>
            </Box>

            <Box sx={{ mt: 2 }}>
              <Typography variant="h6">
                Commodifies Career Information:
              </Typography>
              <Typography variant="body1" paragraph>
                Vira&apos;s student form and career mentor allow users to explore careers based off their interests 
                and personality traits, and talk with any career-specific agent.
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ bgcolor: 'rgba(255,255,255,0.12)' }} />

          {/* How We Built It Section */}
          <Box sx={{ my: 4 }}>
            <Typography variant="h5" gutterBottom>
              How We Built It
            </Typography>

            <Grid container spacing={3} sx={{ mt: 2 }}>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                  <Code sx={{ mr: 1 }} />
                  <Typography variant="h6">Frontend</Typography>
                </Box>
                <Typography variant="body2">
                  • Node.js with Next.js in TypeScript<br />
                  • Material UI component library<br />
                  • Hosted on Vercel
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                  <Storage sx={{ mr: 1 }} />
                  <Typography variant="h6">Backend & Auth</Typography>
                </Box>
                <Typography variant="body2">
                  • Node.js with routes in TypeScript<br />
                  • Google OAuth for authentication<br />
                  • API specifications in Hono
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                  <Storage sx={{ mr: 1 }} />
                  <Typography variant="h6">Cloud & Database</Typography>
                </Box>
                <Typography variant="body2">
                  • PostgreSQL database<br />
                  • Neon cloud service<br />
                  • (Free alternative to AWS/Firebase)
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                  <Devices sx={{ mr: 1 }} />
                  <Typography variant="h6">AI</Typography>
                </Box>
                <Typography variant="body2">
                  • OpenAI API Assistant<br />
                  • ChatGPT-4 reasoning model<br />
                  • Prompt engineering and vector storage<br />
                  • Career-specific agent fine-tuning
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <Divider sx={{ bgcolor: 'rgba(255,255,255,0.12)' }} />

          {/* Challenges, Accomplishments, and Next Steps */}
          <Box sx={{ my: 4 }}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Typography variant="h5" gutterBottom>
                  Challenges We Ran Into
                </Typography>
                <Typography variant="body1">
                  Architecture and flow of data was difficult to tackle. However connecting the frontend and backend 
                  was made fairly smooth with API specifications in Hono.
                </Typography>
              </Grid>

              <Grid item xs={12} md={4}>
                <Typography variant="h5" gutterBottom>
                  Accomplishments & What We Learned
                </Typography>
                <Typography variant="body1" paragraph>
                  We are proud of devising a solution that remedies a real humanitarian problem and successfully 
                  implementing it. We are proud of the thought and documentation that made production successful.
                </Typography>
                <Typography variant="body1">
                  We learned having assigned roles, documentation to refer to, architecture planned out, and 
                  outlining tech stacks are important for a good team.
                </Typography>
              </Grid>

              <Grid item xs={12} md={4}>
                <Typography variant="h5" gutterBottom>
                  What&apos;s Next for Vira
                </Typography>
                <Typography variant="body1">
                  I am planning on continuing the project, adding connect and live chat features allowing mentors and mentees
                  to stay in touch.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </>
      )}

      {/* Documentation Tab */}
      {tabValue === 1 && (
        <Box sx={{ my: 4 }}>
          <Typography variant="h5" gutterBottom>
            Project Documentation
          </Typography>
          <Typography variant="body1" paragraph>
            Below you&apos;ll find comprehensive documentation created throughout the development process of Vira.
            Click on any preview to see more images from the document or download the full PDF.
          </Typography>

          <Grid container spacing={3} sx={{ mt: 2 }}>
            {documentationFiles.map((doc, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    bgcolor: '#424242',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    overflow: 'hidden',
                    borderRadius: 2
                  }}
                >
                  {/* Preview Image */}
                  <Box 
                    sx={{ 
                      height: 220, 
                      position: 'relative',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      '&:hover': {
                        '& .preview-overlay': {
                          opacity: 1
                        }
                      }
                    }}
                    onClick={() => handleOpenPreview(doc)}
                  >
                    <Box 
                      component="img" 
                      src={doc.previewImages[0]}
                      alt={`Preview of ${doc.title}`}
                      sx={{ 
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top'
                      }}
                    />
                    <Box 
                      className="preview-overlay"
                      sx={{ 
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        opacity: 0,
                        transition: 'opacity 0.2s',
                        color: 'white',
                      }}
                    >
                      <Typography variant="body1">
                        Click to preview ({doc.previewImages.length} pages)
                      </Typography>
                    </Box>
                  </Box>
                  
                  {/* Document Info */}
                  <Box sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <PictureAsPdf sx={{ mr: 2, color: '#ff5252' }} />
                      <Typography variant="h6">{doc.title}</Typography>
                    </Box>
                    <Typography variant="body2" paragraph sx={{ mb: 3, flexGrow: 1 }}>
                      {doc.description}
                    </Typography>
                    <Button
                      variant="outlined"
                      startIcon={<Download />}
                      href={`/documents/${doc.filename}`}
                      target="_blank"
                      sx={{
                        alignSelf: 'flex-start',
                        color: 'white',
                        borderColor: 'white',
                        '&:hover': {
                          borderColor: 'white',
                          bgcolor: 'rgba(255, 255, 255, 0.08)'
                        }
                      }}
                    >
                      Download PDF
                    </Button>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 4, p: 3, bgcolor: 'rgba(0,0,0,0.2)', borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
              About the Documentation
            </Typography>
            <Typography variant="body1" paragraph>
              These documents represent the complete development lifecycle for Vira. The Product Requirements Document
              outlines our initial vision and specifications, the System Architecture showcases our technical design,
              the User Research documents our iterative user-centered design process, and the AI Implementation Guide
              provides details on how we built our career-specific agents.
            </Typography>
            <Typography variant="body1">
              Together, these documents demonstrate our comprehensive approach to developing Vira that balances 
              technical considerations with user needs. The documentation helped our team stay aligned throughout 
              the development process and serves as a valuable reference for future enhancements and feature additions.
            </Typography>
          </Box>
        </Box>
      )}

      {/* PDF Preview Modal */}
      <Modal
        open={openModal}
        onClose={handleClosePreview}
        aria-labelledby="pdf-preview-modal"
      >
        <Box sx={{ 
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '90%', sm: '80%', md: '70%' },
          maxHeight: '90vh',
          bgcolor: '#424242',
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
          outline: 'none',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" component="h2">
              {currentDoc?.title} - Preview {currentPreviewIndex + 1}/{currentDoc?.previewImages.length}
            </Typography>
            <IconButton onClick={handleClosePreview} sx={{ color: 'white' }}>
              <Close />
            </IconButton>
          </Box>
          
          <Box sx={{ 
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '70vh',
            bgcolor: '#333',
            borderRadius: 1,
            overflow: 'hidden'
          }}>
            {currentDoc && (
              <Box 
                component="img"
                src={currentDoc.previewImages[currentPreviewIndex]}
                alt={`Preview page ${currentPreviewIndex + 1}`}
                sx={{ 
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain'
                }}
              />
            )}
            
            {/* Navigation arrows */}
            <IconButton 
              onClick={handlePrevPreview}
              disabled={currentPreviewIndex === 0}
              sx={{ 
                position: 'absolute', 
                left: 10, 
                color: 'white',
                bgcolor: 'rgba(0,0,0,0.3)',
                '&:hover': { bgcolor: 'rgba(0,0,0,0.5)' },
                '&.Mui-disabled': { color: 'rgba(255,255,255,0.3)' }
              }}
            >
              <ArrowBack />
            </IconButton>
            
            <IconButton 
              onClick={handleNextPreview}
              disabled={!currentDoc || currentPreviewIndex === currentDoc.previewImages.length - 1}
              sx={{ 
                position: 'absolute', 
                right: 10, 
                color: 'white',
                bgcolor: 'rgba(0,0,0,0.3)',
                '&:hover': { bgcolor: 'rgba(0,0,0,0.5)' },
                '&.Mui-disabled': { color: 'rgba(255,255,255,0.3)' }
              }}
            >
              <ArrowForward />
            </IconButton>
          </Box>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Button
              variant="contained"
              startIcon={<Download />}
              href={currentDoc ? `/documents/${currentDoc.filename}` : '#'}
              target="_blank"
              sx={{
                bgcolor: 'white',
                color: '#333',
                '&:hover': {
                  bgcolor: '#e0e0e0',
                }
              }}
            >
              Download Full PDF
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}