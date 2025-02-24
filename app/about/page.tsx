import { Box, Typography } from '@mui/material';

export default function About() {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        About Me
      </Typography>
      <Typography variant="h6" component="h1" gutterBottom>
        Hi, my name is Dustin and I'm a third-year student at Santa Clara University pursuing a B.S. in computer science with an emphasis in software engineering, expecting to graduate in Mar 2026.
      </Typography>

      <Typography variant="h6" component="h1" gutterBottom>
        My passion for problem-solving, innovation, and creating is what led me to pursue technology and software engineering. 
        With experience in developing innovative software projects, working with diverse teams, and successfully delivering solutions,
        I am excited to apply these skills. I have experience in the front-end building websites and chrome extensions with Next.js,
        using component libraries like Material UI and Shad.CN. I have experience in the backend as well, working technologies 
        like Springboot, Redis, and AWS services, and OpenAI API. Dedicated to continuously learning, I excel in dynamic and 
        collaborative software engineering environments.
      </Typography>

    </Box>
  );
}