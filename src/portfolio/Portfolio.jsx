import React, { useEffect, useRef, useState, useCallback } from "react";
import "./portfolio.css";
import { initHeroCanvas } from "./heroCanvas.js";

import aboutImg from "../assets/images/Profile.webp";

import issaraLogo from "../assets/images/companies/issaraLogo.webp";
import freelanceLogo from "../assets/images/companies/freelancelogo.webp";
import wunderfauksLogo from "../assets/images/companies/wunderfauksLogo.webp";
import scwLogo from "../assets/images/companies/scwLogo.webp";

import booppaImg from "../assets/images/projects/booppa.webp";
import mvistaImg from "../assets/images/projects/mvista.webp";
import cascadeImg from "../assets/images/projects/cascade.webp";
import ilmImg from "../assets/images/projects/ilm.webp";
import goldendreamsImg from "../assets/images/projects/goldendreams.webp";
import workervoiceImg from "../assets/images/projects/workervoice.webp";
import orangecloveImg from "../assets/images/projects/orangeclove.webp";
import nextevoImg from "../assets/images/projects/nextevo.webp";
import nextevo1Img from "../assets/images/projects/nextevo1.webp";
import issarainstituteImg from "../assets/images/projects/issarainstitute.webp";
import postmanImg from "../assets/images/projects/postman.webp";
import rwcImg from "../assets/images/projects/rwc.webp";

import mytLogo from "../assets/images/awards/myt.webp";
import deloitteLogo from "../assets/images/awards/Deloitte.webp";

import oxfordLogo from "../assets/images/education/oxfordbrookes.webp";
import nccLogo from "../assets/images/education/Ncclogo.webp";

const ACCENTS = [
  { key: "indigo",  hex: "#6366f1" },
  { key: "cyan",    hex: "#22d3ee" },
  { key: "emerald", hex: "#34d399" },
  { key: "orange",  hex: "#f97316" },
  { key: "violet",  hex: "#a855f7" },
];

const EXPERIENCE = [
  {
    logo: issaraLogo, alt: "Issara Institute",
    role: "Full-Stack Developer (Django + React)", date: "2025 – Present",
    company: "Issara Institute · Tech & Innovation",
    desc: "Building web applications supporting worker protection and ethical supply chains across Southeast Asia — serving 50K+ workers and stakeholders.",
    bullets: [
      "Architected and deployed 5+ full-stack apps (Django + React), enabling real-time labor monitoring for 100+ companies.",
      "Designed scalable architectures improving performance by 40% and cutting server costs by 25%.",
      "Led international collaboration across 6 countries — Thailand, Myanmar, Cambodia, Malaysia, Nepal, USA.",
      "Implemented feedback systems processing 1,000+ weekly responses from migrant workers and jobseekers.",
      "Delivered features 20% faster through agile workflows and stakeholder alignment.",
      "Built secure authentication and data-validation systems protecting sensitive worker information.",
    ],
  },
  {
    logo: freelanceLogo, alt: "Freelance",
    role: "Senior Full-Stack Developer", date: "2024 – 2025",
    company: "Freelance · Blockchain dApp (Germany / Thailand)",
    desc: "Led blockchain dApp development for a Germany-based company with a Thai client — a production app handling $50K+ in transactions.",
    bullets: [
      "Architected and deployed a scalable blockchain web app serving 500+ active users.",
      "Developed and audited Ethereum smart contracts in Solidity, processing $50K+ in secure transactions.",
      "Built a Vue.js frontend and Node.js backend with Web3.js, achieving a 95+ Lighthouse score.",
      "Implemented MetaMask auth with transaction signing, reducing friction by 60%.",
      "Delivered 15% ahead of schedule through Agile, cross-border collaboration.",
    ],
  },
  {
    logo: wunderfauksLogo, alt: "Wunderfauks",
    role: "Senior Full-Stack Developer", date: "2023 – 2024",
    company: "Wunderfauks · Singapore",
    desc: "Delivered multiple web platforms across e-commerce, corporate and promotional domains.",
    bullets: [
      "Developed an e-commerce platform for M-Vista with secure payment integration.",
      "Built responsive, performance-optimized websites for Nextevo.",
      "Engineered interactive games and a promotional redeem platform for RWC.",
      "Designed and implemented a Postman review & feedback system for Singpost.",
      "Delivered a functional catering website for Orange Clove Singapore.",
    ],
  },
  {
    logo: scwLogo, alt: "SCW Myanmar",
    role: "Web Developer", date: "2020 – 2023",
    company: "SCW Myanmar",
    desc: "Developed and maintained customer-facing web solutions across multiple industries.",
    bullets: [
      "Converted design mockups into production-ready web pages.",
      "Conceptualized and launched an e-commerce website.",
      "Designed a travel & tour website with intuitive navigation.",
      "Built a hotel website with an integrated booking system.",
    ],
  },
  {
    logo: freelanceLogo, alt: "Independent",
    role: "Freelance Web Developer", date: "2018 – 2020",
    company: "Independent",
    desc: "Delivered custom web solutions for clients — from requirements gathering to deployment.",
    bullets: [
      "Worked directly with clients to define functional and technical requirements.",
      "Maintained and updated internal and external websites.",
      "Built a property-listing platform with admin panel and multi-role access.",
    ],
  },
];

