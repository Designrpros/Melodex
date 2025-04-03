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

export default function Layering() {
  return (
    <SubpageContainer>
      <SubpageTitle>Layering</SubpageTitle>
      <SubpageText>
        Layering combines sounds for depth. In Logic Pro X, create two tracks: use Alchemy for a lush pad (low volume, -12 dB), then add ES2 with a sharp pluck (higher volume, -6 dB). Pan the pad slightly left (-10) and the pluck right (+10) for width. Adjust EQ—cut the pad below 200 Hz, boost the pluck at 3 kHz—to make them sit together cleanly.
      </SubpageText>
    </SubpageContainer>
  );
}