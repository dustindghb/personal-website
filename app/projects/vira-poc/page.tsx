import { Box, Typography, Divider, Grid, Link } from '@mui/material';
import { Code, Storage, Devices, OpenInNew } from '@mui/icons-material';

export default function Vira() {
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

      <Divider />

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

      <Divider />

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
              Vira is looking to launch to the public, but before that improving the quality of forms, 
              quality of prompt engineering, quality of security, and quality of usability is next.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}