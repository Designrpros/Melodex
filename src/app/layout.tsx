"use client";

import { ReactNode } from "react";
import { Montserrat } from "next/font/google";
import styled from "styled-components";
import Toolbar from "@/components/Toolbar";
import "./globals.css"; // Must be imported here

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Body = styled.body`
  background: var(--background); /* Use CSS variable */
  color: var(--foreground); /* Use CSS variable */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Body className={montserrat.className}>
        <Toolbar />
        <main style={{ flex: 1 }}>{children}</main>
      </Body>
    </html>
  );
}