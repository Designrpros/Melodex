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

export default function Interface() {
  return (
    <SubpageContainer>
      <SubpageTitle>Interface & Workflow</SubpageTitle>
      <SubpageText>
        Logic Pro X’s interface is your creative hub. The Tracks Area is where you stack audio and MIDI regions—click the + button to add tracks. The Mixer (X) shows faders for volume and panning, while Smart Controls give quick access to effects like reverb or distortion. Start a project: File <br/> Software Instrument, then pick a synth like Alchemy. Use the Library (Y) to browse presets—try a pad sound and tweak the filter knob in Smart Controls to hear it evolve.
      </SubpageText>
    </SubpageContainer>
  );
}