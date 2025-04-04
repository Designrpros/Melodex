"use client";

import { useState } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #000;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  display: flex;
`;

const MainContent = styled.div`
  flex: 1;
  margin-left: 200px;
  padding: 5rem 1rem 1rem 1rem; /* Account for fixed toolbar */

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const ContentContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Section = styled.section`
  margin-bottom: 0rem;
  scroll-margin-top: 4rem;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid #dcdcdc;
  padding-bottom: 0.2rem;
`;

const ToggleIcon = styled.span`
  font-size: 1.2rem;
  color: #dcdcdc;
`;

const SectionText = styled.p`
  font-size: 0.75rem;
  color: #dcdcdc;
  line-height: 1.4;
  margin-bottom: 0.75rem;
`;

const SectionContent = styled.div<{ isOpen: boolean }>`
  padding: ${({ isOpen }) => (isOpen ? "0.5rem 0" : "0")};
  height: ${({ isOpen }) => (isOpen ? "auto" : "0")};
  overflow: hidden;
`;

const SectionList = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  margin: 0;
`;

const ListItem = styled.li`
  font-size: 0.75rem;
  color: #dcdcdc;
  line-height: 1.4;
  margin-bottom: 0.5rem;
`;

const HighlightedText = styled.span`
  background-color: #fff;
  color: #000;
  padding: 0.1rem 0.3rem;
  border-radius: 3px;
  font-weight: 600;
