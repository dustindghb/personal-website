import { Box, Typography, Divider, Grid, Link} from '@mui/material';
import { GitHub} from '@mui/icons-material';

export default function ProbabilityApp() {
  return (
    <Box sx={{ maxWidth: '1000px', margin: '0 auto', padding: '24px', bgcolor: '#383838', color: 'white', minHeight: '100vh' }}>
      
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h3" gutterBottom sx={{ mb: 0 }}>
          Dice Animations App
        </Typography>
        <Link 
          href="https://github.com/redeclaw/h4h" 
          target="_blank" 
          rel="noopener noreferrer" 
          sx={{ color: 'white', display: 'flex', alignItems: 'center' }}
        >
          <GitHub fontSize="small" sx={{ mr: 0.5 }} />
          <Typography variant="body2">GitHub</Typography>
        </Link>
      </Box>
      {/* Overview Section */}
      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Overview
        </Typography>
        <Typography variant="body1">
          This was an amateur project for my first hackathon. It is an interactive educational app developed in Unity with C# scripts that helps users understand probability concepts 
          through realistic simulations of coins and dice. The app makes abstract probability concepts tangible and intuitive 
          through interactive visualizations.
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
            src="https://www.youtube.com/embed/XddifYvAK2Q" 
            title="Probability App Demo"
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
          What It Does
        </Typography>
        <Typography variant="body1" paragraph>
          The Probability Education App transforms abstract mathematical concepts into interactive, visual learning experiences.
        </Typography>

        <Box sx={{ mt: 2 }}>
          <Typography variant="h6">
            Interactive Simulations:
          </Typography>
          <Typography variant="body1" paragraph>
            Users can flip coins and roll dice with realistic physics, observing real-time probability distributions
            as they experiment with different scenarios and sample sizes.
          </Typography>
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography variant="h6">
            Visual Learning Tools:
          </Typography>
          <Typography variant="body1" paragraph>
            The app displays dynamic graphs and visual representations that update in real-time as users perform
            simulations, making statistical concepts more intuitive and accessible.
          </Typography>
        </Box>

      </Box>

      <Divider sx={{ bgcolor: 'rgba(255,255,255,0.12)' }} />

      <Box sx={{ my: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" gutterBottom>
              Challenges
            </Typography>
            <Typography variant="body1">
              Creating realistic physics-based simulations of coins and dice that maintained both accuracy and performance
              was challenging. Designing intuitive visualizations that effectively communicated statistical concepts
              without overwhelming users required multiple iterations and user testing.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h5" gutterBottom>
              Accomplishments
            </Typography>
            <Typography variant="body1">
              Successfully developed an educational app that makes abstract probability concepts accessible and engaging.
              Deployed to Itch.io where it attracted over 80 views on the demo. Created intuitive simulations that accurately
              represent statistical principles while maintaining an engaging user experience.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}