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

export default function Synthesis() {
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
      title: "What is Synthesis in Sound Design?",
      content: (
        <>
          <SectionText>
            Synthesis builds sounds from raw waves, allowing you to create unique tones and textures from scratch.
          </SectionText>
          <ExpandedText>
            <HighlightedText>Key Concept:</HighlightedText> Synthesis is the process of generating audio by manipulating basic waveforms (e.g., sine, square) using components like oscillators, filters, and envelopes to shape the sound’s character.
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Oscillators:</strong> Generate the raw waveforms (e.g., a square wave for a bold tone).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Filters:</strong> Shape the frequency content (e.g., a low-pass filter to remove high frequencies).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Envelopes:</strong> Control dynamics over time (e.g., attack, decay, sustain, release to shape a sound’s evolution).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Modulation:</strong> Add movement by varying parameters (e.g., an LFO to modulate pitch for vibrato).
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Why It Matters:</HighlightedText> Synthesis gives you complete control over sound creation, enabling you to design everything from classic synth tones to experimental textures, making it a cornerstone of sound design.
          </ExpandedText>
        </>
      ),
    },
    {
      title: "Synthesis Basics in Logic Pro X",
      content: (
        <>
          <SectionText>
            Use oscillators to create a base sound, filters to shape its tone, and envelopes to control its dynamics in Logic Pro X’s synthesizers.
          </SectionText>
          <ExpandedText>
            <HighlightedText>Step-by-Step Guide:</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Add a Synthesizer:</strong> Create a Software Instrument track and select a synth like Retro Synth or ES2.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Choose an Oscillator:</strong> In Retro Synth, select a square wave for a bold, buzzy tone, or in ES2, mix two oscillators (e.g., saw and square) for a richer sound.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Apply a Filter:</strong> Use a low-pass filter at 1 kHz to keep the sound warm, or a high-pass filter at 500 Hz to make it thinner.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Shape with Envelopes:</strong> Adjust the amplitude envelope—set a slow attack (1 sec) for a pad, or a fast attack (10 ms) for a pluck; tweak the release (e.g., 500 ms) for a smooth fade.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Play and Tweak:</strong> Play a MIDI note (e.g., C3) to hear the sound, then adjust parameters like cutoff or resonance to refine the tone.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Practical Example:</HighlightedText> In ES2, mix a saw and square oscillator, lower the cutoff to 1 kHz for warmth, set a slow attack (1 sec) and long release (500 ms) for a pad-like sound, then play a C3 note to hear the result.
          </ExpandedText>
          <ExpandedText>
            <HighlightedText>Tip:</HighlightedText> Start with a simple waveform (e.g., sine or saw) and gradually add complexity with filters and envelopes to better understand how each component affects the sound.
          </ExpandedText>
        </>
      ),
    },
    {
      title: "Practical Synthesis Examples",
      content: (
        <>
          <SectionText>
            Create different sounds using synthesis, such as a warm pad or a sharp pluck, by adjusting oscillators, filters, and envelopes.
          </SectionText>
          <ExpandedText>
            <HighlightedText>Example 1: Creating a Warm Pad</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Setup:</strong> Add a Software Instrument track with ES2, select two oscillators (saw and triangle).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Oscillators:</strong> Mix the saw (70%) and triangle (30%) for a rich, warm base tone.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Filter:</strong> Apply a low-pass filter at 1 kHz with a resonance of 20% to keep the sound warm and smooth.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Envelope:</strong> Set a slow attack (1 sec), long decay (2 sec), sustain at 70%, and release at 500 ms for a smooth fade.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Result:</strong> A lush, warm pad perfect for ambient or cinematic music.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Example 2: Creating a Sharp Pluck</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Setup:</strong> Add a Software Instrument track with Retro Synth, select a square wave.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Oscillator:</strong> Use a single square wave for a bold, buzzy tone.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Filter:</strong> Apply a high-pass filter at 500 Hz to make the sound thinner and brighter.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Envelope:</strong> Set a fast attack (10 ms), short decay (200 ms), sustain at 0%, and release at 100 ms for a sharp, plucky sound.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Result:</strong> A sharp, plucky sound ideal for leads or arpeggios in electronic music.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Tip:</HighlightedText> Add a subtle chorus effect (e.g., rate 0.5 Hz, depth 50%) to a pad to widen its stereo image, making it sound more expansive in the mix.
          </ExpandedText>
        </>
      ),
    },
    {
      title: "Advanced Synthesis Techniques and Tips",
      content: (
        <>
          <SectionText>
            Elevate your synthesis skills with techniques like LFO modulation, polyphony, and layering oscillators for more complex sounds.
          </SectionText>
          <ExpandedText>
            <HighlightedText>Technique 1: LFO Modulation</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Purpose:</strong> Add movement to a sound by modulating parameters (e.g., pitch, filter cutoff) with a Low Frequency Oscillator (LFO).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>How to Use:</strong> In ES2, assign an LFO to the filter cutoff, set the LFO rate to 0.5 Hz, and depth to 50% for a slow, sweeping effect.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Result:</strong> The filter cutoff moves rhythmically, creating a dynamic, evolving sound, perfect for pads or leads.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Technique 2: Polyphony and Detuning</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Purpose:</strong> Create a thicker sound by using multiple voices and detuning them (e.g., for a supersaw lead).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>How to Use:</strong> In Retro Synth, set the synth to Poly mode, increase voices to 8, and detune them slightly (e.g., +5 cents for half, -5 cents for the other half).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Result:</strong> A wide, lush supersaw sound, ideal for trance or EDM leads.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Technique 3: Layering Oscillators</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Purpose:</strong> Combine different waveforms for a richer sound (e.g., saw and square for a hybrid tone).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>How to Use:</strong> In ES2, use two oscillators—one saw, one square—mix them (e.g., 60% saw, 40% square), and apply a low-pass filter at 1 kHz to blend them smoothly.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Result:</strong> A complex, hybrid tone that combines the brightness of the saw with the buzz of the square, perfect for a versatile lead.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Troubleshooting Tip:</HighlightedText> If a synthesized sound is too harsh, lower the filter resonance (e.g., to 10%) or reduce the high frequencies with an EQ (e.g., cut above 5 kHz) to smooth it out.
          </ExpandedText>
          <ExpandedText>
            <HighlightedText>Pro Tip:</HighlightedText> Use Logic Pro X’s Modulation Matrix (e.g., in ES2) to route an LFO to pitch for vibrato, or an envelope to filter cutoff for dynamic sweeps, adding expressiveness to your sound.
          </ExpandedText>
        </>
      ),
    },
  ];

  return (
    <SubpageContainer>
      <SubpageTitle>Synthesis Fundamentals</SubpageTitle>
      <IntroText>
        Learn the essentials of synthesis in Logic Pro X to create unique sounds from scratch. From oscillators and filters to advanced techniques like LFO modulation, this page guides you through the synthesis process with practical examples and tips. Toggle each section to dive deeper into designing your own tones!
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