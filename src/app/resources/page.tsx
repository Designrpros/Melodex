"use client";

import { useState } from "react";
import styled from "styled-components";

const AwesomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #000;
  color: #fff;
  padding: 5rem 2rem 2rem 2rem; /* Account for fixed toolbar */
  font-family: "Montserrat", sans-serif;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const IntroText = styled.p`
  font-size: 1.2rem;
  color: #dcdcdc;
  line-height: 1.6;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2rem auto;
`;

const CategorySection = styled.div`
  margin-bottom: 2rem;
  border: 1px solid #fff;
  border-radius: 8px;
  overflow: hidden;
`;

const CategoryHeader = styled.div`
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

const CategoryTitle = styled.h2`
  font-size: 1.8rem;
  margin: 0;
`;

const ToggleIcon = styled.span`
  font-size: 1.5rem;
`;

const CategoryContent = styled.div<{ isOpen: boolean }>`
  padding: ${({ isOpen }) => (isOpen ? "1rem" : "0")};
  height: ${({ isOpen }) => (isOpen ? "auto" : "0")};
  overflow: hidden;
  background: #000;
`;

const ResourceCard = styled.div`
  background: #111;
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 4px;
  border: 1px solid #dcdcdc;
`;

const ResourceTitle = styled.h3`
  font-size: 1.4rem;
  color: #fff;
  margin: 0 0 0.5rem 0;
`;

const ResourceDescription = styled.div`
  font-size: 1rem;
  color: #dcdcdc;
  line-height: 1.5;
  margin: 0;
`;

const ResourceLink = styled.a`
  color: #ffdd00;
  text-decoration: none;
  font-weight: 600;
  &:hover {
    text-decoration: underline;
  }
`;

const HighlightedText = styled.span`
  background-color: #fff;
  color: #000;
  padding: 0.1rem 0.3rem;
  border-radius: 3px;
  font-weight: 600;
`;

const ResourceText = styled.p`
  margin: 0.5rem 0;
`;

const ResourceList = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  margin: 0.5rem 0;
`;

const ResourceListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const ReferencesSection = styled.div`
  margin-top: 3rem;
  text-align: center;
`;

const ReferencesTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const ReferencesText = styled.p`
  font-size: 1rem;
  color: #dcdcdc;
  line-height: 1.5;
  margin: 0;
`;

