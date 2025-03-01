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
          The project focuses on creating an elegant, responsive UI with advanced TypeScript patterns while laying the groundwork 
          for future AI-powered enhancements.
        </Typography>
      </Box>

      <Divider sx={{ bgcolor: 'rgba(255,255,255,0.12)' }} />

      {/* What it Does Section */}
      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Core Features
        </Typography>
        <Typography variant="body1" paragraph>
          This portfolio website combines advanced frontend technologies to create a unique user experience.
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
          <Grid item xs={12} sm={6} md={4}>
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

          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
              <Terminal sx={{ mr: 1 }} />
              <Typography variant="h6">Interactive Elements</Typography>
            </Box>
            <Typography variant="body2">
              • Terminal-like command interface<br />
              • Filtered project showcase<br />
              • Blog with markdown support<br />
              • Real-time state management<br />
              • Custom animation components
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
              <Storage sx={{ mr: 1 }} />
              <Typography variant="h6">Data Management</Typography>
            </Box>
            <Typography variant="body2">
              • TypeScript type-safe data handling<br />
              • Structured content organization<br />
              • State persistence with local storage<br />
              • Optimized asset loading<br />
              • Dynamic content rendering
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
              Material-UI Implementation
            </Typography>
            <Typography variant="body1" paragraph>
              The UI leverages Material-UI's theming capabilities with custom palette configurations, responsive 
              breakpoints, and typography overrides. Component composition follows best practices with styled components, 
              sx prop patterns, and theme-aware styling to maintain consistency across the application.
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
              Creating a type-safe architecture throughout the application presented significant challenges,
              particularly in handling complex state management while maintaining a smooth user experience.
              Designing a responsive UI that works across all devices while keeping the unique aesthetic
              of the portfolio required careful planning and implementation of custom breakpoints and
              conditional rendering strategies.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h5" gutterBottom>
              Learning Outcomes
            </Typography>
            <Typography variant="body1">
              This project provided deep experience with Material-UI capabilities including advanced theming and component creation. 
              The TypeScript implementation enhanced understanding of type-safe event handling, generic component patterns, and 
              complex type inference. Working with Next.js delivered practical experience with server components, client components, 
              and optimized rendering strategies.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h5" gutterBottom>
              What&apos;s Next
            </Typography>
            <Typography variant="body1">
              The most exciting future plan is integrating an AI assistant built with RAG (Retrieval Augmented Generation) 
              and Ollama. This custom agent will be able to reference information about me and my work, allowing visitors 
              to have natural language conversations about my projects, skills, and experience. Additional plans include 
              implementing more advanced TypeScript patterns for even greater type safety, and creating interactive visualizations 
              of the connections between different projects and skills in the portfolio.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}