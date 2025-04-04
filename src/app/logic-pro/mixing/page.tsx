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

export default function Mixing() {
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
      title: "What is Mixing?",
      content: (
        <>
          <SectionText>
            Mixing blends your tracks into a cohesive whole, balancing levels, panning, and effects to create a polished sound.
          </SectionText>
          <ExpandedText>
            <HighlightedText>Key Concept:</HighlightedText> Mixing involves adjusting the volume, stereo placement, and effects of each track to ensure they work together harmoniously, creating a balanced and professional track.
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Levels:</strong> Adjust the volume of each track (e.g., lower the kick to -6 dB) to create headroom and avoid clipping.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Panning:</strong> Position tracks in the stereo field (e.g., guitars at -20 left, +20 right) for width.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Effects:</strong> Apply EQ, compression, reverb, and more to enhance each track (e.g., EQ a vocal to cut 200 Hz).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Balance:</strong> Ensure no track overpowers another, creating a cohesive mix where every element is audible.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Why It Matters:</HighlightedText> Mixing turns a collection of tracks into a unified song, ensuring clarity, depth, and impact, so your music sounds professional and engaging.
          </ExpandedText>
        </>
      ),
    },
    {
      title: "Mixing Basics in Logic Pro X",
      content: (
        <>
          <SectionText>
            Open the Mixer (X), adjust levels, pan tracks, and apply effects like compression and EQ to shape your mix.
          </SectionText>
          <ExpandedText>
            <HighlightedText>Step-by-Step Guide:</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Open the Mixer:</strong> Press X to open the Mixer view, where you can see faders for each track.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Adjust Levels:</strong> Lower the kick to -6 dB to create headroom, ensuring the mix doesn’t clip (keep the master below 0 dB).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Pan Tracks:</strong> Pan guitars to -20 (left) and +20 (right) to create stereo width, keeping the kick and bass centered.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Add Compression:</strong> Insert Compressor on a drum track, set a 2:1 ratio with a -20 dB threshold, and adjust the gain to add punch.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Apply EQ:</strong> Add Channel EQ to a vocal, cut 200 Hz to reduce muddiness, and boost 3 kHz for presence.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Practical Example:</HighlightedText> In the Mixer, lower the kick to -6 dB, pan guitars to -20 and +20, add Compressor to drums (2:1 ratio, -20 dB threshold), and EQ the vocal (cut 200 Hz, boost 3 kHz). Play the track to hear the balance.
          </ExpandedText>
          <ExpandedText>
            <HighlightedText>Tip:</HighlightedText> Use the Gain plugin to check for clipping—insert it on the master bus and ensure the output stays below 0 dB to avoid distortion.
          </ExpandedText>
        </>
      ),
    },
    {
      title: "Practical Mixing Examples",
      content: (
        <>
          <SectionText>
            Mix a track by balancing levels, panning, and applying effects to create a cohesive sound.
          </SectionText>
          <ExpandedText>
            <HighlightedText>Example 1: Mixing a Drum Kit</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Levels:</strong> Lower the kick to -6 dB and snare to -8 dB to create headroom, keeping hi-hats at -12 dB.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Panning:</strong> Pan hi-hats slightly to +10 (right) and toms to -15 (left) and +15 (right) for stereo width.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Effects:</strong> Add Compressor (2:1 ratio, -20 dB threshold) for punch, then use Channel EQ to boost 100 Hz on the kick for warmth and cut 500 Hz on the snare to reduce boxiness.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Result:</strong> The drums sound punchy, balanced, and wide, sitting well in the mix.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Example 2: Mixing a Vocal</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Levels:</strong> Set the vocal to -10 dB to sit above the instruments without overpowering them.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>EQ:</strong> Use Channel EQ to cut 200 Hz for clarity, boost 3 kHz for presence, and add a high-pass filter at 80 Hz to remove rumble.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Effects:</strong> Add Space Designer with a Medium Hall preset (wet/dry at 30%) for depth, and apply Compressor (4:1 ratio, -25 dB threshold) to even out dynamics.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Result:</strong> The vocal sounds clear, present, and polished, fitting naturally in the mix.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Tip:</HighlightedText> Use reference tracks (e.g., a professionally mixed song) to compare your mix—import the track into Logic Pro X, match the levels, and A/B test to ensure your mix sounds competitive.
          </ExpandedText>
        </>
      ),
    },
    {
      title: "Advanced Mixing Techniques and Tips",
      content: (
        <>
          <SectionText>
            Elevate your mix with advanced techniques like reverb, delay, sidechain compression, and automation.
          </SectionText>
          <ExpandedText>
            <HighlightedText>Technique 1: Adding Reverb and Delay</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Reverb:</strong> Use a send to Space Designer on a vocal, set to Medium Hall (wet/dry at 30%), to add depth without drowning the vocal.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Delay:</strong> Apply Tape Delay to a guitar, set a 1/4 note delay with 20% feedback, to create a subtle echo effect.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Technique 2: Sidechain Compression</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Purpose:</strong> Make space for the kick by ducking the bass (e.g., lower the bass volume when the kick hits).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>How to Use:</strong> Add Compressor to the bass track, set Sidechain to the kick track, use a 4:1 ratio, -30 dB threshold, and fast attack/release (e.g., 10 ms attack, 50 ms release).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Result:</strong> The bass ducks when the kick hits, ensuring the kick cuts through the mix.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Technique 3: Automation in Mixing</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Volume Automation:</strong> Automate vocal volume to increase by 2 dB in the chorus for emphasis.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Effect Automation:</strong> Automate reverb wet/dry mix to increase during a breakdown, adding a sense of space.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Troubleshooting Tip:</HighlightedText> If the mix sounds muddy, check for frequency overlap—use EQ to cut overlapping frequencies (e.g., cut 100 Hz on guitars if it clashes with the kick) and ensure proper panning.
          </ExpandedText>
          <ExpandedText>
            <HighlightedText>Pro Tip:</HighlightedText> Use groups (e.g., a Drum Bus) to process multiple tracks together—apply EQ and compression to the group to glue the drums together, then adjust the group fader to balance them in the mix.
          </ExpandedText>
        </>
      ),
    },
  ];

  return (
    <SubpageContainer>
      <SubpageTitle>Mixing</SubpageTitle>
      <IntroText>
        Learn how to mix your tracks in Logic Pro X to create a polished, professional sound. From balancing levels to applying effects like EQ and compression, this page guides you through essential mixing techniques with practical examples and advanced tips. Toggle each section to dive deeper into crafting a cohesive mix!
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