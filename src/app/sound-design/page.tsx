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

export default function SoundDesign() {
  const [openTopics, setOpenTopics] = useState<{ [key: number]: boolean }>({});

  const toggleTopic = (index: number) => {
    setOpenTopics((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const sections = [
    {
      title: "Sound Foundations",
      topics: [
        {
          title: "Sound Basics",
          description:
            "Sound starts with waves—sine, square, sawtooth, and triangle shapes each have a unique vibe. Frequency (Hz) sets pitch, amplitude sets volume. In Logic Pro X, use the Test Oscillator to hear a sine wave at 440 Hz (A4).",
          subpage: "/sound-design/basics",
        },
      ],
    },
    {
      title: "Synthesis",
      largeText:
        "Synthesis crafts sounds from scratch. Subtractive synthesis starts with a rich waveform (like a sawtooth) and uses filters to carve away frequencies—low-pass keeps the bass, high-pass keeps the treble. In Logic Pro X, load ES2, pick a sawtooth oscillator, and sweep the cutoff filter from 10 kHz down to 100 Hz to hear it darken.",
      topics: [
        {
          title: "Synthesis Fundamentals",
          description:
            "Oscillators generate sound, filters shape it, and envelopes (ADSR: Attack, Decay, Sustain, Release) control its dynamics. Try Retro Synth in Logic Pro X—set a square wave, lower the filter cutoff, and adjust the attack for a slow swell.",
          subpage: "/sound-design/synthesis",
        },
      ],
    },
    {
      title: "Effects & Processing",
      topics: [
        {
          title: "Effects",
          description:
            "Effects like reverb, delay, and compression add depth. Reverb simulates space, delay repeats sounds, and compression evens out volume. In Logic Pro X, add Space Designer to a synth for a big room sound, then tweak the wet/dry mix.",
          subpage: "/sound-design/effects",
        },
      ],
    },
    {
      title: "Advanced Techniques",
      largeText:
        "Sampling and layering take sound design further. Sampling turns real-world audio into playable instruments—record a clap, pitch it down, and loop it. Layering stacks sounds for richness—combine a deep bass with a sharp pluck. In Logic Pro X, use Quick Sampler for samples and stack two synth tracks to experiment.",
      topics: [
        {
          title: "Sampling",
          description:
            "Sampling captures audio to manipulate. Record a sound (e.g., a door slam), load it into Logic Pro X’s Quick Sampler, and adjust pitch or loop points to create a drum hit.",
          subpage: "/sound-design/sampling",
        },
        {
          title: "Layering",
          description:
            "Layering blends multiple sounds—like a pad and a lead—for texture. In Logic Pro X, create two tracks: one with Alchemy’s warm pad, another with ES2’s bright pluck, and adjust volumes to balance.",
          subpage: "/sound-design/layering",
        },
      ],
    },
  ];

  return (
    <PageContainer>
      <HeroContainer>
        <HeroImage
          src="/images/soundwave.jpg"
          alt="Sound Design Hero"
          layout="fill"
          priority
        />
        <HeroText>
          <HeroTitle>Sound Design</HeroTitle>
          <HeroSubtitle>Our journey into crafting sounds from scratch</HeroSubtitle>
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