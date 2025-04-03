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

export default function Effects() {
  return (
    <SubpageContainer>
      <SubpageTitle>Effects</SubpageTitle>
      <SubpageText>
        Effects shape sound’s character. Reverb adds space—use Space Designer’s Large Hall on a piano for a cathedral vibe. Delay echoes notes—set Echo to 1/4 note timing on a guitar pluck. Compression controls peaks—apply Compressor (4:1 ratio, -20 dB threshold) to a drum loop for punch. In Logic Pro X, chain reverb and delay on a synth, adjusting wet/dry to blend the effects.
      </SubpageText>
    </SubpageContainer>
  );
}