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

export default function Mixing() {
  return (
    <SubpageContainer>
      <SubpageTitle>Mixing</SubpageTitle>
      <SubpageText>
        Mixing blends your tracks—open the Mixer (X), lower the kick (-6 dB) for headroom, pan guitars left (-20) and right (+20), and add Compressor (2:1 ratio, -20 dB threshold) to drums for punch. EQ the vocal: cut 200 Hz, boost 3 kHz for presence. Listen and adjust until it feels balanced.
      </SubpageText>
    </SubpageContainer>
  );
}