'use client';

import { useState } from 'react';
import { Box, Typography, Divider, Grid, Link, Tabs, Tab, Paper, IconButton, Modal } from '@mui/material';
import { Code, Storage, Extension, OpenInNew, School, Close, ArrowBack, ArrowForward} from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';

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
    <Box sx={{ maxWidth: '1000px', margin: '0 auto', padding: '24px', bgcolor: '#383838', color: 'white', minHeight: '100vh' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h3" gutterBottom sx={{ mb: 0 }}>
          SCU Schedule Helper
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Link 
            href="https://github.com/mattyHerzig/SCU-Schedule-Helper" 
            target="_blank" 
            rel="noopener noreferrer" 
            sx={{ color: 'white', display: 'flex', alignItems: 'center' }}
          >
            <GitHubIcon fontSize="small" sx={{ mr: 0.5 }} />
            <Typography variant="body2">GitHub</Typography>
          </Link>
          <Link 
            href="https://chromewebstore.google.com/detail/scu-schedule-helper/feinilelhamnodbmhjhacnajbbhapdhj?hl=en" 
            target="_blank" 
            rel="noopener noreferrer" 
            sx={{ color: 'white', display: 'flex', alignItems: 'center' }}
          >
            <Typography variant="body2" sx={{ mr: 0.5 }}>View on Chrome Web Store</Typography>
            <OpenInNew fontSize="small" />
          </Link>
        </Box>
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
          {/* Overview Section */}
          <Box sx={{ my: 4 }}>
            <Typography variant="h5" gutterBottom>
              Overview
            </Typography>
            <Typography variant="body1" paragraph>
              The SCU Schedule Helper is a Chrome extension designed to improve the course registration experience for Santa Clara University students.
              Serving over 500 users, this extension enhances Workday&apos;s native interface by embedding critical course information,
              enabling social features, and providing AI-powered academic guidance.
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
                src="https://www.youtube.com/embed/h4sAElkG5zQ" 
                title="SCU Schedule Helper Demo"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </Box>
          </Box>

          <Divider sx={{ bgcolor: 'rgba(255,255,255,0.12)' }} />

          {/* Key Features Section */}
          <Box sx={{ my: 4 }}>
            <Typography variant="h5" gutterBottom>
              Key Features
            </Typography>
            <Typography variant="body1" paragraph>
              The SCU Schedule Helper enhances the course registration experience with several innovative features:
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6">
                    Enhanced Course Information
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Users can access detailed professor ratings, course reviews, and historical enrollment data directly within Workday&apos;s interface,
                    eliminating the need to navigate between multiple websites during registration.
                  </Typography>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6">
                    Course and Professor Query Bar
                  </Typography>
                  <Typography variant="body1" paragraph>
                    A powerful search tool that allows students to quickly find courses and professors, with filters for departments,
                    time slots, and fulfillment of specific graduation requirements.
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6">
                    Friend Network
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Students can connect with friends to see their course selections and planned schedules, facilitating easier coordination
                    for taking classes together and building study groups.
                  </Typography>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6">
                    AI Academic Advisor
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Leveraging OpenAI&apos;s Assistant API, the extension provides personalized course recommendations based on a student&apos;s major,
                    interests, and previous coursework, helping them make informed decisions about their academic path.
                  </Typography>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6">
                    Customizable Preferences
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Users can set preferences for scheduling (morning vs. evening classes), preferred professors, and course difficulty levels,
                    allowing for a tailored registration experience.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Divider sx={{ bgcolor: 'rgba(255,255,255,0.12)' }} />

          {/* How It Was Built Section */}
          <Box sx={{ my: 4 }}>
            <Typography variant="h5" gutterBottom>
              How It Was Built
            </Typography>

            <Grid container spacing={3} sx={{ mt: 2 }}>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                  <Code sx={{ mr: 1 }} />
                  <Typography variant="h6">Frontend</Typography>
                </Box>
                <Typography variant="body2">
                  • Next.js framework<br />
                  • Chrome Extension APIs<br />
                  • Material-UI components<br />
                  • Content scripts for Workday injection<br />
                  • Responsive popup design
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                  <Storage sx={{ mr: 1 }} />
                  <Typography variant="h6">Backend</Typography>
                </Box>
                <Typography variant="body2">
                  • AWS Lambda functions<br />
                  • DynamoDB for data storage<br />
                  • API Gateway for endpoints<br />
                  • Serverless architecture<br />
                  • Real-time data synchronization
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                  <School sx={{ mr: 1 }} />
                  <Typography variant="h6">Data Pipeline</Typography>
                </Box>
                <Typography variant="body2">
                  • Web scraping of SCU Bulletin<br />
                  • Automated data extraction<br />
                  • Vector embeddings for AI<br />
                  • Course information database<br />
                  • Professor rating integration
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                  <Extension sx={{ mr: 1 }} />
                  <Typography variant="h6">Chrome Extension</Typography>
                </Box>
                <Typography variant="body2">
                  • Manifest V3 implementation<br />
                  • Background service workers<br />
                  • Content script injection<br />
                  • Cross-origin communication<br />
                  • Extension lifecycle management
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <Divider sx={{ bgcolor: 'rgba(255,255,255,0.12)' }} />

          {/* Technical Implementation Details */}
          <Box sx={{ my: 4 }}>
            <Typography variant="h5" gutterBottom>
              Technical Implementation Details
            </Typography>
            <Typography variant="body1" paragraph>
              The development of the SCU Schedule Helper involved several advanced technical implementations:
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  Workday Integration
                </Typography>
                <Typography variant="body1" paragraph>
                  One of the most challenging aspects was integrating with Workday&apos;s complex DOM structure. 
                  We developed content scripts that could identify course selection pages and dynamically inject 
                  our custom UI elements without disrupting the native interface. This required creating a 
                  mutation observer to detect when Workday loads new content and respond accordingly.
                </Typography>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  AI Integration
                </Typography>
                <Typography variant="body1" paragraph>
                  The AI advisor system combines several advanced techniques including vector embeddings 
                  of course descriptions, chain-of-thought prompting to improve reasoning, and role assignment 
                  to create a consistent advisor persona. By storing course information in a vector database, 
                  we enabled semantic search capabilities that help the AI understand the relationships between 
                  different courses and make more relevant recommendations.
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <Divider sx={{ bgcolor: 'rgba(255,255,255,0.12)' }} />

          {/* My Role Section */}
          <Box sx={{ my: 4 }}>
            <Typography variant="h5" gutterBottom>
              My Role
            </Typography>
            <Typography variant="body1" paragraph>
              As a key developer on this project, I:
            </Typography>
            <ul style={{ paddingLeft: '20px' }}>
              <li>
                <Typography variant="body1" paragraph>
                  Spearheaded frontend development using Next.js for the extension&apos;s popup interface
                </Typography>
              </li>
              <li>
                <Typography variant="body1" paragraph>
                  Engineered Workday injection scripts that seamlessly integrate our data into the university&apos;s system
                </Typography>
              </li>
              <li>
                <Typography variant="body1" paragraph>
                  Authored a comprehensive 10-page implementation plan including system requirements, user specifications, and Figma mockups
                </Typography>
              </li>
              <li>
                <Typography variant="body1" paragraph>
                  Conducted seven user interviews and tests, gathering feedback that led to three new feature additions
                </Typography>
              </li>
              <li>
                <Typography variant="body1" paragraph>
                  Implemented the real-time AI academic advisor using the OpenAI Assistant API with advanced prompting techniques
                </Typography>
              </li>
              <li>
                <Typography variant="body1" paragraph>
                  Developed feedback and bug report forms to support our growing user base
                </Typography>
              </li>
              <li>
                <Typography variant="body1" paragraph>
                  Designed and executed an automated data pipeline extracting 30+ SCU Bulletin Board pages into a vector database
                </Typography>
              </li>
              <li>
                <Typography variant="body1" paragraph>
                  Optimized OpenAI Assistant API implementation through advanced prompting techniques (chain of thought, role assignment)
                </Typography>
              </li>
            </ul>
          </Box>

          <Divider sx={{ bgcolor: 'rgba(255,255,255,0.12)' }} />

          {/* Challenges and Accomplishments */}
          <Box sx={{ my: 4 }}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Typography variant="h5" gutterBottom>
                  Challenges
                </Typography>
                <Typography variant="body1">
                  Working with Workday&apos;s constantly changing interface presented significant technical hurdles, 
                  requiring resilient injection scripts. Creating a reliable data pipeline that kept course information 
                  up-to-date was challenging due to inconsistent source formats. Balancing feature richness with 
                  performance was critical for maintaining a seamless user experience within the browser extension environment.
                </Typography>
              </Grid>

              <Grid item xs={12} md={4}>
                <Typography variant="h5" gutterBottom>
                  Accomplishments
                </Typography>
                <Typography variant="body1">
                  Successfully deploying to 500+ active users within the first semester of release. 
                  Developing a comprehensive software system from requirements gathering through deployment, 
                  gaining invaluable experience with the complete development lifecycle. Creating an AI advisor 
                  that provides genuinely helpful academic guidance based on SCU-specific course requirements and offerings.
                </Typography>
              </Grid>

              <Grid item xs={12} md={4}>
                <Typography variant="h5" gutterBottom>
                  What&apos;s Next
                </Typography>
                <Typography variant="body1">
                  Expanding the friend network feature to include collaborative schedule planning. 
                  Enhancing the AI advisor with more personalized graduation path recommendations. 
                  Implementing a course waitlist notification system to alert students when spots open up. 
                  Exploring partnerships with the university to gain official access to course data.
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
            Below you&apos;ll find comprehensive documentation created during our software development class for the SCU Schedule Helper project.
            The documentation includes class diagrams, activity diagrams, architecture diagrams, file organization diagrams, and PDFs of user/system requirements.
            These artifacts were essential for our development process and demonstrate the software engineering principles applied to this project.
          </Typography>
          <Typography variant="body1" paragraph>
            You can also access our API documentation at <Link href="https://api.scu-schedule-helper.me/" target="_blank" rel="noopener noreferrer" sx={{ color: '#90caf9' }}>api.scu-schedule-helper.me</Link>.
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
                      <Typography variant="body1" sx={{ color: 'white' }}>
                        Click to preview
                      </Typography>
                    </Box>
                  </Box>
                  
                  {/* Document Info */}
                  <Box sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      {doc.title}
                    </Typography>
                    <Typography variant="body2" paragraph sx={{ mb: 3, flexGrow: 1 }}>
                      {doc.description}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {/* Preview Modal - Enhanced for both PDF and Image types */}
      <Modal
        open={openModal}
        onClose={handleClosePreview}
        aria-labelledby="document-preview-modal"
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
            <Typography variant="h6" component="h2" sx={{ color: 'white' }}>
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
            
            {/* Only show navigation arrows if there are multiple preview images */}
            {currentDoc && currentDoc.previewImages.length > 1 && (
              <>
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
              </>
            )}
          </Box>
          
          {/* Download button removed */}
        </Box>
      </Modal>
    </Box>
  );
}