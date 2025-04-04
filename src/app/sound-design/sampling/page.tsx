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

export default function Sampling() {
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
      title: "What is Sampling in Sound Design?",
      content: (
        <>
          <SectionText>
            Sampling turns real audio into playable instruments, allowing you to create unique sounds from everyday recordings.
          </SectionText>
          <ExpandedText>
            <HighlightedText>Key Concept:</HighlightedText> Sampling involves recording a sound (e.g., a voice, instrument, or object) and using it as a source to create new instruments or effects, which can be manipulated and played via MIDI.
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Recording Samples:</strong> Capture audio from the real world (e.g., a spoon hitting a glass) using a microphone.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Sample Playback:</strong> Load the audio into a sampler (e.g., Quick Sampler) to play it back at different pitches or speeds.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Manipulation:</strong> Adjust parameters like pitch, loop points, or envelope to transform the sample (e.g., pitch down for a deeper tone).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Creative Use:</strong> Use samples to create instruments, sound effects, or textures (e.g., a sampled voice turned into a synth pad).
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Why It Matters:</HighlightedText> Sampling allows you to incorporate unique, real-world sounds into your music, adding originality and texture that synthesized sounds alone can’t achieve.
          </ExpandedText>
        </>
      ),
    },
    {
      title: "Sampling Basics in Logic Pro X",
      content: (
        <>
          <SectionText>
            Record a sound, load it into Quick Sampler, adjust pitch and loop points, and play it with a MIDI keyboard to create a new instrument.
          </SectionText>
          <ExpandedText>
            <HighlightedText>Step-by-Step Guide:</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Record a Sound:</strong> Add an Audio Track, connect a microphone, arm the track (R), and record a sound (e.g., a spoon hitting a glass) by pressing R to start and Spacebar to stop.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Load into Quick Sampler:</strong> Drag the recorded audio region into the Tracks Area, then drag it onto a new Software Instrument track to automatically open Quick Sampler.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Adjust Pitch:</strong> In Quick Sampler, pitch the sample down an octave (e.g., -12 semitones) to create a deeper tone.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Set Loop Points:</strong> Enable looping, set the start point to 0.1 seconds and the end point to 0.5 seconds, to create a rhythmic effect when played.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Play with MIDI:</strong> Use a MIDI keyboard or draw MIDI notes in the piano roll (e.g., C3, D3) to play the sample at different pitches.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Practical Example:</HighlightedText> Record a spoon hitting a glass, load it into Quick Sampler, pitch it down an octave, set loop points from 0.1 to 0.5 seconds, and play it with a MIDI keyboard to create a percussive, glassy instrument.
          </ExpandedText>
          <ExpandedText>
            <HighlightedText>Tip:</HighlightedText> Trim the sample in the Audio File Editor (double-click the region, select Edit) to remove silence or unwanted noise before loading it into Quick Sampler for a cleaner sound.
          </ExpandedText>
        </>
      ),
    },
    {
      title: "Practical Sampling Examples",
      content: (
        <>
          <SectionText>
            Create unique instruments by sampling everyday sounds, such as a spoon on glass or a vocal snippet.
          </SectionText>
          <ExpandedText>
            <HighlightedText>Example 1: Sampling a Spoon on Glass</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Record:</strong> Use a microphone to record a spoon hitting a glass, capturing a short, sharp sound.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Load into Quick Sampler:</strong> Drag the recording into Quick Sampler, set the mode to Classic, and pitch it down an octave (-12 semitones).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Loop Points:</strong> Enable looping, set the start to 0.1 seconds and end to 0.5 seconds for a rhythmic effect.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Play:</strong> Draw MIDI notes (e.g., C3, D3, E3) in the piano roll to play the sample at different pitches, creating a percussive instrument.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Result:</strong> A unique, glassy percussive sound that can be used as a rhythmic element in your track.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Example 2: Sampling a Vocal Snippet</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Record:</strong> Record a short vocal phrase (e.g., “ahh”) using a microphone on an Audio Track.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Load into Quick Sampler:</strong> Drag the vocal into Quick Sampler, set the mode to One Shot for a single playback.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Adjust Pitch:</strong> Pitch the vocal up 5 semitones to create a higher, ethereal tone.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Add Effects:</strong> Add Space Designer (Small Room, 20% wet) to give the vocal a subtle reverb, enhancing its texture.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Result:</strong> A vocal sample that can be played as a melodic element, adding a human touch to your sound design.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Tip:</HighlightedText> Use the Sample Start parameter in Quick Sampler to fine-tune the playback start point (e.g., skip an initial click or breath) for a cleaner sound.
          </ExpandedText>
        </>
      ),
    },
    {
      title: "Advanced Sampling Techniques and Tips",
      content: (
        <>
          <SectionText>
            Take your sampling further with techniques like multi-sampling, time-stretching, and layering samples to create complex instruments.
          </SectionText>
          <ExpandedText>
            <HighlightedText>Technique 1: Multi-Sampling</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Purpose:</strong> Create a realistic instrument by sampling multiple notes (e.g., a piano at C3, D3, E3).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>How to Use:</strong> Record a piano note at C3, D3, and E3, load each into Quick Sampler, map them to their respective keys (e.g., C3 to C3), and set velocity layers (e.g., soft at 1-60, loud at 61-127).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Result:</strong> A playable piano instrument that sounds more realistic because each note uses its own sample.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Technique 2: Time-Stretching</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Purpose:</strong> Change the speed of a sample without affecting its pitch (e.g., slow down a vocal sample).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>How to Use:</strong> In Quick Sampler, enable Flex mode, adjust the sample length (e.g., stretch a 1-second vocal to 2 seconds), and fine-tune the timing to avoid artifacts.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Result:</strong> A slowed-down vocal sample that retains its pitch, creating a dreamy, stretched effect.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Technique 3: Layering Samples</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Purpose:</strong> Combine multiple samples to create a richer sound (e.g., layer a vocal with a synth sample).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>How to Use:</strong> Load a vocal sample and a synth sample into Quick Sampler, map them to the same key range, and adjust their volumes (e.g., vocal at 70%, synth at 30%).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Result:</strong> A hybrid sound that blends the human quality of the vocal with the synthetic texture of the synth.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Troubleshooting Tip:</HighlightedText> If a sample sounds glitchy when looped, adjust the loop points to avoid clicks (e.g., set crossfade to 10 ms) or use the Fade tool to smooth transitions at the loop boundaries.
          </ExpandedText>
          <ExpandedText>
            <HighlightedText>Pro Tip:</HighlightedText> Use Quick Sampler’s envelope controls (e.g., adjust attack to 50 ms, release to 200 ms) to shape the sample’s dynamics, making it sound more natural when played with a MIDI keyboard.
          </ExpandedText>
        </>
      ),
    },
  ];

  return (
    <SubpageContainer>
      <SubpageTitle>Sampling</SubpageTitle>
      <IntroText>
        Explore the creative potential of sampling in Logic Pro X to turn real-world sounds into playable instruments. From recording a simple sound to advanced techniques like multi-sampling, this page guides you through the sampling process with practical examples and tips. Toggle each section to dive deeper into crafting unique sounds for your music!
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