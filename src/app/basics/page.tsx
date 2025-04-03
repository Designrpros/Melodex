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
  background: #000; /* Fallback */
`;

const HeroImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
  filter: grayscale(100%); /* Black-and-white theme */
  opacity: 0.8; /* Subtle transparency */
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

export default function Basics() {
  const [openTopics, setOpenTopics] = useState<{ [key: number]: boolean }>({});

  const toggleTopic = (index: number) => {
    setOpenTopics((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const sections = [
    {
      title: "Core Concepts",
      topics: [
        {
          title: "Notes & Pitch",
          description:
            "Musical notes are the building blocks of sound, defined by pitch—how high or low they sound. The chromatic scale includes all 12 pitches in an octave (e.g., C, C#, D). In Logic Pro X, the piano roll shows these notes visually. Try playing a C major scale (C-D-E-F-G-A-B) to hear the steps.",
        },
        {
          title: "Rhythm & Tempo",
          description:
            "Rhythm is the pattern of sounds in time, driven by beats and time signatures like 4/4 (four beats per measure). Tempo is the speed, measured in BPM (beats per minute). Set Logic Pro X to 120 BPM and clap a steady 4/4 rhythm to feel it.",
        },
        {
          title: "Chords & Harmony",
          description:
            "Chords are groups of notes played together, like a C major chord (C-E-G). Harmony is how chords interact to create a sense of resolution or tension. In Logic Pro X’s MIDI editor, stack C, E, and G to hear a bright, happy sound.",
        },
      ],
    },
    {
      title: "Scales & Structure",
      topics: [
        {
          title: "Major & Minor Scales",
          description:
            "Scales are sequences of notes that define a song’s mood. Major scales (e.g., G major: G-A-B-C-D-E-F#) sound happy, while minor scales (e.g., E minor: E-F#-G-A-B-C-D) feel sadder. Play a G major scale in Logic Pro X to hear its uplifting vibe.",
        },
        {
          title: "Key Signatures",
          description:
            "A key signature sets the tonal center of a piece, like C major (no sharps or flats). It tells you which notes to play sharp or flat consistently. In Logic Pro X, use the key signature tool to set C major and experiment with a melody.",
        },
      ],
    },
    {
      title: "Expression & Texture",
      largeText:
        "Expression in music is about bringing emotion to life. Dynamics control volume—think of a soft piano (pianissimo) swelling to a loud forte. In Logic Pro X, adjust MIDI velocity to make notes louder or softer, adding feeling to your tracks. Texture is how sounds layer together. A solo piano is thin (monophonic), while a full band with drums, bass, and synths is thick (polyphonic). Try stacking a synth pad and a drum loop in Logic Pro X to build a richer texture.",
      topics: [
        {
          title: "Dynamics",
          description:
            "Dynamics range from quiet (pp) to loud (ff), shaping a song’s intensity. In Logic Pro X, tweak MIDI note velocities (0-127) to make a melody grow from soft to bold.",
        },
        {
          title: "Texture",
          description:
            "Texture describes the density of sound layers. A single melody is monophonic, while chords are homophonic, and multiple independent lines are polyphonic. Layer a synth and drum track in Logic Pro X to experiment.",
        },
      ],
    },
    {
      title: "Melody & Form",
      topics: [
        {
          title: "Melody",
          description:
            "A melody is a memorable sequence of notes, like a tune you hum. It often follows a scale and has a shape—rising, falling, or static. Write a 4-bar melody in Logic Pro X with a piano sound, keeping it simple and catchy.",
        },
        {
          title: "Song Form",
          description:
            "Song form organizes music into sections like verse-chorus or AABA. A verse might be mellow, while a chorus is bold. In Logic Pro X, arrange a verse and chorus in the timeline to see how they contrast and flow.",
        },
      ],
    },
    {
      title: "Advanced Basics",
      largeText:
        "Intervals are the distances between notes, like a step (C to D) or a leap (C to G). They’re the foundation of melody and harmony—a major third (C to E) sounds happy, while a minor third (C to Eb) feels moody. In Logic Pro X, play intervals in the piano roll to train your ear. Timbre is a sound’s unique color—like a bright trumpet versus a warm cello. Experiment with Logic Pro X’s instruments (e.g., ES2 synth vs. a string patch) to hear how timbre changes a note’s character.",
      topics: [
        {
          title: "Intervals",
          description:
            "Intervals measure the gap between two pitches. A perfect fifth (C to G) is strong and stable, often used in power chords. Play C and G together in Logic Pro X to feel its resonance.",
        },
        {
          title: "Timbre",
          description:
            "Timbre is what makes a guitar sound different from a flute, even at the same pitch. In Logic Pro X, switch between synth patches (e.g., Retro Synth) to explore different timbres.",
        },
      ],
    },
    {
      title: "Notation & Beyond",
      largeText:
        "Music notation is the written language of music—notes on a staff show pitch and rhythm. A quarter note lasts one beat in 4/4 time, while a half note lasts two. In Logic Pro X, the score editor lets you see and edit notation, helping you connect theory to practice. Beyond that, articulation (staccato vs. legato) shapes how notes are played—short and detached or smooth and connected. Try adjusting note lengths in Logic Pro X to hear the difference.",
      topics: [
        {
          title: "Notation",
          description:
            "Notation uses a staff to show pitch (lines and spaces) and rhythm (note values). A C on the third space is middle C. Use Logic Pro X’s score editor to write a simple 4-bar phrase.",
        },
        {
          title: "Articulation",
          description:
            "Articulation affects note delivery—staccato is short, legato is smooth. In Logic Pro X, shorten or lengthen MIDI notes to switch between these styles.",
        },
      ],
    },
  ];

  return (
    <PageContainer>
      <HeroContainer>
        <HeroImage
          src="/images/music-notes.jpg" // Replace with a music basics-themed image
          alt="Basics Hero"
          layout="fill"
          priority
        />
        <HeroText>
          <HeroTitle>Basics</HeroTitle>
          <HeroSubtitle>The foundation of our music journey</HeroSubtitle>
        </HeroText>
      </HeroContainer>

      <ContentContainer>
        {sections.map((section, sectionIndex) => (
          <Section key={sectionIndex}>
            <SectionTitle>{section.title}</SectionTitle>
            {section.largeText && <LargeText>{section.largeText}</LargeText>}
            {section.topics.map((topic, topicIndex) => {
              const globalIndex = sectionIndex * 100 + topicIndex; // Unique index
              return (
                <TopicCard
                  key={globalIndex}
                  title={topic.title}
                  description={topic.description}
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