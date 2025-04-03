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
      title: "Phase 0: Why Melodex Exists",
      milestones: [
        {
          title: "A Learning Hub for You",
          description:
            "Melodex was created to help you learn music production, focusing on sound design and Logic Pro X, with clear, easy-to-follow guides.",
        },
        {
          title: "Everything You Need in One Place",
          description:
            "We’ve built Melodex as a self-contained resource—no external links needed—so you can focus on learning without distractions.",
        },
      ],
    },
    {
      title: "Phase 1: Building the Foundation",
      milestones: [
        {
          title: "Starting with the Basics",
          description:
            "We laid the groundwork with core pages like Basics, Sound Design, and Logic Pro, giving you a solid starting point to explore music theory and production tools.",
        },
        {
          title: "A Clean, Focused Design",
          description:
            "Melodex features a sleek black-and-white theme with hero sections on each page, making it easy for you to dive into the content without clutter.",
        },
      ],
    },
    {
      title: "Phase 2: Deepening Your Knowledge",
      milestones: [
        {
          title: "Music Theory Made Simple",
          description:
            "The Basics page offers you detailed lessons on notes, rhythm, chords, scales, dynamics, and more, with examples you can try in Logic Pro X.",
        },
        {
          title: "Sound Design Essentials",
          description:
            "Learn how to create sounds from scratch on the Sound Design page, covering waveforms, synthesis, effects, and more, with practical tips to get you started.",
        },
        {
          title: "Logic Pro X Skills",
          description:
            "Master Logic Pro X with guides on its interface, MIDI programming, editing, and more, helping you bring your music ideas to life.",
        },
      ],
    },
    {
      title: "Phase 3: Making Learning Interactive",
      milestones: [
        {
          title: "Explore More with Subpages",
          description:
            "Dive deeper into Sound Design and Logic Pro with subpages for each topic, like synthesis techniques or MIDI programming, accessible via 'Dive Deeper' links.",
        },
        {
          title: "Interactive Content",
          description:
            "We’ve added collapsible cards on Basics, Sound Design, and Logic Pro pages, so you can expand and explore topics at your own pace.",
        },
      ],
    },
    {
      title: "Phase 4: Enhancing Your Experience",
      milestones: [
        {
          title: "Quick Access with Index",
          description:
            "The Index page gives you a compact overview of all topics, with a sidebar to quickly jump between sections like sound waves or MIDI tips.",
        },
        {
          title: "Responsive Navigation",
          description:
            "Navigate easily on any device—our toolbar is horizontal on desktop and switches to a sleek hamburger menu on mobile, with no distracting underlines.",
        },
        {
          title: "A Welcoming Home Page",
          description:
            "The Home page now guides you with a hero section and a detailed overview of what to expect, helping you find the right starting point for your learning journey.",
        },
      ],
    },
    {
      title: "Phase 5: Growing with You",
      milestones: [
        {
          title: "A Polished Experience",
          description:
            "We’ve fine-tuned Melodex to ensure it’s easy to use, with fixes for navigation, design, and performance, so you can focus on learning.",
        },
        {
          title: "Ready for You to Explore",
          description:
            "Melodex is now live on Vercel, ready for you to dive in and start your music production journey with a resource that’s built to grow with you.",
        },
        {
          title: "More to Come",
          description:
            "We’ll keep adding new content and features based on your needs, ensuring Melodex remains a valuable tool for your music production growth.",
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