"use client";

import styled from "styled-components";
import { useState } from "react";
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
  margin-left: 200px; /* Offset for sidebar on desktop */
  padding: 1rem;

  @media (max-width: 768px) {
    margin-left: 0; /* No offset on mobile when sidebar is hidden */
  }
`;

const Header = styled.header`
  background: #1a1a1a;
  padding: 1rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const HeaderTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
`;

const ContentContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Section = styled.section`
  margin-bottom: 1.5rem;
  scroll-margin-top: 1.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid #dcdcdc;
  padding-bottom: 0.2rem;
`;

const SectionText = styled.p`
  font-size: 0.75rem;
  color: #dcdcdc;
  line-height: 1.4;
  margin-bottom: 0.75rem;
`;

export default function Index() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Closed by default on mobile

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <PageContainer>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <MainContent>
        <Header>
          <HeaderTitle>Index</HeaderTitle>
        </Header>

        <ContentContainer>
          <Section id="welcome">
            <SectionTitle>Welcome</SectionTitle>
            <SectionText>
              A dense snapshot of our music journey—everything we’re learning in one compact place. Use the sidebar to jump to bite-sized info bits.
            </SectionText>
          </Section>

          <Section id="notes-pitch">
            <SectionTitle>Notes & Pitch</SectionTitle>
            <SectionText>
              Notes are pitches—C4 is 261 Hz, A4 is 440 Hz. The chromatic scale has 12 steps per octave (C, C#, D, etc.). In Logic Pro X, the piano roll shows this—play C-D-E to hear steps.
            </SectionText>
          </Section>

          <Section id="rhythm-tempo">
            <SectionTitle>Rhythm & Tempo</SectionTitle>
            <SectionText>
              Rhythm is beat patterns—4/4 means four beats per measure. Tempo is speed—120 BPM is moderate. Set Logic Pro X to 120 BPM and tap a 4/4 rhythm.
            </SectionText>
          </Section>

          <Section id="chords-harmony">
            <SectionTitle>Chords & Harmony</SectionTitle>
            <SectionText>
              Chords stack notes—C-E-G is C major (bright). Harmony is chord flow—try C major to G major in Logic Pro X for a simple progression.
            </SectionText>
          </Section>

          <Section id="scales">
            <SectionTitle>Scales</SectionTitle>
            <SectionText>
              Scales set mood—C major (C-D-E-F-G-A-B) is happy, A minor (A-B-C-D-E-F-G) is sad. Play them in Logic Pro X’s piano roll to feel the vibe.
            </SectionText>
          </Section>

          <Section id="dynamics">
            <SectionTitle>Dynamics</SectionTitle>
            <SectionText>
              Dynamics shift volume—pp (soft) to ff (loud). In Logic Pro X, adjust MIDI velocity (0-127) to make a melody swell from quiet to bold.
            </SectionText>
          </Section>

          <Section id="sound-waves">
            <SectionTitle>Sound Waves</SectionTitle>
            <SectionText>
              Waves define sound—sine is smooth, sawtooth is harsh. Frequency (Hz) is pitch, amplitude is volume. Use Logic Pro X’s Test Oscillator to hear a 440 Hz sine vs. saw.
            </SectionText>
          </Section>

          <Section id="synthesis">
            <SectionTitle>Synthesis</SectionTitle>
            <SectionText>
              Synthesis builds sound—oscillators (sawtooth), filters (low-pass), envelopes (ADSR). In Logic Pro X’s ES2, mix a saw and square, cut highs, and set a slow attack.
            </SectionText>
          </Section>

          <Section id="effects">
            <SectionTitle>Effects</SectionTitle>
            <SectionText>
              Reverb adds space, delay echoes, compression evens out. In Logic Pro X, add Space Designer to a synth (Medium Hall) and tweak wet/dry for depth.
            </SectionText>
          </Section>

          <Section id="interface">
            <SectionTitle>Logic Pro Interface</SectionTitle>
            <SectionText>
              Tracks Area stacks clips, Mixer sets levels, Smart Controls tweak effects. Start a project in Logic Pro X: File New, add a synth track, and adjust a filter.
            </SectionText>
          </Section>

          <Section id="midi">
            <SectionTitle>MIDI</SectionTitle>
            <SectionText>
              MIDI programs notes—C1 for kicks, D1 for snares. In Logic Pro X, draw a 4-beat pattern in the piano roll with Drummer or Alchemy.
            </SectionText>
          </Section>

          <Section id="recording">
            <SectionTitle>Recording</SectionTitle>
            <SectionText>
              Record audio with R—set input levels to avoid clipping. In Logic Pro X, add an audio track, plug in a mic, and capture a riff at 90 BPM.
            </SectionText>
          </Section>
        </ContentContainer>
      </MainContent>
    </PageContainer>
  );
}