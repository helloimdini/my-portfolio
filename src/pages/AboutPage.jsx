import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import diniProfilePic from '../assets/images/your-profile-pic.jpg'; 

// --- Styled Components ---
const AboutSection = styled(motion.section)`
  min-height: 100vh;
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: linear-gradient(180deg, #0A0E13 0%, var(--color-background) 100%);
  color: var(--color-text-primary);
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, transparent 40%, rgba(0, 0, 0, 0.8) 100%);
    z-index: 1;
    pointer-events: none;
  }
`;

const ContentWrapper = styled(motion.div)`
  max-width: 960px;
  width: 100%;
  z-index: 2;
  margin-top: 40px;
  padding: 0 15px; /* Memberikan padding horizontal pada wrapper utama */
`;

const Heading = styled(motion.h2)`
  font-size: clamp(2rem, 4.5vw, 3.8rem);
  background: linear-gradient(90deg, var(--color-accent-pink), var(--color-accent-purple), var(--color-accent-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  margin-bottom: 50px;
  font-weight: 800;
  letter-spacing: 2px;
  font-family: var(--font-heading);
  text-transform: uppercase;
  text-shadow: 0 0 15px rgba(255, 105, 180, 0.3), 0 0 30px rgba(0, 191, 255, 0.3);
`;

const ProfileBioLayout = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  margin-bottom: 50px;
  padding: 0 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    gap: 50px;
  }
`;

const ProfileImageContainer = styled(motion.div)`
  width: 180px;
  height: 180px;
  border-radius: 15px;
  overflow: hidden;
  border: 4px solid var(--color-accent-green);
  box-shadow: 0 0 20px rgba(0,255,127,0.6);
  flex-shrink: 0;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 767px) {
    margin-bottom: 25px;
  }
`;

const BioText = styled(motion.p)`
  font-size: clamp(1rem, 1.8vw, 1.2rem);
  color: var(--color-text-primary);
  line-height: 1.7;
  font-family: var(--font-body);
  max-width: 700px;
  text-align: center;
  margin: 0 auto;
  white-space: pre-wrap; /* Penting untuk mempertahankan spasi dan baris baru */

  @media (min-width: 768px) {
    text-align: left;
    margin: 0;
  }

  strong {
    color: var(--color-text-primary); /* Bold akan mengikuti warna teks primary */
    text-shadow: none; /* Hapus bayangan pada bold */
    font-weight: 700; 
  }

  .typed-text-area {
    display: inline;
    white-space: normal; /* Untuk typed text, jangan pre-wrap */
  }

  .second-paragraph {
    display: block;
    margin-top: 20px;
  }

  .cursor {
    display: inline-block;
    background-color: var(--color-accent-pink);
    width: 2px;
    height: 1.1em;
    margin-left: 2px;
    vertical-align: middle;
    animation: blink-caret 0.7s step-end infinite;
  }

  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: var(--color-accent-pink); }
  }
`;

const CompactInterestText = styled(motion.p)`
  font-size: clamp(1rem, 1.8vw, 1.2rem);
  color: var(--color-text-primary); 
  line-height: 1.7; 
  font-family: var(--font-body); 
  max-width: 700px; 
  margin: 0 auto 40px auto; 
  padding: 0 15px;
  text-align: center;

  strong {
    color: var(--color-text-primary); /* Bold akan mengikuti warna teks primary */
    text-shadow: none; /* Hapus bayangan pada bold */
    font-weight: 700;
  }

  span.call-to-action-text {
    display: block;
    margin-top: 25px; /* Jarak lebih besar sebelum ajakan */
    font-weight: 600;
    color: var(--color-text-primary); /* Warna aksen yang berbeda untuk CTA ini */
  }
`;


const SectionTitle = styled(motion.h3)`
  font-size: clamp(1.6rem, 3.5vw, 2.5rem);
  color: var(--color-accent-green);
  margin-top: 70px;
  margin-bottom: 35px;
  font-weight: 700;
  font-family: var(--font-heading);
  position: relative;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 1px;

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -12px;
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, var(--color-accent-pink), var(--color-accent-green));
    border-radius: 2px;
  }
`;

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 20px;
  margin-bottom: 70px;
  width: 100%;
  padding: 0 20px;
`;

