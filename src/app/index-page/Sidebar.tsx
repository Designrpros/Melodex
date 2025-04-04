"use client";

import styled from "styled-components";

const SidebarContainer = styled.nav`
  width: 200px;
  background: #1a1a1a;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.3); /* Subtle shadow to match toolbar */
  border-right: 1px solid #333; /* Subtle border to match toolbar */

  @media (max-width: 768px) {
    display: none; /* Hide on mobile, use toolbar menu instead */
  }
`;

const SidebarInner = styled.div`
  height: 100vh; /* Subtract toolbar height */
  padding: 1rem;
  padding-top: 5rem; /* Offset for fixed toolbar */
  overflow-y: auto; /* Enable vertical scrolling */
  scrollbar-width: thin; /* For Firefox */
  scrollbar-color: #dcdcdc #1a1a1a; /* For Firefox */

  /* For Webkit browsers (Chrome, Safari) */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #1a1a1a;
  }

  &::-webkit-scrollbar-thumb {
    background: #dcdcdc;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #b0b0b0;
  }
`;

const SidebarLink = styled.a`
  display: block;
  color: #fff;
  text-decoration: none; /* No underline */
  font-family: "Montserrat", sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #333;
    color: #dcdcdc;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarInner>
        <SidebarLink href="#welcome">Welcome</SidebarLink>
        <SidebarLink href="#notes-pitch">Notes & Pitch</SidebarLink>
        <SidebarLink href="#rhythm-tempo">Rhythm & Tempo</SidebarLink>
        <SidebarLink href="#chords-harmony">Chords & Harmony</SidebarLink>
        <SidebarLink href="#scales">Scales</SidebarLink>
        <SidebarLink href="#dynamics">Dynamics</SidebarLink>
        <SidebarLink href="#sound-waves">Sound Waves</SidebarLink>
        <SidebarLink href="#synthesis">Synthesis</SidebarLink>
        <SidebarLink href="#effects">Effects</SidebarLink>
        <SidebarLink href="#interface">Logic Pro Interface</SidebarLink>
        <SidebarLink href="#midi">MIDI</SidebarLink>
        <SidebarLink href="#recording">Recording</SidebarLink>
        <SidebarLink href="#melody">Melody</SidebarLink>
        <SidebarLink href="#song-structure">Song Structure</SidebarLink>
        <SidebarLink href="#eq">EQ (Equalization)</SidebarLink>
        <SidebarLink href="#compression">Compression</SidebarLink>
        <SidebarLink href="#automation">Automation</SidebarLink>
        <SidebarLink href="#mixing">Mixing</SidebarLink>
        <SidebarLink href="#mastering">Mastering</SidebarLink>
        <SidebarLink href="#music-theory">Music Theory</SidebarLink>
        <SidebarLink href="#sound-selection">Sound Selection</SidebarLink>
        <SidebarLink href="#arranging">Arranging</SidebarLink>
        <SidebarLink href="#creative-effects">Creative Effects</SidebarLink>
        <SidebarLink href="#vocal-recording">Vocal Recording</SidebarLink>
      </SidebarInner>
    </SidebarContainer>
  );
};

export default Sidebar;