const PROJECTS = [
  { cat: "web3",       label: "Web3",        name: "Ethereum dApp Platform", icon: "fab fa-ethereum",
    desc: "A decentralized app with Ethereum smart contracts, MetaMask integration and secure on-chain transactions.",
    img: booppaImg, href: "https://booppa.io" },
  { cat: "ecommerce",  label: "E-Commerce",  name: "M-Vista E-Commerce",
    desc: "A full-featured store with secure payment gateway, optimized UX and a scalable backend architecture.",
    img: mvistaImg, href: "https://m-vista.com/" },
  { cat: "impact",     label: "Social Impact", name: "CASCADE Platform",
    desc: "A data-driven intelligence platform for ethical decision-making and improved labor conditions across supply chains.",
    img: cascadeImg, href: "https://cascade.issarainstitute.org/" },
  { cat: "impact",     label: "Social Impact", name: "ILM 3.0 —Inclusive Labor Monitoring",
    desc: "A secure internal system for collecting, managing and analyzing labor data to support ethical supply chains.",
    img: ilmImg, href: "https://ilm.issarainstitute.org/auth/login-page" },
  { cat: "impact",     label: "Social Impact", name: "Golden Dreams",
    desc: "A public awareness platform for ethical recruitment and worker protection, built for accessibility and impact storytelling.",
    img: goldendreamsImg, href: "https://app.golden-dreams.org/" },
  { cat: "impact",     label: "Social Impact", name: "Worker Voices",
    desc: "A worker-engagement platform enabling anonymous, meaningful feedback to improve labor conditions worldwide.",
    img: workervoiceImg, href: "https://www.workervoices.org/" },
  { cat: "ecommerce",  label: "E-Commerce",  name: "Orange Clove Catering",
    desc: "A high-traffic catering site showcasing services, managing complex menus with full mobile responsiveness.",
    img: orangecloveImg, href: "https://www.orangeclove.com.sg/" },
  { cat: "corporate",  label: "Corporate",   name: "Nextevo — Sustainable Fashion",
    desc: "A responsive, performance-optimized site for an eco-conscious brand, with clean UI and sustainability storytelling.",
    img: nextevoImg, href: "https://nextevo.one/" },
  { cat: "corporate",  label: "Corporate",   name: "Nextevo Group",
    desc: "A second Nextevo platform with refined UX, improved accessibility and optimized performance across devices.",
    img: nextevo1Img, href: "https://nextevogroup.com/" },
  { cat: "impact",     label: "Corporate",   name: "Issara Institute Website",
    desc: "The primary organizational website presenting mission, programs and impact — clarity, performance and accessibility first.",
    img: issarainstituteImg, href: "https://www.issarainstitute.org/" },
  { cat: "corporate",  label: "Platform",    name: "My Postman — Singpost",
    desc: "A review & feedback platform with postal-code search, optimized for fast data retrieval at scale.",
    img: postmanImg, href: "https://www.singpost.com/" },
  { cat: "corporate",  label: "Interactive", name: "RWC Games & Promo Redeem",
    desc: "Interactive games and a promotional reward-redemption system designed to boost campaign engagement and retention.",
    img: rwcImg, href: "https://stardreamcruises.com/en-th" },
];

