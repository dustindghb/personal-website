import { Box, Typography } from '@mui/material';

export default function Vira() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Vira - Democratizing Mentorship
      </Typography>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Inspiration
      </Typography>
      <Typography variant="body1" paragraph>
        A lot of my team shared the sentiment of feeling lost career-wise at some point in life and 
        wished there was some kind of figure for guidance or mentorship or opportunities to do 
        interesting work. Mentorship is a valuable experience not everyone can have. Likewise hands 
        on experience in specific fields is as well.
      </Typography>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        What it does
      </Typography>
      <Typography variant="body1" paragraph>
        Vira is a platform where mentorship is an equal opportunity for everyone regardless of their 
        background. Through our gig work platform, professionals can share side projects they would 
        like volunteers for. This not only incentivizes professionals to share their work experience, 
        but also offers the opportunity for hands on learning for users.
      </Typography>

      <Typography variant="body1" paragraph>
        Our work experience form allows professionals to share their diverse work experiences and 
        routes those experiences to career-specific agents. These agents reference that data to offer 
        guidance for users. Additionally, Vira&apos;s student form and career mentor allow users to explore 
        careers based off their interests and personality traits, and talk with any career-specific agent.
      </Typography>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Technical Implementation
      </Typography>
      <Typography variant="body1" paragraph>
        The frontend was built on Node.js with Next.js in Typescript with Material UI&apos;s component 
        library, hosted on Vercel. For the backend, we implemented Node.js with routes written in 
        Typescript and built authentication using Google OAuth. Our database infrastructure utilizes 
        PostgreSQL with Neon as our cloud service provider.
      </Typography>

      <Typography variant="body1" paragraph>
        The AI assistants were built using OpenAI API Assistant with the ChatGPT-4 reasoning model. 
        Through prompt engineering and vector storage, we fine-tuned agents to be career-specific 
        with reference to career-related forms from professionals.
      </Typography>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Development Journey
      </Typography>
      <Typography variant="body1" paragraph>
        While architecture and data flow presented significant challenges, we successfully streamlined 
        frontend-backend integration using API specifications in Hono. We&apos;re particularly proud of 
        developing a solution that addresses a real humanitarian problem and implementing it 
        successfully. Through this project, we learned the importance of having assigned roles, 
        comprehensive documentation, planned architecture, and clearly outlined tech stacks for 
        effective team collaboration.
      </Typography>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Future Development
      </Typography>
      <Typography variant="body1" paragraph>
        Before launching to the public, Vira is focusing on enhancing the quality of forms, improving 
        prompt engineering, strengthening security measures, and refining overall usability to ensure 
        the best possible experience for our users.
      </Typography>
    </Box>
  );
}