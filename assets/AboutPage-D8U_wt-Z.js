import{r,j as a,A as g,m as n,d as i,L as v}from"./index-v3IqPoVJ.js";const w="/my-portfolio/assets/your-profile-pic-QWoWtvZ8.jpg",j=i(n.section)`
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
`,S=i(n.div)`
  max-width: 960px;
  width: 100%;
  z-index: 2;
  margin-top: 40px;
  padding: 0 15px;
`,P=i(n.h2)`
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
`,I=i(n.div)`
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
`,T=i(n.div)`
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
`,M=i(n.p)`
  font-size: clamp(1rem, 1.8vw, 1.2rem);
  color: var(--color-text-primary);
  line-height: 1.7;
  font-family: var(--font-body);
  max-width: 700px;
  text-align: center;
  margin: 0 auto;
  white-space: pre-wrap;

  @media (min-width: 768px) {
    text-align: left;
    margin: 0;
  }

  strong {
    color: var(--color-text-primary);
    text-shadow: none;
    font-weight: 700;
  }

  .typed-text-area {
    display: inline;
    white-space: normal;
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
`,A=i(n.p)`
  font-size: clamp(1rem, 1.8vw, 1.2rem);
  color: var(--color-text-primary);
  line-height: 1.7;
  font-family: var(--font-body);
  max-width: 700px;
  margin: 0 auto 40px auto;
  padding: 0 15px;
  text-align: center;

  strong {
    color: var(--color-text-primary);
    text-shadow: none;
    font-weight: 700;
  }

  span.call-to-action-text {
    display: block;
    margin-top: 25px;
    font-weight: 600;
    color: var(--color-text-primary);
  }
`,s=i(n.h3)`
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
`,U=i(n.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 20px;
  margin-bottom: 70px;
  width: 100%;
  padding: 0 20px;
`,D=i(n.div)`
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
`,K=i(n.div)`
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
`,l=i(n.div)`
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
`,z=i(n.div)`
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
    color: var(--color-accent-green);
    font-size: 1.2rem;
    margin-bottom: 5px;
    font-family: var(--font-heading);
    font-weight: 700;
  }

  p {
    color: var(--color-text-secondary);
    font-size: 0.95rem;
    margin-bottom: 5px;
    line-height: 1.6;

    strong {
      color: var(--color-text-primary);
      text-shadow: none;
    }
  }

  span {
    color: var(--color-text-primary);
    font-size: 0.85rem;
    font-weight: 600;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    text-align: left;
  }
`,C=i(n.div)`
  width: 18px;
  height: 18px;
  background: linear-gradient(45deg, var(--color-accent-blue), var(--color-accent-pink));
  border-radius: 50%;
  position: absolute;
  top: 30px;
  z-index: 10;
  box-shadow: 0 0 10px var(--color-accent-blue);
  border: 2px solid #0A0E13;
  
  ${l}:nth-child(odd) & {
    right: -9px;
  }

  ${l}:nth-child(even) & {
    left: -9px;
  }

  @media (max-width: 768px) {
    left: 11px !important;
    right: auto !important;
  }
`,H=i(n(v))` // <--- PENTING: Didefinisikan dengan Link
  background: linear-gradient(90deg, var(--color-accent-blue), var(--color-accent-green)); /* Warna gradient berbeda */
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
  margin-top: 50px; /* Jarak dari konten di atasnya */
  margin-bottom: 80px; /* Jarak dari footer */
  display: inline-block; /* Agar margin-top/bottom bekerja dengan baik */

  &:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 8px 30px var(--color-accent-green);
    border: 2px solid var(--color-accent-pink);
    background: linear-gradient(90deg, var(--color-accent-green), var(--color-accent-blue));
  }
