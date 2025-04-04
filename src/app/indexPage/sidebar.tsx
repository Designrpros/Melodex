"use client";
import React from "react";
import styled from "styled-components";

const SidebarContainer = styled.nav`
  width: 200px;
  background: #1a1a1a;
  padding: 1rem;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  padding-top: 5rem; /* Offset for fixed toolbar */
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.3); /* Subtle shadow to match toolbar */
  border-right: 1px solid #333; /* Subtle border to match toolbar */

  @media (max-width: 768px) {
    display: none; /* Hide on mobile, use toolbar menu instead */
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const SidebarTitle = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
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
      <SidebarHeader>
        <SidebarTitle>Melodex</SidebarTitle>
      </SidebarHeader>
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
    </SidebarContainer>
  );
};

export default Sidebar;