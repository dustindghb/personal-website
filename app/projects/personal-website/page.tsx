import { Box, Typography, Divider, Grid, Link } from '@mui/material';
import { Code, Storage, OpenInNew, Terminal, Psychology } from '@mui/icons-material';

export default function PortfolioWebsite() {
  return (
    <Box sx={{ maxWidth: '1000px', margin: '0 auto', padding: '24px', bgcolor: '#383838', color: 'white', minHeight: '100vh' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h3" gutterBottom>
          This Website! - Advanced Portfolio
        </Typography>
        {/* You can add a GitHub or live site link here */}
        <Link 
          href="#" 
          target="_blank" 
          rel="noopener noreferrer" 
          sx={{ color: '#9fc5e8', display: 'flex', alignItems: 'center' }}
        >
          <Typography variant="body2" sx={{ mr: 0.5 }}>View on GitHub</Typography>
          <OpenInNew fontSize="small" />
        </Link>
      </Box>

      {/* Overview Section */}
      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Overview
        </Typography>
        <Typography variant="body1">
          This portfolio website represents a sophisticated rebuild from the ground up, leveraging the power of Next.js, 
          TypeScript, and Material-UI to create a feature-rich platform that goes beyond traditional portfolio implementations. 
          What sets this project apart is the integration of a custom AI assistant built with RAG (Retrieval Augmented Generation) 
          and Ollama, providing visitors with an interactive way to explore my work and experience.
        </Typography>
      </Box>

      <Divider sx={{ bgcolor: 'rgba(255,255,255,0.12)' }} />

      {/* What it Does Section */}
      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Core Features
        </Typography>
        <Typography variant="body1" paragraph>
          This portfolio website combines advanced frontend technologies with AI capabilities to create a unique user experience.
        </Typography>

        <Box sx={{ mt: 2 }}>
          <Typography variant="h6">
            Advanced UI Implementation:
          </Typography>
          <Typography variant="body1" paragraph>
            The site showcases sophisticated Material-UI implementations including custom theme development, responsive navigation 
            with dynamic routing, a filtered portfolio project showcase, and an interactive terminal-like command interface 
            that allows visitors to navigate the site in a unique way.
          </Typography>
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography variant="h6">
            AI Assistant Integration:
          </Typography>
          <Typography variant="body1" paragraph>
            A standout feature is the custom AI assistant built using RAG and Ollama. Visitors can interact with this 
            assistant to learn more about my projects, skills, and experiences through natural language conversations, 
            with the AI retrieving information from a comprehensive knowledge base of portfolio content.
          </Typography>
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography variant="h6">
            TypeScript-Powered Architecture:
          </Typography>
          <Typography variant="body1" paragraph>
            The entire codebase is built with sophisticated TypeScript constructs, including generic types for reusable 
            components, union types for state management, interface declarations for component props, type guards for 
            runtime assertions, and utility types for component configuration.
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ bgcolor: 'rgba(255,255,255,0.12)' }} />

      {/* How We Built It Section */}
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
              • TypeScript implementation<br />
              • Material-UI component library<br />
              • Custom theme development<br />
              • Responsive design patterns
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
              <Psychology sx={{ mr: 1 }} />
              <Typography variant="h6">AI Integration</Typography>
            </Box>
            <Typography variant="body2">
              • RAG architecture<br />
              • Ollama for local model hosting<br />
              • Vector embeddings for content<br />
              • Custom prompt engineering<br />
              • Real-time response streaming
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
              <Terminal sx={{ mr: 1 }} />
              <Typography variant="h6">Interactive Elements</Typography>
            </Box>
            <Typography variant="body2">
              • Terminal-like command interface<br />
              • Material-UI chat component<br />
              • Filtered project showcase<br />
              • Blog with markdown support<br />
              • Real-time state management
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
              <Storage sx={{ mr: 1 }} />
              <Typography variant="h6">Data Management</Typography>
            </Box>
            <Typography variant="body2">
              • Vector database for AI retrieval<br />
              • TypeScript type-safe data handling<br />
              • Structured knowledge base<br />
              • Chat state persistence<br />
              • Context-aware information retrieval
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ bgcolor: 'rgba(255,255,255,0.12)' }} />

      {/* Technical Implementation Details */}
      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Technical Implementation
        </Typography>
        <Typography variant="body1" paragraph>
          The development of this portfolio website involved several advanced technical implementations:
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              TypeScript Architecture
            </Typography>
            <Typography variant="body1" paragraph>
              The codebase employs sophisticated TypeScript patterns including generic components for reusability,
              union types for comprehensive state management, and utility types for configuration management.
              Type guards ensure runtime type safety, while interface declarations create clearly defined component
              contracts.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              RAG System Implementation
            </Typography>
            <Typography variant="body1" paragraph>
              The AI assistant is built on a custom RAG system that includes a comprehensive knowledge base through
              structured personal information and portfolio text embeddings. The system features sophisticated
              retrieval mechanisms for context management, carefully crafted prompt templates, and a streamlined
              response generation pipeline.
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
              Challenges
            </Typography>
            <Typography variant="body1">
              Integrating the AI assistant with type safety throughout the application presented significant challenges, 
              particularly in handling asynchronous AI responses while maintaining a smooth user experience. Creating a 
              comprehensive knowledge base for the RAG system required careful organization of portfolio content and 
              optimization of vector embeddings for accurate retrieval.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h5" gutterBottom>
              Learning Outcomes
            </Typography>
            <Typography variant="body1">
              This project provided deep experience with Material-UI capabilities including advanced theming and component creation. 
              The TypeScript implementation enhanced understanding of type-safe event handling, generic component patterns, and 
              complex type inference. The AI integration delivered practical experience with RAG architecture, local model deployment, 
              prompt engineering, and vector database management.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h5" gutterBottom>
              What&apos;s Next
            </Typography>
            <Typography variant="body1">
              Future plans include enhancing the AI assistant with multi-modal capabilities to understand and generate visual content, 
              implementing more advanced TypeScript patterns for even greater type safety, and creating interactive visualizations 
              of the connections between different projects and skills in the portfolio.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}