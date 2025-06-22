import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components'; // Import keyframes
// Import ikon dari react-icons
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

// --- Keyframes untuk Animasi Gradien Latar Belakang ---
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// --- Styled Components untuk ContactPage ---
const ContactContainer = styled(motion.section)`
  min-height: 100vh;
  padding: 100px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* Latar belakang gradien animasi */
  background: linear-gradient(270deg, #1A1F27, var(--color-background), #0A0E13);
  background-size: 400% 400%; /* Ukuran background lebih besar dari viewport */
  animation: ${gradientAnimation} 15s ease infinite; /* Animasi gradien */
  color: var(--color-text-primary);
  position: relative;
  overflow: hidden; /* Penting untuk animasi */

  /* Overlay tambahan untuk efek gelap */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, transparent 40%, rgba(0, 0, 0, 0.7) 100%);
    z-index: 1;
    pointer-events: none;
  }
`;

const ContentWrapper = styled(motion.div)`
  max-width: 1200px;
  width: 100%;
  z-index: 2; /* Pastikan konten di atas overlay */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled(motion.h2)`
  font-size: clamp(2.2rem, 5.5vw, 3.7rem);
  /* === INI BAGIAN YANG DIUBAH === */
  /* Gradien warna sama persis dengan About Page (pink ke biru) */
  background: linear-gradient(90deg, var(--color-accent-blue), var(--color-accent-purple), var(--color-accent-pink));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px; /* Sedikit lebih dekat ke subtitle */
  font-weight: 800;
  letter-spacing: 2px;
  font-family: var(--font-heading);
  text-transform: uppercase;
  text-align: center;
  /* Tambahkan text-shadow yang sama persis dengan About Page */
  text-shadow: 0 0 15px rgba(255, 105, 180, 0.3), 0 0 30px rgba(0, 191, 255, 0.3);
  /* ============================== */
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  color: var(--color-text-primary);
  margin-bottom: 50px;
  text-align: center;
  max-width: 700px;
  line-height: 1.6;
  font-family: var(--font-body);
`;

const ContactLayout = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 50px; /* Jarak antar form & info */
  width: 100%;
  max-width: 900px; /* Lebih lebar untuk menampung kedua sisi */

  @media (min-width: 900px) { /* Breakpoint yang lebih besar untuk layout 2 kolom */
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start; /* Elemen mulai dari atas */
  }
`;

const ContactFormWrapper = styled(motion.div)`
  background-color: #1A1F27; /* Warna solid */
  border: 1px solid var(--color-accent-purple);
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 2; /* Form mengambil 2/3 ruang */
  min-width: 300px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 1rem;
  color: var(--color-accent-green); /* Warna label yang menonjol */
  font-weight: 600;
  font-family: var(--font-heading);
  text-align: left
`;

const Input = styled.input`
  padding: 12px 15px;
  border-radius: 8px;
  border: 1px solid #444; /* Border awal yang sedikit lebih gelap */
  background-color: #2C333D; /* Background input yang jelas */
  color: var(--color-text-primary);
  font-size: 1rem;
  font-family: var(--font-body);
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: var(--color-accent-blue);
    box-shadow: 0 0 0 3px rgba(0, 191, 255, 0.3);
  }
`;

const TextArea = styled.textarea`
  padding: 12px 15px;
  border-radius: 8px;
  border: 1px solid #444;
  background-color: #2C333D;
  color: var(--color-text-primary);
  font-size: 1rem;
  font-family: var(--font-body);
  min-height: 120px;
  resize: vertical;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: var(--color-accent-blue);
    box-shadow: 0 0 0 3px rgba(0, 191, 255, 0.3);
  }
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(90deg, var(--color-accent-blue), var(--color-accent-green));
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  margin-top: 20px;
  box-shadow: 0 4px 15px rgba(0, 191, 255, 0.4);
  transition: all 0.3s ease;
  font-family: var(--font-heading);
  
  /* Pusat tombol */
  display: block; /* Agar margin auto bekerja */
  margin-left: auto;
  margin-right: auto;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 191, 255, 0.6);
    background: linear-gradient(90deg, var(--color-accent-purple), var(--color-accent-pink)); /* Gradien hover yang baru */
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background: gray;
    box-shadow: none;
  }
`;

const ContactInfoContainer = styled(motion.div)`
  flex: 1; /* Info mengambil 1/3 ruang */
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
  border-radius: 15px;
  background-color: transparent; /* Pastikan transparan agar background halaman terlihat */

  @media (min-width: 900px) {
    margin-left: 50px; /* Jarak dari form di desktop */
  }
`;

