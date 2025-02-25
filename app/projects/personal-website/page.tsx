'use client';

import { Typography, Box } from '@mui/material';

export default function PersonalWebsite() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        This Website!
      </Typography>

      <Typography variant="body1" paragraph>
        I am developing a sophisticated personal portfolio website that goes beyond traditional 
        implementations by incorporating TypeScript, Material-UI, and an integrated AI assistant. 
        This project represents a complete rebuild from the ground up using Next.js and TypeScript, 
        focusing on creating a more robust and feature-rich portfolio platform.
      </Typography>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Core Features and Implementation
      </Typography>
      <Typography variant="body1" paragraph>
        The website will showcase advanced Material-UI implementations including custom theme 
        development, responsive navigation with dynamic routing, a filtered portfolio project 
        showcase, an interactive terminal-like command interface, and a blog section with markdown 
        support. These features will be built using sophisticated TypeScript constructs, including 
        generic types for reusable components, union types for state management, interface 
        declarations for component props, type guards for runtime assertions, and utility types 
        for component configuration management.
      </Typography>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        AI Assistant Integration
      </Typography>
      <Typography variant="body1" paragraph>
        A standout feature of this project is the custom AI assistant built using RAG (Retrieval 
        Augmented Generation) and Ollama. The implementation begins with creating a comprehensive 
        knowledge base through structured personal information, portfolio text embeddings, and 
        efficient vector storage. The RAG system will include a sophisticated retrieval system 
        for context management, carefully crafted prompt templates, and a streamlined response 
        generation pipeline.
      </Typography>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Frontend Development
      </Typography>
      <Typography variant="body1" paragraph>
        The frontend integration focuses on creating a Material-UI-based chat interface with 
        real-time response streaming and comprehensive chat state management. This involves 
        addressing TypeScript-specific challenges such as AI response type definitions, 
        asynchronous execution handling, properly typed error boundaries, and the development 
        of generic chat components that accommodate various message types.
      </Typography>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Technical Learning Objectives
      </Typography>
      <Typography variant="body1" paragraph>
        This project serves as a deep dive into Material-UI capabilities, including advanced 
        theming, custom component creation, responsive design patterns, and animation systems. 
        The TypeScript integration encompasses type-safe event handling, generic component 
        patterns, complex type inference, and module augmentation. Through the AI integration, 
        I will gain hands-on experience with RAG architecture implementation, local model 
        deployment via Ollama, prompt engineering, and vector database management.
      </Typography>
    </Box>
  );
}