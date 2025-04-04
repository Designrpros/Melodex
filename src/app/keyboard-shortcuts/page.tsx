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

const ShortcutTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
`;

const TableHeader = styled.th`
  background: #1a1a1a;
  padding: 0.5rem;
  border: 1px solid #dcdcdc;
  font-weight: 600;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background: #111;
  }
`;

const TableCell = styled.td`
  padding: 0.5rem;
  border: 1px solid #dcdcdc;
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

export default function Shortcuts() {
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
      title: "General Shortcuts",
      content: (
        <>
          <SectionText>
            These shortcuts help you navigate and manage your Logic Pro X project efficiently.
          </SectionText>
          <ShortcutTable>
            <thead>
              <TableRow>
                <TableHeader>Shortcut</TableHeader>
                <TableHeader>Action</TableHeader>
                <TableHeader>Description</TableHeader>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <TableCell>⌘ + S</TableCell>
                <TableCell>Save Project</TableCell>
                <TableCell>Saves your current project to avoid losing progress.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>⌘ + Z</TableCell>
                <TableCell>Undo</TableCell>
                <TableCell>Reverses the last action (e.g., undoing a region deletion).</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>⌘ + Shift + Z</TableCell>
                <TableCell>Redo</TableCell>
                <TableCell>Reapplies the last undone action.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>⌘ + 1</TableCell>
                <TableCell>Show Tracks Area</TableCell>
                <TableCell>Opens the main Tracks Area for arranging regions.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>⌥ + K</TableCell>
                <TableCell>Open Key Commands</TableCell>
                <TableCell>Opens the Key Commands window to view or customize shortcuts.</TableCell>
              </TableRow>
            </tbody>
          </ShortcutTable>
          <ExpandedText>
            <HighlightedText>Practical Example:</HighlightedText> While working on a project, press ⌘ + S to save your progress, then use ⌘ + Z to undo a mistake, like deleting a region, and ⌘ + Shift + Z to redo it if needed.
          </ExpandedText>
        </>
      ),
    },
    {
      title: "Recording Shortcuts",
      content: (
        <>
          <SectionText>
            These shortcuts streamline the recording process in Logic Pro X.
          </SectionText>
          <ShortcutTable>
            <thead>
              <TableRow>
                <TableHeader>Shortcut</TableHeader>
                <TableHeader>Action</TableHeader>
                <TableHeader>Description</TableHeader>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <TableCell>R</TableCell>
                <TableCell>Record</TableCell>
                <TableCell>Starts recording on the selected, armed track.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Spacebar</TableCell>
                <TableCell>Stop/Play</TableCell>
                <TableCell>Stops recording or playback; plays from the playhead if stopped.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>⌘ + ⌥ + A</TableCell>
                <TableCell>New Audio Track</TableCell>
                <TableCell>Adds a new audio track for recording live audio (e.g., vocals).</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Control + R</TableCell>
                <TableCell>Enable Record on Track</TableCell>
                <TableCell>Arms the selected track for recording.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>⌥ + U</TableCell>
                <TableCell>Set Precise Cycle Range</TableCell>
                <TableCell>Sets a cycle range to the selected region for loop recording.</TableCell>
              </TableRow>
            </tbody>
          </ShortcutTable>
          <ExpandedText>
            <HighlightedText>Practical Example:</HighlightedText> Set up a vocal recording by pressing ⌘ + ⌥ + A to add an audio track, Control + R to arm it, R to start recording, and Spacebar to stop when done.
          </ExpandedText>
        </>
      ),
    },
    {
      title: "Editing Shortcuts",
      content: (
        <>
          <SectionText>
            These shortcuts help you edit audio and MIDI regions quickly.
          </SectionText>
          <ShortcutTable>
            <thead>
              <TableRow>
                <TableHeader>Shortcut</TableHeader>
                <TableHeader>Action</TableHeader>
                <TableHeader>Description</TableHeader>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <TableCell>⌘ + T</TableCell>
                <TableCell>Split Region</TableCell>
                <TableCell>Splits the selected region at the playhead (e.g., to remove a mistake).</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>⌘ + X</TableCell>
                <TableCell>Cut</TableCell>
                <TableCell>Cuts the selected region to the clipboard.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>⌘ + C</TableCell>
                <TableCell>Copy</TableCell>
                <TableCell>Copies the selected region to the clipboard.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>⌘ + V</TableCell>
                <TableCell>Paste</TableCell>
                <TableCell>Pastes the copied region at the playhead position.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Q</TableCell>
                <TableCell>Quantize MIDI</TableCell>
                <TableCell>Aligns selected MIDI notes to a grid (e.g., 1/16 note).</TableCell>
              </TableRow>
            </tbody>
          </ShortcutTable>
          <ExpandedText>
            <HighlightedText>Practical Example:</HighlightedText> Edit a vocal region by pressing ⌘ + T to split it at 2:00, removing a mistake, then use ⌘ + C and ⌘ + V to copy and paste a section to repeat a chorus.
          </ExpandedText>
        </>
      ),
    },
    {
      title: "Mixing Shortcuts ",
      content: (
        <>
          <SectionText>
            These shortcuts assist with mixing tasks in Logic Pro X.
          </SectionText>
          <ShortcutTable>
            <thead>
              <TableRow>
                <TableHeader>Shortcut</TableHeader>
                <TableHeader>Action</TableHeader>
                <TableHeader>Description</TableHeader>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <TableCell>X</TableCell>
                <TableCell>Show Mixer</TableCell>
                <TableCell>Opens the Mixer view to adjust levels and effects.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>M</TableCell>
                <TableCell>Mute/Unmute Track</TableCell>
                <TableCell>Toggles mute on the selected track to check its impact.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>⌘ + B</TableCell>
                <TableCell>Bounce</TableCell>
                <TableCell>Bounces the project or selected region to an audio file.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>A</TableCell>
                <TableCell>Show Automation</TableCell>
                <TableCell>Displays automation lanes for volume, pan, or effects.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>⌘ + F2</TableCell>
                <TableCell>Show Mixer in Separate Window</TableCell>
                <TableCell>Opens the Mixer in a new window for dual-screen workflows.</TableCell>
              </TableRow>
            </tbody>
          </ShortcutTable>
          <ExpandedText>
            <HighlightedText>Practical Example:</HighlightedText> During mixing, press X to open the Mixer, M to mute the vocal track and hear the instrumental balance, then A to automate the vocal volume for a fade-in.
          </ExpandedText>
        </>
      ),
    },
    {
      title: "MIDI Shortcuts",
      content: (
        <>
          <SectionText>
            These shortcuts are useful for working with MIDI in Logic Pro X.
          </SectionText>
          <ShortcutTable>
            <thead>
              <TableRow>
                <TableHeader>Shortcut</TableHeader>
                <TableHeader>Action</TableHeader>
                <TableHeader>Description</TableHeader>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <TableCell>P</TableCell>
                <TableCell>Show Piano Roll</TableCell>
                <TableCell>Opens the piano roll to edit MIDI notes.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>⌘ + ⌥ + S</TableCell>
                <TableCell>New Software Instrument Track</TableCell>
                <TableCell>Adds a new track for MIDI instruments (e.g., synths).</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>⌥ + Up/Down</TableCell>
                <TableCell>Transpose MIDI Half Step</TableCell>
                <TableCell>Transposes selected MIDI notes up or down by a half step.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>⌥ + Shift + Up/Down</TableCell>
                <TableCell>Transpose MIDI Octave</TableCell>
                <TableCell>Transposes selected MIDI notes up or down by an octave.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>⌘ + ⌥ + X</TableCell>
                <TableCell>New External MIDI Track</TableCell>
                <TableCell>Adds a new track for external MIDI devices.</TableCell>
              </TableRow>
            </tbody>
          </ShortcutTable>
          <ExpandedText>
            <HighlightedText>Practical Example:</HighlightedText> Create a synth part by pressing ⌘ + ⌥ + S to add a software instrument track, P to open the piano roll, draw a melody, and use ⌥ + Up to transpose it up a half step.
          </ExpandedText>
        </>
      ),
    },
    {
      title: "Synthesis Shortcuts",
      content: (
        <>
          <SectionText>
            These shortcuts help with sound design and synthesis tasks in Logic Pro X.
          </SectionText>
          <ShortcutTable>
            <thead>
              <TableRow>
                <TableHeader>Shortcut</TableHeader>
                <TableHeader>Action</TableHeader>
                <TableHeader>Description</TableHeader>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <TableCell>Y</TableCell>
                <TableCell>Show Library</TableCell>
                <TableCell>Opens the Library to browse synth presets (e.g., for ES2, Alchemy).</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>B</TableCell>
                <TableCell>Show Smart Controls</TableCell>
                <TableCell>Opens Smart Controls to tweak synth parameters (e.g., filter cutoff).</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>⌘ + D</TableCell>
                <TableCell>Duplicate Track</TableCell>
                <TableCell>Duplicates the selected track (e.g., to layer synth sounds).</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>⌘ + F1</TableCell>
                <TableCell>Show Main Window</TableCell>
                <TableCell>Brings up the main window to access synth plugins and settings.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>A</TableCell>
                <TableCell>Show Automation</TableCell>
                <TableCell>Displays automation lanes to modulate synth parameters (e.g., filter cutoff).</TableCell>
              </TableRow>
            </tbody>
          </ShortcutTable>
          <ExpandedText>
            <HighlightedText>Practical Example:</HighlightedText> Design a synth sound by pressing Y to open the Library, selecting an ES2 preset, B to tweak the filter in Smart Controls, and A to automate the filter cutoff for a sweep.
          </ExpandedText>
        </>
      ),
    },
    {
      title: "Customizing Shortcuts and Workflow Tips",
      content: (
        <>
          <SectionText>
            Learn how to customize shortcuts and improve your workflow with these tips.
          </SectionText>
          <ExpandedText>
            <HighlightedText>Customizing Shortcuts:</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Open Key Commands Window:</strong> Press ⌥ + K to access the Key Commands window, where you can search for commands and assign new shortcuts.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Assign a Key:</strong> Select a command (e.g., "Bounce"), click "Learn by Key Label," and press your desired key combination (e.g., ⌘ + Shift + B).
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Assign to MIDI Controller:</strong> Click "Learn New Assignment," press a button on your MIDI controller, and confirm to map the command.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Workflow Tips:</HighlightedText>
          </ExpandedText>
          <ExpandedList>
            <ExpandedListItem>
              <strong>Memorize Gradually:</strong> Learn one new shortcut per session (e.g., R for recording) and use it consistently until it becomes second nature.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Use Cheatsheet App:</strong> Apps like “Cheatsheet” for macOS can display all shortcuts by holding the Command key, helping you learn on the go.
            </ExpandedListItem>
            <ExpandedListItem>
              <strong>Backup Custom Shortcuts:</strong> In the Key Commands window, use "Copy Key Commands to Clipboard" to save your custom shortcuts, or "Import Key Commands" to transfer them to another computer.
            </ExpandedListItem>
          </ExpandedList>
          <ExpandedText>
            <HighlightedText>Practical Example:</HighlightedText> Customize a shortcut by pressing ⌥ + K, searching for "Bounce," assigning ⌘ + Shift + B, then using it to quickly bounce your project after mixing.
          </ExpandedText>
          <ExpandedText>
            <HighlightedText>Pro Tip:</HighlightedText> Reserve a temporary key combination (e.g., Shift + Control + Option + Command + K) for one-session shortcuts to avoid overwriting permanent ones, then reassign if you use it frequently.
          </ExpandedText>
        </>
      ),
    },
  ];

  return (
    <SubpageContainer>
      <SubpageTitle>Logic Pro Shortcuts</SubpageTitle>
      <IntroText>
        Boost your workflow in Logic Pro X with this comprehensive shortcuts cheat sheet. Organized into categories, these tables provide essential key commands to help you navigate, record, edit, mix, and design sounds efficiently. Toggle each section to explore shortcuts, practical examples, and tips for customizing your workflow!
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