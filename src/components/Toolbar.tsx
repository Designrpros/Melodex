"use client";

import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const ToolbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 2rem;
  background: #1a1a1a;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1200;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3); /* Subtle shadow for depth */
  border-bottom: 1px solid #333; /* Subtle border for separation */
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none; /* Hide on mobile */
  }
`;

const NavLink = styled.div`
  color: #fff;
  text-decoration: none; /* No underline */
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #333;
    color: #dcdcdc;
  }
`;

const BurgerIcon = styled.div<{ $isOpen: boolean }>`
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  padding: 10px;
  z-index: 1201;

  @media (max-width: 768px) {
    display: flex; /* Show on mobile */
  }

  div {
    width: 30px;
    height: 3px;
    background-color: #fff;
    border-radius: 2px;
    transition: all 0.3s ease;
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
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  z-index: 1100;
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @media (min-width: 769px) {
    display: none; /* Hide on desktop */
  }
`;

const MenuItemsWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

const MenuItem = styled.div<{ $isActive: boolean }>`
  font-family: "Montserrat", sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: ${({ $isActive }) => ($isActive ? "#FFDD00" : "#fff")};
  text-transform: uppercase;
  cursor: pointer;
  transition: color 0.3s ease, transform 0.2s ease;
  padding: 0.75rem 1.5rem;
  letter-spacing: 1.5px;
  text-decoration: none; /* No underline */
  border-radius: 4px;

  &:hover {
    color: #ffdd00;
    transform: scale(1.05);
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
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
            <NavLink>Awesome</NavLink>
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
              Awesome
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