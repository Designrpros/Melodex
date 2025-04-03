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

export default function Basics() {
  return (
    <SubpageContainer>
      <SubpageTitle>Sound Basics</SubpageTitle>
      <SubpageText>
        Sound is all about waves—vibrations moving through air. Sine waves are pure tones (smooth hum), square waves are buzzy (think 8-bit games), sawtooth waves are harsh (great for basses), and triangle waves are soft (like a mellow flute). Frequency (Hz) is pitch—440 Hz is A4, 220 Hz is A3. Amplitude is loudness—higher means louder. In Logic Pro X, use the Test Oscillator: set it to sine at 440 Hz, then switch to sawtooth to hear the grit.
      </SubpageText>
    </SubpageContainer>
  );
}