const SKILLS = [
  { name: "Frontend Engineering & UI/UX", pct: 100 },
  { name: "Backend (Node.js, Django, APIs)", pct: 100 },
  { name: "Full-Stack Architecture", pct: 95 },
  { name: "Cloud, DevOps & Infrastructure", pct: 90 },
  { name: "Blockchain & Web3", pct: 85 },
];

const TECH = [
  ["fab fa-vuejs", "Vue.js"], ["fab fa-react", "React"], ["fab fa-node", "Node.js"],
  ["fab fa-python", "Django"], ["fab fa-js", "TypeScript"], ["fab fa-ethereum", "Solidity"],
  ["fas fa-database", "PostgreSQL"], ["fas fa-leaf", "MongoDB"], ["fab fa-aws", "AWS"],
  ["fab fa-docker", "Docker"], ["fas fa-fire", "Firebase"], ["fab fa-php", "Laravel"],
  ["fas fa-border-all", "Tailwind"], ["fab fa-git-alt", "Git"], ["fab fa-figma", "Figma"],
  ["fas fa-server", "DevOps"],
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-l");
    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          if (e.target.dataset.d) e.target.style.setProperty("--d", e.target.dataset.d);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

function useTilt() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return;
    const els = document.querySelectorAll("[data-tilt]");
    const handlers = [];
    els.forEach((el) => {
      const onMove = (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(900px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 8).toFixed(2)}deg) translateZ(0)`;
      };
      const onLeave = () => { el.style.transform = ""; };
      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
      handlers.push([el, onMove, onLeave]);
    });
    return () => handlers.forEach(([el, m, l]) => {
      el.removeEventListener("mousemove", m);
      el.removeEventListener("mouseleave", l);
    });
  });
}

function useCountUp() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-count]");
    const animated = new WeakSet();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting || animated.has(e.target)) return;
        animated.add(e.target);
        const target = parseInt(e.target.dataset.count, 10) || 0;
        const suffix = e.target.dataset.suffix || "";
        const dur = 1400;
        const start = performance.now();
        const step = (now) => {
          const p = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          e.target.textContent = Math.round(eased * target) + suffix;
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
    }, { threshold: 0.5 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useBars() {
  useEffect(() => {
    const els = document.querySelectorAll(".bar-fill");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.style.width = e.target.dataset.pct;
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.4 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useScrollProgress(navRef, timelineRef, glowRef) {
  useEffect(() => {
    const bar = document.getElementById("scrollProgress");
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
      if (bar) bar.style.width = pct + "%";
      if (navRef.current) navRef.current.classList.toggle("scrolled", h.scrollTop > 12);
      if (glowRef.current) {
        const offset = h.scrollTop * 0.12;
        glowRef.current.style.transform = `translateY(${offset}px)`;
      }
      if (timelineRef.current) {
        const r = timelineRef.current.getBoundingClientRect();
        const total = r.height;
        const viewed = Math.min(Math.max(-r.top + window.innerHeight * 0.4, 0), total);
        timelineRef.current.style.setProperty("--tl-dot", viewed + "px");
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [navRef, timelineRef, glowRef]);
}

export default function Portfolio() {
  const [accent, setAccent] = useState("emerald");
  const [theme, setTheme] = useState("dark");
  const [filter, setFilter] = useState("all");
  const [openExp, setOpenExp] = useState({});
  const canvasRef = useRef(null);
  const navRef = useRef(null);
  const timelineRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-accent", accent);
    document.documentElement.setAttribute("data-theme", theme);
    document.body.classList.add("portfolio-body");
    try {
      localStorage.setItem("portfolio:accent", accent);
      localStorage.setItem("portfolio:theme", theme);
    } catch (_) {}
    window.dispatchEvent(new CustomEvent("portfolio:accent"));
    return () => document.body.classList.remove("portfolio-body");
  }, [accent, theme]);

  useEffect(() => {
    try {
      const a = localStorage.getItem("portfolio:accent");
      const t = localStorage.getItem("portfolio:theme");
      if (a && ACCENTS.some((x) => x.key === a)) setAccent(a);
      if (t === "light" || t === "dark") setTheme(t);
    } catch (_) {}
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;
    if (!window.THREE) {
      const s = document.createElement("script");
      s.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
      s.async = true;
      let teardown = () => {};
      s.onload = () => { teardown = initHeroCanvas(canvasRef.current); };
      document.head.appendChild(s);
      return () => teardown();
    }
    const teardown = initHeroCanvas(canvasRef.current);
    return () => teardown();
  }, []);

  useReveal();
  useTilt();
  useCountUp();
  useBars();
  useScrollProgress(navRef, timelineRef, glowRef);

  const toggleExp = useCallback((i) => {
    setOpenExp((o) => ({ ...o, [i]: !o[i] }));
  }, []);

  const filtered = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.cat === filter);

  return (
    <>
      <div className="scroll-progress" id="scrollProgress" />

      <nav className="nav" id="nav" ref={navRef}>
        <div className="wrap nav-inner">
          <a href="#top" className="logo">
            <span className="mark" aria-hidden="true">A</span>
            <span className="word">Alfred<span className="word-accent">.</span></span>
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Work</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="nav-actions">
            <button
              className="icon-btn"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              <i className={`fas ${theme === "dark" ? "fa-moon" : "fa-sun"}`} />
            </button>
            <a
              className="btn btn-primary"
              href="https://drive.google.com/file/d/1fa4Ed-af-frU4idDKKANDXPnKYzKWl69/view"
              target="_blank" rel="noopener noreferrer"
            >
              <i className="fas fa-arrow-down" /><span>Resume</span>
            </a>
          </div>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="hero-glow" ref={glowRef} />
        <div className="wrap">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="status-chip reveal"><span className="ping" /> Available for select projects &amp; roles</div>
              <h1 className="hero-name reveal" data-d="1">Zin Min Khant<br /><span className="grad">— Alfred.</span></h1>
              <p className="hero-role reveal" data-d="2">Senior Full-Stack Developer <span className="sep">/</span> 7+ Years</p>
              <p className="hero-sub reveal" data-d="2">
                I build high-performance web applications that deliver real business results — from blockchain dApps
                to e-commerce platforms serving 50K+ users. I turn complex challenges into elegant, scalable solutions.
              </p>
              <div className="hero-cta reveal" data-d="3">
                <a href="#projects" className="btn btn-primary"><i className="fas fa-layer-group" /> View My Work</a>
                <a href="#contact" className="btn btn-ghost"><i className="fas fa-paper-plane" /> Get in Touch</a>
              </div>
              <div className="hero-social reveal" data-d="4">
                <a href="https://github.com/Alfred-ZinMinKhant" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github" /></a>
                <a href="https://www.linkedin.com/in/zin-min-khant-alfred/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
                <a href="https://www.upwork.com/freelancers/~01c3a44d6e103d2b2d" target="_blank" rel="noopener noreferrer" aria-label="Upwork"><i className="fas fa-briefcase" /></a>
                <a href="mailto:zinminkhant.alfred@gmail.com" aria-label="Email"><i className="fas fa-envelope" /></a>
              </div>
            </div>
            <div className="hero-visual">
              <canvas id="hero-canvas" ref={canvasRef} />
              <div className="orbit-badge ob-1 reveal" data-d="2"><i className="fab fa-vuejs" /> Vue · React</div>
              <div className="orbit-badge ob-2 reveal" data-d="3"><i className="fab fa-ethereum" /> Web3 / Solidity</div>
              <div className="orbit-badge ob-3 reveal" data-d="4"><i className="fas fa-server" /> Node · Django</div>
            </div>
          </div>
        </div>
        <div className="scroll-hint"><div className="mouse" />Scroll</div>
      </header>

      <section style={{ padding: "70px 0" }}>
        <div className="wrap">
          <div className="stats reveal">
            <div className="stat"><div className="num"><span data-count="7" data-suffix="+">0</span></div><div className="label">Years Experience</div></div>
            <div className="stat"><div className="num"><span data-count="50" data-suffix="K+">0</span></div><div className="label">Users Served</div></div>
            <div className="stat"><div className="num"><span data-count="25" data-suffix="+">0</span></div><div className="label">Projects Delivered</div></div>
            <div className="stat"><div className="num"><span data-count="6" data-suffix="">0</span></div><div className="label">Countries Collaborated</div></div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="wrap about-grid">
          <div className="about-photo reveal-l">
            <div className="about-frame" />
            <img src={aboutImg} alt="Zin Min Khant (Alfred)" />
          </div>
          <div className="about-body">
            <div className="eyebrow reveal">About Me</div>
            <h2 className="section-title reveal" data-d="1">Engineering across the<br />entire stack.</h2>
            <p className="reveal" data-d="1">
              I'm <strong>Zin Min Khant (Alfred)</strong>, a Senior Full-Stack Developer with <strong>7+ years</strong> mastering modern JavaScript ecosystems.
              I architect performant front-ends, scalable back-ends, and reliable cloud deployments — end to end.
            </p>
            <p className="reveal" data-d="2">
              Today I'm on the Tech &amp; Innovation team at <strong>Issara Institute</strong>, building applications for worker protection and ethical supply chains across Southeast Asia.
              I've shipped <strong>Ethereum dApps</strong>, high-traffic e-commerce platforms, and data-intelligence systems — collaborating with teams across 6 countries.
            </p>
            <div className="about-tags reveal" data-d="3">
              <span className="tag"><i className="fas fa-bolt" />Performance-obsessed</span>
              <span className="tag"><i className="fas fa-cube" />Web3 &amp; Blockchain</span>
              <span className="tag"><i className="fas fa-globe" />Cross-border teams</span>
              <span className="tag"><i className="fas fa-shield-alt" />Secure by design</span>
            </div>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow reveal">What I Do</div>
            <h2 className="section-title reveal" data-d="1">Versatile by design.</h2>
            <p className="section-lead reveal" data-d="1">Building performant UIs, scalable backends, and reliable deployments — with the right tool for every layer.</p>
          </div>
          <div className="skills-layout">
            <div className="do-list">
              <div className="do-item reveal"><div className="ic"><i className="fas fa-laptop-code" /></div><p>Build highly interactive, scalable front-ends with <strong>Vue.js</strong>, <strong>React.js</strong> and modern JavaScript.</p></div>
              <div className="do-item reveal" data-d="1"><div className="ic"><i className="fas fa-server" /></div><p>Develop robust back-ends with <strong>Node.js</strong> and <strong>Django</strong> — RESTful APIs and secure authentication.</p></div>
              <div className="do-item reveal" data-d="1"><div className="ic"><i className="fab fa-ethereum" /></div><p>Implement <strong>blockchain &amp; Web3</strong> integrations, including Ethereum smart contracts and dApps.</p></div>
              <div className="do-item reveal" data-d="2"><div className="ic"><i className="fas fa-database" /></div><p>Design and optimize databases, caching layers and data flows for high-performance applications.</p></div>
              <div className="do-item reveal" data-d="2"><div className="ic"><i className="fas fa-cloud" /></div><p>Deploy, monitor and scale on <strong>AWS</strong>, Firebase, DigitalOcean, Netlify &amp; Vercel with DevOps best practices.</p></div>
            </div>
            <div className="skills-right">
              <h3 className="tech-sub reveal">Core Proficiency</h3>
              <div className="bars">
                {SKILLS.map((s, i) => (
                  <div className="bar-row reveal" key={s.name} data-d={i % 3}>
                    <div className="bar-top"><span className="name">{s.name}</span><span className="pct">{s.pct}%</span></div>
                    <div className="bar-track"><div className="bar-fill" data-pct={s.pct + "%"} /></div>
                  </div>
                ))}
              </div>
              <h3 className="tech-sub reveal" style={{ marginTop: 36 }}>Tech Stack</h3>
              <div className="tech-grid reveal" data-d="1">
                {TECH.map(([icon, name]) => (
                  <div className="tech-chip" key={name}><i className={icon} /><span>{name}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow reveal">Career</div>
            <h2 className="section-title reveal" data-d="1">Where I've made impact.</h2>
            <p className="section-lead reveal" data-d="1">Seven years across product, agency and freelance — shipping software that scales.</p>
          </div>
          <div className="timeline" ref={timelineRef}>
            {EXPERIENCE.map((e, i) => (
              <div className="tl-item reveal" key={i}>
                <div className="tl-logo"><img src={e.logo} alt={e.alt} /></div>
                <div className="tl-card" data-tilt>
                  <div className="tl-head"><span className="tl-role">{e.role}</span><span className="tl-date">{e.date}</span></div>
                  <div className="tl-company">{e.company}</div>
                  <p className="tl-desc">{e.desc}</p>
                  <ul className={`tl-bullets ${openExp[i] ? "" : "collapsed"}`}>
                    {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                  <button className={`tl-more ${openExp[i] ? "open" : ""}`} onClick={() => toggleExp(i)}>
                    {openExp[i] ? "Show less" : "Show more"} <i className="fas fa-chevron-down" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow reveal">Selected Work</div>
            <h2 className="section-title reveal" data-d="1">Platforms &amp; products I've built.</h2>
            <p className="section-lead reveal" data-d="1">Key platforms and products I helped build and launch — across commerce, Web3 and social impact.</p>
          </div>
          <div className="filters reveal">
            {[
              ["all", "All"], ["web3", "Web3"], ["ecommerce", "E-Commerce"],
              ["impact", "Social Impact"], ["corporate", "Corporate"],
            ].map(([key, label]) => (
              <button
                key={key}
                className={`filter ${filter === key ? "active" : ""}`}
                onClick={() => setFilter(key)}
              >{label}</button>
            ))}
          </div>
          <div className="proj-grid">
            {filtered.map((p, i) => (
              <article className="proj-card reveal" data-cat={p.cat} data-tilt key={p.name} data-d={i % 3}>
                <div className="proj-shot">
                  <span className="proj-cat">{p.label}</span>
                  <img src={p.img} alt={p.name} loading="lazy" />
                </div>
                <div className="proj-body">
                  <h3 className="proj-name">{p.icon && <i className={p.icon} />} {p.name}</h3>
                  <p className="proj-desc">{p.desc}</p>
                  <a className="proj-link" href={p.href} target="_blank" rel="noopener noreferrer">
                    Visit Website <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow reveal">Recognition</div>
            <h2 className="section-title reveal" data-d="1">Achievements &amp; certifications.</h2>
            <p className="section-lead reveal" data-d="1">Awards and recognition earned throughout my career.</p>
          </div>
          <div className="ach-grid">
            <div className="ach-card reveal" data-tilt>
              <i className="fas fa-award ach-icon" />
              <div className="ach-logo"><img src={mytLogo} alt="Myanmar Youth Technopreneurship" /></div>
              <h3 className="ach-title">Myanmar Youth Technopreneurship</h3>
              <p className="ach-sub">Honorable Mention — recognized for innovative use of technology and entrepreneurship to create real-world social impact.</p>
            </div>
            <div className="ach-card reveal" data-d="1" data-tilt>
              <i className="fas fa-award ach-icon" />
              <div className="ach-logo"><img src={deloitteLogo} alt="Deloitte Risk Intelligence Challenge" /></div>
              <h3 className="ach-title">Deloitte Risk Intelligence Challenge</h3>
              <p className="ach-sub">Runner-Up — for a data-driven solution addressing risk intelligence and analytical problem-solving.</p>
            </div>
            <div className="ach-card reveal" data-d="2" data-tilt>
              <i className="fas fa-trophy ach-icon" />
              <div className="ach-logo"><img src={scwLogo} alt="Employee of the Year" /></div>
              <h3 className="ach-title">Employee of the Year</h3>
              <p className="ach-sub">SCW Myanmar (2021 &amp; 2022) — for outstanding performance, technical leadership and consistent delivery excellence.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="education">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow reveal">Education</div>
            <h2 className="section-title reveal" data-d="1">Foundations.</h2>
          </div>
          <div className="edu-grid">
            <div className="edu-card reveal" data-tilt>
              <div className="edu-logo"><img src={oxfordLogo} alt="Oxford Brookes University" /></div>
              <div>
                <h3 className="edu-school">Oxford Brookes University</h3>
                <p className="edu-deg">BSc (Hons) — Information Technology for Business</p>
                <p className="edu-desc">Advanced computer science — algorithms, data structures, AI and software engineering. Final-year research on machine learning in NLP. Graduated with honors.</p>
              </div>
            </div>
            <div className="edu-card reveal" data-d="1" data-tilt>
              <div className="edu-logo"><img src={nccLogo} alt="NCC Education" /></div>
              <div>
                <h3 className="edu-school">NCC Education · Strategy First University</h3>
                <p className="edu-deg">Diploma — Business Information Technology</p>
                <p className="edu-desc">Systems analysis, database management and e-commerce, with a capstone on business-intelligence systems for SMEs. Graduated with distinction.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="wrap">
          <div className="contact-card reveal">
            <div className="eyebrow" style={{ justifyContent: "center" }}>Let's Talk</div>
            <h2>Have a project in mind?</h2>
            <p>Discuss a project or just want to say hi? My inbox is open for all — let's build something that drives real results.</p>
            <a className="contact-mail" href="mailto:zinminkhant.alfred@gmail.com">zinminkhant.alfred@gmail.com</a>
            <div className="contact-cta">
              <a className="btn btn-primary" href="mailto:zinminkhant.alfred@gmail.com"><i className="fas fa-paper-plane" /> Send a Message</a>
              <a className="btn btn-ghost" href="https://drive.google.com/file/d/1fa4Ed-af-frU4idDKKANDXPnKYzKWl69/view" target="_blank" rel="noopener noreferrer"><i className="fas fa-arrow-down" /> Download Resume</a>
            </div>
            <div className="contact-social">
              <a href="https://github.com/Alfred-ZinMinKhant" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github" /></a>
              <a href="https://www.linkedin.com/in/zin-min-khant-alfred/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
              <a href="https://www.upwork.com/freelancers/~01c3a44d6e103d2b2d" target="_blank" rel="noopener noreferrer" aria-label="Upwork"><i className="fas fa-briefcase" /></a>
              <a href="https://www.facebook.com/alfred.zinminkhant" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap footer-inner">
          <a href="#top" className="logo">
            <span className="mark" aria-hidden="true">A</span>
            <span className="word">Alfred<span className="word-accent">.</span></span>
          </a>
          <p>© {new Date().getFullYear()} Zin Min Khant (Alfred) · Built &amp; deployed on Netlify.</p>
          <button className="to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top">
            <i className="fas fa-arrow-up" />
          </button>
        </div>
      </footer>
    </>
  );
}
