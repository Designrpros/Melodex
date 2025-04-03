"use client";

import styled from "styled-components";
import Image from "next/image";

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #000;
  color: #fff;
  font-family: "Montserrat", sans-serif;
`;

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 95vh;
  overflow: hidden;
  background: #000;
`;

const HeroImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
  opacity: 0.8;
`;

const HeroText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 1;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin: 0;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  color: #dcdcdc;
  margin-top: 1rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
`;

const ContentContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  border-bottom: 2px solid #dcdcdc;
  padding-bottom: 0.5rem;
`;

const SectionText = styled.p`
  font-size: 1.2rem;
  color: #dcdcdc;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const SectionList = styled.ul`
  list-style-type: disc;
  padding-left: 2rem;
  margin-bottom: 1rem;
`;

const ListItem = styled.li`
  font-size: 1.2rem;
  color: #dcdcdc;
  line-height: 1.6;
  margin-bottom: 0.5rem;
`;

export default function Home() {
  return (
    <PageContainer>
      {/* Hero Section */}
      <HeroContainer>
        <HeroImage
          src="/images/Hero.jpg" // Replace with your hero image
          alt="Melodex Hero"
          layout="fill"
          priority
        />
        <HeroText>
          <HeroTitle>Melodex</HeroTitle>
          <HeroSubtitle>Your guide to mastering music production</HeroSubtitle>
        </HeroText>
      </HeroContainer>

      {/* Content Section */}
      <ContentContainer>
        <Section>
          <SectionTitle>Welcome to Melodex</SectionTitle>
          <SectionText>
            Melodex is your go-to resource for learning the art of music production, focusing on sound design and Logic Pro X. Whether you’re a beginner or looking to refine your skills, our site offers a structured, easy-to-follow guide to help you create music you’ll love. Scroll down to discover what you’ll find on each page.
          </SectionText>
        </Section>

        <Section>
          <SectionTitle>What to Expect</SectionTitle>
          <SectionText>
            Melodex is packed with practical knowledge and examples to help you grow as a music producer. Here’s a quick overview of what you’ll find on each page:
          </SectionText>
          <SectionList>
            <ListItem>
              <strong>Basics</strong>: Start with the fundamentals of music theory—learn about notes, rhythm, chords, scales, dynamics, and more, all explained with examples you can try in Logic Pro X.
            </ListItem>
            <ListItem>
              <strong>Sound Design</strong>: Dive into the art of creating sounds from scratch. Explore waveforms, synthesis, effects, sampling, and layering, with detailed subpages to deepen your understanding.
            </ListItem>
            <ListItem>
              <strong>Logic Pro</strong>: Master Logic Pro X with guides on its interface, MIDI programming, editing, recording, automation, and mixing, complete with subpages for each topic.
            </ListItem>
            <ListItem>
              <strong>Index</strong>: Get a quick, compact overview of everything on Melodex. This page summarizes key concepts in bite-sized sections, perfect for a refresher or quick reference.
            </ListItem>
            <ListItem>
              <strong>Roadmap</strong>: See the journey behind Melodex—our development process, from initial setup to advanced features, and what’s coming next.
            </ListItem>
          </SectionList>
          <SectionText>
            Whether you’re here to learn the basics, craft unique sounds, or master Logic Pro X, Melodex has something for you. Start exploring today!
          </SectionText>
        </Section>
      </ContentContainer>
    </PageContainer>
  );
}