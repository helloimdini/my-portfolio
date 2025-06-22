import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';

// Pastikan path gambar ini benar dan tambahkan gambar placeholder untuk proyek konsol
import ArtikelHealthyMindImage from '../assets/images/artikel-healthymind.png';
import SistemKasirJavaImage from '../assets/images/sistem-kasir-java.png';
import ZoomifyFigmaImage from '../assets/images/zoomify-figma.jpg';
// Jika Anda belum memiliki gambar untuk proyek Python, Anda bisa membuatnya atau mencari placeholder.

// --- Styled Components ---
const ProjectsContainer = styled(motion.section)`
  min-height: 100vh;
  padding: 100px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-background);
  color: var(--color-text-primary);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, transparent 30%, rgba(0, 0, 0, 0.7) 100%);
    z-index: 0;
    pointer-events: none;
  }
`;

const Title = styled(motion.h2)`
  font-size: clamp(2.2rem, 5vw, 4rem);
  background: linear-gradient(90deg, var(--color-accent-blue), var(--color-accent-purple), var(--color-accent-pink));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  margin-bottom: 60px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-family: var(--font-heading);
  text-shadow: 0 0 20px rgba(0, 191, 255, 0.5);
  z-index: 1;
  text-align: center; /* Pastikan rata tengah */
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  /* Aturan utama untuk 2 kolom */
  grid-template-columns: repeat(2, 1fr);
  gap: 50px; /* Jarak antar kartu */
  max-width: 1300px; /* Batasi lebar grid */
  width: 100%;
  justify-items: center; /* Pusatkan kartu dalam sel gridnya */
  z-index: 1;

  @media (max-width: 992px) { /* Breakpoint untuk layar menengah ke bawah (tablet) */
    grid-template-columns: 1fr; /* Ubah ke 1 kolom untuk tablet/mobile */
    padding: 0 10px;
  }

  @media (max-width: 576px) { /* Optional: Breakpoint tambahan untuk layar sangat kecil (ponsel) */
    gap: 30px; /* Kurangi gap jika terlalu lebar di layar kecil */
  }
`;

