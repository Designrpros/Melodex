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

export default function Basics() {
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
      title: "What are Sound Waves?",
      content: (
        <>
          <SectionText>
            Sound is all about waves—vibrations moving through air that create the audio we hear.
          </SectionText>
          <ExpandedText>
            <HighlightedText>Key Concept:</HighlightedText> Sound waves are vibrations that travel through a medium (e.g., air) as pressure changes, which our ears perceive as sound. In sound design, we manipulate these waves to create specific tones and textures.
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Vibrations:</strong> Sound is produced by vibrating objects (e.g., a guitar string, a speaker cone) that push air molecules.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Waveform:</strong> The shape of the wave determines the sound’s timbre (e.g., a sine wave sounds smooth, a sawtooth wave sounds harsh).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Propagation:</strong> Waves travel through air at about 343 m/s (at sea level), reaching our ears as sound.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Digital Representation:</strong> In Logic Pro X, sound waves are digitized as audio samples or synthesized as waveforms.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Why It Matters:</HighlightedText> Understanding sound waves is the foundation of sound design, allowing you to shape tones, create effects, and build unique sounds for your music.
          </ExpandedText>
        </>
      ),
    },
    {
      title: "Types of Waveforms",
      content: (
        <>
          <SectionText>
            Different waveforms create distinct sounds—sine waves are pure, square waves are buzzy, sawtooth waves are harsh, and triangle waves are soft.
          </SectionText>
          <ExpandedText>
            <HighlightedText>Waveform 1: Sine Wave</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Sound:</strong> Pure, smooth tone with no harmonics (e.g., a clean hum).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Use Case:</strong> Ideal for sub-basses or pure tones (e.g., a low-frequency sine wave at 40 Hz for deep bass).
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Waveform 2: Square Wave</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Sound:</strong> Buzzy, hollow tone with odd harmonics (e.g., 8-bit game sounds).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Use Case:</strong> Great for chiptune-style leads or retro synth sounds (e.g., a square wave at 440 Hz for a Mario-like melody).
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Waveform 3: Sawtooth Wave</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Sound:</strong> Harsh, bright tone with all harmonics (e.g., gritty basses).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Use Case:</strong> Perfect for aggressive basses or leads (e.g., a sawtooth wave at 100 Hz for a dubstep bass).
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Waveform 4: Triangle Wave</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Sound:</strong> Soft, mellow tone with fewer harmonics (e.g., a flute-like sound).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Use Case:</strong> Useful for gentle leads or pads (e.g., a triangle wave at 880 Hz for a flute-like melody).
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Additional Concept: Harmonics</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Definition:</strong> Overtones that give each waveform its character (e.g., square waves have odd harmonics, sawtooth waves have all harmonics).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Impact:</strong> More harmonics (sawtooth) create a brighter sound, while fewer (sine) create a purer tone.
            </ExpandedListItem>
          </ExpandedList>
        </>
      ),
    },
    {
      title: "Understanding Frequency and Amplitude",
      content: (
        <>
          <SectionText>
            Frequency (Hz) determines pitch, while amplitude controls loudness—higher frequency means higher pitch, higher amplitude means louder sound.
          </SectionText>
          <ExpandedText>
            <HighlightedText>Concept 1: Frequency (Hz)</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Definition:</strong> The number of wave cycles per second, measured in Hertz (Hz), which determines pitch (e.g., 440 Hz is A4, 220 Hz is A3).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Range:</strong> Human hearing spans 20 Hz to 20 kHz—low frequencies (e.g., 20-100 Hz) are bass, high frequencies (e.g., 5-20 kHz) are treble.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Octaves:</strong> Doubling the frequency raises the pitch by an octave (e.g., 220 Hz to 440 Hz is A3 to A4).
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Concept 2: Amplitude</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Definition:</strong> The height of the wave, which determines loudness—higher amplitude means louder sound, measured in decibels (dB).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Range:</strong> In Logic Pro X, amplitude is typically -∞ dB (silence) to 0 dB (maximum before clipping).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Impact:</strong> Increasing amplitude (e.g., from -12 dB to -6 dB) makes a sound louder, while decreasing it softens the sound.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Additional Concept: Phase</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Definition:</strong> The position of a wave cycle—waves in phase (aligned) reinforce each other, while out-of-phase waves (opposite) can cancel out.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Impact:</strong> Phase issues can cause a sound to lose clarity (e.g., two identical waves 180° out of phase cancel out completely).
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Practical Example:</HighlightedText> In Logic Pro X, create a sine wave at 440 Hz (A4) with an amplitude of -12 dB, then lower the frequency to 220 Hz (A3) to hear the pitch drop, and increase the amplitude to -6 dB to make it louder.
          </ExpandedText>
        </>
      ),
    },
    {
      title: "Exploring Sound Waves in Logic Pro X",
      content: (
        <>
          <SectionText>
            Use the Test Oscillator in Logic Pro X to experiment with waveforms—set it to sine at 440 Hz, then switch to sawtooth to hear the difference.
          </SectionText>
          <ExpandedText>
            <HighlightedText>Step-by-Step Guide:</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Add Test Oscillator:</strong> Add a Software Instrument track, select Test Oscillator (under Utility), and load it onto your track.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Set to Sine Wave:</strong> Choose Sine as the waveform, set the frequency to 440 Hz (A4), and play the note to hear a pure tone.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Switch to Sawtooth:</strong> Change the waveform to Sawtooth, keep the frequency at 440 Hz, and play again to hear the gritty, harsh tone.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Adjust Amplitude:</strong> Use the volume fader to adjust amplitude (e.g., -12 dB for a softer sound, -6 dB for louder).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Experiment with Frequency:</strong> Lower the frequency to 220 Hz (A3) to hear a lower pitch, then raise it to 880 Hz (A5) for a higher pitch.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Practical Example:</HighlightedText> Create a Test Oscillator track, set it to a sine wave at 440 Hz, play it, then switch to a sawtooth wave to compare the gritty texture. Adjust the amplitude to -6 dB to hear the difference in loudness.
          </ExpandedText>
          <ExpandedText>
            <HighlightedText>Troubleshooting Tip:</HighlightedText> If you don’t hear sound from the Test Oscillator, ensure the track isn’t muted, the MIDI region is triggering the correct note (e.g., A4), and the output is routed to your speakers/headphones.
          </ExpandedText>
          <ExpandedText>
            <HighlightedText>Pro Tip:</HighlightedText> Use the Test Oscillator to create a reference tone (e.g., 440 Hz sine wave) for tuning other instruments in your project, ensuring everything is in key.
          </ExpandedText>
        </>
      ),
    },
  ];

  return (
    <SubpageContainer>
      <SubpageTitle>Sound Basics</SubpageTitle>
      <IntroText>
        Dive into the fundamentals of sound design with this guide to sound waves, waveforms, frequency, and amplitude. Learn how to shape sounds in Logic Pro X and understand the building blocks of audio. Toggle each section to explore the essentials of creating unique tones for your music!
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