'use client';

import React from 'react';
import ProjectTemplate from '../../../components/ProjectTemplate';

export default function DiceAnimations() {
  const media = [
    {
      src: "https://www.youtube.com/watch?v=XddifYvAK2Q",
      caption: "Dice Animations Demo Video - Complete walkthrough of the Unity mobile game featuring realistic 3D dice physics and animations",
      type: "youtube" as const,
      alt: "Dice Animations Demo Video"
    }
  ];

  const overview = `This was my first hackathon project, where I had the incredible learning experience of working on a team to build an idea from concept to completion. The project focused on creating a Unity-based mobile game that would make probability concepts more accessible and engaging through interactive dice simulations.

Working collaboratively taught me valuable lessons about team dynamics, project management, and the importance of clear communication when building software. It was an eye-opening experience that showed me how different skill sets come together to create something greater than any individual could build alone. The hackathon environment pushed me to learn Unity game development quickly while contributing meaningfully to our team's vision.`;

  const bulletPoints = [
    "Faced challenge of making abstract probability concepts accessible, took action by creating interactive Unity simulation with realistic dice mechanics, led to improved user understanding of statistical concepts",
    "Accomplished intuitive learning experience as measured by user testing feedback by designing hands-on dice rolling visualizations that transform complex statistical concepts into tangible experiences"
  ];

  return (
    <ProjectTemplate
      title="Dice Animations"
      media={media}
      overview={overview}
      bulletPoints={bulletPoints}
    />
  );
}