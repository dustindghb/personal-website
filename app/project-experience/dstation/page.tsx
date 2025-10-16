'use client';

import React from 'react';
import ProjectTemplate from '../../../components/ProjectTemplate';

interface MediaItem {
  src: string;
  caption: string;
  type: 'image' | 'video' | 'youtube';
  alt?: string;
}

export default function DStation() {
  const media: MediaItem[] = [];

  const overview = `Developed a distributed agent communication system that enables real-time agent docking and peer-to-peer invitation routing. This project demonstrates advanced concurrent programming concepts in Go, focusing on building a robust, thread-safe server that can handle multiple agent connections simultaneously.

The system implements sophisticated authentication mechanisms using JWT tokens and RSA public key verification, ensuring secure communication between distributed agents. The architecture includes thread-safe agent management with mutex-protected data structures, sequence-based message ordering, and time-expiration logic to prevent stale connections and maintain system reliability.

This project showcases expertise in network programming, concurrent systems design, and cryptographic security implementations, providing a foundation for scalable distributed agent communication platforms.

**GitHub Repository:** [https://github.com/dustindghb/dstation](https://github.com/dustindghb/dstation)`;

  const bulletPoints = [
    "Engineered concurrent UDP server in Go handling real-time agent docking and peer-to-peer invitation routing with JWT-based authentication and RSA public key verification",
    "Implemented thread-safe agent management using mutex-protected data structures to coordinate invitation delivery",
    "Designed sequence-based message ordering and time-expiration logic to prevent stale connections and limit invitation"
  ];

  return (
    <ProjectTemplate
      title="Distributed Agent Communication System"
      media={media}
      overview={overview}
      bulletPoints={bulletPoints}
    />
  );
}
