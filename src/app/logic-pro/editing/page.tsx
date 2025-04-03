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

export default function Editing() {
  return (
    <SubpageContainer>
      <SubpageTitle>Editing & Effects</SubpageTitle>
      <SubpageText>
        Editing shapes your tracks—select the Scissors tool (Command+T) to split a region, or drag edges to trim. Effects add flavor: load Space Designer on a vocal for reverb (try the Medium Hall preset), then add Channel EQ—boost 2 kHz for brightness, cut 200 Hz to reduce mud. Copy (Command+C) and paste (Command+V) a region to repeat a hook.
      </SubpageText>
    </SubpageContainer>
  );
}