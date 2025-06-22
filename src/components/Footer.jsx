// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

// --- Styled Components untuk Footer ---
const FooterContainer = styled(motion.footer)`
  width: 100%;
  padding: 30px 5%; /* Padding atas dan bawah sangat dikurangi untuk ukuran minimalis */
  background-color: rgba(13, 17, 23, 0.98);
  color: var(--color-text-secondary);
  text-align: center;
  font-size: 0.9em;
  border-top: 1px solid rgba(0, 191, 255, 0.1);
  box-shadow: 0 -3px 15px rgba(0, 191, 255, 0.1);
  font-family: var(--font-body);
  position: relative;
  overflow: hidden;
`;

const TaglineText = styled.p`
  margin-bottom: 20px; /* Jarak dari sosial media */
  line-height: 1.5;
  max-width: 600px; /* Max-width sedikit dikurangi agar lebih ringkas */
  margin-left: auto;
  margin-right: auto;
  font-size: 1em; /* Sedikit lebih kecil dari sebelumnya agar pas dengan ukuran footer */
  color: var(--color-text-primary);
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px; /* Jarak antar ikon sosial sedikit dikurangi */
  margin-bottom: 20px; /* Jarak dari copyright */
`;

const SocialIcon = styled(motion.a)`
  color: var(--color-text-primary);
  font-size: 1.6em; /* Ukuran ikon sedikit lebih kecil */
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: var(--color-accent-pink);
    transform: translateY(-2px) scale(1.08); /* Efek melayang lebih halus lagi */
    text-shadow: 0 0 10px rgba(255, 105, 180, 0.6);
  }

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--color-accent-blue), var(--color-accent-purple));
    bottom: -6px; /* Jarak dari ikon */
    left: 50%;
    transform: translateX(-50%);
    border-radius: 1px;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const CopyrightText = styled.p`
  font-size: 0.7em; /* Ukuran copyright paling kecil */
  color: rgba(255, 255, 255, 0.2); /* Sangat redup */
  margin-top: 15px; /* Jarak dari sosial media */
`;

// --- Komponen Footer Utama ---
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
    >
      <TaglineText>
        Jelajahi, berinteraksi, dan mari ciptakan babak baru dalam pengembangan digital.
      </TaglineText>

      <SocialLinks>
        <SocialIcon
          href="https://linkedin.com/in/dini-dwi-agita-profile" // GANTI DENGAN LINKEDIN ASLI KAMU
          target="_blank"
          rel="noopener noreferrer"
          whileHover="hover"
        >
          <i className="fab fa-linkedin"></i>
        </SocialIcon>
        <SocialIcon
          href="https://github.com/dini-dwi-agita-repo" // GANTI DENGAN GITHUB ASLI KAMU
          target="_blank"
          rel="noopener noreferrer"
          whileHover="hover"
        >
          <i className="fab fa-github"></i>
        </SocialIcon>
      </SocialLinks>

      <CopyrightText>
        &copy; {currentYear} Dini Dwi Agita. Semua Hak Dilindungi. <br />
        Didesain dan Dikembangkan dengan semangat eksplorasi digital.
      </CopyrightText>
    </FooterContainer>
  );
}

export default Footer;