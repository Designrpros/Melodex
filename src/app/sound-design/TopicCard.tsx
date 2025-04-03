"use client";

import styled from "styled-components";
import Link from "next/link";

const Card = styled.div`
  background: #111;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #dcdcdc;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: #1a1a1a;
  }
`;

const Title = styled.h3`
  font-size: 1.8rem;
  margin: 0 0 0.5rem 0;
`;

const DescriptionContainer = styled.div<{ isOpen: boolean }>`
  font-size: 1rem;
  color: #dcdcdc;
  line-height: 1.6;
  margin: 0;
  max-height: ${({ isOpen }) => (isOpen ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease;
`;

const DescriptionText = styled.p`
  margin: 0;
`;

const SubpageLink = styled(Link)`
  color: #fff;
  text-decoration: underline;
  font-weight: bold;
  display: block;
  margin-top: 0.5rem;
  &:hover {
    color: #dcdcdc;
  }
`;

interface TopicCardProps {
  title: string;
  description: string;
  subpage?: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function TopicCard({ title, description, subpage, isOpen, onToggle }: TopicCardProps) {
  return (
    <Card onClick={onToggle}>
      <Title>{title}</Title>
      <DescriptionContainer isOpen={isOpen}>
        <DescriptionText>{description}</DescriptionText>
        {subpage && <SubpageLink href={subpage}>Dive Deeper</SubpageLink>}
      </DescriptionContainer>
    </Card>
  );
}