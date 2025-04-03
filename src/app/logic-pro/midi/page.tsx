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

export default function Midi() {
  return (
    <SubpageContainer>
      <SubpageTitle>MIDI Basics</SubpageTitle>
      <SubpageText>
        MIDI is digital data that triggers sounds in virtual instruments. Add a Software Instrument track, pick Drummer for beats or Alchemy for synths. Double-click the region to open the piano roll—draw kicks on C1, snares on D1 for a basic beat. Adjust velocity (yellow bars) to make hits louder (127) or softer (40). Layer a melody by drawing notes like C3-E3-G3 over 4 bars.
      </SubpageText>
    </SubpageContainer>
  );
}