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
            "Build a personal hub to document and share our journey learning sound design and Logic Pro X.",
        },
        {
          title: "Keeping It Simple",
          description:
            "Focus on core skills without overcomplicating things, creating a low-key resource for ourselves and others.",
        },
      ],
    },
    {
      title: "Phase 1: Foundation",
      milestones: [
        {
          title: "Research & Setup",
          description:
            "Gather beginner resources on sound design and Logic Pro X. Set up a Next.js site with Styled Components.",
        },
        {
          title: "Basic Design",
          description:
            "Create a black-and-white theme with a 95vh hero section and a simple UI kit.",
        },
      ],
    },
    {
      title: "Phase 2: Core Learning",
      milestones: [
        {
          title: "Sound Design Basics",
          description:
            "Learn waveforms, synthesis, and effects. Curate examples using Logic Pro X tools like ES2 and Retro Synth.",
        },
        {
          title: "Logic Pro X Basics",
          description:
            "Explore the interface, MIDI, and basic editing. Practice with simple projects like drum beats and melodies.",
        },
      ],
    },
    {
      title: "Phase 3: Website Build",
      milestones: [
        {
          title: "Core Pages",
          description:
            "Set up Home, Basics, Sound Design, and Logic Pro pages with curated notes and examples.",
        },
        {
          title: "Simple Tools",
          description:
            "Add a basic MIDI preview tool and reusable cards for learning content.",
        },
      ],
    },
    {
      title: "Phase 4: Expanding Skills",
      milestones: [
        {
          title: "Advanced Sound Design",
          description:
            "Dive into layering, effects chains, and creative techniques, documenting our progress.",
        },
        {
          title: "Logic Pro X Mastery",
          description:
            "Learn advanced features like Flex Time and automation, sharing tips we pick up.",
        },
      ],
    },
    {
      title: "Phase 5: Sharing & Refining",
      milestones: [
        {
          title: "Launch",
          description:
            "Deploy the site on Vercel as a personal portfolio of our learning journey.",
        },
        {
          title: "Refinement",
          description:
            "Update content based on what we learn, keeping it a living resource.",
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