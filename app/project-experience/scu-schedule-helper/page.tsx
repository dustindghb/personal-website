'use client';

import React from 'react';
import ProjectTemplate from '../../../components/ProjectTemplate';

export default function SCUScheduleHelper() {
  const media = [
    {
      src: "https://www.youtube.com/watch?v=h4sAElkG5zQ",
      caption: "SCU Schedule Helper Demo Video - Complete walkthrough of the Chrome extension features and functionality",
      type: "youtube" as const,
      alt: "SCU Schedule Helper Demo Video"
    },
    {
      src: "/ssh-docs/RequirementsPreview1.png",
      caption: "User & System Requirements Documentation - Comprehensive documentation of user stories and system specifications",
      type: "image" as const,
      alt: "Requirements Documentation Preview"
    },
    {
      src: "/ssh-docs/ArchitectureDiagram.png",
      caption: "System Architecture Diagram - High-level architecture showing frontend, backend, and data pipeline components",
      type: "image" as const,
      alt: "Architecture Diagram"
    },
    {
      src: "/ssh-docs/ClassDiagram.png",
      caption: "UML Class Diagram - System components and their relationships",
      type: "image" as const,
      alt: "Class Diagram"
    },
    {
      src: "/ssh-docs/FileOrganizationDiagram.jpg",
      caption: "File Organization & Project Structure - Detailed codebase organization and component hierarchy",
      type: "image" as const,
      alt: "File Organization Diagram"
    }
  ];

  const overview = `Course registration can be a stressful difficult experience, so we designed and developed a Chrome extension for SCU course registration, featuring a course and professor query bar, embedded information within Workday, customizable preferences, and a friend network.

Collaborated on a team of 3 and have been working on it for over a year. Built using modern web technologies including Chrome Extension Manifest V3, Next.js, and AWS Lambda, demonstrating full-stack development capabilities with seamless integration into existing university systems. Successfully deployed to the Chrome Web Store with 400+ active users.`;

  const bulletPoints = [
    "Built Chrome extension with 400+ active users, executing full SDLC including Figma prototypes, UML diagrams, user interviews, user tests, and Chrome Web Store deployment",
    "Scraped and aggregated data from 60,000+ SCU course evaluation PDFs and RateMyProfessor to provide comprehensive instructor insights",
    "Developed professor/course rating search page, preference settings, friend network, Google Calendar export, Workday registration page injection with ratings and Next.js interface",
    "Built RESTful API with CRUD operations using AWS Lambda functions for backend data management",
    "Increased adoption by 50% through automated newsletters using N8N and AWS SES and campus posters"
  ];

  return (
    <ProjectTemplate
      title="SCU Schedule Helper"
      media={media}
      overview={overview}
      bulletPoints={bulletPoints}
    />
  );
}
