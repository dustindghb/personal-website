'use client';

import React from 'react';
import ProjectTemplate from '../../../components/ProjectTemplate';

interface MediaItem {
  src: string;
  caption: string;
  type: 'image' | 'video' | 'youtube';
  alt?: string;
}

export default function VirtualFittingRoom() {
  const media: MediaItem[] = [
    {
      src: 'https://www.youtube.com/watch?v=wFKQVQxQk4E',
      caption: 'Virtual Fitting Room end-to-end demo',
      type: 'youtube'
    }
  ];

  const overview = `Virtual Fitting Room is a full-stack virtual try-on platform built with Java Spring Boot backend and Next.js frontend, deployed on Google Cloud Run. Visit the live application at lookr.online to see it in action.`;

  const bulletPoints = [
    "Built full-stack virtual try-on platform with Java Spring Boot backend and Next.js frontend on Google Cloud Run, handling 600 requests/min with 99.9% uptime",
    "Implemented security layer using OAuth2 authentication, Bucket4j rate limiting (600/min standard), and Cloudflare CDN, reducing API response times to 100ms through Caffeine caching",
    "Designed cloud infrastructure on GCP with Cloud Run serverless compute, Cloud SQL PostgreSQL, and Cloud Storage with signed URLs",
    "Integrated Stripe payments and PostHog analytics while tracking 8+ custom events"
  ];

  return (
    <ProjectTemplate
      title="Virtual Fitting Room"
      media={media}
      overview={overview}
      bulletPoints={bulletPoints}
      websiteLink="lookr.online"
    />
  );
}


