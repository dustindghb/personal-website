'use client';

import { Typography, Box } from '@mui/material';

export default function SSH() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        SCU Course Registration Chrome Extension
      </Typography>

      <Typography variant="body1" paragraph>
        Course registration can be a stressful difficult experience, so we designed and developed 
        a Chrome extension for SCU course registration, featuring a course and professor query bar, 
        embedded information within Workday, customizable preferences, a friend network, and an AI 
        academic advisor.
      </Typography>

      <Typography variant="body1" paragraph>
        As part of the project, I authored a 10-page implementation plan detailing system requirements, 
        user specifications, and Figma mockups. Spearheading the frontend, I conducted seven user 
        interviews and tests. I gathered feedback that led to the addition of three new features, 
        significantly enhancing the user experience.
      </Typography>

      <Typography variant="body1" paragraph>
        I built the extension menu in next.js and was responsible for connecting the backend to the 
        frontend. I helped developed inject scripts that embedded our data into Workday.
      </Typography>

      <Typography variant="body1" paragraph>
        On the backend, I implemented a real-time chat assistant using the OpenAI Assistant API, 
        leveraging chain of thought prompting, role assignment, and multi-shot prompting techniques 
        to improve accuracy.
      </Typography>

      <Typography variant="body1" paragraph>
        Developing feedback and bug report form is necessary for any high quality service so I 
        integrated one into the extension, helping accommodate our 50+ user base.
      </Typography>
    </Box>
  );
}