const InfoItem = styled(motion.a)` /* Ubah jadi <a> agar bisa diklik */
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 1.1rem;
  color: var(--color-text-secondary);
  font-family: var(--font-body);
  text-decoration: none; /* Hilangkan underline default */
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: var(--color-accent-green);
  }

  svg {
    font-size: 1.8rem;
    color: var(--color-accent-blue);
    transition: transform 0.3s ease, color 0.3s ease;
  }

  &:hover svg {
    transform: translateY(-3px);
    color: var(--color-accent-pink);
  }
`;

// Animasi varian untuk framer-motion
const containerVariants = {
  hidden: { opacity: 0, y: 50 }, // Halaman masuk dari bawah dan fade in
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7, // Durasi animasi masuk halaman
      ease: "easeOut",
      when: "beforeChildren", // Animasi container selesai sebelum anak-anaknya
      staggerChildren: 0.2 // Stagger untuk anak-anak
    }
  },
  exit: { opacity: 0, y: -50, transition: { duration: 0.5, ease: "easeOut" } } // Animasi keluar halaman
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 }, // Elemen anak mulai dari bawah dan transparan
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring", // Animasi pegas untuk efek bounce ringan
      damping: 10,
      stiffness: 100
    }
  }
};

function ContactPage() {
  const [submitSuccess, setSubmitSuccess] = useState(false); // State untuk pesan sukses

  const handleSubmit = (e) => {
    // e.preventDefault(); // Tidak perlu preventDefault jika menggunakan action Formspree
    setSubmitSuccess(true);
    // Formspree akan otomatis mereset form setelah submit berhasil
  };

  return (
    <ContactContainer
      initial="hidden"
      animate="visible"
      exit="exit" // Pastikan exit state juga didefinisikan
      variants={containerVariants}
    >
      <ContentWrapper>
        <Title variants={itemVariants}>Hubungi Saya</Title> {/* Animasi diterapkan pada Title */}
        <Subtitle variants={itemVariants}> {/* Animasi diterapkan pada Subtitle */}
          Saya sangat senang untuk terhubung! Jangan ragu untuk menghubungi saya melalui formulir di bawah ini, atau temukan saya di platform sosial.
          Saya terbuka untuk peluang baru, kolaborasi, dan diskusi seputar teknologi!
        </Subtitle>

        <ContactLayout variants={itemVariants}> {/* Animasi diterapkan pada ContactLayout */}
          <ContactFormWrapper variants={itemVariants}> {/* Animasi diterapkan pada ContactFormWrapper */}
            {/* Form Action langsung ke Formspree */}
            <form action="https://formspree.io/f/mwpbqzwa" method="POST" style={{ width: '100%' }} onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Nama Lengkap</Label>
                <Input type="text" id="name" name="name" required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email">Email Anda</Label>
                <Input type="email" id="email" name="email" required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="subject">Subjek Pesan</Label>
                <Input type="text" id="subject" name="subject" required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="message">Pesan Anda</Label>
                <TextArea id="message" name="message" required />
              </FormGroup>
              <SubmitButton type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Kirim Pesan
              </SubmitButton>
            </form>
            {submitSuccess && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ color: 'var(--color-accent-green)', textAlign: 'center', marginTop: '15px' }}
              >
                Pesan Anda berhasil terkirim! Terima kasih.
              </motion.p>
            )}
          </ContactFormWrapper>

          <ContactInfoContainer> {/* Animasi applied directly to InfoItems below */}
            {/* Info Item untuk Email */}
            <InfoItem href="mailto:diniidwii45@gmail.com" variants={itemVariants}>
              <FaEnvelope />
              <span>diniidwii45@gmail.com</span>
            </InfoItem>
            {/* Info Item untuk WhatsApp */}
            <InfoItem href="https://wa.me/6283153728555" target="_blank" rel="noopener noreferrer" variants={itemVariants}>
              <FaWhatsapp />
              <span>+62 831-5372-8555</span>
            </InfoItem>
            {/* Info Item untuk LinkedIn */}
            <InfoItem href="https://www.linkedin.com/in/dini-dwi-agita-747b98351" target="_blank" rel="noopener noreferrer" variants={itemVariants}>
              <FaLinkedin />
              <span>Dini Dwi Agita</span>
            </InfoItem>
            {/* Info Item untuk GitHub */}
            <InfoItem href="https://github.com/helloimdini" target="_blank" rel="noopener noreferrer" variants={itemVariants}>
              <FaGithub />
              <span>helloimdini</span>
            </InfoItem>
          </ContactInfoContainer>
        </ContactLayout>
      </ContentWrapper>
    </ContactContainer>
  );
}

export default ContactPage;