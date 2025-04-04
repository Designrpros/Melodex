"use client";

import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const ToolbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 2rem;
  background: linear-gradient(90deg, #1a1a1a 0%, #2a2a2a 100%); /* Gradient background */
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1200;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4); /* Deeper shadow for depth */
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem; /* Reduced gap to fit more tabs */

  @media (max-width: 900px) { /* Adjusted breakpoint for more tabs */
    display: none; /* Hide on mobile */
  }
`;

const NavLink = styled.div`
  color: #fff;
  text-decoration: none; /* No underline */
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.5rem 0.75rem; /* Adjusted padding for tighter fit */
  border-radius: 6px;
  border: 1px solid transparent; /* Subtle border for polish */
  transition: all 0.3s ease; /* Smooth transition for hover effects */

  &:hover,
  &:visited,
  &:active {
    text-decoration: none; /* Ensure no underline on hover, visited, or active */
    background: linear-gradient(90deg, #333 0%, #444 100%); /* Gradient hover effect */
    color: #ffdd00; /* Highlight color on hover */
    border: 1px solid #ffdd00; /* Subtle border on hover */
    transform: translateY(-2px); /* Slight lift on hover */
  }
`;

const BurgerIcon = styled.div<{ $isOpen: boolean }>`
  display: none;
  flex-direction: column;
  gap: 6px; /* Slightly increased gap for better look */
  cursor: pointer;
  padding: 10px;
  z-index: 1201;

  @media (max-width: 900px) { /* Adjusted breakpoint */
    display: flex; /* Show on mobile */
  }

  div {
    width: 30px;
    height: 3px;
    background-color: #fff;
    border-radius: 3px; /* Smoother edges */
    transition: all 0.3s ease-in-out; /* Smoother animation */
  }

  div:nth-child(1) {
    transform: ${({ $isOpen }) => ($isOpen ? "rotate(45deg) translate(8px, 8px)" : "rotate(0)")};
  }

  div:nth-child(2) {
    opacity: ${({ $isOpen }) => ($isOpen ? "0" : "1")};
  }

  div:nth-child(3) {
    transform: ${({ $isOpen }) => ($isOpen ? "rotate(-45deg) translate(8px, -8px)" : "rotate(0)")};
  }
`;

const Menu = styled.div<{ $isMenuOpen: boolean }>`
  display: ${({ $isMenuOpen }) => ($isMenuOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.95); /* Slightly darker background */
  backdrop-filter: blur(12px); /* Increased blur for modern look */
  z-index: 1100;
  animation: fadeIn 0.3s ease-in-out;
  overflow-y: auto; /* Scrollable if content exceeds viewport height */

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @media (min-width: 901px) { /* Adjusted breakpoint */
    display: none; /* Hide on desktop */
  }
`;

const MenuItemsWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem; /* Increased gap for better spacing */
  padding: 2rem 0; /* Added padding for scrollable content */
`;

const MenuItem = styled.div<{ $isActive: boolean }>`
  font-family: "Montserrat", sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: ${({ $isActive }) => ($isActive ? "#FFDD00" : "#fff")};
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease-in-out; /* Smoother transition */
  padding: 0.75rem 1.5rem;
  letter-spacing: 2px; /* Increased letter spacing for modern look */
  text-decoration: none; /* No underline */
  border-radius: 6px;
  border: 1px solid transparent; /* Subtle border for polish */

  &:hover,
  &:visited,
  &:active {
    text-decoration: none; /* Ensure no underline on hover, visited, or active */
    color: #ffdd00;
    transform: scale(1.1); /* Slightly larger scale on hover */
    background: linear-gradient(90deg, #333 0%, #444 100%); /* Gradient hover effect */
    border: 1px solid #ffdd00; /* Subtle border on hover */
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem; /* Smaller font size for very small screens */
    padding: 0.5rem 1rem; /* Adjusted padding */
  }
`;

export default function Toolbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleTabClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <ToolbarContainer>
        <Link href="/">
          <NavLink style={{ fontSize: "1.2rem", fontWeight: 700 }}>Melodex</NavLink>
        </Link>
        <NavLinks>
          <Link href="/basics">
            <NavLink>Basics</NavLink>
          </Link>
          <Link href="/roadmap">
            <NavLink>Roadmap</NavLink>
          </Link>
          <Link href="/sound-design">
            <NavLink>Sound Design</NavLink>
          </Link>
          <Link href="/logic-pro">
            <NavLink>Logic Pro</NavLink>
          </Link>
          <Link href="/awesome">
            <NavLink>Resources</NavLink>
          </Link>
          <Link href="/index-page">
            <NavLink>Index</NavLink>
          </Link>
        </NavLinks>
        <BurgerIcon onClick={handleBurgerClick} $isOpen={isMenuOpen}>
          <div />
          <div />
          <div />
        </BurgerIcon>
      </ToolbarContainer>

      <Menu $isMenuOpen={isMenuOpen}>
        <MenuItemsWrapper>
          <Link href="/">
            <MenuItem $isActive={false} onClick={handleTabClick}>
              Melodex
            </MenuItem>
          </Link>
          <Link href="/basics">
            <MenuItem $isActive={false} onClick={handleTabClick}>
              Basics
            </MenuItem>
          </Link>
          <Link href="/roadmap">
            <MenuItem $isActive={false} onClick={handleTabClick}>
              Roadmap
            </MenuItem>
          </Link>
          <Link href="/sound-design">
            <MenuItem $isActive={false} onClick={handleTabClick}>
              Sound Design
            </MenuItem>
          </Link>
          <Link href="/logic-pro">
            <MenuItem $isActive={false} onClick={handleTabClick}>
              Logic Pro
            </MenuItem>
          </Link>
          <Link href="/awesome">
            <MenuItem $isActive={false} onClick={handleTabClick}>
              Resources
            </MenuItem>
          </Link>
          <Link href="/index-page">
            <MenuItem $isActive={false} onClick={handleTabClick}>
              Index
            </MenuItem>
          </Link>
        </MenuItemsWrapper>
      </Menu>
    </>
  );
}