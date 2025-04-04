"use client";

import { useState } from "react";
import styled from "styled-components";

const SubpageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #000;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  padding: 5rem 2rem 2rem 2rem; /* Account for fixed toolbar */
`;

const SubpageTitle = styled.h1`
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

const Section = styled.div`
  margin-bottom: 2rem;
  border: 1px solid #fff;
  border-radius: 8px;
  overflow: hidden;
`;

const SectionHeader = styled.div`
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

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin: 0;
`;

const ToggleIcon = styled.span`
  font-size: 1.5rem;
`;

const SectionContent = styled.div<{ isOpen: boolean }>`
  padding: ${({ isOpen }) => (isOpen ? "1rem" : "0")};
  height: ${({ isOpen }) => (isOpen ? "auto" : "0")};
  overflow: hidden;
  background: #000;
`;

const SectionText = styled.p`
  font-size: 1rem;
  color: #dcdcdc;
  line-height: 1.5;
  margin: 0 0 0.5rem 0;
`;

const ExpandedText = styled.p`
  margin: 0.5rem 0;
`;

const ExpandedList = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  margin: 0.5rem 0;
`;

const ExpandedListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const HighlightedText = styled.span`
  background-color: #fff;
  color: #000;
  padding: 0.1rem 0.3rem;
  border-radius: 3px;
  font-weight: 600;
