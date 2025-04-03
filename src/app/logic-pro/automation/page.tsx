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

export default function Automation() {
  return (
    <SubpageContainer>
      <SubpageTitle>Automation</SubpageTitle>
      <SubpageText>
        Automation changes settings over time—press A to show lanes, select Volume, and draw a line from 0 dB to -12 dB for a fade-out. Try automating a filter cutoff on a synth: pick Retro Synth, add automation, and sweep from 100 Hz to 5 kHz for a dynamic effect.
      </SubpageText>
    </SubpageContainer>
  );
}