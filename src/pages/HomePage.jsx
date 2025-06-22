import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Particles from 'react-tsparticles'; // Pastikan react-tsparticles sudah diinstal: npm install react-tsparticles

// --- Styled Components ---

const HomeSection = styled(motion.section)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(180deg, var(--color-background) 0%, #080C10 100%); /* Transisi gelap yang dalam */
  color: var(--color-text-primary);
  padding: 20px;
  position: relative; 
  overflow: hidden;
  z-index: 1; 

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%; /* MEMPERBAIKI KESALAHAN SYNTAX DI SINI */
    height: 100%;
    background: radial-gradient(circle at center, transparent 40%, rgba(0, 0, 0, 0.8) 100%); /* Lebih gelap */
    z-index: 1; /* Di atas particles, di bawah teks */
    pointer-events: none; 
  }
`;

const ParticlesContainer = styled(Particles)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0; /* Penting agar Particles di bawah konten lain */
`;

const Greeting = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.8rem);
  color: var(--color-accent-green);
  margin-bottom: 10px;
  font-weight: 500;
  font-family: var(--font-body);
  z-index: 2; /* Pastikan teks di atas particles */
  position: relative;
  text-shadow: 0 0 5px var(--color-accent-green); /* Sedikit glow pada greeting */
`;

const Name = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem); 
  background: linear-gradient(90deg, var(--color-accent-blue), var(--color-accent-pink), var(--color-accent-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent; /* Pastikan ini transparan */
  margin-bottom: 20px;
  font-weight: 800;
  text-transform: uppercase;
  text-shadow: 0 0 15px rgba(0, 191, 255, 0.3), 0 0 30px rgba(255, 105, 180, 0.3); /* Glow yang lebih menarik */
  letter-spacing: 3px;
  font-family: var(--font-heading);
  z-index: 2; /* Pastikan teks di atas particles */
  position: relative;

  /* Animasi halus pada nama */
  &:hover {
    animation: pulseGlow 1.5s infinite alternate;
  }

  @keyframes pulseGlow {
    from { text-shadow: 0 0 15px rgba(0, 191, 255, 0.3), 0 0 30px rgba(255, 105, 180, 0.3); }
    to { text-shadow: 0 0 25px rgba(0, 191, 255, 0.6), 0 0 50px rgba(255, 105, 180, 0.6); }
  }
`;

const Tagline = styled(motion.p)`
  font-size: clamp(0.8rem, 2vw, 1.5rem);
  color: var(--color-text-secondary);
  margin-bottom: 40px;
  max-width: 800px;
  line-height: 1.6;
  font-family: var(--font-body);
  z-index: 2; /* Pastikan teks di atas particles */
  position: relative;
  text-shadow: 0 0 5px rgba(139, 148, 158, 0.2); /* Sedikit shadow untuk definisi */
`;

const CallToActionButton = styled(motion.a)`
  background: linear-gradient(90deg, var(--color-accent-purple), var(--color-accent-pink));
  color: white;
  padding: 15px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  box-shadow: 0 5px 20px var(--shadow-neon-blue); /* Gunakan shadow neon */
  transition: all 0.3s ease;
  font-family: var(--font-heading);
  z-index: 2;
  position: relative;
  border: 2px solid transparent; /* Border awal transparan */

  &:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 8px 30px var(--shadow-neon-pink); /* Shadow pink saat hover */
    border: 2px solid var(--color-accent-blue); /* Border biru saat hover */
  }
`;

// --- Framer Motion Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2 // Elemen anak muncul berurutan
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

// --- Komponen Utama HomePage ---
function HomePage() {
  const particlesOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#00BFFF", // Warna partikel: biru elektrik
      },
      links: {
        color: "#FF69B4", // Warna garis penghubung: pink cerah
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  return (
    <HomeSection
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <ParticlesContainer id="tsparticles" options={particlesOptions} />
      
      {/* Teks Sambutan yang Lebih Memikat */}
      <Greeting variants={itemVariants}>Selamat Datang di Galaksi Inovasiku,</Greeting>
      
      {/* Nama dengan Efek Glow yang Lebih Menonjol */}
      <Name variants={itemVariants}>
        Dini Dwi Agita
      </Name>
      
      {/* Tagline yang Dinamis dan Powerful */}
      <Tagline
        variants={itemVariants}
        animate={{ y: [0, -5, 0] }} // Animasi "mengambang" halus
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} 
      >
        Saya adalah Penggerak Inovasi Web, Arsitek Pengalaman Pengguna, <br />dan Pembelajar Abadi di Semesta Teknologi.
      </Tagline>
      
      {/* Tombol Aksi yang Menarik */}
      <CallToActionButton
        href="/about" // Arahkan ke ID section proyekmu
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Mulai Ekspedisimu!
      </CallToActionButton>
    </HomeSection>
  );
}

export default HomePage;