`;

export default function Midi() {
  const [openSections, setOpenSections] = useState<{ [key: number]: boolean }>({
    0: true, // First section open by default
  });

  const toggleSection = (sectionIndex: number) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionIndex]: !prev[sectionIndex],
    }));
  };

  const sections = [
    {
      title: "What is MIDI?",
      content: (
        <>
          <SectionText>
            MIDI is digital data that triggers sounds in virtual instruments, allowing you to create and edit music without recording live audio.
          </SectionText>
          <ExpandedText>
            <HighlightedText>Key Concept:</HighlightedText> MIDI (Musical Instrument Digital Interface) sends instructions to virtual instruments, telling them what notes to play, how loud, and for how long, without containing actual audio.
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Notes:</strong> MIDI data specifies pitch (e.g., C1, D1) and duration (e.g., quarter note, eighth note).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Velocity:</strong> Controls the loudness of each note (e.g., 127 for loud, 40 for soft).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Channels:</strong> MIDI uses channels (1-16) to control different instruments (e.g., Channel 1 for drums, Channel 2 for synths).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Control Change (CC):</strong> Sends additional data (e.g., CC1 for modulation, CC7 for volume) to adjust parameters.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Why It Matters:</HighlightedText> MIDI allows you to create, edit, and manipulate music with precision, making it easy to program drums, synths, and melodies in Logic Pro X.
          </ExpandedText>
        </>
      ),
    },
    {
      title: "Setting Up MIDI in Logic Pro X",
      content: (
        <>
          <SectionText>
            Add a Software Instrument track, pick a virtual instrument like Drummer for beats or Alchemy for synths, and start creating MIDI regions.
          </SectionText>
          <ExpandedText>
            <HighlightedText>Step-by-Step Guide:</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Add a Track:</strong> Click the + button in the Tracks Area, select Software Instrument, and choose a virtual instrument (e.g., Drummer for beats, Alchemy for synths).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Load a Preset:</strong> Press Y to open the Library, select a preset (e.g., a drum kit for Drummer, a pad for Alchemy), and load it onto your track.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Create a MIDI Region:</strong> Double-click in the Tracks Area to create a MIDI region, or press Command+R to record MIDI in real-time.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Open the Piano Roll:</strong> Double-click the MIDI region or press P to open the piano roll, where you can draw and edit notes.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Practical Example:</HighlightedText> Add a Software Instrument track, select Alchemy, load a pad preset from the Library, create a MIDI region, and open the piano roll to start drawing notes.
          </ExpandedText>
          <ExpandedText>
            <HighlightedText>Tip:</HighlightedText> Use the Loop Browser (O) to find MIDI loops (e.g., drum patterns) that you can drag into your project as a starting point.
          </ExpandedText>
        </>
      ),
    },
    {
      title: "Creating MIDI Patterns",
      content: (
        <>
          <SectionText>
            In the piano roll, draw kicks on C1, snares on D1 for a basic beat, and layer a melody with notes like C3-E3-G3 over 4 bars.
          </SectionText>
          <ExpandedText>
            <HighlightedText>Example 1: Programming a Drum Beat</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Setup:</strong> Add a Drummer track, select a drum kit preset (e.g., SoCal Kit), and create a MIDI region.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Draw Notes:</strong> Open the piano roll, draw kicks on C1 (e.g., on beats 1 and 3), snares on D1 (e.g., on beats 2 and 4), and hi-hats on F#1 (e.g., every eighth note).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Adjust Velocity:</strong> Click the yellow bars to adjust velocity (e.g., 127 for loud kicks, 40 for soft hi-hats) to add dynamics.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Result:</strong> A basic 4/4 drum beat with dynamic variation, ready to loop or build upon.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Example 2: Creating a Melody</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Setup:</strong> Add an Alchemy track, load a synth preset (e.g., a lead sound), and create a MIDI region.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Draw Notes:</strong> Open the piano roll, draw a melody over 4 bars (e.g., C3-E3-G3 as quarter notes, then G3-A3-G3-E3).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Adjust Velocity:</strong> Set velocity to 80 for most notes, but lower to 60 for the last note to create a softer ending.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Result:</strong> A simple C major melody that adds a melodic layer to your track.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Tip:</HighlightedText> Use the Brush tool (hold Option while dragging) in the piano roll to quickly draw repeated notes, such as hi-hats on every eighth note.
          </ExpandedText>
        </>
      ),
    },
    {
      title: "Advanced MIDI Techniques and Tips",
      content: (
        <>
          <SectionText>
            Go beyond basic MIDI by using techniques like quantization, MIDI CC, and humanization to add realism and expression to your tracks.
          </SectionText>
          <ExpandedText>
            <HighlightedText>Technique 1: Quantization</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Purpose:</strong> Align MIDI notes to a grid to fix timing (e.g., 1/16-note grid for drums).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>How to Use:</strong> Select MIDI notes in the piano roll, press Q, and choose a quantization value (e.g., 1/16 Note).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Adjust Strength:</strong> In the Inspector, set Quantize Strength to 50% to retain some natural feel while tightening timing.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Technique 2: MIDI Control Change (CC)</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Purpose:</strong> Add expression by automating parameters (e.g., CC1 for modulation, CC7 for volume).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>How to Use:</strong> In the piano roll, select Automation (A), choose a CC (e.g., CC1), and draw changes (e.g., increase modulation over 4 bars).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Example:</strong> Automate CC1 (modulation) on a synth lead to add vibrato, increasing from 0 to 127 over a 4-bar phrase.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Technique 3: Humanization</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Purpose:</strong> Add realism by randomizing velocity and timing (e.g., for drums or piano).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>How to Use:</strong> Select MIDI notes, go to Functions Humanize in the piano roll, and adjust velocity and timing randomization (e.g., ±10 for velocity, ±5 ticks for timing).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Example:</strong> Humanize a MIDI piano part to vary velocity (e.g., 70-90) and timing slightly, making it sound more natural.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Troubleshooting Tip:</HighlightedText> If MIDI notes aren’t triggering sounds, ensure the correct MIDI channel is assigned (e.g., Channel 1 for drums), and check that the track isn’t muted or soloed.
          </ExpandedText>
          <ExpandedText>
            <HighlightedText>Pro Tip:</HighlightedText> Use the MIDI Transform window (Window Show MIDI Transform) to apply advanced edits, such as randomizing velocity or creating crescendos across a region.
          </ExpandedText>
        </>
      ),
    },
  ];

  return (
    <SubpageContainer>
      <SubpageTitle>MIDI Basics</SubpageTitle>
      <IntroText>
        Discover the power of MIDI in Logic Pro X to create and edit music with precision. From programming drum beats to crafting melodies, this page guides you through the essentials of MIDI with practical examples and advanced techniques. Toggle each section to dive deeper into bringing your musical ideas to life!
      </IntroText>
      {sections.map((section, index) => (
        <Section key={index}>
          <SectionHeader onClick={() => toggleSection(index)}>
            <SectionTitle>{section.title}</SectionTitle>
            <ToggleIcon>{openSections[index] ? "−" : "+"}</ToggleIcon>
          </SectionHeader>
          <SectionContent isOpen={!!openSections[index]}>
            {section.content}
          </SectionContent>
        </Section>
      ))}
    </SubpageContainer>
  );
}