const CallToActionSection = styled(motion.div)`
  margin-top: 80px;
  text-align: center;
  z-index: 1;
  max-width: 900px; /* Lebar teks lebih terukur */
  padding: 0 20px;

  p {
    font-size: clamp(0.95rem, 1.8vw, 1.2rem);
    color: var(--color-text-primary); /* Mengubah warna teks menjadi primary text color */
    margin-bottom: 30px;
    line-height: 1.7;

    strong {
      color: var(--color-text-primary);
      text-shadow: none;
    }
  }

  a {
    /* --- PERUBAHAN WARNA TOMBOL DI SINI --- */
    background: linear-gradient(90deg, var(--color-accent-pink), var(--color-accent-purple)); /* Pink ke Ungu */
    color: white;
    padding: 15px 35px;
    border-radius: 50px;
    text-decoration: none;
    font-size: clamp(1rem, 2vw, 1.2rem);
    font-weight: 600;
    box-shadow: 0 5px 20px rgba(255, 105, 180, 0.4); /* Shadow pink */
    transition: all 0.3s ease;
    font-family: var(--font-heading);
    border: 2px solid transparent;
    text-transform: uppercase;
    letter-spacing: 1px;

    &:hover {
      transform: translateY(-5px) scale(1.05);
      background: linear-gradient(90deg, var(--color-accent-purple), var(--color-accent-pink)); /* Ungu ke Pink */
      box-shadow: 0 8px 30px var(--color-accent-purple), 0 0 20px var(--color-accent-pink); /* Shadow Ungu & Pink */
      border: 2px solid var(--color-accent-pink); /* Border Pink */
    }
    /* ------------------------------------- */
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "HealthyMind: Blog Kesehatan Mental",
      description: "Sebuah platform blog yang saya bangun dari nol menggunakan **HTML & CSS murni**. Proyek ini adalah wujud komitmen saya untuk menyajikan informasi kesehatan mental dengan **antarmuka bersih, intuitif, dan responsif**. Fokusnya adalah menciptakan pengalaman membaca yang menenangkan, sekaligus menonjolkan bagaimana desain fundamental dapat membawa dampak positif dan fungsionalitas yang kuat.",
      image: ArtikelHealthyMindImage,
      tech: ["HTML5", "CSS3", "Responsive Design", "UI/UX Concepts"],
      liveLink: "#", // Ganti dengan link live demo jika sudah ada
      githubLink: "#" // Ganti dengan link GitHub yang valid
    },
    {
      id: 2,
      title: "Cashflow Maestro: Sistem Kasir Java",
      description: "Mengembangkan sistem kasir berbasis desktop yang **efisien dan terintegrasi** menggunakan **Java dan NetBeans**. Proyek ini mengasah kemampuan saya dalam **Pemrograman Berorientasi Objek (OOP)**, menyederhanakan manajemen transaksi harian dengan fitur lengkap seperti pencatatan produk, pembayaran cepat dengan struk otomatis, dan riwayat transaksi yang terorganisir. Sebuah studi kasus nyata dalam membangun aplikasi yang **andal dan berorientasi pada efisiensi operasional**.",
      image: SistemKasirJavaImage,
      tech: ["Java", "Java Swing", "NetBeans", "OOP", "Database Design"],
      liveLink: "#",  // Biasanya proyek desktop tidak ada live link
      githubLink: "#" // Ganti dengan link GitHub yang valid
    },
    {
      id: 3,
      title: "Zoomify: Desain UI/UX Konferensi Video",
      description: "Memimpin perancangan UI/UX untuk **'Zoomify'**, sebuah aplikasi konferensi video inovatif, sepenuhnya di **Figma**. Proyek kolaborasi ini adalah bukti dedikasi saya pada **User-Centered Design**, menciptakan alur kerja yang intuitif, tata letak yang bersih, dan elemen visual yang menarik. Tujuannya adalah menghadirkan pengalaman rapat online yang mulus dan interaktif, memastikan setiap interaksi terasa alami dan berkesan.",
      image: ZoomifyFigmaImage,
      tech: ["Figma", "UI/UX Design", "Prototyping", "User Research", "Wireframing"],
      liveLink: "#", // Ganti dengan link prototype Figma jika ada
      githubLink: "#" // Proyek desain biasanya tidak punya repo GitHub, bisa diisi # atau dihilangkan
    },
    {
      id: 4,
      title: "Algoritma Mobilitas: Sistem Ojek Online (Python)",
      description: "Sebuah eksplorasi mendalam dalam **algoritma dan struktur data** melalui simulasi sistem pemesanan ojek online berbasis konsol dengan **Python**. Proyek ini memperlihatkan kemampuan saya dalam menerjemahkan logika bisnis kompleks menjadi kode yang fungsional, mencakup pemesanan perjalanan, simulasi pencarian driver, dan estimasi biaya. Ini adalah fondasi yang kokoh dalam pemecahan masalah dan optimasi proses digital.",
      image: "#", // Anda bisa menambahkan path ke gambar placeholder di sini, contoh: '/assets/images/python-console-placeholder.jpg'
      tech: ["Python", "Algoritma", "Data Structures", "Console Application"],
      liveLink: "#", // Karena berbasis konsol, biasanya tidak ada live link
      githubLink: "#" // Ganti dengan link GitHub yang valid
    }
  ];

  return (
    <ProjectsContainer
      initial={{ opacity: 0, y: 50 }} // Animasi masuk halaman
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }} // Animasi keluar halaman
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <Title
        initial={{ y: -50, opacity: 0 }} // Animasi masuk judul
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Galeri Inovasi Saya
      </Title> {/* Judul lebih menginspirasi */}
      <ProjectsGrid variants={containerVariants}>
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            tech={project.tech}
            liveLink={project.liveLink}
            githubLink={project.githubLink}
          />
        ))}
      </ProjectsGrid>

      <CallToActionSection
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <p>
          Setiap proyek dalam galeri ini adalah cerminan dari <strong>passion, dedikasi, dan perjalanan tanpa henti</strong> saya dalam dunia pengembangan digital. Saya percaya bahwa teknologi memiliki kekuatan untuk menciptakan perubahan, dan setiap baris kode atau setiap piksel desain adalah langkah menuju solusi yang lebih baik.
          <br /><br />
          <strong>Apakah Anda terinspirasi untuk menciptakan sesuatu yang luar biasa? Atau memiliki ide yang ingin diwujudkan?</strong>
        </p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Mari Berkolaborasi & Berkreasi!
        </motion.a>
      </CallToActionSection>
    </ProjectsContainer>
  );
}

export default ProjectsPage;