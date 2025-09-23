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
    "Built Chrome extension increasing sales lead generation by 300% to 10+ leads/min",
    "Implemented HubSpot automation workflows to optimize business processes and improved lead conversion rates",
    "Developed RAG agent with knowledge base on potential customer company 10-K and 10-Q SEC filings with EDGAR APIs",
    "Conducted market research on AI sales tool, wrote documentation, and researched potential customers"
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
