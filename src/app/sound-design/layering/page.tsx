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

export default function Layering() {
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
      title: "What is Layering in Sound Design?",
      content: (
        <>
          <SectionText>
            Layering combines multiple sounds to create depth, richness, and complexity in your audio.
          </SectionText>
          <ExpandedText>
            <HighlightedText>Key Concept:</HighlightedText> Layering involves stacking different sounds or instruments to enhance their texture, making them more impactful and cohesive in a mix by blending their unique characteristics.
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Combining Sounds:</strong> Stack sounds with complementary qualities (e.g., a lush pad with a sharp pluck).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Adjusting Levels:</strong> Balance the volume of each layer (e.g., lower the pad to -12 dB, raise the pluck to -6 dB) to ensure clarity.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Stereo Placement:</strong> Use panning to create width (e.g., pan one layer left, another right).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>EQ and Effects:</strong> Shape each layer to fit together (e.g., cut low frequencies from one layer to avoid clashing).
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Why It Matters:</HighlightedText> Layering adds depth and dimension to your sounds, making them more engaging and professional, whether you’re creating a thick bass, a wide pad, or a dynamic lead.
          </ExpandedText>
        </>
      ),
    },
    {
      title: "Layering Basics in Logic Pro X",
      content: (
        <>
          <SectionText>
            Create multiple tracks, combine sounds like a pad and a pluck, adjust levels, pan for width, and use EQ to make them fit together.
          </SectionText>
          <ExpandedText>
            <HighlightedText>Step-by-Step Guide:</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Add Tracks:</strong> Create two Software Instrument tracks—one for a pad (e.g., Alchemy) and one for a pluck (e.g., ES2).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Load Sounds:</strong> In Alchemy, select a lush pad preset (e.g., Ambient Pad); in ES2, choose a sharp pluck preset (e.g., Crystal Pluck).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Adjust Levels:</strong> Set the pad to -12 dB for a subtle background, and the pluck to -6 dB to make it stand out.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Pan for Width:</strong> Pan the pad slightly left (-10) and the pluck slightly right (+10) to create stereo width.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Apply EQ:</strong> Add Channel EQ to the pad, cut below 200 Hz to reduce muddiness; on the pluck, boost 3 kHz to enhance clarity.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Practical Example:</HighlightedText> In Logic Pro X, layer an Alchemy pad (-12 dB, panned -10) with an ES2 pluck (-6 dB, panned +10), EQ the pad to cut below 200 Hz, and boost the pluck at 3 kHz. Play them together to hear a rich, wide sound.
          </ExpandedText>
          <ExpandedText>
            <HighlightedText>Tip:</HighlightedText> Use the same MIDI region for both tracks (copy/paste the region) to ensure the pad and pluck play in sync, then adjust velocities to emphasize the pluck over the pad.
          </ExpandedText>
        </>
      ),
    },
    {
      title: "Practical Layering Examples",
      content: (
        <>
          <SectionText>
            Layer sounds to create rich textures, such as combining a pad and pluck, or layering a kick with a sub-bass.
          </SectionText>
          <ExpandedText>
            <HighlightedText>Example 1: Layering a Pad and Pluck</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Setup:</strong> Add two Software Instrument tracks—Alchemy for a pad (Ambient Pad preset) and ES2 for a pluck (Crystal Pluck preset).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Adjust Levels:</strong> Set the pad to -12 dB and the pluck to -6 dB to balance their presence.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Pan:</strong> Pan the pad to -10 (left) and the pluck to +10 (right) for stereo width.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>EQ:</strong> Cut the pad below 200 Hz to avoid low-end clutter, and boost the pluck at 3 kHz for clarity.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Result:</strong> A lush, wide sound with the pad providing depth and the pluck adding a sharp, melodic element.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Example 2: Layering a Kick and Sub-Bass</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Setup:</strong> Add an Audio Track with a kick sample and a Software Instrument track with a sub-bass (e.g., ES1, sine wave preset).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Adjust Levels:</strong> Set the kick to -8 dB and the sub-bass to -10 dB to ensure the kick cuts through.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Pan:</strong> Keep both centered (0) for a solid low-end foundation.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>EQ:</strong> Cut the kick below 50 Hz to make room for the sub-bass, and boost the kick at 100 Hz for punch.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Result:</strong> A powerful low-end with a punchy kick and a deep sub-bass, perfect for electronic music.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Tip:</HighlightedText> Use sidechain compression on the sub-bass (triggered by the kick) to duck the sub-bass when the kick hits, ensuring clarity in the low end.
          </ExpandedText>
        </>
      ),
    },
    {
      title: "Advanced Layering Techniques and Tips",
      content: (
        <>
          <SectionText>
            Enhance your layering with techniques like adding effects, automation, and stereo imaging to create more dynamic sounds.
          </SectionText>
          <ExpandedText>
            <HighlightedText>Technique 1: Layering with Effects</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Purpose:</strong> Add effects to individual layers to enhance their character (e.g., reverb on a pad, delay on a pluck).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>How to Use:</strong> On the pad track, add Space Designer (Large Hall, 30% wet) for depth; on the pluck track, add Tape Delay (1/4 note, 20% feedback) for a subtle echo.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Result:</strong> The pad gains a spacious feel, while the pluck adds rhythmic interest, making the layered sound more dynamic.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Technique 2: Automating Layers</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Purpose:</strong> Add movement by automating parameters (e.g., volume, filter cutoff) of each layer.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>How to Use:</strong> On the pad track, automate the volume to fade in from -∞ dB to -12 dB over 4 bars; on the pluck track, automate the filter cutoff to sweep from 100 Hz to 5 kHz.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Result:</strong> The pad gradually emerges, while the pluck evolves, creating a dynamic, evolving texture.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Technique 3: Stereo Imaging</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Purpose:</strong> Enhance width by using stereo imaging tools (e.g., Logic’s Stereo Spread).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>How to Use:</strong> Add Stereo Spread to the pad track, set the spread to 50% to widen the sound, and keep the pluck narrower for focus.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Result:</strong> The pad fills the stereo field, while the pluck remains focused, creating a balanced, wide sound.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Troubleshooting Tip:</HighlightedText> If layers sound muddy, check for frequency overlap—use EQ to carve out space (e.g., cut the pad below 200 Hz, cut the pluck below 100 Hz) and ensure proper panning to avoid phase issues.
          </ExpandedText>
          <ExpandedText>
            <HighlightedText>Pro Tip:</HighlightedText> Use a Track Stack (Summing Stack) to group layered tracks, apply effects (e.g., reverb, compression) to the group, and control the overall volume with a single fader for easier mixing.
          </ExpandedText>
        </>
      ),
    },
  ];

  return (
    <SubpageContainer>
      <SubpageTitle>Layering</SubpageTitle>
      <IntroText>
        Discover the art of layering in sound design to create rich, dynamic sounds in Logic Pro X. From combining pads and plucks to advanced techniques like automation, this page guides you through the layering process with practical examples and tips. Toggle each section to dive deeper into building complex textures for your music!
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