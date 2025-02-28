import { Box, Typography, Divider, Grid, Link } from '@mui/material';
import { Code, Storage, Devices, OpenInNew, LockOutlined } from '@mui/icons-material';

export default function Vigenere() {
  return (
    <Box sx={{ maxWidth: '1000px', margin: '0 auto', padding: '24px', bgcolor: '#383838', color: 'white', minHeight: '100vh' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h3" gutterBottom>
          Vigenere Cypher Webevent
        </Typography>
        {/* You can add a link to your project here if available */}
        <Link 
          href="https://tt-webevent.web.app/home" 
          target="_blank" 
          rel="noopener noreferrer" 
          sx={{ color: '#9fc5e8', display: 'flex', alignItems: 'center' }}
        >
          <Typography variant="body2" sx={{ mr: 0.5 }}>View Project</Typography>
          <OpenInNew fontSize="small" />
        </Link>
      </Box>

      {/* Inspiration Section */}
      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Overview
        </Typography>
        <Typography variant="body1">
          Vigenere Cypher Webevent is a coded webapp featuring productivity resources and an interactive puzzle competition.
          Built with React and NextJs, this project increased fraternity engagement by 15% through its innovative approach to
          cryptography challenges. The platform implements a comprehensive Google authentication system, data retrieval, and
          publishing mechanisms powered by Firebase.
        </Typography>
      </Box>

      <Divider sx={{ bgcolor: 'rgba(255,255,255,0.12)' }} />

      {/* What it Does Section */}
      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          What It Does
        </Typography>
        <Typography variant="body1" paragraph>
          This Vigenere Cypher Webevent was a toy website where I could share thing I had learned from productivity resources and a Vigenere Cypher I had made.
        </Typography>

        <Box sx={{ mt: 2 }}>
          <Typography variant="h6">
            Interactive Puzzle Competition:
          </Typography>
          <Typography variant="body1" paragraph>
            I made a Vigenere Cypher that would progressively get harder as you solved each puzzle. The puzzles were based on productivity resources I had learned.
          </Typography>
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography variant="h6">
            Productivity Resources:
          </Typography>
          <Typography variant="body1" paragraph>
            I shared productivity resources that I had learned from literature such as Deep Work by Cal Newport, Atomic Habits by James Clear, and Feel Good productivity by Ali Abdaaal
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ bgcolor: 'rgba(255,255,255,0.12)' }} />

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
              • React framework<br />
              • Next.js for server-side rendering<br />
              • Responsive design principles<br />
              • Custom CSS and animations
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
              <Storage sx={{ mr: 1 }} />
              <Typography variant="h6">Backend & Auth</Typography>
            </Box>
            <Typography variant="body2">
              • Google authentication system<br />
              • User profile management<br />
              • Secure data access controls<br />
              • Real-time notifications
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
              <Storage sx={{ mr: 1 }} />
              <Typography variant="h6">Database</Typography>
            </Box>
            <Typography variant="body2">
              • Firebase Realtime Database<br />
              • Data retrieval system<br />
              • Publishing system<br />
              • User progress tracking
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
              <LockOutlined sx={{ mr: 1 }} />
              <Typography variant="h6">Cryptography</Typography>
            </Box>
            <Typography variant="body2">
              • Vigenere cipher implementation<br />
              • Progressive puzzle difficulty<br />
              • Secure answer validation<br />
              • Leaderboard system
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
              A lot of time and patience was spent in the creative process of creating a viginere cypher. Researching productivity resources and how to implement them in a user friendly way was another challenge.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h5" gutterBottom>
              Accomplishments
            </Typography>
            <Typography variant="body1">
              It was interesting learning what viginere cyphers were, making my own, and then materializing it into a website. I learned how to route pages with next.js, how to make
              forms route to a database in firebase, how to implement authentication with firebase, and how to host on firebase.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}