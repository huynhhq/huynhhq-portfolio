import Image from "next/image";
import type { CSSProperties } from "react";
import { ArrowDownRight, ArrowUpRight, Braces, CheckCircle2, CloudCog, Code2, Download, Mail, MapPin, Smartphone, Sparkles } from "lucide-react";
import { CountUp, LineReveal, Magnetic, MotionRoot, Reveal, ScrollProgress, Spot, Tilt, TimelineRail } from "@/components/site/motion";

const projects = [
  { number: "01", name: "Holicay", label: "Travel booking platform", description: "Took a four-year-old web product mobile—architecting and shipping the React Native app to both stores in six months as the sole mobile engineer.", impact: ["10K+ Android downloads", "2.6K MAU", "6-month delivery"], stack: ["React Native", "Expo / EAS", "Next.js", "NestJS", "MongoDB"], accent: "violet", symbol: "H", screen: "Discover more of the world" },
  { number: "02", name: "Snap4Me", label: "Photo & video marketplace", description: "Built the mobile app, API server and admin portal end to end, including native media compression, live streaming, payments and production operations.", impact: ["55K+ Android downloads", "900 MAU", "Built by a team of 1"], stack: ["React Native", "Next.js", "Strapi", "MySQL", "Mux"], accent: "cyan", href: "https://www.snap4me.com", symbol: "S", screen: "Moments, captured anywhere" },
  { number: "03", name: "Arntreal", label: "Collectibles & lootbox app", description: "Delivered the Lootbox and Affiliate experiences for a hard televised launch, then reduced backend load and improved large-screen startup performance.", impact: ["3-week launch", "10K+ downloads", "Team of 3"], stack: ["React Native", "Expo", "Supabase", "Edge Functions", "Sentry"], accent: "orange", href: "https://arntreal.com", symbol: "A", screen: "Collect. Reveal. Repeat." },
];

