'use client';

import React from 'react';
import ProjectTemplate from '../../../components/ProjectTemplate';

export default function RegulationsGovTool() {
  const media = [
    {
      src: "https://youtu.be/NxaD3FHKtgQ",
      caption: "Regulations.gov Tool Demo Video - AI-powered civic engagement platform for matching user profiles with regulatory documents",
      type: "youtube" as const,
      alt: "Regulations.gov Tool Demo Video"
    }
  ];

  const overview = `Built a desktop application that matches user profiles with articles from regulations.gov to improve civic participation while protecting user data through local processing. The platform features AI-powered document analysis, sentiment analysis of comment boards, and interactive visualizations to help users understand regulatory documents relevant to their interests.

Developed using Tauri (Rust + React/TypeScript) with a comprehensive backend infrastructure including Express.js HTTP server, REST APIs, SQLite relational database, and Qdrant vector database. The system includes automated document pipelines, local RAG implementation, and advanced visualization tools for exploring regulatory document relationships.`;

  const bulletPoints = [
    "Accomplished 95% accuracy in matching user profiles with relevant regulatory documents as measured by test users by implementing force directed semantic similarity matching",
    "Faced challenge of processing large-scale regulatory data while maintaining user privacy, took action by building local processing pipeline with Tauri and Qdrant vector database with local Ollama model processing, led to 100% data privacy",
    "Faced challenge of 1000+ document ingestion and API rate limiting constraints, took action by developing N8N workflow with intelligent pagination, exponential backoff retry logic, and rate limit compliance, led to successful ingestion of complete regulatory document corpus",
    "Faced challenge of making public comments readable, took action by creating workflow that fetches comments and analyzes common differing perspectives and overall sentiment, led to improved user understanding of regulatory proposals",
    "Accomplished interactive document exploration as measured by user engagement metrics by building force-directed graph visualization using D3.js with semantic clustering"
  ];

  return (
    <ProjectTemplate
      title="Regulations.gov Tool"
      media={media}
      overview={overview}
      bulletPoints={bulletPoints}
    />
  );
}
