import{R as c,r as O,j as a,m as o,d as i,a as P}from"./index-v3IqPoVJ.js";var j={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},y=c.createContext&&c.createContext(j),C=["attr","size","title"];function S(e,t){if(e==null)return{};var r=A(e,t),n,s;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(s=0;s<d.length;s++)n=d[s],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function A(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},b.apply(this,arguments)}function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?w(Object(r),!0).forEach(function(n){E(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function E(e,t,r){return t=F(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function F(e){var t=I(e,"string");return typeof t=="symbol"?t:t+""}function I(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function k(e){return e&&e.map((t,r)=>c.createElement(t.tag,x({key:r},t.attr),k(t.child)))}function h(e){return t=>c.createElement(N,b({attr:x({},e.attr)},t),k(e.child))}function N(e){var t=r=>{var{attr:n,size:s,title:d}=e,z=S(e,C),v=s||r.size||"1em",u;return r.className&&(u=r.className),e.className&&(u=(u?u+" ":"")+e.className),c.createElement("svg",b({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,z,{className:u,style:x(x({color:e.color||r.color},r.style),e.style),height:v,width:v,xmlns:"http://www.w3.org/2000/svg"}),d&&c.createElement("title",null,d),e.children)};return y!==void 0?c.createElement(y.Consumer,null,r=>t(r)):t(j)}function B(e){return h({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function V(e){return h({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function _(e){return h({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(e)}function D(e){return h({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(e)}const H=P`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,L=i(o.section)`
  min-height: 100vh;
  padding: 100px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* Latar belakang gradien animasi */
  background: linear-gradient(270deg, #1A1F27, var(--color-background), #0A0E13);
  background-size: 400% 400%; /* Ukuran background lebih besar dari viewport */
  animation: ${H} 15s ease infinite; /* Animasi gradien */
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
`,T=i(o.div)`
  max-width: 1200px;
  width: 100%;
  z-index: 2; /* Pastikan konten di atas overlay */
  display: flex;
  flex-direction: column;
  align-items: center;
`,M=i(o.h2)`
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
`,W=i(o.p)`
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  color: var(--color-text-primary);
  margin-bottom: 50px;
  text-align: center;
  max-width: 700px;
  line-height: 1.6;
  font-family: var(--font-body);
`,G=i(o.div)`
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
`,q=i(o.div)`
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
`,p=i.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,m=i.label`
  font-size: 1rem;
  color: var(--color-accent-green); /* Warna label yang menonjol */
  font-weight: 600;
  font-family: var(--font-heading);
  text-align: left
`,f=i.input`
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
`,J=i.textarea`
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
`,R=i(o.button)`
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
`,U=i(o.div)`
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
`,g=i(o.a)` /* Ubah jadi <a> agar bisa diklik */
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
`,Y={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.7,ease:"easeOut",when:"beforeChildren",staggerChildren:.2}},exit:{opacity:0,y:-50,transition:{duration:.5,ease:"easeOut"}}},l={hidden:{y:30,opacity:0},visible:{y:0,opacity:1,transition:{type:"spring",damping:10,stiffness:100}}};function $(){const[e,t]=O.useState(!1),r=n=>{t(!0)};return a.jsx(L,{initial:"hidden",animate:"visible",exit:"exit",variants:Y,children:a.jsxs(T,{children:[a.jsx(M,{variants:l,children:"Hubungi Saya"})," ",a.jsxs(W,{variants:l,children:[" ","Saya sangat senang untuk terhubung! Jangan ragu untuk menghubungi saya melalui formulir di bawah ini, atau temukan saya di platform sosial. Saya terbuka untuk peluang baru, kolaborasi, dan diskusi seputar teknologi!"]}),a.jsxs(G,{variants:l,children:[" ",a.jsxs(q,{variants:l,children:[" ",a.jsxs("form",{action:"https://formspree.io/f/mwpbqzwa",method:"POST",style:{width:"100%"},onSubmit:r,children:[a.jsxs(p,{children:[a.jsx(m,{htmlFor:"name",children:"Nama Lengkap"}),a.jsx(f,{type:"text",id:"name",name:"name",required:!0})]}),a.jsxs(p,{children:[a.jsx(m,{htmlFor:"email",children:"Email Anda"}),a.jsx(f,{type:"email",id:"email",name:"email",required:!0})]}),a.jsxs(p,{children:[a.jsx(m,{htmlFor:"subject",children:"Subjek Pesan"}),a.jsx(f,{type:"text",id:"subject",name:"subject",required:!0})]}),a.jsxs(p,{children:[a.jsx(m,{htmlFor:"message",children:"Pesan Anda"}),a.jsx(J,{id:"message",name:"message",required:!0})]}),a.jsx(R,{type:"submit",whileHover:{scale:1.05},whileTap:{scale:.95},children:"Kirim Pesan"})]}),e&&a.jsx(o.p,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.5},style:{color:"var(--color-accent-green)",textAlign:"center",marginTop:"15px"},children:"Pesan Anda berhasil terkirim! Terima kasih."})]}),a.jsxs(U,{children:[" ",a.jsxs(g,{href:"mailto:diniidwii45@gmail.com",variants:l,children:[a.jsx(D,{}),a.jsx("span",{children:"diniidwii45@gmail.com"})]}),a.jsxs(g,{href:"https://wa.me/6283153728555",target:"_blank",rel:"noopener noreferrer",variants:l,children:[a.jsx(_,{}),a.jsx("span",{children:"+62 831-5372-8555"})]}),a.jsxs(g,{href:"https://www.linkedin.com/in/dini-dwi-agita-747b98351",target:"_blank",rel:"noopener noreferrer",variants:l,children:[a.jsx(V,{}),a.jsx("span",{children:"Dini Dwi Agita"})]}),a.jsxs(g,{href:"https://github.com/helloimdini",target:"_blank",rel:"noopener noreferrer",variants:l,children:[a.jsx(B,{}),a.jsx("span",{children:"helloimdini"})]})]})]})]})})}export{$ as default};