const Awesome = () => {
  const [openCategories, setOpenCategories] = useState<{ [key: number]: boolean }>({
    0: true, // First category open by default
  });

  const toggleCategory = (categoryIndex: number) => {
    setOpenCategories((prev) => ({
      ...prev,
      [categoryIndex]: !prev[categoryIndex],
    }));
  };

  const categories = [
    {
      title: "Music Theory Resources",
      resources: [
        {
          title: "Know Your Theory",
          link: "https://knowyourtheory.com/",
          description: (
            <>
              <ResourceText>
                An interactive tutorial to help you learn music theory fundamentals.
              </ResourceText>
              <ResourceText>
                <HighlightedText>Best For:</HighlightedText> Beginners looking to understand notes, scales, and chords.
              </ResourceText>
              <ResourceList>
                <ResourceListItem>Learn to identify notes (e.g., C4, A4) and their positions on a keyboard.</ResourceListItem>
                <ResourceListItem>Explore scales like C major and A minor with interactive exercises.</ResourceListItem>
                <ResourceListItem>Practice building chords (e.g., C major: C-E-G) and understanding their emotional impact.</ResourceListItem>
              </ResourceList>
              <ResourceText>
                <HighlightedText>Practical Tip:</HighlightedText> Use the exercises to practice identifying scales, then apply them in Logic Pro X by programming a melody in the piano roll.
              </ResourceText>
            </>
          ),
        },
        {
          title: "muted.io",
          link: "https://muted.io/",
          description: (
            <>
              <ResourceText>
                A collection of interactive music theory tools and visual references.
              </ResourceText>
              <ResourceText>
                <HighlightedText>Best For:</HighlightedText> Visual learners who want to explore music theory concepts.
              </ResourceText>
              <ResourceList>
                <ResourceListItem>Use the piano chord finder to identify chords like C major or A minor.</ResourceListItem>
                <ResourceListItem>Explore the circle of fifths to understand key relationships (e.g., C to G).</ResourceListItem>
                <ResourceListItem>Visualize scales and modes (e.g., D Dorian) with interactive diagrams.</ResourceListItem>
              </ResourceList>
              <ResourceText>
                <HighlightedText>Practical Tip:</HighlightedText> Use the chord finder to build a progression (e.g., C-F-G), then program it in Logic Pro X to hear how it sounds.
              </ResourceText>
            </>
          ),
        },
        {
          title: "Hooktheory",
          link: "https://www.hooktheory.com/",
          description: (
            <>
              <ResourceText>
                A platform for learning music theory through interactive lessons and song analysis.
              </ResourceText>
              <ResourceText>
                <HighlightedText>Best For:</HighlightedText> Beginners and intermediate learners interested in songwriting and theory.
              </ResourceText>
              <ResourceList>
                <ResourceListItem>Learn chord progressions (e.g., I-IV-V-I) through interactive examples.</ResourceListItem>
                <ResourceListItem>Analyze popular songs to understand their harmonic structure.</ResourceListItem>
                <ResourceListItem>Use the Hookpad tool to experiment with melodies and chords.</ResourceListItem>
              </ResourceList>
              <ResourceText>
                <HighlightedText>Practical Tip:</HighlightedText> Analyze a song’s chord progression on Hooktheory, then recreate it in Logic Pro X to practice building progressions.
              </ResourceText>
            </>
          ),
        },
      ],
    },
    {
      title: "Sound Design Libraries and Tools",
      resources: [
        {
          title: "Librosa",
          link: "https://librosa.org/",
          description: (
            <>
              <ResourceText>
                A Python package for music and audio analysis, providing building blocks for music information retrieval.
              </ResourceText>
              <ResourceText>
                <HighlightedText>Best For:</HighlightedText> Advanced users interested in analyzing audio for sound design.
              </ResourceText>
              <ResourceList>
                <ResourceListItem>Analyze audio files to extract features like tempo, pitch, and spectral data.</ResourceListItem>
                <ResourceListItem>Use for beat tracking (e.g., detecting the tempo of a drum loop).</ResourceListItem>
                <ResourceListItem>Visualize waveforms and spectrograms to understand sound characteristics.</ResourceListItem>
              </ResourceList>
              <ResourceText>
                <HighlightedText>Practical Tip:</HighlightedText> Use Librosa to analyze a drum loop, extract its tempo, and match it to your Logic Pro X project’s BPM for seamless integration.
              </ResourceText>
            </>
          ),
        },
        {
          title: "Essentia",
          link: "https://essentia.upf.edu/index.html",
          description: (
            <>
              <ResourceText>
                A library for music information retrieval and signal processing.
              </ResourceText>
              <ResourceText>
                <HighlightedText>Best For:</HighlightedText> Users looking to extract audio features for sound design experiments.
              </ResourceText>
              <ResourceList>
                <ResourceListItem>Extract features like pitch, tempo, and loudness from audio files.</ResourceListItem>
                <ResourceListItem>Use for onset detection (e.g., identifying drum hits in a loop).</ResourceListItem>
                <ResourceListItem>Analyze harmonic content (e.g., identifying chords in a sample).</ResourceListItem>
              </ResourceList>
              <ResourceText>
                <HighlightedText>Practical Tip:</HighlightedText> Use Essentia to detect onsets in a drum loop, then use those timings to program a MIDI pattern in Logic Pro X for a layered beat.
              </ResourceText>
            </>
          ),
        },
        {
          title: "Sonic Visualiser",
          link: "https://www.sonicvisualiser.org/",
          description: (
            <>
              <ResourceText>
                A tool for viewing and analyzing the contents of music audio files.
              </ResourceText>
              <ResourceText>
                <HighlightedText>Best For:</HighlightedText> Users who want to visualize audio for sound design and analysis.
              </ResourceText>
              <ResourceList>
                <ResourceListItem>View spectrograms to analyze frequency content (e.g., identifying harmonics in a synth).</ResourceListItem>
                <ResourceListItem>Use annotations to mark specific events (e.g., drum hits, vocal phrases).</ResourceListItem>
                <ResourceListItem>Analyze tempo and rhythm to understand the structure of a track.</ResourceListItem>
              </ResourceList>
              <ResourceText>
                <HighlightedText>Practical Tip:</HighlightedText> Use Sonic Visualiser to analyze a synth sound, identify its harmonics, and recreate it in Logic Pro X using ES2.
              </ResourceText>
            </>
          ),
        },
      ],
    },
    {
      title: "Logic Pro X Tutorials and Tools",
      resources: [
        {
          title: "Logic Pro X Official Documentation",
          link: "https://support.apple.com/logic-pro",
          description: (
            <>
              <ResourceText>
                Official guides and documentation for Logic Pro X, covering all features and workflows.
              </ResourceText>
              <ResourceText>
                <HighlightedText>Best For:</HighlightedText> Beginners and intermediate users learning Logic Pro X.
              </ResourceText>
              <ResourceList>
                <ResourceListItem>Learn to navigate the interface (e.g., Tracks Area, Mixer, Smart Controls).</ResourceListItem>
                <ResourceListItem>Explore MIDI programming (e.g., using the piano roll to create melodies).</ResourceListItem>
                <ResourceListItem>Understand mixing workflows (e.g., applying EQ, compression, and reverb).</ResourceListItem>
              </ResourceList>
              <ResourceText>
                <HighlightedText>Practical Tip:</HighlightedText> Follow the mixing guide to EQ a vocal track, cutting below 100 Hz to reduce rumble, and apply reverb for depth.
              </ResourceText>
            </>
          ),
        },
        {
          title: "Logic Pro X Community Forums",
          link: "https://discussions.apple.com/community/logic",
          description: (
            <>
              <ResourceText>
                A community forum for Logic Pro X users to share tips, ask questions, and solve problems.
              </ResourceText>
              <ResourceText>
                <HighlightedText>Best For:</HighlightedText> Users seeking practical advice and community support.
              </ResourceText>
              <ResourceList>
                <ResourceListItem>Find solutions to common issues (e.g., fixing MIDI latency).</ResourceListItem>
                <ResourceListItem>Learn advanced techniques (e.g., sidechain compression for ducking).</ResourceListItem>
                <ResourceListItem>Share your projects and get feedback from other producers.</ResourceListItem>
              </ResourceList>
              <ResourceText>
                <HighlightedText>Practical Tip:</HighlightedText> Search the forum for sidechain compression tips, then apply it in Logic Pro X to make your kick drum stand out against the bass.
              </ResourceText>
            </>
          ),
        },
        {
          title: "Logic Pro X Keyboard Shortcuts",
          link: "https://www.apple.com/logic-pro/resources/",
          description: (
            <>
              <ResourceText>
                A list of keyboard shortcuts to speed up your workflow in Logic Pro X.
              </ResourceText>
              <ResourceText>
                <HighlightedText>Best For:</HighlightedText> Users looking to improve efficiency in Logic Pro X.
              </ResourceText>
              <ResourceList>
                <ResourceListItem>Use shortcuts like R to record, A to show automation, and Q to quantize MIDI.</ResourceListItem>
                <ResourceListItem>Speed up editing with shortcuts like T to open the tool menu or Cmd+T to split a clip.</ResourceListItem>
                <ResourceListItem>Navigate quickly with shortcuts like Cmd+1 for the Tracks Area or Cmd+2 for the Mixer.</ResourceListItem>
              </ResourceList>
              <ResourceText>
                <HighlightedText>Practical Tip:</HighlightedText> Use the R shortcut to record a vocal take, then Cmd+T to split the clip and edit out mistakes.
              </ResourceText>
            </>
          ),
        },
      ],
    },
    {
      title: "Music Production Tools",
      resources: [
        {
          title: "MuseScore",
          link: "https://musescore.org/",
          description: (
            <>
              <ResourceText>
                A free, open-source tool to create, play, and print sheet music.
              </ResourceText>
              <ResourceText>
                <HighlightedText>Best For:</HighlightedText> Users who want to notate their compositions.
              </ResourceText>
              <ResourceList>
                <ResourceListItem>Create sheet music for your melodies (e.g., a piano piece in C major).</ResourceListItem>
                <ResourceListItem>Play back your compositions to hear how they sound.</ResourceListItem>
                <ResourceListItem>Export sheet music as PDF or MIDI for use in Logic Pro X.</ResourceListItem>
              </ResourceList>
              <ResourceText>
                <HighlightedText>Practical Tip:</HighlightedText> Notate a melody you’ve created in Logic Pro X, export it as MIDI, and import it into Logic Pro X to add instrumentation.
              </ResourceText>
            </>
          ),
        },
        {
          title: "LilyPond",
          link: "http://lilypond.org/",
          description: (
            <>
              <ResourceText>
                A free, open-source music engraving program for creating high-quality sheet music.
              </ResourceText>
              <ResourceText>
                <HighlightedText>Best For:</HighlightedText> Advanced users who want professional sheet music notation.
              </ResourceText>
              <ResourceList>
                <ResourceListItem>Create engraver-quality sheet music with precise control over notation.</ResourceListItem>
                <ResourceListItem>Use text-based input to notate complex compositions (e.g., a string quartet).</ResourceListItem>
                <ResourceListItem>Export sheet music as PDF or MIDI for further production.</ResourceListItem>
              </ResourceList>
              <ResourceText>
                <HighlightedText>Practical Tip:</HighlightedText> Notate a chord progression (e.g., C-F-G) in LilyPond, export it as MIDI, and import it into Logic Pro X to build a track around it.
              </ResourceText>
            </>
          ),
        },
        {
          title: "Audacity",
          link: "https://www.audacityteam.org/",
          description: (
            <>
              <ResourceText>
                A free, open-source audio editor for recording, editing, and analyzing audio.
              </ResourceText>
              <ResourceText>
                <HighlightedText>Best For:</HighlightedText> Users who need a simple tool for audio editing and analysis.
              </ResourceText>
              <ResourceList>
                <ResourceListItem>Record audio (e.g., a vocal sample) for use in Logic Pro X.</ResourceListItem>
                <ResourceListItem>Edit audio (e.g., trim a sample, remove noise) before importing into your project.</ResourceListItem>
                <ResourceListItem>Analyze audio (e.g., view spectrograms) to understand its frequency content.</ResourceListItem>
              </ResourceList>
              <ResourceText>
                <HighlightedText>Practical Tip:</HighlightedText> Record a vocal sample in Audacity, trim it to remove silence, and import it into Logic Pro X to use in a sampler instrument.
              </ResourceText>
            </>
          ),
        },
      ],
    },
  ];

  return (
    <AwesomeContainer>
      <Title>Resources</Title>
      <IntroText>
        Explore a curated collection of resources to enhance your music production journey. From music theory tutorials to sound design tools and Logic Pro X guides, these resources will help you deepen your skills and create music you love. Toggle each category to discover more!
      </IntroText>
      {categories.map((category, index) => (
        <CategorySection key={index}>
          <CategoryHeader onClick={() => toggleCategory(index)}>
            <CategoryTitle>{category.title}</CategoryTitle>
            <ToggleIcon>{openCategories[index] ? "−" : "+"}</ToggleIcon>
          </CategoryHeader>
          <CategoryContent isOpen={!!openCategories[index]}>
            {category.resources.map((resource, i) => (
              <ResourceCard key={i}>
                <ResourceTitle>
                  <ResourceLink href={resource.link} target="_blank" rel="noopener noreferrer">
                    {resource.title}
                  </ResourceLink>
                </ResourceTitle>
                <ResourceDescription>{resource.description}</ResourceDescription>
              </ResourceCard>
            ))}
          </CategoryContent>
        </CategorySection>
      ))}
      <ReferencesSection>
        <ReferencesTitle>References</ReferencesTitle>
        <ReferencesText>
          Some resources on this page were curated from the{" "}
          <ResourceLink href="https://github.com/noteflakes/awesome-music" target="_blank" rel="noopener noreferrer">
            awesome-music
          </ResourceLink>{" "}
          list by noteflakes, the{" "}
          <ResourceLink href="https://github.com/yamathcy/awesome-music-informatics" target="_blank" rel="noopener noreferrer">
            awesome-music-informatics
          </ResourceLink>{" "}
          list by yamathcy, and the{" "}
          <ResourceLink href="https://github.com/ad-si/awesome-music-production" target="_blank" rel="noopener noreferrer">
            awesome-music-production
          </ResourceLink>{" "}
          list by ad-si on GitHub.
        </ReferencesText>
      </ReferencesSection>
    </AwesomeContainer>
  );
};

export default Awesome;