const SkillItem = styled(motion.div)`
  background-color: #1A1F27;
  border-radius: 10px;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
  border: 1px solid rgba(0,191,255,0.2);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px) scale(1.03) rotate(1deg);
    box-shadow: 0 8px 25px var(--color-accent-blue), 0 0 30px var(--color-accent-pink);
    border: 1px solid var(--color-accent-pink);
  }

  img {
    width: 50px;
    height: 50px;
    object-fit: contain;
    filter: drop-shadow(0 0 5px rgba(0, 191, 255, 0.4));
  }

  p {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--color-text-primary);
    margin: 0;
    text-shadow: 0 0 2px rgba(255,255,255,0.2);
  }
`;

const TimelineContainer = styled(motion.div)`
  position: relative;
  max-width: 800px;
  margin: 0 auto 70px auto;
  padding: 0 20px;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(to bottom, var(--color-accent-pink), var(--color-accent-purple), var(--color-accent-blue));
    transform: translateX(-50%);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    &::before {
      left: 20px;
      transform: translateX(0);
    }
  }
`;

const TimelineItem = styled(motion.div)`
  padding: 10px 0;
  position: relative;
  width: 50%;
  
  &:nth-child(odd) {
    left: 0;
    padding-right: 40px;
    text-align: right;
  }

  &:nth-child(even) {
    left: 50%;
    padding-left: 40px;
    text-align: left;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 40px !important;
    padding-right: 0 !important;
    text-align: left !important;
    left: 0 !important;
  }
`;

const TimelineContent = styled(motion.div)`
  background-color: #1A1F27;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
  border: 1px solid rgba(191,0,255,0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(191,0,255,0.5);
  }

  h4 {
    color: var(--color-accent-green); /* Judul timeline */
    font-size: 1.2rem;
    margin-bottom: 5px;
    font-family: var(--font-heading);
    font-weight: 700;
  }

  p {
    color: var(--color-text-secondary); /* Deskripsi timeline */
    font-size: 0.95rem;
    margin-bottom: 5px;
    line-height: 1.6;

    strong { /* Pastikan bold di timeline juga mengikuti warna primary */
      color: var(--color-text-primary);
      text-shadow: none;
    }
  }

  span {
    color: var(--color-text-primary); /* Institusi timeline */
    font-size: 0.85rem;
    font-weight: 600;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    text-align: left;
  }
`;

const TimelineDot = styled(motion.div)`
  width: 18px;
  height: 18px;
  background: linear-gradient(45deg, var(--color-accent-blue), var(--color-accent-pink)); /* Gradient untuk dot */
  border-radius: 50%;
  position: absolute;
  top: 30px;
  z-index: 10;
  box-shadow: 0 0 10px var(--color-accent-blue);
  border: 2px solid #0A0E13;
  
  ${TimelineItem}:nth-child(odd) & {
    right: -9px;
  }

  ${TimelineItem}:nth-child(even) & {
    left: -9px;
  }

  @media (max-width: 768px) {
    left: 11px !important;
    right: auto !important;
  }
`;

const CallToActionButton = styled(motion.a)`
  background: linear-gradient(90deg, var(--color-accent-purple), var(--color-accent-pink)); /* Gradient untuk tombol */
  color: white;
  padding: 15px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  box-shadow: 0 5px 20px rgba(0, 191, 255, 0.4);
  transition: all 0.3s ease;
  font-family: var(--font-heading);
  z-index: 2;
  position: relative;
  border: 2px solid transparent;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 40px; 
  margin-bottom: 80px; 

  &:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 8px 30px var(--color-accent-blue);
    border: 2px solid var(--color-accent-green);
    background: linear-gradient(90deg, var(--color-accent-pink), var(--color-accent-purple));
  }
`;

