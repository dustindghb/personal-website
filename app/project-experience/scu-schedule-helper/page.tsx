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

Collaborated on a team of 3 and have been working on it for over a year. Built using modern web technologies including Chrome Extension Manifest V3, Next.js, and AWS Lambda, demonstrating full-stack development capabilities with seamless integration into existing university systems.`;

  const bulletPoints = [
    "Accomplished 400+ active users as measured by user registration metrics by building Chrome extension with professor/course ratings and automated Google Calendar scheduling",
    "Faced challenge of low user adoption, took action by implementing automated email workflow using N8N and AWS SES, led to 40% increase in user adoption",
    "Accomplished seamless integration with university systems by developing Workday injection scripts and Next.js popup interface",
    "Faced challenge of making rating colors accessible to colorblind users, took action by implementing feedback form and modifying color schemes based on user feedback, led to improved accessibility",
    "Faced challenge of managing user data securely, took action by building RESTful API with JWT authentication using AWS Lambda functions, led to zero security incidents",
    "Achieved full software development lifecycle documentation by executing requirements documentation, Figma prototypes, UML diagrams, user testing and interviews, Chrome Web Store publication, and automated testing pipelines"
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
