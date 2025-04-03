"use client";

import styled from "styled-components";

const SubpageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #000;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  padding: 2rem;
`;

const SubpageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

const SubpageText = styled.p`
  font-size: 1.25rem;
  color: #dcdcdc;
  line-height: 1.8;
`;

export default function Synthesis() {
  return (
    <SubpageContainer>
      <SubpageTitle>Synthesis Fundamentals</SubpageTitle>
      <SubpageText>
        Synthesis builds sounds from raw waves. Oscillators create the base—try a square wave in Retro Synth for a bold tone. Filters cut frequencies—low-pass at 1 kHz keeps it warm, high-pass at 500 Hz makes it thin. Envelopes shape dynamics: set a slow attack (1 sec) for a pad, fast attack (10 ms) for a pluck. In Logic Pro X’s ES2, mix two oscillators (saw and square), lower the cutoff, and tweak the release for a smooth fade.
      </SubpageText>
    </SubpageContainer>
  );
}