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

export default function Recording() {
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
      title: "What is Audio Recording?",
      content: (
        <>
          <SectionText>
            Audio recording captures live sound, such as vocals, guitars, or drums, directly into Logic Pro X for editing and mixing.
          </SectionText>
          <ExpandedText>
            <HighlightedText>Key Concept:</HighlightedText> Audio recording involves capturing real-time performances using a microphone or instrument input, converting them into digital audio regions that you can edit and enhance in Logic Pro X.
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Input Sources:</strong> Use a microphone for vocals/drums or a direct input for guitars/basses (e.g., via an audio interface).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Audio Tracks:</strong> Record onto Audio Tracks in Logic Pro X, which store the captured sound as regions.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Monitoring:</strong> Listen to your performance in real-time through headphones to avoid feedback.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Recording Quality:</strong> Ensure proper input levels to avoid clipping (e.g., keep levels below 0 dB).
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Why It Matters:</HighlightedText> Recording allows you to capture live performances, adding authenticity and emotion to your tracks, which you can then refine with editing and effects.
          </ExpandedText>
        </>
      ),
    },
    {
      title: "Setting Up for Recording in Logic Pro X",
      content: (
        <>
          <SectionText>
            Add an Audio Track, connect your mic or instrument, and check input levels to prepare for recording.
          </SectionText>
          <ExpandedText>
            <HighlightedText>Step-by-Step Guide:</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Add an Audio Track:</strong> Click the + button in the Tracks Area, select Audio Track (mic icon), and choose your input device (e.g., your audio interface).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Connect Your Input:</strong> Plug in your microphone (e.g., via XLR) or instrument (e.g., guitar via 1/4" cable) into your audio interface, and ensure Logic Pro X recognizes the input (Preferences Audio Devices).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Check Input Levels:</strong> Enable input monitoring (I) on the track, speak/play into your mic/instrument, and watch the Control Bar’s level meter—adjust gain on your interface to avoid red clipping (keep below 0 dB).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Set Monitoring:</strong> Use headphones to monitor your performance, and enable Software Monitoring in Logic Pro X (Preferences Audio General) to hear effects in real-time.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Prepare the Project:</strong> Set the tempo (e.g., 90 BPM) and add a Drummer track for rhythm to play along with.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Practical Example:</HighlightedText> Add an Audio Track, connect your guitar to your audio interface, select the correct input, check levels to ensure they peak at -6 dB, set the tempo to 90 BPM, and add a Drummer track to provide a beat.
          </ExpandedText>
          <ExpandedText>
            <HighlightedText>Tip:</HighlightedText> Use a pop filter for vocal recordings to reduce plosives (e.g., "p" sounds), and position the mic 6-12 inches from your mouth for optimal clarity.
          </ExpandedText>
        </>
      ),
    },
    {
      title: "Recording Your First Audio",
      content: (
        <>
          <SectionText>
            Hit Record (R) to start capturing your performance, and stop with the Spacebar—try recording a guitar riff over a Drummer track.
          </SectionText>
          <ExpandedText>
            <HighlightedText>Example 1: Recording a Guitar Riff</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Setup:</strong> Add an Audio Track, connect your guitar, set the tempo to 90 BPM, and add a Drummer track for rhythm.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Record:</strong> Arm the track (click the R button on the track header), press R to start recording, play your riff, and press the Spacebar to stop.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Review:</strong> Play back the recording (Spacebar) to check for mistakes, and re-record if needed (press R again to overwrite).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Result:</strong> A guitar riff recorded in sync with the Drummer track, ready for editing and mixing.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Example 2: Recording Vocals</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Setup:</strong> Add an Audio Track, connect a condenser mic, set the tempo to 120 BPM, and add a backing track (e.g., a piano loop).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Record:</strong> Arm the track, press R to record, sing your vocal part, and press the Spacebar to stop.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Review:</strong> Listen back to ensure clarity and timing, and re-record if necessary.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Result:</strong> A vocal recording that sits well with the backing track, ready for further processing.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Tip:</HighlightedText> Record multiple takes by enabling Cycle mode (click the Cycle button in the Control Bar) and looping a section—Logic Pro X will create a new take each time.
          </ExpandedText>
        </>
      ),
    },
    {
      title: "Advanced Recording Techniques and Tips",
      content: (
        <>
          <SectionText>
            Enhance your recordings with techniques like comping takes, punch recording, and setting up a vocal chain.
          </SectionText>
          <ExpandedText>
            <HighlightedText>Technique 1: Comping Takes</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Purpose:</strong> Combine the best parts of multiple takes (e.g., best verse from take 1, best chorus from take 2).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>How to Use:</strong> Record multiple takes in Cycle mode, then click the take folder, select Quick Swipe Comping, and swipe to choose the best sections (e.g., swipe to use take 1 for the verse, take 3 for the chorus).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Example:</strong> Record three vocal takes, comp the best lines from each to create a seamless performance.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Technique 2: Punch Recording</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Purpose:</strong> Re-record a specific section without affecting the rest (e.g., fix a mistake in the second verse).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>How to Use:</strong> Enable Punch on the Fly (Control Bar Record Punch on the Fly), set the playhead to the section (e.g., 2:00), press R to record, and play the corrected part.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Example:</strong> Punch in at 2:00 to re-record a guitar note that was out of tune, seamlessly blending with the original take.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Technique 3: Setting Up a Vocal Chain</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>EQ:</strong> Add Channel EQ, apply a high-pass filter at 80 Hz to remove rumble, and boost 3 kHz for presence.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Compression:</strong> Insert Compressor (4:1 ratio, -25 dB threshold) to even out dynamics.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Reverb:</strong> Use a send to Space Designer (Small Room preset, wet/dry at 20%) for subtle depth.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Troubleshooting Tip:</HighlightedText> If you hear feedback while recording, lower the input gain on your audio interface, ensure Software Monitoring is off if using an external mixer, and use headphones to avoid mic bleed.
          </ExpandedText>
          <ExpandedText>
            <HighlightedText>Pro Tip:</HighlightedText> Use a preamp plugin (e.g., Logic’s Vintage Console) before recording to add warmth to your vocals or guitar, enhancing the tone right from the start.
          </ExpandedText>
        </>
      ),
    },
  ];

  return (
    <SubpageContainer>
      <SubpageTitle>Recording Audio</SubpageTitle>
      <IntroText>
        Learn how to record audio in Logic Pro X to capture live performances with clarity and precision. From setting up your mic to advanced techniques like comping takes, this page guides you through the recording process with practical examples and tips. Toggle each section to dive deeper into creating professional recordings!
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