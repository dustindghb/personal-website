'use client';

import React from 'react';
import ProjectTemplate from '../../../components/ProjectTemplate';

interface MediaItem {
  src: string;
  caption: string;
  type: 'image' | 'video' | 'youtube';
  alt?: string;
}

export default function PersonalWebsite() {
  const media: MediaItem[] = [];

  const overview = `This project was an excellent opportunity to experiment with frontend development and design, allowing me to explore modern web technologies while creating a professional portfolio. I started by creating detailed Figma wireframes to plan the user experience and visual design before diving into development.

The website features a unique terminal-style navigation system that provides an interactive way for visitors to explore my projects and experience. Built with Next.js and TypeScript, this project gave me hands-on experience with modern React patterns, responsive design, and creating engaging user interfaces that balance functionality with aesthetic appeal.`;

  const bulletPoints = [
    "Accomplished 100% design-to-development accuracy as measured by design review feedback by creating detailed Figma wireframes before development",
    "Faced challenge of creating unique user experience, took action by building interactive terminal-style navigation system, led to engaging project exploration interface",
    "Accomplished responsive design across all devices as measured by cross-browser testing by developing website using Next.js, React, and TypeScript with Material UI components",
    "Faced challenge of balancing functionality with aesthetics, took action by implementing clean minimalist design with smooth animations, led to professional portfolio presentation"
  ];

  return (
    <ProjectTemplate
      title="Personal Website"
      media={media}
      overview={overview}
      bulletPoints={bulletPoints}
    />
  );
}