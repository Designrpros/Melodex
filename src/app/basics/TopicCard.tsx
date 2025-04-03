"use client";

import styled from "styled-components";

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

const Description = styled.p<{ isOpen: boolean }>`
  font-size: 1rem;
  color: #dcdcdc;
  line-height: 1.6;
  margin: 0;
  max-height: ${({ isOpen }) => (isOpen ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease;
`;

const ResourceLink = styled.a`
  color: #fff;
  text-decoration: underline;
  font-weight: bold;
  &:hover {
    color: #dcdcdc;
  }
`;

interface TopicCardProps {
  title: string;
  description: string;
  resource?: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function TopicCard({ title, description, resource, isOpen, onToggle }: TopicCardProps) {
  return (
    <Card onClick={onToggle}>
      <Title>{title}</Title>
      <Description isOpen={isOpen}>
        {description}{" "}
        {resource && (
          <ResourceLink href={resource} target="_blank" rel="noopener noreferrer">
            Learn More
          </ResourceLink>
        )}
      </Description>
    </Card>
  );
}