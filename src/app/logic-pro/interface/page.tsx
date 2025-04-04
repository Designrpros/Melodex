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

export default function Interface() {
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
      title: "Overview of Logic Pro X Interface",
      content: (
        <>
          <SectionText>
            Logic Pro X’s interface is your creative hub, designed to help you arrange, edit, and mix your music efficiently.
          </SectionText>
          <ExpandedText>
            <HighlightedText>Key Concept:</HighlightedText> The interface is divided into several areas, each serving a specific purpose in your music production workflow, from arranging tracks to mixing and editing.
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Tracks Area:</strong> The main workspace where you stack audio and MIDI regions to build your song.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Mixer:</strong> A dedicated view for adjusting volume, panning, and effects for each track.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Smart Controls:</strong> Quick access to effects and parameters (e.g., reverb, distortion) for easy tweaking.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Library:</strong> A collection of presets and sounds (e.g., synths, drum kits) to inspire your creativity.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Why It Matters:</HighlightedText> Understanding the interface allows you to navigate Logic Pro X efficiently, making your workflow smoother and more intuitive as you create music.
          </ExpandedText>
        </>
      ),
    },
    {
      title: "Key Interface Components",
      content: (
        <>
          <SectionText>
            The Tracks Area, Mixer, Smart Controls, and Library are essential components of Logic Pro X’s interface, each with a specific role.
          </SectionText>
          <ExpandedText>
            <HighlightedText>Component 1: Tracks Area</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Purpose:</strong> Stack and arrange audio and MIDI regions (e.g., a vocal recording, a synth melody).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>How to Use:</strong> Click the + button to add tracks, drag regions to rearrange, and zoom in/out (Command + arrow keys) for precision.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Component 2: Mixer</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Purpose:</strong> Adjust volume, panning, and effects for each track (e.g., lower the kick, pan guitars).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>How to Use:</strong> Press X to open the Mixer, use faders to adjust volume, and add effects like EQ or reverb to each channel.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Component 3: Smart Controls</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Purpose:</strong> Provide quick access to effects and parameters (e.g., reverb, distortion) for real-time tweaking.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>How to Use:</strong> Open Smart Controls (B), adjust knobs like filter cutoff or reverb mix, and hear changes instantly.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Component 4: Library</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Purpose:</strong> Browse presets and sounds (e.g., synths, drum kits) to add to your tracks.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>How to Use:</strong> Press Y to open the Library, select a preset (e.g., a pad sound), and load it onto your track.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Additional Component: Inspector</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Purpose:</strong> Adjust track settings (e.g., volume, pan, quantization) and region parameters (e.g., transpose, velocity).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>How to Use:</strong> Click the Inspector button (I) to view track and region details, then adjust settings as needed.
            </ExpandedListItem>
          </ExpandedList>
        </>
      ),
    },
    {
      title: "Setting Up Your First Project",
      content: (
        <>
          <SectionText>
            Start a project in Logic Pro X by creating a new software instrument track, selecting a synth like Alchemy, and browsing presets in the Library.
          </SectionText>
          <ExpandedText>
            <HighlightedText>Step-by-Step Guide:</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Create a New Project:</strong> Go to File, choose a project template (e.g., Empty Project), and set the tempo (e.g., 120 BPM).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Add a Track:</strong> Click the + button in the Tracks Area, select Software Instrument, and choose a synth like Alchemy.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Browse Presets:</strong> Press Y to open the Library, select a preset (e.g., a pad sound under Synths Pads), and load it onto your track.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Tweak with Smart Controls:</strong> Open Smart Controls (B), adjust the filter knob (e.g., cutoff from 100 Hz to 5 kHz) to hear the sound evolve.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Add a MIDI Region:</strong> Double-click in the Tracks Area to create a MIDI region, open the piano roll (P), and program a simple melody (e.g., C-D-E-F).
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Practical Example:</HighlightedText> Create a new project, add an Alchemy track, load a pad preset from the Library, tweak the filter cutoff in Smart Controls, and program a C major melody in the piano roll to start your track.
          </ExpandedText>
          <ExpandedText>
            <HighlightedText>Tip:</HighlightedText> Save your project frequently (Command+S) to avoid losing progress, and use the Project Browser (F) to manage multiple takes or versions.
          </ExpandedText>
        </>
      ),
    },
    {
      title: "Workflow Tips and Shortcuts",
      content: (
        <>
          <SectionText>
            Streamline your workflow in Logic Pro X with shortcuts and tips for navigating the interface and managing your project.
          </SectionText>
          <ExpandedText>
            <HighlightedText>Tip 1: Use Key Commands</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Show/Hide Tracks Area:</strong> Press Command+1 to toggle the Tracks Area view.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Open Mixer:</strong> Press X to quickly access the Mixer for volume and effects adjustments.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Show Smart Controls:</strong> Press B to open Smart Controls and tweak effects.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Open Library:</strong> Press Y to browse presets in the Library.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Show Piano Roll:</strong> Press P to edit MIDI notes in the piano roll.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Tip 2: Customize the Toolbar</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Add Tools:</strong> Right-click the Toolbar, select Customize Toolbar, and add tools like the Loop tool or Fade tool for quick access.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Use Quick Access:</strong> Add buttons for common actions (e.g., Record, Play) to speed up your workflow.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Tip 3: Manage Tracks Efficiently</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Color-Code Tracks:</strong> Right-click a track, select Assign Track Color, and choose a color (e.g., blue for vocals) to organize your project.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Group Tracks:</strong> Select multiple tracks, right-click, and create a Track Stack (e.g., a Summing Stack for drums) to manage them as a group.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Troubleshooting Tip:</HighlightedText> If the Library doesn’t show presets, ensure the correct track type is selected (e.g., Software Instrument for synth presets), and check that the Library is enabled (View Show Library).
          </ExpandedText>
          <ExpandedText>
            <HighlightedText>Pro Tip:</HighlightedText> Use the Control Bar’s LCD display to quickly change the tempo, time signature, or key signature of your project without navigating menus.
          </ExpandedText>
        </>
      ),
    },
  ];

  return (
    <SubpageContainer>
      <SubpageTitle>Interface & Workflow</SubpageTitle>
      <IntroText>
        Navigate Logic Pro X’s interface and streamline your workflow to create music efficiently. From the Tracks Area to Smart Controls, this page guides you through the essential components and workflows, with practical tips and shortcuts to get you started. Toggle each section to dive deeper into mastering your creative hub!
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