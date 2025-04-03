"use client";

import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const ToolbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #1a1a1a;
  color: #fff;
  position: relative;
  z-index: 1200;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none; /* Hide on mobile */
  }
`;

const NavLink = styled.div`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  transition: color 0.3s ease;
  &:hover {
    color: #dcdcdc;
  }
`;

const BurgerIcon = styled.div<{ $isOpen: boolean }>`
  display: none;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
  padding: 10px;
  z-index: 1201;

  @media (max-width: 768px) {
    display: flex; /* Show on mobile */
  }

  div {
    width: 35px;
    height: 4px;
    background-color: #fff;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  div:nth-child(1) {
    transform: ${({ $isOpen }) => ($isOpen ? "rotate(45deg) translate(10px, 10px)" : "rotate(0)")};
  }

  div:nth-child(2) {
    opacity: ${({ $isOpen }) => ($isOpen ? "0" : "1")};
  }

  div:nth-child(3) {
    transform: ${({ $isOpen }) => ($isOpen ? "rotate(-45deg) translate(10px, -10px)" : "rotate(0)")};
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
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
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
  gap: 12px;
`;

const MenuItem = styled.div<{ $isActive: boolean }>`
  font-family: "Helvetica", Arial, sans-serif;
  font-size: 32px;
  font-weight: bold;
  color: ${({ $isActive }) => ($isActive ? "#FFDD00" : "#fff")};
  text-transform: uppercase;
  cursor: pointer;
  transition: color 0.3s ease, transform 0.2s ease;
  padding: 12px;
  letter-spacing: 1.5px;
  text-decoration: none; /* Remove underline */

  &:hover {
    color: #ffdd00;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    font-size: 24px;
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
          <NavLink>Melodex</NavLink>
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
          <Link href="/index">
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
          <Link href="/index">
            <MenuItem $isActive={false} onClick={handleTabClick}>
              Index
            </MenuItem>
          </Link>
        </MenuItemsWrapper>
      </Menu>
    </>
  );
}