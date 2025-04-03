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

export default function Sampling() {
  return (
    <SubpageContainer>
      <SubpageTitle>Sampling</SubpageTitle>
      <SubpageText>
        Sampling turns real audio into instruments. Record a sound—like a spoon hitting a glass—into Logic Pro X via an audio track. Load it into Quick Sampler, pitch it down an octave for a deep tone, and set loop points (start at 0.1 sec, end at 0.5 sec) for a rhythmic effect. Play it with a MIDI keyboard to hear it transform.
      </SubpageText>
    </SubpageContainer>
  );
}