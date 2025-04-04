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

export default function Automation() {
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
      title: "What is Automation?",
      content: (
        <>
          <SectionText>
            Automation in Logic Pro X allows you to change settings over time, such as volume, panning, or effects parameters, to add dynamic movement to your tracks.
          </SectionText>
          <ExpandedText>
            <HighlightedText>Key Concept:</HighlightedText> Automation creates changes in parameters automatically as your track plays, enabling you to craft evolving sounds and effects.
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Volume Automation:</strong> Fade in or out (e.g., from 0 dB to -12 dB) to create smooth transitions.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Filter Automation:</strong> Sweep a filter cutoff (e.g., from 100 Hz to 5 kHz) for a dynamic effect.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Panning Automation:</strong> Move a sound across the stereo field (e.g., from left to right) for spatial movement.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Why It Matters:</HighlightedText> Automation adds life to your tracks, making them more engaging by introducing changes over time, such as a gradual build-up or a subtle fade-out.
          </ExpandedText>
        </>
      ),
    },
    {
      title: "How to Use Automation in Logic Pro X",
      content: (
        <>
          <SectionText>
            Press A to show automation lanes, select a parameter like Volume, and draw a line to create changes over time.
          </SectionText>
          <ExpandedText>
            <HighlightedText>Step-by-Step Guide:</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Show Automation:</strong> Press A in Logic Pro X to display the automation lanes for your track.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Select Parameter:</strong> Choose the parameter to automate (e.g., Volume, Filter Cutoff, Pan) from the dropdown menu in the automation lane.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Draw Automation:</strong> Click and drag to draw points and lines (e.g., a line from 0 dB to -12 dB for a fade-out).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Adjust Points:</strong> Add more points to create curves (e.g., a gradual fade) or sharp changes (e.g., a sudden drop).
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Practical Example:</HighlightedText> On a synth track, select Volume automation, draw a line from 0 dB to -12 dB over 8 bars for a fade-out, then play the track to hear the effect.
          </ExpandedText>
          <ExpandedText>
            <HighlightedText>Tip:</HighlightedText> Use the automation curve tool to create smooth transitions, such as a gradual filter sweep, for a more natural sound.
          </ExpandedText>
        </>
      ),
    },
    {
      title: "Practical Examples of Automation",
      content: (
        <>
          <SectionText>
            Try automating a filter cutoff on a synth: pick Retro Synth, add automation, and sweep from 100 Hz to 5 kHz for a dynamic effect.
          </SectionText>
          <ExpandedText>
            <HighlightedText>Example 1: Filter Cutoff Sweep</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Setup:</strong> Add Retro Synth to a track, select a sawtooth wave, and open the automation lane (press A).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Automate:</strong> Choose Filter Cutoff, draw a line from 100 Hz to 5 kHz over 4 bars to create a sweeping effect.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Result:</strong> The synth will gradually open up, creating a dynamic build-up perfect for transitions.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Example 2: Panning Automation</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Setup:</strong> Add a hi-hat loop to a track and open the automation lane.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Automate:</strong> Select Pan, draw a line from -20 (left) to +20 (right) over 2 bars, then back to -20.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Result:</strong> The hi-hat will move across the stereo field, adding spatial interest to your track.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Tip:</HighlightedText> Combine multiple automations (e.g., volume and filter cutoff) on the same track for more complex effects, like a fading synth with an opening filter.
          </ExpandedText>
        </>
      ),
    },
    {
      title: "Common Automation Techniques",
      content: (
        <>
          <SectionText>
            Automation can be used for more than just volume and filters—explore techniques like panning, effects, and more.
          </SectionText>
          <ExpandedText>
            <HighlightedText>Technique 1: Effects Automation</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Reverb Wet/Dry:</strong> Automate the wet/dry mix of a reverb (e.g., Space Designer) to increase from 0% to 50% over 4 bars, adding depth to a vocal.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Delay Feedback:</strong> Increase the feedback of a delay (e.g., from 0% to 80%) to create an echoing effect on a synth lead.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Technique 2: Panning Automation</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Stereo Movement:</strong> Automate panning to move a sound across the stereo field (e.g., from -20 to +20) for a dynamic effect.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Alternating Panning:</strong> Create a ping-pong effect by alternating panning (e.g., -10 to +10 every beat) on a hi-hat.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Technique 3: Plugin Parameter Automation</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Filter Resonance:</strong> Automate the resonance of a filter (e.g., from 0 to 50%) to add intensity to a synth sweep.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Distortion Drive:</strong> Increase the drive of a distortion plugin (e.g., from 0 to 10) to add grit to a bassline over time.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Troubleshooting Tip:</HighlightedText> If automation isn’t working, ensure the track is set to "Read" mode (not "Off") in the automation lane, and check that the parameter is correctly assigned.
          </ExpandedText>
        </>
      ),
    },
  ];

  return (
    <SubpageContainer>
      <SubpageTitle>Automation</SubpageTitle>
      <IntroText>
        Learn how to use automation in Logic Pro X to add dynamic movement to your tracks. From fading volumes to sweeping filters, this page guides you through the essentials of automation with practical examples and techniques. Toggle each section to dive deeper into creating music that evolves over time!
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