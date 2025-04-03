"use client";

import styled from "styled-components";

const SidebarContainer = styled.nav<{ isOpen: boolean }>`
  width: 200px;
  background: #1a1a1a;
  padding: 1rem;
  height: 100vh;
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-200px")};
  transition: left 0.3s ease;
  z-index: 1000;

  @media (max-width: 768px) {
    left: ${({ isOpen }) => (isOpen ? "0" : "-200px")};
  }

  @media (min-width: 769px) {
    left: 0;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const SidebarTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
`;

const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const SidebarLink = styled.a`
  display: block;
  color: #fff;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
  transition: color 0.3s ease;
  &:hover {
    color: #dcdcdc;
  }
`;

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarHeader>
        <SidebarTitle>Melodex</SidebarTitle>
        <Hamburger onClick={toggleSidebar}>☰</Hamburger>
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
    </SidebarContainer>
  );
};

export default Sidebar;