'use client';
import ProjectTemplate from '@/components/ProjectTemplate';

export default function Stage4Solutions() {
  const media = [
    {
      src: "/work-experience/Recommendation1.png",
      caption: "Recommendation Letter from Stage4Solutions - Professional endorsement highlighting technical contributions and impact",
      type: "image" as const,
      alt: "Stage4Solutions Recommendation Letter"
    }
  ];

  const bulletPoints = [
    "Accomplished 300% increase in sales lead generation as measured by lead volume metrics by building Chrome extension that automated prospect identification and data collection, led to 10+ leads per minute",
    "Faced challenge of manual business process inefficiencies, took action by implementing HubSpot automation workflows with custom triggers and data synchronization, led to improved lead conversion rates and reduced manual work",
    "Accomplished comprehensive customer intelligence system as measured by data coverage and accuracy by developing RAG agent with knowledge base on potential customer company 10-K and 10-Q SEC filings using EDGAR APIs",
    "Faced challenge of understanding AI sales tool market landscape, took action by conducting market research, writing technical documentation, and researching potential customers, led to informed product development decisions"
  ];

  return (
    <ProjectTemplate
      title="Stage4Solutions - SDE Intern"
      media={media}
      overview=""
      bulletPoints={bulletPoints}
    />
  );
}