const archive = [
  { year: "2022 — 23", name: "Hide Me Please", native: "하이드미플리즈", market: "Korea", type: "NFT utility app", role: "Mobile developer · team of 5", description: "Wallet-based NFT ownership verification with a quest system that upgrades NFT utilities.", stack: ["React Native", "MetaMask SDK", "Laravel", "AWS"], links: [{ label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.kr.hideme" }, { label: "App Store", href: "https://apps.apple.com/us/app/id1663171012" }] },
  { year: "2022 — 23", name: "Busk Fulfillment", market: "Korea", type: "Cross-border logistics platform", role: "Team leader · team of 6", description: "Marketplace for overseas warehouse fulfillment, with seller, warehouse and operator portals. Led and mentored five engineers.", stack: ["React", "NestJS", "Laravel", "Amazon API", "PayPal"], links: [{ label: "Website", href: "https://buskfulfillment.com" }] },
  { year: "2022", name: "IOU", native: "아이오유", market: "Korea", type: "Loan contract app", role: "Full-stack developer · team of 1", description: "Create, sign and export loan contracts, then track repayments with push and SMS reminders.", stack: ["React Native", "NestJS", "MySQL", "Firebase"], links: [] },
  { year: "2022", name: "Hi Sim", market: "Vietnam", type: "SIM trading marketplace", role: "Mobile developer · team of 3", description: "Search, buy and sell phone numbers, with seller onboarding built into the app.", stack: ["React Native", "React", "Express", "MongoDB"], links: [] },
  { year: "2021 — 22", name: "Ggoomming", native: "꾸밍", market: "Korea", type: "Social network · Kyobo Book Centre", role: "Mobile developer · team of 4", description: "Photo-sharing social network with Naver, Kakao, Google and Apple sign-in and in-app purchases.", stack: ["React Native", "Express", "MongoDB", "IAP"], links: [] },
  { year: "2021", name: "GameFriend", native: "겜친", market: "Korea", type: "Gamer matching app", role: "Mobile developer · team of 4", description: "Matches players who share favourite games and connects them through real-time chat.", stack: ["React Native", "Socket.IO", "Angular", "MongoDB"], links: [] },
  { year: "2020", name: "PONS", native: "폰스", market: "Korea", type: "Telehealth platform", role: "Web & mobile developer · team of 4", description: "Patient app for phone consultations, medical orders and payments, plus web consoles for hospitals, doctors and pharmacies.", stack: ["React Native", "Angular", "Express", "Iamport"], links: [] },
  { year: "2020", name: "KBMember v3", market: "Vietnam", type: "Loyalty app · KBVision", role: "Full-stack developer · team of 1", description: "Loyalty programme for KBVision customers: points, promotions, prize games and in-app calling.", stack: ["React Native", "Laravel", "Stringee", "Firebase"], links: [] },
];

const experience = [
  { period: "2023 — NOW", role: "Lead Full-stack Developer", company: "TechZeus · Singapore / Remote", detail: "Leading architecture and delivery across React Native, Next.js and backend systems for Holicay, Snap4Me and Arntreal." },
  { period: "2020 — 2023", role: "Senior Frontend Developer", company: "BrickMate Group Vietnam", detail: "Led a five-person team, established project foundations and mentored engineers across React and React Native products." },
  { period: "2019 — 2021", role: "Full-stack Developer", company: "FTC Joint Stock Company", detail: "Owned web and mobile features from architecture to deployment, integrating Firebase, Stringee and event-driven services." },
  { period: "2018 — 2020", role: "Full-stack Developer", company: "HAYABUSA Co., Ltd", detail: "Built cross-platform mobile products with React Native and Laravel backends." },
];

const capabilities = [
  { icon: Smartphone, title: "Mobile systems", text: "React Native, native Android/iOS modules, SDK integrations, billing, IAP and store releases." },
  { icon: Braces, title: "Product frontend", text: "React, Next.js and TypeScript interfaces with durable component architecture and considered UX." },
  { icon: CloudCog, title: "Backend & operations", text: "APIs, webhooks, serverless functions, CI/CD and observability that hold up in production." },
];

const stats = [
  { value: 8, suffix: "+", label: "Years of experience" },
  { value: 55, suffix: "K+", label: "Downloads on largest app" },
  { value: 2, suffix: "", label: "App stores mastered" },
  { symbol: "∞", label: "Care for the details" },
];

const techRows = [
  ["React Native", "Next.js", "TypeScript", "Expo", "Supabase", "Node.js"],
  ["Google Cloud", "Sentry", "NestJS", "MongoDB", "Mux", "Edge Functions"],
];

export default function Home() {
  return (
    <MotionRoot>
      <main>
        <ScrollProgress />
        <div className="noise" aria-hidden="true" />

        <nav className="nav-shell" aria-label="Primary navigation">
          <a className="monogram" href="#top" aria-label="Back to top">HQ<span>.</span></a>
          <div className="nav-links"><a href="#work">Work</a><a href="#about">About</a><a href="#experience">Experience</a><a href="#contact">Contact</a></div>
          <a className="nav-cta" href="mailto:huynhhq209@gmail.com">Let&apos;s talk <ArrowUpRight size={15} /></a>
        </nav>

        <Spot as="section" className="hero" id="top">
          <div className="hero-bg" aria-hidden="true">
            <div className="aurora aurora-one" /><div className="aurora aurora-two" /><div className="aurora aurora-three" />
            <div className="hero-grid" /><div className="hero-spot" />
          </div>

          <div className="section-shell hero-inner">
            <div className="hero-copy">
              <Reveal y={14}><div className="availability"><i /> Available for select opportunities <b>2026</b></div></Reveal>
              <Reveal y={14} delay={0.08}><p className="eyebrow"><span /> Senior software engineer · HCMC</p></Reveal>
              <h1>
                <LineReveal delay={0.15}>I engineer</LineReveal>
                <LineReveal delay={0.27}><span className="stroke-word">digital products</span></LineReveal>
                <LineReveal delay={0.39}>that <em>ship.</em></LineReveal>
              </h1>
              <Reveal delay={0.7} y={20}>
                <p className="hero-lede">I&apos;m Huynh Hoang—a full-stack engineer focused on React Native, mobile SDKs and reliable product systems. From first architecture to store release, I turn ambitious ideas into software people use.</p>
              </Reveal>
              <Reveal delay={0.85} y={20}>
                <div className="hero-actions">
                  <Magnetic><a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={18} /></a></Magnetic>
                  <Magnetic><a className="button button-ghost" href="/Resume_HuynhHQ.pdf" download><Download size={17} /> Download résumé</a></Magnetic>
                </div>
              </Reveal>
            </div>

            <Reveal className="hero-visual-wrap" delay={0.35} y={48}>
              <div className="hero-visual" aria-label="Portrait of Huynh Hoang Quoc">
                <div className="hero-orbit orbit-one"><i /></div><div className="hero-orbit orbit-two"><i /></div>
                <div className="portrait-glow" />
                <div className="portrait-frame"><div className="portrait-backdrop" /></div>
                <Image src="/assets/huynh-hoang-quoc.png" alt="Huynh Hoang Quoc" width={1254} height={1254} priority className="portrait" />
                <div className="floating-card card-code"><Code2 size={17} /><span><strong>8 years</strong> building products</span></div>
                <div className="floating-card card-ship"><CheckCircle2 size={17} /><span><strong>Shipped</strong> on iOS & Android</span></div>
                <div className="code-panel" aria-hidden="true"><div><i /><i /><i /><span>production.ts</span></div><code><b>const</b> product = <span>await</span> build({`{`}<br />&nbsp;&nbsp;quality: <em>true</em>,<br />&nbsp;&nbsp;ownership: <em>true</em>,<br />&nbsp;&nbsp;impact: <strong>&quot;measurable&quot;</strong><br />{`}`});</code></div>
              </div>
            </Reveal>
          </div>

          <div className="section-shell hero-stats" aria-label="Career highlights">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={0.9 + index * 0.08} y={24}>
                <Spot className="stat-card spot">
                  <strong>{stat.symbol ?? <CountUp value={stat.value ?? 0} suffix={stat.suffix} />}</strong>
                  <span>{stat.label}</span>
                </Spot>
              </Reveal>
            ))}
          </div>
        </Spot>

        <div className="tech-marquee" aria-label="Technology expertise">
          {techRows.map((row, rowIndex) => (
            <div className={rowIndex % 2 ? "marquee-row reverse" : "marquee-row"} key={row[0]}>
              {[0, 1, 2, 3].map((copy) => (
                <div className="marquee-group" aria-hidden={copy > 0} key={copy}>
                  {row.map((item) => <span key={item}>{item}<i>✦</i></span>)}
                </div>
              ))}
            </div>
          ))}
        </div>

        <section className="section-shell work-section" id="work">
          <Reveal>
            <div className="section-heading"><div><p className="eyebrow"><span /> Selected work</p><h2>Products built for <em>the real world.</em></h2></div><p>Architecture, delivery and operations—owned all the way through.</p></div>
          </Reveal>
          <div className="project-showcase">
            {projects.map((project, index) => (
              <div className="stack-item" style={{ "--i": index } as CSSProperties} key={project.name}>
                <Reveal>
                  <Spot as="article" className={`project-card spot ${project.accent}`}>
                    <div className="project-copy">
                      <div className="project-meta"><span className="project-number">{project.number}</span><p className="project-label">{project.label}</p></div>
                      <h3>{project.name}</h3>
                      <p className="project-description">{project.description}</p>
                      <div className="project-impact">{project.impact.map((item) => <div key={item}><Sparkles size={14} /> {item}</div>)}</div>
                      <div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                      {project.href && <a className="project-link" href={project.href} target="_blank" rel="noreferrer">Visit product <ArrowUpRight size={15} /></a>}
                    </div>
                    <Tilt className="project-stage">
                      <div className="stage-glow" aria-hidden="true" /><div className="stage-grid" aria-hidden="true" />
                      <div className="phone phone-back" aria-hidden="true"><div className="phone-notch" /><div className="phone-logo">{project.symbol}</div><p>{project.name}</p><small>Production mobile experience</small><div className="phone-lines"><i /><i /><i /></div></div>
                      <div className="phone phone-front" aria-hidden="true"><div className="phone-notch" /><div className="phone-status"><span>9:41</span><span>● ● ●</span></div><div className="phone-hero"><b>{project.symbol}</b><p>{project.screen}</p></div><div className="phone-cards"><i /><i /><i /></div><div className="phone-rows"><i /><i /></div><div className="phone-nav"><i /><i /><i /><i /></div></div>
                      <div className="stage-metric"><span>↗</span><strong>{project.impact[0]}</strong><small>real-world reach</small></div>
                    </Tilt>
                  </Spot>
                </Reveal>
              </div>
            ))}
          </div>

          <div className="archive">
            <Reveal>
              <div className="archive-heading"><p className="eyebrow"><span /> Earlier work · 2020 — 2023</p><h3>Eight more products, <em>shipped.</em></h3><p>Client apps for Korea and Vietnam, built before TechZeus—most as the engineer who set up the codebase and took it to the stores.</p></div>
            </Reveal>
            <div className="archive-grid">
              {archive.map((item, index) => (
                <Reveal key={item.name} delay={(index % 4) * 0.07}>
                  <Spot as="article" className="archive-card spot">
                    <div className="archive-top"><span>{item.year}</span><span>{item.market}</span></div>
                    <h4>{item.name}{item.native && <small lang="ko">{item.native}</small>}</h4>
                    <p className="archive-type">{item.type}</p>
                    <p className="archive-description">{item.description}</p>
                    <div className="project-stack">{item.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
                    <div className="archive-foot"><span>{item.role}</span>{item.links.length > 0 && <div>{item.links.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label} <ArrowUpRight size={13} /></a>)}</div>}</div>
                  </Spot>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="capability-band" id="about">
          <div className="section-shell">
            <Reveal>
              <div className="capability-intro"><p className="eyebrow"><span /> How I work</p><h2>Full-stack perspective.<br /><em>Mobile-first craft.</em></h2><p>I work close to product owners and designers, translating messy constraints into clear technical decisions—and staying around to measure what happens after launch.</p></div>
            </Reveal>
            <div className="capability-grid">
              {capabilities.map(({ icon: Icon, title, text }, index) => (
                <Reveal key={title} delay={index * 0.12}>
                  <Spot as="article" className="capability-card spot"><div className="capability-icon"><Icon size={22} /></div><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></Spot>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell experience-section" id="experience">
          <Reveal><div className="section-heading compact"><div><p className="eyebrow"><span /> Experience</p><h2>A career of <em>shipping.</em></h2></div></div></Reveal>
          <TimelineRail className="timeline">
            {experience.map((item, index) => (
              <Reveal key={item.company} delay={index * 0.06}>
                <article><p className="timeline-period">{item.period}</p><div className="timeline-marker"><span /></div><div className="timeline-role"><h3>{item.role}</h3><p>{item.company}</p></div><p className="timeline-detail">{item.detail}</p></article>
              </Reveal>
            ))}
          </TimelineRail>
        </section>

        <section className="contact section-shell" id="contact">
          <Reveal>
            <Spot className="contact-card spot">
              <div className="contact-aurora" aria-hidden="true" />
              <p className="eyebrow"><span /> Available for the right opportunity</p>
              <h2>Have a product that needs to <em>ship?</em></h2>
              <p>Let&apos;s talk about mobile architecture, full-stack delivery or the next hard problem worth solving.</p>
              <div className="contact-actions">
                <Magnetic><a className="button button-light" href="mailto:huynhhq209@gmail.com"><Mail size={18} /> huynhhq209@gmail.com</a></Magnetic>
                <Magnetic><a className="button button-ghost" href="/Resume_HuynhHQ.pdf" download><Download size={17} /> Résumé</a></Magnetic>
              </div>
            </Spot>
          </Reveal>
        </section>

        <div className="wordmark" aria-hidden="true">HUYNH HOANG</div>
        <footer className="footer section-shell"><a className="monogram" href="#top">HQ<span>.</span></a><p>Designed & built with intent in Ho Chi Minh City.</p><div><a href="mailto:huynhhq209@gmail.com" aria-label="Email"><Mail size={18} /></a><span><MapPin size={16} /> HCMC, Vietnam</span></div></footer>
      </main>
    </MotionRoot>
  );
}
