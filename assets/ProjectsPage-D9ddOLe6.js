import{r as f,j as a,A as v,d as e,m as i,L as w}from"./index-Ys9bttBW.js";const j=e(i.div)`
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
`,P=e.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.3);
`,C=e.h3`
  font-size: 1.8rem;
  color: var(--color-accent-green);
  margin-bottom: 10px;
  text-align: center;
  font-weight: 700;
  width: 100%;
  font-family: var(--font-heading);
`,S=e.p`
  font-size: 1rem;
  color: var(--color-text-secondary);
  margin-bottom: 15px;
  text-align: center;
  font-family: var(--font-body);
  flex-grow: 1;
`,I=e.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;
  margin-bottom: 25px;
`,L=e.span`
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
`,B=e.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: auto;
  width: 100%;
  justify-content: center;
  margin-bottom: 15px;
`,k=`
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
`,m=e(i.a)`
  ${k}
  background: linear-gradient(90deg, var(--color-accent-blue), var(--color-accent-green));
  box-shadow: 0 3px 10px rgba(0, 191, 255, 0.3);
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 191, 255, 0.5);
    background: linear-gradient(90deg, var(--color-accent-purple), var(--color-accent-pink));
  }
`,u=e(i.button)`
  ${k}
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
`,A=e(i.p)`
  font-size: 0.9rem;
  color: var(--color-accent-pink);
  margin-top: 10px;
  text-align: center;
  font-weight: 500;
  width: 100%;
`;function T({title:r,description:n,image:c,tech:h,liveLink:s,githubLink:l,variants:x}){const[p,d]=f.useState(""),b=s&&s!=="#",y=l&&l!=="#",g=o=>{let t="";o==="live"?t="Demo langsung proyek ini sedang dalam tahap pengembangan.":o==="github"?t="Repositori GitHub proyek ini akan segera tersedia.":t="Proyek ini sedang dalam pengembangan, tautan akan segera ditambahkan.",d(t),setTimeout(()=>{d("")},4e3)};return a.jsxs(j,{variants:x,children:[c&&a.jsx(P,{src:c,alt:r}),a.jsx(C,{children:r}),a.jsx(S,{children:n}),a.jsx(I,{children:h.map((o,t)=>a.jsx(L,{children:o},t))}),a.jsxs(B,{children:[b?a.jsx(m,{href:s,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.05},whileTap:{scale:.95},children:"Live Demo"}):a.jsx(u,{onClick:()=>g("live"),whileHover:{scale:1.05},whileTap:{scale:.95},children:"Live Demo"}),y?a.jsx(m,{href:l,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.05},whileTap:{scale:.95},children:"GitHub Repo"}):a.jsx(u,{onClick:()=>g("github"),whileHover:{scale:1.05},whileTap:{scale:.95},children:"GitHub Repo"})]}),a.jsx(v,{children:p&&a.jsx(A,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.3},children:p})})]})}const z="/my-portfolio/assets/artikel-healthymind-CL2UzM58.png",D="/my-portfolio/assets/sistem-kasir-java-CIfzN-Ix.png",U="/my-portfolio/assets/zoomify-figma-D9QCVVHP.jpg",M=e(i.section)`
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
`,H=e(i.h2)`
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
`,N=e(i.div)`
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
`,O=e(i(w))` // <--- PENTING: DIDEFINISIKAN DENGAN LINK!
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
  display: inline-block; /* Penting untuk margin vertical */

  &:hover {
    transform: translateY(-5px) scale(1.05);
    background: linear-gradient(90deg, var(--color-accent-purple), var(--color-accent-pink)); /* Ungu ke Pink */
    box-shadow: 0 8px 30px var(--color-accent-purple), 0 0 20px var(--color-accent-pink); /* Shadow Ungu & Pink */
    border: 2px solid var(--color-accent-pink); /* Border Pink */
  }
`,G=e(i.div)`
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
  /* Bagian 'a' ini sekarang bisa dihapus/diabaikan karena kita pakai ContactCallToActionButton */
  /* a { ... } */
