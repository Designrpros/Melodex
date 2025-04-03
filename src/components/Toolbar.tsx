"use client";

import styled from "styled-components";
import Link from "next/link";

const ToolbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #1a1a1a;
  color: #fff;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
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

export default function Toolbar() {
  return (
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
        <Link href="/index-page">
          <NavLink>Index</NavLink>
        </Link>
      </NavLinks>
    </ToolbarContainer>
  );
}