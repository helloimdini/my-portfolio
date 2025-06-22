// src/components/Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';

// --- Styled Components ---

const NavContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: rgba(13, 17, 23, 0.97); /* Sedikit lebih opaque dari sebelumnya untuk contrast */
  padding: 18px 20px;
  display: flex;
  justify-content: center; /* Tetap pusat untuk navigasi utama */
  gap: 45px; /* Jarak antar link lebih lebar */
  box-shadow: 0 4px 25px rgba(0, 191, 255, 0.25); /* Shadow dengan aksen biru neon yang lebih kuat */
  backdrop-filter: blur(10px); /* Efek blur lebih kuat untuk 'frosted glass' */
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 191, 255, 0.15); /* Garis bawah halus */
`;

const NavLinkStyled = styled(Link)`
  color: var(--color-text-secondary);
  font-size: 1.2rem; /* Ukuran font sedikit lebih besar */
  font-weight: 600;
  position: relative;
  transition: all 0.3s ease;
  text-transform: uppercase;
  padding: 5px 0;
  font-family: var(--font-heading); /* Gunakan font Poppins untuk kesan kuat */
  letter-spacing: 0.8px; /* Spasi antar huruf sedikit lebih lebar */

  &:hover {
    color: var(--color-accent-pink);
    text-shadow: 0 0 12px rgba(255, 105, 180, 0.7); /* Glow pink lebih jelas saat hover */
  }

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 3px;
    bottom: -10px; /* Jarak dari teks ke garis lebih besar */
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(90deg, var(--color-accent-purple), var(--color-accent-blue));
    border-radius: 2px;
    transition: width 0.3s ease-out, background 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &.active {
    color: var(--color-accent-blue);
    font-weight: 700;
    text-shadow: 0 0 18px rgba(0, 191, 255, 0.9); /* Glow biru lebih kuat saat aktif */
  }

  &.active::after {
    width: 100%;
    background: linear-gradient(90deg, var(--color-accent-blue), var(--color-accent-purple)); /* Gradient berbeda saat aktif */
  }
`;

// --- Komponen Navbar Utama ---

function Navbar() {
  const location = useLocation();

  return (
    <NavContainer
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }} /* Durasi transisi sedikit lebih panjang */
    >
      <NavLinkStyled to="/" className={location.pathname === '/' ? 'active' : ''}>
        Beranda
      </NavLinkStyled>
      <NavLinkStyled to="/about" className={location.pathname === '/about' ? 'active' : ''}>
        Tentang Saya
      </NavLinkStyled>
      <NavLinkStyled to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>
        Proyek
      </NavLinkStyled>
      <NavLinkStyled to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
        Kontak
      </NavLinkStyled>
    </NavContainer>
  );
}

export default Navbar;