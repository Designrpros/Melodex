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

export default function Effects() {
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
      title: "What are Effects in Sound Design?",
      content: (
        <>
          <SectionText>
            Effects shape your sound by altering its characteristics, adding depth, texture, or movement to create a polished and dynamic result.
          </SectionText>
          <ExpandedText>
            <HighlightedText>Key Concept:</HighlightedText> Effects are audio processing tools that modify a sound’s properties, such as its space (reverb), time (delay), or tone (distortion), to enhance its role in a mix or create unique textures.
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Reverb:</strong> Adds space and depth (e.g., simulating a large hall or small room).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Delay:</strong> Creates echoes or repeats (e.g., a vocal echo that repeats every quarter note).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Distortion:</strong> Adds grit or aggression (e.g., a lo-fi bass with bitcrushing).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Chorus:</strong> Widens a sound by adding detuned copies (e.g., making a synth sound thicker).
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Why It Matters:</HighlightedText> Effects allow you to transform raw sounds into polished, professional elements, adding emotion, space, and character to your music.
          </ExpandedText>
        </>
      ),
    },
    {
      title: "Common Effects in Logic Pro X",
      content: (
        <>
          <SectionText>
            Logic Pro X offers a variety of effects like reverb, delay, distortion, and chorus to shape your sounds.
          </SectionText>
          <ExpandedText>
            <HighlightedText>Effect 1: Reverb (Space Designer)</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Purpose:</strong> Adds a sense of space, simulating environments like halls or rooms (e.g., Large Hall preset).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Key Parameters:</strong> Wet/Dry mix (e.g., 30% wet for subtle depth), decay time (e.g., 2 seconds for a long tail).
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Effect 2: Delay (Tape Delay)</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Purpose:</strong> Creates echoes or repeats (e.g., a 1/4 note delay on a vocal).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Key Parameters:</strong> Delay time (e.g., 1/4 note), feedback (e.g., 20% for subtle repeats), wet/dry mix (e.g., 25% wet).
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Effect 3: Distortion (Bitcrusher)</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Purpose:</strong> Adds grit or a lo-fi edge (e.g., bitcrushing a bass).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Key Parameters:</strong> Downsampling (e.g., 4x for a lo-fi effect), bit depth (e.g., 8-bit for a retro sound).
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Effect 4: Chorus</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Purpose:</strong> Widens a sound by adding detuned copies (e.g., thickening a synth).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Key Parameters:</strong> Rate (e.g., 0.5 Hz for a slow effect), depth (e.g., 50% for noticeable widening).
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Additional Effect: Flanger</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Purpose:</strong> Creates a sweeping, comb-filter effect (e.g., a jet-like sound on a synth).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Key Parameters:</strong> Rate (e.g., 0.2 Hz for a slow sweep), feedback (e.g., 50% for intensity).
            </ExpandedListItem>
          </ExpandedList>
        </>
      ),
    },
    {
      title: "Applying Effects to Your Sounds",
      content: (
        <>
          <SectionText>
            Add effects like reverb, chorus, distortion, and delay to your sounds in Logic Pro X to enhance their texture and depth.
          </SectionText>
          <ExpandedText>
            <HighlightedText>Example 1: Adding Reverb to a Vocal</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Setup:</strong> Add an Audio Track with a vocal recording, then insert Space Designer on the track.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Apply Effect:</strong> Select the Large Hall preset, set the wet/dry mix to 30%, and adjust the decay time to 2 seconds for a spacious effect.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Result:</strong> The vocal gains depth and sounds like it was recorded in a large hall, adding a sense of space.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Example 2: Widening a Synth with Chorus</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Setup:</strong> Add a Software Instrument track with a synth (e.g., Retro Synth), then insert Chorus on the track.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Apply Effect:</strong> Set the rate to 0.5 Hz for a slow effect, depth to 50% for noticeable widening, and mix to 40%.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Result:</strong> The synth sounds wider and thicker, filling the stereo field and adding richness.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Example 3: Adding Grit to a Bass with Distortion</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Setup:</strong> Add a Software Instrument track with a bass synth (e.g., ES2), then insert Bitcrusher.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Apply Effect:</strong> Set Downsampling to 4x for a lo-fi edge, reduce bit depth to 8-bit for a retro sound, and adjust the mix to 50%.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Result:</strong> The bass gains a gritty, lo-fi texture, perfect for genres like hip-hop or electronic music.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Tip:</HighlightedText> Use sends for effects like reverb and delay (e.g., create a reverb send with Space Designer) to apply the same effect to multiple tracks while saving CPU and maintaining control.
          </ExpandedText>
        </>
      ),
    },
    {
      title: "Advanced Effects Techniques and Tips",
      content: (
        <>
          <SectionText>
            Take your sound design further with advanced effects techniques like parallel processing, automation, and creative combinations.
          </SectionText>
          <ExpandedText>
            <HighlightedText>Technique 1: Parallel Processing</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Purpose:</strong> Apply effects to a duplicate signal while preserving the original (e.g., parallel distortion on a bass).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>How to Use:</strong> Create an auxiliary channel, send the bass track to it, add Bitcrusher (Downsampling 4x), and blend the distorted signal with the original by adjusting the aux fader.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Result:</strong> The bass retains its clarity while adding a layer of grit, creating a fuller sound.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Technique 2: Automating Effects</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Purpose:</strong> Add dynamic movement by automating effect parameters (e.g., reverb wet/dry mix).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>How to Use:</strong> On a vocal track, open the automation lane (A), select Space Designer’s wet/dry mix, and draw a line to increase from 0% to 50% over 4 bars.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Result:</strong> The vocal gradually gains more reverb, creating a sense of space during a specific section.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Technique 3: Creative Effect Combinations</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Flanger + Delay:</strong> Add Flanger (rate 0.2 Hz, feedback 50%) and Tape Delay (1/4 note, 20% feedback) to a synth for a swirling, echoing effect.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Distortion + Chorus:</strong> Apply Bitcrusher (Downsampling 4x) and Chorus (rate 0.5 Hz, depth 50%) to a lead for a gritty, wide sound.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Troubleshooting Tip:</HighlightedText> If an effect sounds too harsh (e.g., too much reverb), lower the wet/dry mix (e.g., to 20%) or use EQ after the effect to cut unwanted frequencies (e.g., cut below 200 Hz on reverb).
          </ExpandedText>
          <ExpandedText>
            <HighlightedText>Pro Tip:</HighlightedText> Experiment with effect order—place time-based effects (e.g., reverb, delay) after distortion to avoid muddying the sound, or reverse the order for a more experimental texture.
          </ExpandedText>
        </>
      ),
    },
  ];

  return (
    <SubpageContainer>
      <SubpageTitle>Effects</SubpageTitle>
      <IntroText>
        Explore the art of using effects in Logic Pro X to shape and enhance your sounds. From adding depth with reverb to creating grit with distortion, this page guides you through essential effects techniques with practical examples and advanced tips. Toggle each section to dive deeper into transforming your audio!
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