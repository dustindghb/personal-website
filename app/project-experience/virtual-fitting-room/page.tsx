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
      src: 'https://www.youtube.com/watch?v=1wPN-uc9G60',
      caption: 'Virtual Fitting Room end-to-end demo',
      type: 'youtube'
    }
  ];

  const overview = `Virtual Fitting Room is a Spring Boot microservice suite that simulates how retailers can deliver personalized size guidance and garment visualization. I split the experience into catalog, fitting, and rendering services so each boundary could scale independently, then exposed them through a consistent HTTP surface backed by DTO-validated APIs and Actuator-powered telemetry.

On the data side, I paired Dockerized PostgreSQL with Spring Data repositories to drive reproducible environments and fast schema iteration. Product sizing charts, shopper body measurements, and recommendation logic all live in transactional services that keep decisions explainable while staying ready for future Gemini-powered experiences.`;

  const bulletPoints = [
    "Built a Spring Boot–based backend that decomposed the fitting room features into clear service boundaries, teaching me how Spring’s opinionated structure speeds up microservice design.",
    "Containerized PostgreSQL in Docker and wired it to Spring Data repositories, which showed me how to keep dev databases reproducible and schema iterations fast.",
    "Used Spring Boot Web, Validation, and Actuator starters with DTOs to keep APIs type-safe and versioned, revealing how the framework streamlines HTTP pipelines and monitoring.",
    "Modeled size recommendations with Postgres tables and Spring services combining product charts plus body measurements, giving me practice in data modeling and transactional logic.",
    "Defined containerized service boundaries for catalog, fitting, and rendering components, helping me understand how to stage Spring Boot microservices for future scaling and Gemini integrations."
  ];

  return (
    <ProjectTemplate
      title="Virtual Fitting Room"
      media={media}
      overview={overview}
      bulletPoints={bulletPoints}
    />
  );
}


