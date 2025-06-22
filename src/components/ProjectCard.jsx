import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components'; 

const Card = styled(motion.div)`
  background-color: #1A1F27;
  border: 1px solid var(--color-accent-purple); 
  border-radius: 15px;
  padding: 25px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5); 
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.4s ease-in-out; 
  overflow: hidden;
  position: relative;
  height: 100%;

  &:hover {
    transform: translateY(-10px) scale(1.02); 
    box-shadow: 
      0 10px 30px rgba(0, 0, 0, 0.7), 
      0 0 25px var(--color-accent-blue), 
      0 0 50px rgba(139, 92, 246, 0.4); 
    border-color: var(--color-accent-blue);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.3);
`;

const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  color: var(--color-accent-green);
  margin-bottom: 10px;
  text-align: center;
  font-weight: 700;
  width: 100%;
  font-family: var(--font-heading);
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: var(--color-text-secondary);
  margin-bottom: 15px;
  text-align: center;
  font-family: var(--font-body);
  flex-grow: 1;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;
  margin-bottom: 25px;
`;

const TechItem = styled.span`
  background-color: var(--color-accent-purple);
  color: white;
  padding: 8px 15px;
  border-radius: 25px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid var(--color-accent-pink);
  font-family: var(--font-body);
  display: flex;
  align-items: center;
  gap: 0px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background-color: var(--color-accent-blue);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: auto;
  width: 100%;
  justify-content: center;
  margin-bottom: 15px;
`;

const BaseButtonStyles = `
  color: white;
  padding: 12px 25px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  text-align: center;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  font-family: var(--font-heading);
  gap: 0px;
  min-width: 150px;
`;

const ActiveProjectButton = styled(motion.a)`
  ${BaseButtonStyles}
  background: linear-gradient(90deg, var(--color-accent-blue), var(--color-accent-green));
  box-shadow: 0 3px 10px rgba(0, 191, 255, 0.3);
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 191, 255, 0.5);
    background: linear-gradient(90deg, var(--color-accent-purple), var(--color-accent-pink));
  }
`;

const InactiveProjectButton = styled(motion.button)`
  ${BaseButtonStyles}
  background: rgba(255, 255, 255, 0.1);
  color: var(--color-text-secondary);
  box-shadow: none;
  cursor: pointer;
  opacity: 0.7;
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    opacity: 0.9;
    transform: translateY(-3px);
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
  }
`;

const StatusMessage = styled(motion.p)`
  font-size: 0.9rem;
  color: var(--color-accent-pink);
  margin-top: 10px;
  text-align: center;
  font-weight: 500;
  width: 100%;
`;

function ProjectCard({ title, description, image, tech, liveLink, githubLink, variants }) {
  const [message, setMessage] = useState('');

  const isLiveLinkValid = liveLink && liveLink !== "#";
  const isGithubLinkValid = githubLink && githubLink !== "#";

  const handleInactiveClick = (buttonType) => {
    let msg = "";
    if (buttonType === "live") {
      msg = "Demo langsung proyek ini sedang dalam tahap pengembangan.";
    } else if (buttonType === "github") {
      msg = "Repositori GitHub proyek ini akan segera tersedia.";
    } else {
      msg = "Proyek ini sedang dalam pengembangan, tautan akan segera ditambahkan.";
    }
    setMessage(msg);

    setTimeout(() => {
      setMessage('');
    }, 4000);
  };

  return (
    <Card variants={variants}>
      {image && <ProjectImage src={image} alt={title} />}
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
      <TechStack>
        {tech.map((item, index) => (
          <TechItem key={index}>{item}</TechItem>
        ))}
      </TechStack>
      <ButtonContainer>
        {/* Tombol Live Demo */}
        {isLiveLinkValid ? (
          <ActiveProjectButton
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Live Demo
          </ActiveProjectButton>
        ) : (
          <InactiveProjectButton
            onClick={() => handleInactiveClick("live")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Live Demo
          </InactiveProjectButton>
        )}

        {/* Tombol GitHub Repo */}
        {isGithubLinkValid ? (
          <ActiveProjectButton
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            GitHub Repo
          </ActiveProjectButton>
        ) : (
          <InactiveProjectButton
            onClick={() => handleInactiveClick("github")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            GitHub Repo
          </InactiveProjectButton>
          )}
        </ButtonContainer>
        <AnimatePresence>
          {message && (
            <StatusMessage
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {message}
            </StatusMessage>
          )}
        </AnimatePresence>
      </Card>
    );
  }

  export default ProjectCard;