`;function L(){const[m,d]=r.useState(""),[u,c]=r.useState(!1),[h,x]=r.useState(!1),o="HHalo! Saya Dini, seorang mahasiswa <strong>Informatika</strong> yang bertekad membawa inovasi melalui <strong>Kecerdasan Buatan (AI)</strong>, <strong>Desain UI/UX yang intuitif</strong>, dan <strong>Pengembangan Web Front-End yang memukau</strong>.",p=40,k=[{name:"HTML5",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"},{name:"CSS3",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"},{name:"JavaScript",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"},{name:"Python",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"},{name:"Java",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"},{name:"React.js",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},{name:"Figma (UI/UX)",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"},{name:"Git & GitHub",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"},{name:"Konsep AI & ML",icon:"https://img.icons8.com/ios-filled/50/ffffff/brain.png"},{name:"Problem Solving",icon:"https://img.icons8.com/ios-filled/50/ffffff/idea.png"},{name:"User Research",icon:"https://img.icons8.com/ios-filled/50/ffffff/search.png"},{name:"Responsive Design",icon:"https://img.icons8.com/ios-filled/50/ffffff/responsive.png"}],b=[{year:"2023-2024",title:"Perjalanan Awal di Universitas Sumatera Utara (USU)",description:"Memulai babak baru studi di jurusan Agroteknologi, Fakultas Pertanian. Sebuah fase yang membentuk fondasi <strong>ketahanan dan adaptasi diri</strong> saya.",institution:"Pendidikan Awal"},{year:"2024",title:"Titik Balik & Pivot ke Informatika",description:"Mengambil keputusan krusial untuk beralih jalur pendidikan, sebuah langkah berani yang didukung penuh oleh <strong>beasiswa KIP Kuliah Sofyantan</strong>.",institution:"Perjalanan Pendidikan"},{year:"2024",title:"Langkah Pertama di Teknik Informatika (Universitas Satya Terra Bhinneka)",description:"Memulai petualangan baru di dunia komputasi, mendalami ilmu yang senantiasa menginspirasi dan membuka wawasan <strong>kolaborasi inovatif</strong>.",institution:"Pendidikan Formal"},{year:"2024",title:"Simulasi Pemesanan Ojek Online: Algoritma Python",description:"Merancang logika inti pemesanan ojek online dengan <strong>Python</strong>, mempertajam kemampuan saya dalam <strong>algoritma</strong> dan <strong>struktur data</strong> untuk solusi praktis.",institution:"Proyek Kuliah"},{year:"2025",title:"Membangun 'Cashflow Maestro': Sistem Kasir Java",description:"Mengembangkan sistem kasir desktop berbasis <strong>Java Swing</strong>, sebuah proyek yang mengasah pemahaman mendalam saya tentang <strong>OOP</strong> dan efisiensi manajemen data.",institution:"Proyek Kuliah"},{year:"2025",title:"Fondasi Web Modern: HTML, CSS, JavaScript",description:"Menguasai pilar utama pengembangan web untuk membangun antarmuka yang <strong>responsif, dinamis, dan interaktif</strong>, landasan kuat untuk kreasi digital.",institution:"Studi Mandiri & Kelas Kampus"},{year:"2025",title:"Merancang 'Zoomify' dengan Figma: Seni UI/UX",description:"Memimpin perancangan antarmuka pengguna aplikasi video conference 'Zoomify', menerapkan prinsip <strong>User-Centered Design</strong> yang mengutamakan pengalaman pengguna intuitif.",institution:"Proyek Kolaborasi & Kelas Kampus"},{year:"2025",title:"Eksplorasi React.js: Membangun Pengalaman Pengguna Revolusioner",description:"Menyelami <strong>React.js</strong> untuk menciptakan komponen UI yang modular dan dinamis, serta mengintegrasikan praktik terbaik demi <strong>pengalaman pengguna yang luar biasa</strong>.",institution:"Kursus Online & Studi Mandiri"},{year:"Sekarang",title:"Dedikasi untuk Pembelajaran Berkelanjutan & Inovasi Berdampak",description:"Selalu haus akan tantangan baru, aktif berkontribusi dalam komunitas, dan senantiasa memperbarui diri dengan <strong>tren teknologi terkini</strong> untuk menciptakan solusi yang benar-benar berdampak positif.",institution:"Dedikasi Pribadi"}];r.useEffect(()=>{let e=0;d(""),c(!0);const t=setInterval(()=>{e<o.length?(d(f=>f+o.charAt(e)),e++):(clearInterval(t),c(!1),setTimeout(()=>{x(!0)},500))},p);return()=>{clearInterval(t)}},[o,p]);const y=r.useRef(null);return a.jsx(j,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.8},children:a.jsxs(S,{children:[a.jsx(P,{initial:{y:-50,opacity:0},animate:{y:0,opacity:1},transition:{duration:.7,ease:"easeOut"},children:"Menguak Diri: Inilah Kisahku"}),a.jsxs(I,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.8},children:[a.jsx(T,{initial:{scale:.8,rotate:-5,opacity:0},animate:{scale:1,rotate:0,opacity:1},transition:{duration:.8,ease:"backOut",delay:.5},whileHover:{scale:1.05,rotate:5,boxShadow:"0 0 30px rgba(0,255,127,0.8), 0 0 45px rgba(0,191,255,0.7)"},whileTap:{scale:.95},children:a.jsx("img",{src:w,alt:"Dini Dwi Agita"})}),a.jsxs(M,{children:[a.jsx("span",{className:"typed-text-area",dangerouslySetInnerHTML:{__html:m}}),a.jsx(g,{children:u&&a.jsx(n.span,{className:"cursor",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3}})}),a.jsx(g,{children:h&&a.jsxs(n.span,{className:"second-paragraph",initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0},transition:{duration:.8,delay:.2},children:["Saya menemukan kepuasan luar biasa dalam ",a.jsx("strong",{children:"mentransformasi gagasan kompleks menjadi solusi digital yang cerdas dan memukau"}),". Terinspirasi oleh kekuatan ",a.jsx("strong",{children:"AI"})," dalam menyederhanakan kehidupan dan pesona ",a.jsx("strong",{children:"UI/UX"})," yang menciptakan pengalaman tak terlupakan, saya berdedikasi penuh untuk menguasai bidang ini. Tujuan utama saya adalah membangun ",a.jsx("strong",{children:"produk digital yang tidak hanya fungsional, tetapi juga intuitif, estetik, dan meninggalkan dampak positif yang nyata"})," bagi penggunanya."]})})]})]}),a.jsx(s,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.5},transition:{duration:.7,delay:.2},children:"Pilar Kemampuan Utama"}),a.jsx(U,{children:k.map((e,t)=>a.jsxs(D,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.5},transition:{delay:t*.08},children:[a.jsx("img",{src:e.icon,alt:e.name}),a.jsx("p",{children:e.name})]},t))}),a.jsx(s,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.5},transition:{duration:.7,delay:.2},children:"Evolusi Perjalanan Belajarku"}),a.jsx(K,{ref:y,children:b.map((e,t)=>a.jsxs(l,{initial:{opacity:0,x:t%2===0?-100:100},whileInView:{opacity:1,x:0},viewport:{once:!0,amount:.5},transition:{delay:t*.25,duration:.7,ease:"easeOut"},children:[a.jsx(C,{}),a.jsxs(z,{whileHover:{scale:1.02,boxShadow:"0 8px 25px rgba(0,191,255,0.6)"},children:[a.jsxs("h4",{children:[e.year," - ",e.title]}),a.jsx("p",{dangerouslySetInnerHTML:{__html:e.description}}),a.jsx("span",{children:e.institution})]})]},t))}),a.jsx(s,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.5},transition:{duration:.7,delay:.2},children:"Di Balik Layar: Minat Pribadi"}),a.jsxs(A,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.5},transition:{duration:.7,delay:.2},children:["Di antara barisan kode dan antarmuka yang saya bangun, saya sering kali menemukan diri 'tersesat' dalam cerita-cerita mendebarkan dari ",a.jsx("strong",{children:"sinema horor"})," atau ",a.jsx("strong",{children:"petualangan seru di komik dan novel fantasi"}),". Bagi saya, ini bukan sekadar cara bersantai. Dari setiap cerita, saya belajar bagaimana sebuah  kisah dibangun, memahami perasaan dan pemikiran karakter, serta membayangkan dunia baru, persis seperti saat saya membangun sebuah aplikasi. Hobi ini secara unik ",a.jsx("strong",{children:"mengasah daya cipta"}),", ",a.jsx("strong",{children:"memperkuat kemampuan saya memahami kebutuhan orang lain"}),", dan ",a.jsx("strong",{children:"menajamkan cara berpikir saya dalam menyelesaikan masalah"}),". Inilah cara saya menyeimbangkan logika berpikir dengan imajinasi yang bebas, menghasilkan karya digital yang punya jiwa, bermakna, dan meninggalkan ",a.jsx("strong",{children:"kesan mendalam"})," di hati pengguna.",a.jsx("span",{className:"call-to-action-text",children:"Penasaran dengan buah karya saya? Jelajahi langsung semua proyek yang telah saya kembangkan!"})]}),a.jsx(H,{to:"/projects",initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1},viewport:{once:!0,amount:.8},transition:{duration:.5,delay:.2},whileHover:{scale:1.05},whileTap:{scale:.95},children:"Jelajahi Proyek Saya Sekarang"})]})})}export{L as default};
