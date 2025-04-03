"use client";

import styled from "styled-components";
import Image from "next/image";

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 95vh; /* Full viewport height minus a small margin */
  overflow: hidden;
  background: #000; /* Fallback for black theme */
`;

const HeroImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
  filter: grayscale(100%); /* Black-and-white filter */
  opacity: 0.8; /* Slight transparency to make text pop */
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Center the text */
  text-align: center;
  color: #fff; /* White text for contrast */
  z-index: 1; /* Ensure text is above the image */
`;

const Heading = styled.h2`
  font-size: 3.5rem;
  font-weight: 700;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Subtle shadow for readability */
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
  color: #dcdcdc; /* Light gray for secondary text */
  margin-top: 1rem;
  line-height: 1.6;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
`;

export default function Home() {
  return (
    <div>
      <HeroContainer>
        <HeroImage
          src="/images/Hero.jpg"
          alt="Melodex Hero Image"
          layout="fill"
          priority /* Preload for faster rendering */
        />
        <TextOverlay>
          <Heading>Welcome to Melodex</Heading>
          <Paragraph>
            Your interactive learning hub for music theory and production.
          </Paragraph>
        </TextOverlay>
      </HeroContainer>
    </div>
  );
}