`,K={hidden:{opacity:0},visible:{opacity:1,transition:{delayChildren:.3,staggerChildren:.2}}};function F(){const r=[{id:1,title:"HealthyMind: Blog Kesehatan Mental",description:"Sebuah platform blog yang saya bangun dari nol menggunakan *HTML & CSS murni. Proyek ini adalah wujud komitmen saya untuk menyajikan informasi kesehatan mental dengan **antarmuka bersih, intuitif, dan responsif*. Fokusnya adalah menciptakan pengalaman membaca yang menenangkan, sekaligus menonjolkan bagaimana desain fundamental dapat membawa dampak positif dan fungsionalitas yang kuat.",image:z,tech:["HTML5","CSS3","Responsive Design","UI/UX Concepts"],liveLink:"#",githubLink:"#"},{id:2,title:"Cashflow Maestro: Sistem Kasir Java",description:"Mengembangkan sistem kasir berbasis desktop yang *efisien dan terintegrasi* menggunakan *Java dan NetBeans. Proyek ini mengasah kemampuan saya dalam **Pemrograman Berorientasi Objek (OOP), menyederhanakan manajemen transaksi harian dengan fitur lengkap seperti pencatatan produk, pembayaran cepat dengan struk otomatis, dan riwayat transaksi yang terorganisir. Sebuah studi kasus nyata dalam membangun aplikasi yang **andal dan berorientasi pada efisiensi operasional*.",image:D,tech:["Java","Java Swing","NetBeans","OOP","Database Design"],liveLink:"#",githubLink:"#"},{id:3,title:"Zoomify: Desain UI/UX Konferensi Video",description:"Memimpin perancangan UI/UX untuk *'Zoomify', sebuah aplikasi konferensi video inovatif, sepenuhnya di **Figma. Proyek kolaborasi ini adalah bukti dedikasi saya pada **User-Centered Design*, menciptakan alur kerja yang intuitif, tata letak yang bersih, dan elemen visual yang menarik. Tujuannya adalah menghadirkan pengalaman rapat online yang mulus dan interaktif, memastikan setiap interaksi terasa alami dan berkesan.",image:U,tech:["Figma","UI/UX Design","Prototyping","User Research","Wireframing"],liveLink:"#",githubLink:"#"},{id:4,title:"Algoritma Mobilitas: Sistem Ojek Online (Python)",description:"Sebuah eksplorasi mendalam dalam *algoritma dan struktur data* melalui simulasi sistem pemesanan ojek online berbasis konsol dengan *Python*. Proyek ini memperlihatkan kemampuan saya dalam menerjemahkan logika bisnis kompleks menjadi kode yang fungsional, mencakup pemesanan perjalanan, simulasi pencarian driver, dan estimasi biaya. Ini adalah fondasi yang kokoh dalam pemecahan masalah dan optimasi proses digital.",image:"#",tech:["Python","Algoritma","Data Structures","Console Application"],liveLink:"#",githubLink:"#"}];return a.jsxs(M,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},exit:{opacity:0,y:-50},transition:{duration:.7,ease:"easeOut"},children:[a.jsx(H,{initial:{y:-50,opacity:0},animate:{y:0,opacity:1},transition:{duration:.7,ease:"easeOut"},children:"Galeri Inovasi Saya"})," ",a.jsx(N,{variants:K,children:r.map(n=>a.jsx(T,{title:n.title,description:n.description,image:n.image,tech:n.tech,liveLink:n.liveLink,githubLink:n.githubLink},n.id))}),a.jsxs(G,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.5},transition:{duration:.7,delay:.5},children:[a.jsxs("p",{children:["Setiap proyek dalam galeri ini adalah cerminan dari ",a.jsx("strong",{children:"passion, dedikasi, dan perjalanan tanpa henti"})," saya dalam dunia pengembangan digital. Saya percaya bahwa teknologi memiliki kekuatan untuk menciptakan perubahan, dan setiap baris kode atau setiap piksel desain adalah langkah menuju solusi yang lebih baik.",a.jsx("br",{}),a.jsx("br",{}),a.jsx("strong",{children:"Apakah Anda terinspirasi untuk menciptakan sesuatu yang luar biasa? Atau memiliki ide yang ingin diwujudkan?"})]}),a.jsx(O,{to:"/contact",whileHover:{scale:1.05},whileTap:{scale:.95},children:"Mari Berkolaborasi & Berkreasi!"})]})]})}export{F as default};
