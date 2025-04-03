"use client";

import { useState } from "react";
import styled from "styled-components";

const RoadmapContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #000;
  color: #fff;
  padding: 2rem;
  font-family: "Montserrat", sans-serif;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const PhaseSection = styled.div`
  margin-bottom: 2rem;
  border: 1px solid #fff;
  border-radius: 8px;
  overflow: hidden;
`;

const PhaseHeader = styled.div`
  background: #1a1a1a;
  padding: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    background: #333;
  }
`;

const PhaseTitle = styled.h2`
  font-size: 1.8rem;
  margin: 0;
`;

const ToggleIcon = styled.span`
  font-size: 1.5rem;
`;

const PhaseContent = styled.div<{ isOpen: boolean }>`
  padding: ${({ isOpen }) => (isOpen ? "1rem" : "0")};
  height: ${({ isOpen }) => (isOpen ? "auto" : "0")};
  overflow: hidden;
  background: #000;
`;

const MilestoneCard = styled.div`
  background: #111;
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 4px;
  border: 1px solid #dcdcdc;
`;

const MilestoneTitle = styled.h3`
  font-size: 1.4rem;
  color: #fff;
  margin: 0 0 0.5rem 0;
`;

const MilestoneDescription = styled.p`
  font-size: 1rem;
  color: #dcdcdc;
  line-height: 1.5;
  margin: 0;
`;

const Roadmap = () => {
  const [openPhases, setOpenPhases] = useState<{ [key: number]: boolean }>({
    0: true, // Phase 0 open by default
  });

  const togglePhase = (phaseIndex: number) => {
    setOpenPhases((prev) => ({
      ...prev,
      [phaseIndex]: !prev[phaseIndex],
    }));
  };

  const phases = [
    {
      title: "Phase 0: The Reason for Building This",
      milestones: [
        {
          title: "Learning Motivation",
          description:
            "Create a personal hub to document our journey learning sound design and Logic Pro X, keeping it simple and focused on our progress.",
        },
        {
          title: "Self-Contained Resource",
          description:
            "Build a site with all info inside—no external links—covering music basics, sound design, and Logic Pro X usage.",
        },
      ],
    },
    {
      title: "Phase 1: Foundation",
      milestones: [
        {
          title: "Research & Setup",
          description:
            "Gather beginner resources on sound design and Logic Pro X. Set up a Next.js site with Styled Components and a black-and-white theme.",
        },
        {
          title: "Initial Pages",
          description:
            "Create Home (Melodex), Basics, Sound Design, and Logic Pro pages with a 95vh hero section and consistent UI kit.",
        },
      ],
    },
    {
      title: "Phase 2: Core Learning Content",
      milestones: [
        {
          title: "Basics Expansion",
          description:
            "Develop detailed sections on notes, rhythm, chords, scales, dynamics, and more, all with internal Logic Pro X examples.",
        },
        {
          title: "Sound Design Basics",
          description:
            "Cover waveforms, synthesis, and effects with practical tips using Logic Pro X tools like ES2 and Retro Synth.",
        },
        {
          title: "Logic Pro Basics",
          description:
            "Explore interface, MIDI, and editing basics, practicing with drum beats and melodies in Logic Pro X.",
        },
      ],
    },
    {
      title: "Phase 3: Website Structure",
      milestones: [
        {
          title: "Core Pages with Subpages",
          description:
            "Set up Basics with expanded sections, Sound Design with subpages (Basics, Synthesis, Effects, etc.), and Logic Pro with subpages (Interface, MIDI, etc.), all with internal content.",
        },
        {
          title: "Reusable Components",
          description:
            "Implement TopicCard components for collapsible content in Basics, Sound Design, and Logic Pro, enhancing interactivity.",
        },
      ],
    },
    {
      title: "Phase 4: Advanced Features",
      milestones: [
        {
          title: "Index Page",
          description:
            "Add an Index page with a responsive sidebar, compact text (0.75rem), and a dense overview of all learning topics, unique to this tab.",
        },
        {
          title: "Subpage Navigation",
          description:
            "Enhance Sound Design and Logic Pro with subpages linked via 'Dive Deeper' inside collapsible cards, keeping navigation intuitive.",
        },
        {
          title: "Responsive Design",
          description:
            "Make the Index sidebar responsive—fixed on desktop, toggleable via hamburger menu on mobile (below 768px).",
        },
      ],
    },
    {
      title: "Phase 5: Refinement & Sharing",
      milestones: [
        {
          title: "Polish & Debug",
          description:
            "Fix hydration errors (e.g., Toolbar <a> nesting) and prop warnings (e.g., isOpen), ensuring a smooth experience across all pages.",
        },
        {
          title: "Launch",
          description:
            "Deploy Melodex on Vercel as a personal portfolio, showcasing our sound design and Logic Pro X learning journey.",
        },
        {
          title: "Ongoing Updates",
          description:
            "Refine content with our latest insights, keeping the site a living resource for our music exploration.",
        },
      ],
    },
  ];

  return (
    <RoadmapContainer>
      <Title>Melodex Roadmap</Title>
      {phases.map((phase, index) => (
        <PhaseSection key={index}>
          <PhaseHeader onClick={() => togglePhase(index)}>
            <PhaseTitle>{phase.title}</PhaseTitle>
            <ToggleIcon>{openPhases[index] ? "−" : "+"}</ToggleIcon>
          </PhaseHeader>
          <PhaseContent isOpen={!!openPhases[index]}>
            {phase.milestones.map((milestone, i) => (
              <MilestoneCard key={i}>
                <MilestoneTitle>{milestone.title}</MilestoneTitle>
                <MilestoneDescription>{milestone.description}</MilestoneDescription>
              </MilestoneCard>
            ))}
          </PhaseContent>
        </PhaseSection>
      ))}
    </RoadmapContainer>
  );
};

export default Roadmap;