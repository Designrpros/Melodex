"use client";

import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
import TopicCard from "./TopicCard";

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #000;
  color: #fff;
  font-family: "Montserrat", sans-serif;
`;

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 95vh;
  overflow: hidden;
  background: #000;
`;

const HeroImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
  opacity: 0.8;
`;

const HeroText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 1;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin: 0;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  color: #dcdcdc;
  margin-top: 1rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  border-bottom: 2px solid #dcdcdc;
  padding-bottom: 0.5rem;
`;

const LargeText = styled.p`
  font-size: 1.25rem;
  color: #dcdcdc;
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

export default function LogicPro() {
  const [openTopics, setOpenTopics] = useState<{ [key: number]: boolean }>({});

  const toggleTopic = (index: number) => {
    setOpenTopics((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const sections = [
    {
      title: "Getting Started",
      topics: [
        {
          title: "Interface & Workflow",
          description:
            "Logic Pro X’s layout includes the Tracks Area for arranging, the Mixer for levels, and Smart Controls for quick tweaks. Start by creating a new project: File > New, then add an audio track (mic icon) and a MIDI track (piano icon).",
          subpage: "/logic-pro/interface",
        },
        {
          title: "MIDI Basics",
          description:
            "MIDI lets you program notes for virtual instruments like Alchemy or Drummer. Open the piano roll (double-click a MIDI region) and draw a 4-beat drum pattern with kicks and snares.",
          subpage: "/logic-pro/midi",
        },
      ],
    },
    {
      title: "Editing & Effects",
      largeText:
        "Editing in Logic Pro X is about shaping your tracks. Use the Scissors tool to cut regions, the Glue tool to merge them, and drag edges to trim. Effects like reverb and EQ transform sound—Space Designer adds space, while Channel EQ balances frequencies. Try loading a vocal sample, cutting out silence, and adding a subtle reverb to hear it bloom.",
      topics: [
        {
          title: "Editing & Effects",
          description:
            "Basic editing includes cut (Command+T), copy (Command+C), and paste (Command+V). Apply effects via the Audio FX slot—add Channel EQ to boost mids (500 Hz) on a vocal for clarity.",
          subpage: "/logic-pro/editing",
        },
      ],
    },
    {
      title: "Recording & Production",
      topics: [
        {
          title: "Recording Audio",
          description:
            "Record live sound with an audio track. Click the red Record button (R) and play your instrument. Set input levels in the Control Bar to avoid clipping (red peaks).",
          subpage: "/logic-pro/recording",
        },
        {
          title: "Automation",
          description:
            "Automation adjusts parameters over time—like fading volume. Press A to show automation lanes, select Volume, and draw a fade-out curve at the end of a track.",
          subpage: "/logic-pro/automation",
        },
      ],
    },
    {
      title: "Mixing & Finalizing",
      largeText:
        "Mixing balances all your tracks into a cohesive sound. Use the Mixer (X) to adjust volume faders, pan knobs (left/right), and add effects like compression to control dynamics. A good mix keeps drums punchy, vocals clear, and synths spacious—try lowering the kick fader (-6 dB) and panning guitars slightly left and right.",
      topics: [
        {
          title: "Mixing",
          description:
            "Mixing blends tracks using volume, panning, and EQ. In the Mixer, lower the bass (-3 dB) to avoid muddiness, then add a Compressor (2:1 ratio) to tighten drums.",
          subpage: "/logic-pro/mixing",
        },
      ],
    },
  ];

  return (
    <PageContainer>
      <HeroContainer>
        <HeroImage
          src="/images/logic-pro.jpg"
          alt="Logic Pro Hero"
          layout="fill"
          priority
        />
        <HeroText>
          <HeroTitle>Logic Pro</HeroTitle>
          <HeroSubtitle>Our adventure mastering Logic Pro X</HeroSubtitle>
        </HeroText>
      </HeroContainer>

      <ContentContainer>
        {sections.map((section, sectionIndex) => (
          <Section key={sectionIndex}>
            <SectionTitle>{section.title}</SectionTitle>
            {section.largeText && <LargeText>{section.largeText}</LargeText>}
            {section.topics.map((topic, topicIndex) => {
              const globalIndex = sectionIndex * 100 + topicIndex;
              return (
                <TopicCard
                  key={globalIndex}
                  title={topic.title}
                  description={topic.description}
                  subpage={topic.subpage}
                  isOpen={!!openTopics[globalIndex]}
                  onToggle={() => toggleTopic(globalIndex)}
                />
              );
            })}
          </Section>
        ))}
      </ContentContainer>
    </PageContainer>
  );
}