// --- Komponen Halaman "Tentang Saya" ---
function AboutPage() {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(false);
  const [showSecondParagraph, setShowSecondParagraph] = useState(false);

  // Narasi utama, menggunakan <strong> tag untuk bold
  const fullTypedText = "HHalo! Saya Dini, seorang mahasiswa <strong>Informatika</strong> yang bertekad membawa inovasi melalui <strong>Kecerdasan Buatan (AI)</strong>, <strong>Desain UI/UX yang intuitif</strong>, dan <strong>Pengembangan Web Front-End yang memukau</strong>.";
  
  const typingSpeed = 40; 

  const profilePic = diniProfilePic; 

  // Data keahlian (Pastikan URL ikon benar atau gunakan Font Awesome/React Icons)
  const skills = [
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Figma (UI/UX)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
    { name: "Git & GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
    { name: "Konsep AI & ML", icon: "https://img.icons8.com/ios-filled/50/ffffff/brain.png" }, 
    { name: "Problem Solving", icon: "https://img.icons8.com/ios-filled/50/ffffff/idea.png" }, 
    { name: "User Research", icon: "https://img.icons8.com/ios-filled/50/ffffff/search.png" }, 
    { name: "Responsive Design", icon: "https://img.icons8.com/ios-filled/50/ffffff/responsive.png" }, 
  ];

  // Data Linimasa (deskripsi menggunakan <strong>, Perjalanan Pendidikan terintegrasi)
  const timelineEvents = [
    {
      year: "2023-2024", 
      title: "Perjalanan Awal di Universitas Sumatera Utara (USU)",
      description: "Memulai babak baru studi di jurusan Agroteknologi, Fakultas Pertanian. Sebuah fase yang membentuk fondasi <strong>ketahanan dan adaptasi diri</strong> saya.",
      institution: "Pendidikan Awal"
    },
    {
      year: "2024", 
      title: "Titik Balik & Pivot ke Informatika",
      description: "Mengambil keputusan krusial untuk beralih jalur pendidikan, sebuah langkah berani yang didukung penuh oleh <strong>beasiswa KIP Kuliah Sofyantan</strong>.",
      institution: "Perjalanan Pendidikan"
    },
    {
      year: "2024",
      title: "Langkah Pertama di Teknik Informatika (Universitas Satya Terra Bhinneka)",
      description: "Memulai petualangan baru di dunia komputasi, mendalami ilmu yang senantiasa menginspirasi dan membuka wawasan <strong>kolaborasi inovatif</strong>.",
      institution: "Pendidikan Formal"
    },
    {
      year: "2024", 
      title: "Simulasi Pemesanan Ojek Online: Algoritma Python",
      description: "Merancang logika inti pemesanan ojek online dengan <strong>Python</strong>, mempertajam kemampuan saya dalam <strong>algoritma</strong> dan <strong>struktur data</strong> untuk solusi praktis.",
      institution: "Proyek Kuliah"
    },
    {
      year: "2025", 
      title: "Membangun 'Cashflow Maestro': Sistem Kasir Java",
      description: "Mengembangkan sistem kasir desktop berbasis <strong>Java Swing</strong>, sebuah proyek yang mengasah pemahaman mendalam saya tentang <strong>OOP</strong> dan efisiensi manajemen data.",
      institution: "Proyek Kuliah"
    },
    {
      year: "2025", 
      title: "Fondasi Web Modern: HTML, CSS, JavaScript",
      description: "Menguasai pilar utama pengembangan web untuk membangun antarmuka yang <strong>responsif, dinamis, dan interaktif</strong>, landasan kuat untuk kreasi digital.",
      institution: "Studi Mandiri & Kelas Kampus"
    },
    {
      year: "2025",
      title: "Merancang 'Zoomify' dengan Figma: Seni UI/UX",
      description: "Memimpin perancangan antarmuka pengguna aplikasi video conference 'Zoomify', menerapkan prinsip <strong>User-Centered Design</strong> yang mengutamakan pengalaman pengguna intuitif.",
      institution: "Proyek Kolaborasi & Kelas Kampus" 
    },
    {
      year: "2025",
      title: "Eksplorasi React.js: Membangun Pengalaman Pengguna Revolusioner",
      description: "Menyelami <strong>React.js</strong> untuk menciptakan komponen UI yang modular dan dinamis, serta mengintegrasikan praktik terbaik demi <strong>pengalaman pengguna yang luar biasa</strong>.",
      institution: "Kursus Online & Studi Mandiri"
    },
    {
      year: "Sekarang", 
      title: "Dedikasi untuk Pembelajaran Berkelanjutan & Inovasi Berdampak",
      description: "Selalu haus akan tantangan baru, aktif berkontribusi dalam komunitas, dan senantiasa memperbarui diri dengan <strong>tren teknologi terkini</strong> untuk menciptakan solusi yang benar-benar berdampak positif.",
      institution: "Dedikasi Pribadi" 
    },
  ];

  // Logika untuk efek ketikan
  useEffect(() => {
    let i = 0;
    setDisplayedText(''); 
    setShowCursor(true);

    const typingInterval = setInterval(() => {
      if (i < fullTypedText.length) {
        setDisplayedText(prev => prev + fullTypedText.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
        setShowCursor(false); 
        setTimeout(() => {
          setShowSecondParagraph(true);
        }, 500);
      }
    }, typingSpeed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [fullTypedText, typingSpeed]); 

  const timelineRef = useRef(null);

  return (
    <AboutSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <ContentWrapper>
        <Heading
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Menguak Diri: Inilah Kisahku
        </Heading>

        {/* BAGIAN 1: BIO UTAMA & FOTO */}
        <ProfileBioLayout
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
        >
          <ProfileImageContainer
            initial={{ scale: 0.8, rotate: -5, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "backOut", delay: 0.5 }}
            whileHover={{ scale: 1.05, rotate: 5, boxShadow: '0 0 30px rgba(0,255,127,0.8), 0 0 45px rgba(0,191,255,0.7)' }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={diniProfilePic} alt="Dini Dwi Agita" />
          </ProfileImageContainer>

          <BioText>
            {/* Menggunakan dangerouslySetInnerHTML untuk merender HTML dari fullTypedText */}
            <span className="typed-text-area" dangerouslySetInnerHTML={{ __html: displayedText }}></span>
            
            <AnimatePresence>
              {showCursor && (
                <motion.span
                  className="cursor"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                ></motion.span>
              )}
            </AnimatePresence>
            
            <AnimatePresence>
              {showSecondParagraph && (
                <motion.span
                  className="second-paragraph"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Saya menemukan kepuasan luar biasa dalam <strong>mentransformasi gagasan kompleks menjadi solusi digital yang cerdas dan memukau</strong>. Terinspirasi oleh kekuatan <strong>AI</strong> dalam menyederhanakan kehidupan dan pesona <strong>UI/UX</strong> yang menciptakan pengalaman tak terlupakan, saya berdedikasi penuh untuk menguasai bidang ini. Tujuan utama saya adalah membangun <strong>produk digital yang tidak hanya fungsional, tetapi juga intuitif, estetik, dan meninggalkan dampak positif yang nyata</strong> bagi penggunanya.
                </motion.span>
              )}
            </AnimatePresence>
          </BioText>
        </ProfileBioLayout>

        {/* BAGIAN 2: KEHLIAN INTI */}
        <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
        >
            Pilar Kemampuan Utama
        </SectionTitle>
        <SkillsGrid>
            {skills.map((skill, index) => (
                <SkillItem
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: index * 0.08 }}
                >
                    <img src={skill.icon} alt={skill.name} />
                    <p>{skill.name}</p>
                </SkillItem>
            ))}
        </SkillsGrid>

        {/* BAGIAN 3: JEJAK LANGKAH & PEMBELAJARAN (TIMELINE - Kini termasuk kisah pendidikan) */}
        <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
        >
            Evolusi Perjalanan Belajarku
        </SectionTitle>
        <TimelineContainer ref={timelineRef}>
          {timelineEvents.map((event, index) => (
            <TimelineItem
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.25, duration: 0.7, ease: "easeOut" }}
            >
              <TimelineDot />
              <TimelineContent
                whileHover={{ scale: 1.02, boxShadow: '0 8px 25px rgba(0,191,255,0.6)' }}
              >
                <h4>{event.year} - {event.title}</h4>
                <p dangerouslySetInnerHTML={{ __html: event.description }}></p> 
                <span>{event.institution}</span>
              </TimelineContent>
            </TimelineItem>
          ))}
        </TimelineContainer>

        {/* BAGIAN 4: MINAT PRIBADI */}
        <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
        >
            Di Balik Layar: Minat Pribadi
        </SectionTitle>
        <CompactInterestText
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
        >
            Di antara barisan kode dan antarmuka yang saya bangun, saya sering kali menemukan diri 'tersesat' dalam cerita-cerita mendebarkan dari <strong>sinema horor</strong> atau <strong>petualangan seru di komik dan novel fantasi</strong>. Bagi saya, ini bukan sekadar cara bersantai. Dari setiap cerita, saya belajar bagaimana sebuah  kisah dibangun, memahami perasaan dan pemikiran karakter, serta membayangkan dunia baru, persis seperti saat saya membangun sebuah aplikasi. Hobi ini secara unik <strong>mengasah daya cipta</strong>, <strong>memperkuat kemampuan saya memahami kebutuhan orang lain</strong>, dan <strong>menajamkan cara berpikir saya dalam menyelesaikan masalah</strong>. Inilah cara saya menyeimbangkan logika berpikir dengan imajinasi yang bebas, menghasilkan karya digital yang punya jiwa, bermakna, dan meninggalkan <strong>kesan mendalam</strong> di hati pengguna.
            <span className="call-to-action-text">
                Penasaran dengan buah karya saya? Jelajahi langsung semua proyek yang telah saya kembangkan!
            </span>
        </CompactInterestText>

        {/* BAGIAN 5: TOMBOL CTA */}
        <CallToActionButton
          href="/projects"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Jelajahi Proyek Saya Sekarang
        </CallToActionButton>
      </ContentWrapper>
    </AboutSection>
  );
}

export default AboutPage;