`;

export default function Index() {
  const [isSidebarOpen] = useState(false); // Sidebar is desktop-only, no toggle needed
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    welcome: false,
    "notes-pitch": false,
    "rhythm-tempo": false,
    "chords-harmony": false,
    scales: false,
    dynamics: false,
    "sound-waves": false,
    synthesis: false,
    effects: false,
    interface: false,
    midi: false,
    recording: false,
    melody: false,
    "song-structure": false,
    eq: false,
    compression: false,
    automation: false,
    mixing: false,
    mastering: false,
    "music-theory": false,
    "sound-selection": false,
    arranging: false,
    "creative-effects": false,
    "vocal-recording": false,
  });

  const toggleSection = (sectionId: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  return (
    <PageContainer>
      <Sidebar />
      <MainContent>
        <ContentContainer>
          <Section id="welcome">
            <SectionHeader onClick={() => toggleSection("welcome")}>
              <SectionTitle>Welcome</SectionTitle>
              <ToggleIcon>{openSections.welcome ? "−" : "+"}</ToggleIcon>
            </SectionHeader>
            <SectionText>
              A dense snapshot of our music journey—everything we’re learning in one compact place. Use the sidebar to jump to bite-sized info bits.
            </SectionText>
            <SectionContent isOpen={openSections.welcome}>
              <SectionList>
                <ListItem>
                  <HighlightedText>Overview:</HighlightedText> A compact overview of music production concepts.
                </ListItem>
                <ListItem>
                  <HighlightedText>Navigation:</HighlightedText> Jump to topics using the sidebar (desktop only).
                </ListItem>
                <ListItem>Explore bite-sized info for quick learning.</ListItem>
                <ListItem>Toggle sections to see key points in bullet form.</ListItem>
              </SectionList>
            </SectionContent>
          </Section>

          <Section id="notes-pitch">
            <SectionHeader onClick={() => toggleSection("notes-pitch")}>
              <SectionTitle>Notes & Pitch</SectionTitle>
              <ToggleIcon>{openSections["notes-pitch"] ? "−" : "+"}</ToggleIcon>
            </SectionHeader>
            <SectionText>
              Notes are pitches—C4 is 261 Hz, A4 is 440 Hz. The chromatic scale has 12 steps per octave (C, C#, D, etc.). In Logic Pro X, the piano roll shows this—play C-D-E to hear steps.
            </SectionText>
            <SectionContent isOpen={openSections["notes-pitch"]}>
              <SectionList>
                <ListItem>
                  <HighlightedText>Pitch Basics:</HighlightedText> Notes represent pitches: C4 = 261 Hz, A4 = 440 Hz.
                </ListItem>
                <ListItem>
                  <HighlightedText>Chromatic Scale:</HighlightedText> 12 steps per octave (C, C#, D, etc.).
                </ListItem>
                <ListItem>Octave: Doubling of frequency (e.g., A4 to A5: 440 Hz to 880 Hz).</ListItem>
                <ListItem>In Logic Pro X, use the piano roll to play C-D-E.</ListItem>
                <ListItem>Tip: Adjust pitch in the piano roll by dragging notes up or down.</ListItem>
              </SectionList>
            </SectionContent>
          </Section>

          <Section id="rhythm-tempo">
            <SectionHeader onClick={() => toggleSection("rhythm-tempo")}>
              <SectionTitle>Rhythm & Tempo</SectionTitle>
              <ToggleIcon>{openSections["rhythm-tempo"] ? "−" : "+"}</ToggleIcon>
            </SectionHeader>
            <SectionText>
              Rhythm is beat patterns—4/4 means four beats per measure. Tempo is speed—120 BPM is moderate. Set Logic Pro X to 120 BPM and tap a 4/4 rhythm.
            </SectionText>
            <SectionContent isOpen={openSections["rhythm-tempo"]}>
              <SectionList>
                <ListItem>
                  <HighlightedText>Rhythm Basics:</HighlightedText> Beat patterns (e.g., 4/4 = four beats per measure).
                </ListItem>
                <ListItem>
                  <HighlightedText>Tempo Basics:</HighlightedText> Speed of music (e.g., 120 BPM = moderate).
                </ListItem>
                <ListItem>Time signatures: 4/4 (common), 3/4 (waltz), 6/8 (compound).</ListItem>
                <ListItem>In Logic Pro X, set to 120 BPM and tap a 4/4 rhythm.</ListItem>
                <ListItem>Tip: Use the metronome (click track) to stay on beat.</ListItem>
              </SectionList>
            </SectionContent>
          </Section>

          <Section id="chords-harmony">
            <SectionHeader onClick={() => toggleSection("chords-harmony")}>
              <SectionTitle>Chords & Harmony</SectionTitle>
              <ToggleIcon>{openSections["chords-harmony"] ? "−" : "+"}</ToggleIcon>
            </SectionHeader>
            <SectionText>
              Chords stack notes—C-E-G is C major (bright). Harmony is chord flow—try C major to G major in Logic Pro X for a simple progression.
            </SectionText>
            <SectionContent isOpen={openSections["chords-harmony"]}>
              <SectionList>
                <ListItem>
                  <HighlightedText>Chords:</HighlightedText> Stacked notes (e.g., C-E-G = C major, bright).
                </ListItem>
                <ListItem>
                  <HighlightedText>Harmony:</HighlightedText> Flow of chords (e.g., C major to G major).
                </ListItem>
                <ListItem>Major chords: Sound happy (e.g., C major).</ListItem>
                <ListItem>Minor chords: Sound sad (e.g., A minor: A-C-E).</ListItem>
                <ListItem>In Logic Pro X, try a C major to G major progression.</ListItem>
                <ListItem>Tip: Use the Chord Trigger in Logic Pro X to experiment with chords.</ListItem>
              </SectionList>
            </SectionContent>
          </Section>

          <Section id="scales">
            <SectionHeader onClick={() => toggleSection("scales")}>
              <SectionTitle>Scales</SectionTitle>
              <ToggleIcon>{openSections.scales ? "−" : "+"}</ToggleIcon>
            </SectionHeader>
            <SectionText>
              Scales set mood—C major (C-D-E-F-G-A-B) is happy, A minor (A-B-C-D-E-F-G) is sad. Play them in Logic Pro X’s piano roll to feel the vibe.
            </SectionText>
            <SectionContent isOpen={openSections.scales}>
              <SectionList>
                <ListItem>
                  <HighlightedText>Mood:</HighlightedText> Scales set mood: C major (happy), A minor (sad).
                </ListItem>
                <ListItem>
                  <HighlightedText>Examples:</HighlightedText> C major: C-D-E-F-G-A-B; A minor: A-B-C-D-E-F-G.
                </ListItem>
                <ListItem>Pentatonic scales: 5 notes (e.g., C-D-E-G-A, versatile).</ListItem>
                <ListItem>Blues scale: Adds "blue" notes (e.g., C-Eb-F-F#-G-Bb).</ListItem>
                <ListItem>In Logic Pro X, play scales in the piano roll.</ListItem>
                <ListItem>Tip: Use the Scale Quantize feature to lock notes to a scale.</ListItem>
              </SectionList>
            </SectionContent>
          </Section>

          <Section id="dynamics">
            <SectionHeader onClick={() => toggleSection("dynamics")}>
              <SectionTitle>Dynamics</SectionTitle>
              <ToggleIcon>{openSections.dynamics ? "−" : "+"}</ToggleIcon>
            </SectionHeader>
            <SectionText>
              Dynamics shift volume—pp (soft) to ff (loud). In Logic Pro X, adjust MIDI velocity (0-127) to make a melody swell from quiet to bold.
            </SectionText>
            <SectionContent isOpen={openSections.dynamics}>
              <SectionList>
                <ListItem>
                  <HighlightedText>Volume Changes:</HighlightedText> Dynamics: Volume changes (pp = soft, ff = loud).
                </ListItem>
                <ListItem>
                  <HighlightedText>MIDI Velocity:</HighlightedText> 0 (silent) to 127 (loudest).
                </ListItem>
                <ListItem>Dynamic markings: pp, p, mp, mf, f, ff.</ListItem>
                <ListItem>In Logic Pro X, adjust MIDI velocity (0-127).</ListItem>
                <ListItem>Make a melody swell from quiet to bold.</ListItem>
                <ListItem>Tip: Use automation to create gradual volume changes.</ListItem>
              </SectionList>
            </SectionContent>
          </Section>

          <Section id="sound-waves">
            <SectionHeader onClick={() => toggleSection("sound-waves")}>
              <SectionTitle>Sound Waves</SectionTitle>
              <ToggleIcon>{openSections["sound-waves"] ? "−" : "+"}</ToggleIcon>
            </SectionHeader>
            <SectionText>
              Waves define sound—sine is smooth, sawtooth is harsh. Frequency (Hz) is pitch, amplitude is volume. Use Logic Pro X’s Test Oscillator to hear a 440 Hz sine vs. saw.
            </SectionText>
            <SectionContent isOpen={openSections["sound-waves"]}>
              <SectionList>
                <ListItem>
                  <HighlightedText>Wave Types:</HighlightedText> Waves define sound: sine (smooth), sawtooth (harsh).
                </ListItem>
                <ListItem>
                  <HighlightedText>Frequency & Amplitude:</HighlightedText> Frequency (Hz) = pitch; amplitude = volume.
                </ListItem>
                <ListItem>Sine wave: Pure tone, no harmonics.</ListItem>
                <ListItem>Sawtooth wave: Rich in harmonics, gritty sound.</ListItem>
                <ListItem>Square wave: Hollow, 8-bit sound; triangle: softer.</ListItem>
                <ListItem>In Logic Pro X, use Test Oscillator (440 Hz sine vs. saw).</ListItem>
                <ListItem>Tip: Use an oscilloscope plugin to visualize waves.</ListItem>
              </SectionList>
            </SectionContent>
          </Section>

          <Section id="synthesis">
            <SectionHeader onClick={() => toggleSection("synthesis")}>
              <SectionTitle>Synthesis</SectionTitle>
              <ToggleIcon>{openSections.synthesis ? "−" : "+"}</ToggleIcon>
            </SectionHeader>
            <SectionText>
              Synthesis builds sound—oscillators (sawtooth), filters (low-pass), envelopes (ADSR). In Logic Pro X’s ES2, mix a saw and square, cut highs, and set a slow attack.
            </SectionText>
            <SectionContent isOpen={openSections.synthesis}>
              <SectionList>
                <ListItem>
                  <HighlightedText>Components:</HighlightedText> Synthesis: Oscillators (sawtooth), filters (low-pass), envelopes (ADSR).
                </ListItem>
                <ListItem>
                  <HighlightedText>Oscillators:</HighlightedText> Generate waveforms (saw, square, sine).
                </ListItem>
                <ListItem>Filters: Shape sound (low-pass cuts highs, high-pass cuts lows).</ListItem>
                <ListItem>Envelopes (ADSR): Attack, Decay, Sustain, Release control dynamics.</ListItem>
                <ListItem>In Logic Pro X’s ES2, mix saw and square waves.</ListItem>
                <ListItem>Cut highs with a filter, set a slow attack.</ListItem>
                <ListItem>Tip: Experiment with FM synthesis in ES2 for metallic tones.</ListItem>
              </SectionList>
            </SectionContent>
          </Section>

          <Section id="effects">
            <SectionHeader onClick={() => toggleSection("effects")}>
              <SectionTitle>Effects</SectionTitle>
              <ToggleIcon>{openSections.effects ? "−" : "+"}</ToggleIcon>
            </SectionHeader>
            <SectionText>
              Reverb adds space, delay echoes, compression evens out. In Logic Pro X, add Space Designer to a synth (Medium Hall) and tweak wet/dry for depth.
            </SectionText>
            <SectionContent isOpen={openSections.effects}>
              <SectionList>
                <ListItem>
                  <HighlightedText>Effect Types:</HighlightedText> Reverb: Adds space; delay: echoes; compression: evens out.
                </ListItem>
                <ListItem>
                  <HighlightedText>Reverb Types:</HighlightedText> Hall, room, plate (e.g., Space Designer’s Medium Hall).
                </ListItem>
                <ListItem>Delay: Echoes sound (e.g., 1/4 note delay for rhythm).</ListItem>
                <ListItem>Compression: Reduces dynamic range (e.g., 4:1 ratio, -20 dB threshold).</ListItem>
                <ListItem>In Logic Pro X, use Space Designer (Medium Hall).</ListItem>
                <ListItem>Tweak wet/dry for depth on a synth.</ListItem>
                <ListItem>Tip: Chain effects (e.g., reverb after delay) for richer sounds.</ListItem>
              </SectionList>
            </SectionContent>
          </Section>

          <Section id="interface">
            <SectionHeader onClick={() => toggleSection("interface")}>
              <SectionTitle>Logic Pro Interface</SectionTitle>
              <ToggleIcon>{openSections.interface ? "−" : "+"}</ToggleIcon>
            </SectionHeader>
            <SectionText>
              Tracks Area stacks clips, Mixer sets levels, Smart Controls tweak effects. Start a project in Logic Pro X: File, add a synth track, and adjust a filter.
            </SectionText>
            <SectionContent isOpen={openSections.interface}>
              <SectionList>
                <ListItem>
                  <HighlightedText>Tracks Area:</HighlightedText> Stacks clips; Mixer: sets levels.
                </ListItem>
                <ListItem>
                  <HighlightedText>Smart Controls:</HighlightedText> Tweak effects quickly.
                </ListItem>
                <ListItem>Inspector: Adjust track settings (e.g., volume, pan).</ListItem>
                <ListItem>Library: Access presets (e.g., synth patches).</ListItem>
                <ListItem>In Logic Pro X: File, add synth track, adjust filter.</ListItem>
                <ListItem>Tip: Use key commands (e.g., R to record, A for automation).</ListItem>
              </SectionList>
            </SectionContent>
          </Section>

          <Section id="midi">
            <SectionHeader onClick={() => toggleSection("midi")}>
              <SectionTitle>MIDI</SectionTitle>
              <ToggleIcon>{openSections.midi ? "−" : "+"}</ToggleIcon>
            </SectionHeader>
            <SectionText>
              MIDI programs notes—C1 for kicks, D1 for snares. In Logic Pro X, draw a 4-beat pattern in the piano roll with Drummer or Alchemy.
            </SectionText>
            <SectionContent isOpen={openSections.midi}>
              <SectionList>
                <ListItem>
                  <HighlightedText>MIDI Notes:</HighlightedText> MIDI programs notes: C1 (kicks), D1 (snares).
                </ListItem>
                <ListItem>
                  <HighlightedText>MIDI Channels:</HighlightedText> 1-16, for different instruments.
                </ListItem>
                <ListItem>Controllers: CC messages (e.g., CC1 for modulation).</ListItem>
                <ListItem>In Logic Pro X, draw a 4-beat pattern in piano roll.</ListItem>
                <ListItem>Use Drummer or Alchemy for sounds.</ListItem>
                <ListItem>Tip: Quantize MIDI (e.g., 1/16 note) to fix timing.</ListItem>
              </SectionList>
            </SectionContent>
          </Section>

          <Section id="recording">
            <SectionHeader onClick={() => toggleSection("recording")}>
              <SectionTitle>Recording</SectionTitle>
              <ToggleIcon>{openSections.recording ? "−" : "+"}</ToggleIcon>
            </SectionHeader>
            <SectionText>
              Record audio with R—set input levels to avoid clipping. In Logic Pro X, add an audio track, plug in a mic, and capture a riff at 90 BPM.
            </SectionText>
            <SectionContent isOpen={openSections.recording}>
              <SectionList>
                <ListItem>
                  <HighlightedText>Recording Basics:</HighlightedText> Record audio with R; set input levels to avoid clipping.
                </ListItem>
                <ListItem>
                  <HighlightedText>Input Monitoring:</HighlightedText> Hear yourself while recording.
                </ListItem>
                <ListItem>Sample rate: 44.1 kHz (standard for music).</ListItem>
                <ListItem>In Logic Pro X, add an audio track, plug in a mic.</ListItem>
                <ListItem>Capture a riff at 90 BPM.</ListItem>
                <ListItem>Tip: Use punch-in recording to fix mistakes.</ListItem>
              </SectionList>
            </SectionContent>
          </Section>

          <Section id="melody">
            <SectionHeader onClick={() => toggleSection("melody")}>
              <SectionTitle>Melody</SectionTitle>
              <ToggleIcon>{openSections.melody ? "−" : "+"}</ToggleIcon>
            </SectionHeader>
            <SectionText>
              Melody is the tune you hum—use a scale like C major for a happy vibe. In Logic Pro X, draw a melody in the piano roll with a synth lead.
            </SectionText>
            <SectionContent isOpen={openSections.melody}>
              <SectionList>
                <ListItem>
                  <HighlightedText>Melody Basics:</HighlightedText> A sequence of notes, often the main tune.
                </ListItem>
                <ListItem>
                  <HighlightedText>Scales for Mood:</HighlightedText> Use scales: C major for happy, A minor for sad.
                </ListItem>
                <ListItem>Motifs: Short, repeating ideas (e.g., 4-note phrase).</ListItem>
                <ListItem>In Logic Pro X, draw a melody in the piano roll.</ListItem>
                <ListItem>Use a synth lead (e.g., Alchemy’s lead preset).</ListItem>
                <ListItem>Tip: Vary note lengths for interest (e.g., quarter, eighth notes).</ListItem>
              </SectionList>
            </SectionContent>
          </Section>

          <Section id="song-structure">
            <SectionHeader onClick={() => toggleSection("song-structure")}>
              <SectionTitle>Song Structure</SectionTitle>
              <ToggleIcon>{openSections["song-structure"] ? "−" : "+"}</ToggleIcon>
            </SectionHeader>
            <SectionText>
              Song structure organizes your track—verse, chorus, bridge. In Logic Pro X, use markers to plan a verse-chorus-verse structure at 128 BPM.
            </SectionText>
            <SectionContent isOpen={openSections["song-structure"]}>
              <SectionList>
                <ListItem>
                  <HighlightedText>Structure Basics:</HighlightedText> Verse, chorus, bridge, intro, outro.
                </ListItem>
                <ListItem>
                  <HighlightedText>Verse & Chorus:</HighlightedText> Verse: Tells the story; chorus: main hook.
                </ListItem>
                <ListItem>Bridge: Adds contrast, often before final chorus.</ListItem>
                <ListItem>In Logic Pro X, use markers to plan structure.</ListItem>
                <ListItem>Try verse-chorus-verse at 128 BPM.</ListItem>
                <ListItem>Tip: Add an intro (e.g., 8 bars) to set the mood.</ListItem>
              </SectionList>
            </SectionContent>
          </Section>

          <Section id="eq">
            <SectionHeader onClick={() => toggleSection("eq")}>
              <SectionTitle>EQ (Equalization)</SectionTitle>
              <ToggleIcon>{openSections.eq ? "−" : "+"}</ToggleIcon>
            </SectionHeader>
            <SectionText>
              EQ shapes tone—cut lows on a vocal (below 100 Hz) to reduce rumble. In Logic Pro X, use Channel EQ to boost 3 kHz on a vocal for clarity.
            </SectionText>
            <SectionContent isOpen={openSections.eq}>
              <SectionList>
                <ListItem>
                  <HighlightedText>EQ Basics:</HighlightedText> Adjusts frequency balance (e.g., cut lows, boost highs).
                </ListItem>
                <ListItem>
                  <HighlightedText>Frequency Ranges:</HighlightedText> Low-end: 20-200 Hz (bass, warmth).
                </ListItem>
                <ListItem>Midrange: 200 Hz-5 kHz (clarity, presence).</ListItem>
                <ListItem>High-end: 5 kHz-20 kHz (air, sparkle).</ListItem>
                <ListItem>In Logic Pro X, use Channel EQ to boost 3 kHz on vocals.</ListItem>
                <ListItem>Cut below 100 Hz on vocals to reduce rumble.</ListItem>
                <ListItem>Tip: Use a high-pass filter on non-bass tracks.</ListItem>
              </SectionList>
            </SectionContent>
          </Section>

          <Section id="compression">
            <SectionHeader onClick={() => toggleSection("compression")}>
              <SectionTitle>Compression</SectionTitle>
              <ToggleIcon>{openSections.compression ? "−" : "+"}</ToggleIcon>
            </SectionHeader>
            <SectionText>
              Compression evens out dynamics—use a 4:1 ratio on drums. In Logic Pro X, apply Compressor to a drum loop with a -20 dB threshold for punch.
            </SectionText>
            <SectionContent isOpen={openSections.compression}>
              <SectionList>
                <ListItem>
                  <HighlightedText>Compression Basics:</HighlightedText> Reduces dynamic range for consistency.
                </ListItem>
                <ListItem>
                  <HighlightedText>Threshold & Ratio:</HighlightedText> Threshold: Level where compression starts (e.g., -20 dB).
                </ListItem>
                <ListItem>Ratio: Amount of reduction (e.g., 4:1).</ListItem>
                <ListItem>Attack/Release: How fast compression starts/stops.</ListItem>
                <ListItem>In Logic Pro X, apply Compressor to drums (4:1, -20 dB).</ListItem>
                <ListItem>Add punch to a drum loop with fast attack, medium release.</ListItem>
                <ListItem>Tip: Use sidechain compression for ducking (e.g., kick vs. bass).</ListItem>
              </SectionList>
            </SectionContent>
          </Section>

          <Section id="automation">
            <SectionHeader onClick={() => toggleSection("automation")}>
              <SectionTitle>Automation</SectionTitle>
              <ToggleIcon>{openSections.automation ? "−" : "+"}</ToggleIcon>
            </SectionHeader>
            <SectionText>
              Automation changes parameters over time—fade out a track. In Logic Pro X, automate volume on a synth to fade in over 8 bars.
            </SectionText>
            <SectionContent isOpen={openSections.automation}>
              <SectionList>
                <ListItem>
                  <HighlightedText>Automation Basics:</HighlightedText> Changes parameters over time (e.g., volume, pan).
                </ListItem>
                <ListItem>
                  <HighlightedText>Volume Automation:</HighlightedText> Create fades (e.g., fade out).
                </ListItem>
                <ListItem>Filter automation: Sweep cutoff for movement.</ListItem>
                <ListItem>In Logic Pro X, automate volume on a synth.</ListItem>
                <ListItem>Fade in over 8 bars for a smooth intro.</ListItem>
                <ListItem>Tip: Use automation curves for natural transitions.</ListItem>
              </SectionList>
            </SectionContent>
          </Section>

          <Section id="mixing">
            <SectionHeader onClick={() => toggleSection("mixing")}>
              <SectionTitle>Mixing</SectionTitle>
              <ToggleIcon>{openSections.mixing ? "−" : "+"}</ToggleIcon>
            </SectionHeader>
            <SectionText>
              Mixing balances tracks—lower the kick, pan guitars. In Logic Pro X, use the Mixer to set levels, pan a guitar left (-20), and add reverb to vocals.
            </SectionText>
            <SectionContent isOpen={openSections.mixing}>
              <SectionList>
                <ListItem>
                  <HighlightedText>Mixing Basics:</HighlightedText> Balances tracks for clarity and impact.
                </ListItem>
                <ListItem>
                  <HighlightedText>Levels & Panning:</HighlightedText> Levels: Set kick loud, vocals clear, background elements soft.
                </ListItem>
                <ListItem>Panning: Spread sounds (e.g., guitar left, synth right).</ListItem>
                <ListItem>EQ: Cut overlapping frequencies (e.g., bass vs. kick).</ListItem>
                <ListItem>In Logic Pro X, use Mixer to set levels.</ListItem>
                <ListItem>Pan a guitar left (-20), add reverb to vocals.</ListItem>
                <ListItem>Tip: Use a reference track to compare your mix.</ListItem>
              </SectionList>
            </SectionContent>
          </Section>

          <Section id="mastering">
            <SectionHeader onClick={() => toggleSection("mastering")}>
              <SectionTitle>Mastering</SectionTitle>
              <ToggleIcon>{openSections.mastering ? "−" : "+"}</ToggleIcon>
            </SectionHeader>
            <SectionText>
              Mastering polishes the final mix—add a limiter to boost volume. In Logic Pro X, use Adaptive Limiter on the master bus to reach -1 dB.
            </SectionText>
            <SectionContent isOpen={openSections.mastering}>
              <SectionList>
                <ListItem>
                  <HighlightedText>Mastering Basics:</HighlightedText> Polishes the mix for distribution.
                </ListItem>
                <ListItem>
                  <HighlightedText>Limiter:</HighlightedText> Boosts volume without clipping (e.g., -1 dB).
                </ListItem>
                <ListItem>EQ: Subtle boosts (e.g., 10 kHz for air).</ListItem>
                <ListItem>Stereo widening: Enhances width (use sparingly).</ListItem>
                <ListItem>In Logic Pro X, use Adaptive Limiter on master bus.</ListItem>
                <ListItem>Target -1 dB for loudness without distortion.</ListItem>
                <ListItem>Tip: Export at 24-bit depth for better quality.</ListItem>
              </SectionList>
            </SectionContent>
          </Section>

          <Section id="music-theory">
            <SectionHeader onClick={() => toggleSection("music-theory")}>
              <SectionTitle>Music Theory</SectionTitle>
              <ToggleIcon>{openSections["music-theory"] ? "−" : "+"}</ToggleIcon>
            </SectionHeader>
            <SectionText>
              Music theory helps you create—intervals like C to G (perfect fifth) add tension. In Logic Pro X, build a melody using intervals in the piano roll.
            </SectionText>
            <SectionContent isOpen={openSections["music-theory"]}>
              <SectionList>
                <ListItem>
                  <HighlightedText>Intervals:</HighlightedText> Distance between notes (e.g., C to G = perfect fifth).
                </ListItem>
                <ListItem>
                  <HighlightedText>Major/Minor:</HighlightedText> Major (happy), minor (sad).
                </ListItem>
                <ListItem>Key signatures: Define the tonal center (e.g., C major).</ListItem>
                <ListItem>Chord progressions: I-IV-V-I (e.g., C-F-G-C).</ListItem>
                <ListItem>In Logic Pro X, build a melody using intervals.</ListItem>
                <ListItem>Tip: Use the Key Signature setting to stay in key.</ListItem>
              </SectionList>
            </SectionContent>
          </Section>

          <Section id="sound-selection">
            <SectionHeader onClick={() => toggleSection("sound-selection")}>
              <SectionTitle>Sound Selection</SectionTitle>
              <ToggleIcon>{openSections["sound-selection"] ? "−" : "+"}</ToggleIcon>
            </SectionHeader>
            <SectionText>
              Sound selection shapes your track—choose a punchy kick for EDM. In Logic Pro X, browse the Library for a deep 808 kick.
            </SectionText>
            <SectionContent isOpen={openSections["sound-selection"]}>
              <SectionList>
                <ListItem>
                  <HighlightedText>Sound Selection Basics:</HighlightedText> Choose sounds to fit your genre.
                </ListItem>
                <ListItem>
                  <HighlightedText>Kicks:</HighlightedText> Punchy for EDM, deep for hip-hop (e.g., 808).
                </ListItem>
                <ListItem>Synths: Bright leads for pop, pads for ambient.</ListItem>
                <ListItem>In Logic Pro X, browse the Library for sounds.</ListItem>
                <ListItem>Pick a deep 808 kick for bass-heavy tracks.</ListItem>
                <ListItem>Tip: Layer sounds (e.g., kick + sub) for more impact.</ListItem>
              </SectionList>
            </SectionContent>
          </Section>

          <Section id="arranging">
            <SectionHeader onClick={() => toggleSection("arranging")}>
              <SectionTitle>Arranging</SectionTitle>
              <ToggleIcon>{openSections.arranging ? "−" : "+"}</ToggleIcon>
            </SectionHeader>
            <SectionText>
              Arranging builds your track’s flow—drop the bass after a buildup. In Logic Pro X, use the Arrange window to create a 16-bar buildup.
            </SectionText>
            <SectionContent isOpen={openSections.arranging}>
              <SectionList>
                <ListItem>
                  <HighlightedText>Arranging Basics:</HighlightedText> Organizes sections (e.g., buildup, drop).
                </ListItem>
                <ListItem>
                  <HighlightedText>Buildup & Drop:</HighlightedText> Buildup: Increase tension (e.g., add hi-hats, risers).
                </ListItem>
                <ListItem>Drop: Release tension (e.g., bring in bass, drums).</ListItem>
                <ListItem>In Logic Pro X, use Arrange window for sections.</ListItem>
                <ListItem>Create a 16-bar buildup before the drop.</ListItem>
                <ListItem>Tip: Use automation (e.g., filter sweep) in buildups.</ListItem>
              </SectionList>
            </SectionContent>
          </Section>

          <Section id="creative-effects">
            <SectionHeader onClick={() => toggleSection("creative-effects")}>
              <SectionTitle>Creative Effects</SectionTitle>
              <ToggleIcon>{openSections["creative-effects"] ? "−" : "+"}</ToggleIcon>
            </SectionHeader>
            <SectionText>
              Creative effects add flair—reverse a cymbal for a transition. In Logic Pro X, use Flex Time to stretch a vocal sample.
            </SectionText>
            <SectionContent isOpen={openSections["creative-effects"]}>
              <SectionList>
                <ListItem>
                  <HighlightedText>Creative Effects Basics:</HighlightedText> Add uniqueness (e.g., reverse, pitch shift).
                </ListItem>
                <ListItem>
                  <HighlightedText>Reverse & Pitch Shift:</HighlightedText> Reverse: Flip audio (e.g., cymbal for transitions).
                </ListItem>
                <ListItem>Pitch shift: Change pitch (e.g., vocal up an octave).</ListItem>
                <ListItem>In Logic Pro X, use Flex Time to stretch vocals.</ListItem>
                <ListItem>Reverse a cymbal for a dramatic transition.</ListItem>
                <ListItem>Tip: Use glitch effects (e.g., Stutter Edit) for modern sounds.</ListItem>
              </SectionList>
            </SectionContent>
          </Section>

          <Section id="vocal-recording">
            <SectionHeader onClick={() => toggleSection("vocal-recording")}>
              <SectionTitle>Vocal Recording</SectionTitle>
              <ToggleIcon>{openSections["vocal-recording"] ? "−" : "+"}</ToggleIcon>
            </SectionHeader>
            <SectionText>
              Vocal recording captures emotion—use a pop filter to reduce plosives. In Logic Pro X, record vocals with a condenser mic and add EQ at 5 kHz for presence.
            </SectionText>
            <SectionContent isOpen={openSections["vocal-recording"]}>
              <SectionList>
                <ListItem>
                  <HighlightedText>Vocal Recording Basics:</HighlightedText> Captures emotion in your track.
                </ListItem>
                <ListItem>
                  <HighlightedText>Pop Filter:</HighlightedText> Reduces plosives (e.g., "p" sounds).
                </ListItem>
                <ListItem>Mic choice: Condenser for clarity, dynamic for warmth.</ListItem>
                <ListItem>In Logic Pro X, record with a condenser mic.</ListItem>
                <ListItem>Add EQ at 5 kHz for vocal presence.</ListItem>
                <ListItem>Tip: Record multiple takes and comp the best parts.</ListItem>
              </SectionList>
            </SectionContent>
          </Section>
        </ContentContainer>
      </MainContent>
    </PageContainer>
  );
}