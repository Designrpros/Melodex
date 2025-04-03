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

export default function Recording() {
  return (
    <SubpageContainer>
      <SubpageTitle>Recording Audio</SubpageTitle>
      <SubpageText>
        Recording captures live sound—add an Audio Track (mic icon), plug in your mic or guitar, and check input in the Control Bar (avoid red clipping). Hit Record (R) to start, stop with Spacebar. Record a guitar riff—set tempo to 90 BPM and play over a Drummer track for rhythm.
      </SubpageText>
    </SubpageContainer>
  );
}