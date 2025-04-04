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

export default function Editing() {
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
      title: "What is Editing in Logic Pro X?",
      content: (
        <>
          <SectionText>
            Editing in Logic Pro X involves shaping your audio and MIDI regions to refine your tracks, such as splitting, trimming, or copying regions.
          </SectionText>
          <ExpandedText>
            <HighlightedText>Key Concept:</HighlightedText> Editing allows you to adjust the timing, length, and arrangement of your audio and MIDI regions, ensuring your track sounds polished and professional.
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Splitting:</strong> Divide a region into smaller parts (e.g., split a vocal take to remove a mistake).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Trimming:</strong> Adjust the start or end of a region (e.g., shorten a drum loop to fit a bar).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Copying/Pasting:</strong> Duplicate regions (e.g., repeat a hook in your song).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Quantizing:</strong> Align MIDI notes to a grid (e.g., fix timing on a drum pattern).
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Why It Matters:</HighlightedText> Editing ensures your tracks are tight and well-structured, allowing you to fix mistakes, adjust timing, and create seamless arrangements.
          </ExpandedText>
        </>
      ),
    },
    {
      title: "How to Edit in Logic Pro X",
      content: (
        <>
          <SectionText>
            Use tools like the Scissors (Command+T) to split a region, drag edges to trim, or copy (Command+C) and paste (Command+V) to repeat sections.
          </SectionText>
          <ExpandedText>
            <HighlightedText>Step-by-Step Guide:</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Split a Region:</strong> Select the Scissors tool (or press Command+T) and click a region to split it (e.g., split a vocal take at 2:00 to remove a mistake).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Trim a Region:</strong> Hover over the edge of a region, drag to shorten or lengthen (e.g., trim a drum loop to fit a 4-bar section).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Copy and Paste:</strong> Select a region, press Command+C to copy, and Command+V to paste (e.g., repeat a hook in the chorus).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Quantize MIDI:</strong> Select MIDI notes in the piano roll, press Q to quantize (e.g., align a drum pattern to a 1/16-note grid).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Use Flex Time:</strong> Enable Flex Time to adjust audio timing (e.g., fix an off-beat guitar strum by dragging it to align with the beat).
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Practical Example:</HighlightedText> In Logic Pro X, split a vocal region at 2:00 to remove a mistake, trim the end to fit the verse, copy the chorus hook, and paste it later in the track. Then, quantize a MIDI drum pattern to tighten the timing.
          </ExpandedText>
          <ExpandedText>
            <HighlightedText>Tip:</HighlightedText> Use the Marquee tool (Command+click and drag) to select a portion of a region and edit only that section, such as trimming a specific part of a vocal.
          </ExpandedText>
        </>
      ),
    },
    {
      title: "Using Effects to Enhance Your Tracks",
      content: (
        <>
          <SectionText>
            Effects add flavor to your tracks—load Space Designer on a vocal for reverb, then add Channel EQ to shape the tone.
          </SectionText>
          <ExpandedText>
            <HighlightedText>Step-by-Step Guide:</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Add Reverb:</strong> Insert Space Designer on a vocal track, select the Medium Hall preset, and adjust the wet/dry mix to 30% for a subtle effect.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Apply EQ:</strong> Add Channel EQ, boost 2 kHz for brightness, and cut 200 Hz to reduce muddiness in the vocal.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Use Compression:</strong> Insert Compressor on a drum track, set a 4:1 ratio, and adjust the threshold to -20 dB for punch.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Add Delay:</strong> Use Tape Delay on a guitar track, set a 1/4 note delay, and adjust feedback to 20% for a subtle echo.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Practical Example:</HighlightedText> On a vocal track, add Space Designer with the Medium Hall preset, set the wet/dry mix to 30%, then add Channel EQ to boost 2 kHz and cut 200 Hz. On a drum track, apply Compressor with a 4:1 ratio to add punch.
          </ExpandedText>
          <ExpandedText>
            <HighlightedText>Tip:</HighlightedText> Use the order of effects wisely—place EQ before compression to shape the tone first, then add reverb or delay to avoid over-processing.
          </ExpandedText>
        </>
      ),
    },
    {
      title: "Practical Examples and Tips",
      content: (
        <>
          <SectionText>
            Combine editing and effects to refine your tracks—split a region, apply EQ, and add reverb for a polished sound.
          </SectionText>
          <ExpandedText>
            <HighlightedText>Example 1: Editing and EQing a Vocal</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Edit:</strong> Split a vocal region at 1:30 to remove a breath, trim the end to fit the verse, and use Flex Time to fix an off-beat note.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Apply Effects:</strong> Add Channel EQ, cut 200 Hz to reduce mud, boost 3 kHz for clarity, and apply Space Designer with a Small Room preset for subtle reverb.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Result:</strong> The vocal sounds clean, clear, and polished, fitting perfectly in the mix.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Example 2: Editing and Compressing Drums</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Edit:</strong> Quantize a MIDI drum pattern to a 1/16-note grid, split the region to remove an extra hit, and copy/paste to repeat the loop.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Apply Effects:</strong> Add Compressor with a 4:1 ratio and -20 dB threshold, then use Channel EQ to boost 100 Hz for warmth and cut 500 Hz to reduce boxiness.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Result:</strong> The drums sound tight, punchy, and well-balanced in the mix.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Troubleshooting Tip:</HighlightedText> If an effect sounds too harsh (e.g., too much reverb), reduce the wet/dry mix or use a send/return setup to control the effect level more precisely.
          </ExpandedText>
          <ExpandedText>
            <HighlightedText>Pro Tip:</HighlightedText> Use automation (e.g., automate EQ gain) to dynamically adjust effects over time, such as boosting vocal brightness only during the chorus.
          </ExpandedText>
        </>
      ),
    },
  ];

  return (
    <SubpageContainer>
      <SubpageTitle>Editing & Effects</SubpageTitle>
      <IntroText>
        Master the art of editing and effects in Logic Pro X to refine and enhance your tracks. From splitting and trimming regions to applying reverb and EQ, this page guides you through essential techniques with practical examples and tips. Toggle each section to dive deeper into creating polished, professional music!
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