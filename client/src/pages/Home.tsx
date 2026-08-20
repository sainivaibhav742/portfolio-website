/* SOCIALMOON / ORBITAL FIELD NOTES — this page presents founder authority as a trajectory of companies, systems, and honest field reports; never as a generic developer card grid. */
import { useEffect, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Code2,
  ExternalLink,
  Github,
  HeartPulse,
  Linkedin,
  Mail,
  Menu,
  Rocket,
  Sparkles,
  Terminal,
  Workflow,
  X,
} from "lucide-react";

const assets = {
  mark: "/socialmoon-mark.png",
  hero: "/socialmoon-hero-orbit.png",
  socialmoon: "/socialmoon-case-study-aurora.png",
  bpolytix: "/socialmoon-case-study-grid.png",
  openSource: "/socialmoon-case-study-lattice.png",
  portrait: "/vaibhav-founder-portrait.jpg",
};

const companies = [
  {
    number: "01 / ACTIVE COMPANY",
    name: "SocialMoon",
    description:
      "A growth and efficiency systems company for B2B teams—bringing together content growth, lead journeys, websites, automation, and practical AI execution.",
    meta: "Co-founder & CTO · 2025—Present",
    href: "https://www.socialmoon.in/",
    featured: true,
  },
  {
    number: "02 / OPERATIONS VENTURE",
    name: "BPOlytix",
    description:
      "An operations support venture for teams that need reliable scale across data annotation, backend support, and non-voice customer service.",
    meta: "CTO · Launch phase · 2026—Present",
    href: "https://bpolytix.in",
  },
  {
    number: "03 / NEXT TRAJECTORY",
    name: "In motion",
    description:
      "Exploring AI product systems, healthcare discovery workflows, and better infrastructure for founders raising and operating companies.",
    meta: "Research & product queue · 2026",
    href: "#work",
  },
];

const capabilities = [
  {
    icon: Bot,
    label: "01 / PRODUCT",
    title: "AI products",
    copy: "Agents, assistants, and systems that create practical leverage in real workflows.",
  },
  {
    icon: Workflow,
    label: "02 / SYSTEMS",
    title: "Automation",
    copy: "Content engines, lead journeys, internal operations, and API-led business workflows.",
  },
  {
    icon: Code2,
    label: "03 / ENGINEERING",
    title: "Full-stack build",
    copy: "From prototype architecture to production-oriented frontend, backend, data, and cloud systems.",
  },
  {
    icon: Terminal,
    label: "04 / STRATEGY",
    title: "Founder enablement",
    copy: "Technical direction that keeps early product work focused, adaptable, and commercially useful.",
  },
];

const reports = [
  {
    image: assets.socialmoon,
    type: "ACTIVE COMPANY / 2025—PRESENT",
    title: "SocialMoon",
    copy: "Growth and efficiency systems built for B2B teams across content, lead generation, web, automation, and AI workflows.",
    href: "https://www.socialmoon.in/",
  },
  {
    image: assets.bpolytix,
    type: "OPERATIONS / 2026—PRESENT",
    title: "BPOlytix",
    copy: "Data annotation, backend support, and non-voice customer service foundations for teams that need dependable scale.",
    href: "https://bpolytix.in",
  },
  {
    image: assets.openSource,
    type: "PUBLIC LAB / ONGOING",
    title: "Open-source experiments",
    copy: "Public work across AI, NLP, image captioning, sign language translation, privacy tools, and portfolio systems.",
    href: "https://github.com/sainivaibhav742",
  },
];

const workIndex = [
  { id: "01", name: "SocialMoon", summary: "Growth, web, automation, and practical AI systems for B2B teams.", status: "Verified public", href: "https://www.socialmoon.in/" },
  { id: "02", name: "BPOlytix", summary: "Data annotation, backend support, and operations support venture.", status: "Verified public", href: "https://bpolytix.in" },
  { id: "03", name: "AI Marketing Agent", summary: "Campaign planning, content generation, publishing checks, and performance review workflow.", status: "Building queue", href: "https://github.com/sainivaibhav742" },
  { id: "04", name: "Healthcare Recommendation Engine", summary: "Research-stage discovery, structured intake, and decision-support layer.", status: "Research queue", href: "https://github.com/sainivaibhav742" },
  { id: "05", name: "BetterFund", summary: "Fundraising readiness, founder updates, investor material, and structured deal-room concept.", status: "Product queue", href: "https://github.com/sainivaibhav742" },
  { id: "06", name: "Open Source Experiments", summary: "Public repositories across AI/ML, utility apps, and developer experiments.", status: "Verified public", href: "https://github.com/sainivaibhav742" },
];

const principles = [
  ["01", "Validate early", "Build toward a real decision."],
  ["02", "Ship with technical discipline", "Speed only matters when it survives contact."],
  ["03", "Use AI where it earns its place", "Leverage first, theatre never."],
  ["04", "Document the useful work", "Experiments become public learning."],
];

const roles = [
  { period: "2025—NOW", name: "SocialMoon", type: "Co-founder & CTO", description: "Leading product, engineering, and AI automation systems." , href: "https://www.socialmoon.in/"},
  { period: "2026—NOW", name: "BPOlytix", type: "CTO", description: "Owning technical direction for data-led operations and delivery systems.", href: "https://bpolytix.in" },
  { period: "ONGOING", name: "Build in public", type: "Founder / developer / AI engineer", description: "Creating products, open-source tools, and startup systems transparently.", href: "https://github.com/sainivaibhav742" },
];

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.5, delay, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
}

function ExternalAnchor({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  return (
    <a className={className} href={href} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
      {children}
    </a>
  );
}

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="sm-page">
      <a href="#main-content" className="sm-sr-only">Skip to main content</a>

      <header className={`topline ${isScrolled ? "is-scrolled" : ""}`}>
        <div className="sm-wrap topline-inner">
          <a className="brand-lockup" href="#top" aria-label="Socialmoon field notes home">
            <img src={assets.mark} alt="Socialmoon orbit mark" />
            <span>VAIBHAV<small>FIELD NOTES / V.S.</small></span>
          </a>
          <nav className="top-nav" aria-label="Primary navigation">
            <a href="#companies">Companies</a>
            <a href="#build">What I build</a>
            <a href="#work">Field reports</a>
            <a href="#about">About</a>
          </nav>
          <a className="nav-contact" href="mailto:sainivaibhav742@gmail.com?subject=Building%20something%20together">Start a conversation <ArrowUpRight size={14} /></a>
          <button className="mobile-toggle" type="button" onClick={() => setMenuOpen((current) => !current)} aria-expanded={menuOpen} aria-label={menuOpen ? "Close menu" : "Open menu"}>
            {menuOpen ? <X size={19} /> : <Menu size={20} />}
          </button>
        </div>
        <nav className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-label="Mobile navigation">
          <a onClick={closeMenu} href="#companies">Companies</a>
          <a onClick={closeMenu} href="#build">What I build</a>
          <a onClick={closeMenu} href="#work">Field reports</a>
          <a onClick={closeMenu} href="#about">About</a>
          <a onClick={closeMenu} href="mailto:sainivaibhav742@gmail.com?subject=Building%20something%20together">Start a conversation</a>
        </nav>
      </header>

      <aside className="progress-rail" aria-hidden="true">
        <i className="rail-node" /><i className="rail-node" /><i className="rail-node" /><i className="rail-node" /><i className="rail-node" />
      </aside>

      <main id="main-content">
        <section id="top" className="hero" data-station="00" aria-labelledby="hero-heading">
          <div className="sm-wrap hero-grid">
            <Reveal>
              <div className="field-label"><span className="signal" /> Independent technical founder / Lucknow, India</div>
              <p className="hero-kicker">VAIBHAV SAINI · @SAINIVAIBHAV742</p>
              <h1 id="hero-heading" className="hero-title">I build <em>AI-enabled</em> companies and product systems.</h1>
              <p className="hero-copy">Founder, developer, and AI engineer turning ambitious problems into useful software, operating workflows, and companies. Currently building SocialMoon, leading BPOlytix, and documenting every experiment in public.</p>
              <div className="hero-actions">
                <a href="#work" className="sm-button">Explore selected work <ArrowRight size={15} /></a>
                <a href="mailto:sainivaibhav742@gmail.com?subject=Investor%20or%20partner%20conversation" className="sm-button secondary">Partner / investor conversation <ArrowUpRight size={14} /></a>
              </div>
              <div className="hero-footnote"><span>PRODUCT + AUTOMATION</span><span>BUILDING IN PUBLIC</span><span>2025—NOW</span></div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="hero-art" aria-label="Abstract Socialmoon orbit artwork">
                <div className="art-tag">SIGNAL / 001</div>
                <div className="art-frame"><img src={assets.hero} alt="Abstract cobalt moon and orbital framework" /></div>
                <div className="art-index">SOCIALMOON / ORBITAL STUDY</div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="status-bar" aria-label="Founder snapshot">
          <div className="sm-wrap status-grid">
            <div className="status-cell"><span>Current role</span><strong>Co-founder & CTO / SocialMoon</strong></div>
            <div className="status-cell"><span>Operator role</span><strong>CTO / BPOlytix</strong></div>
            <div className="status-cell"><span>Builder focus</span><strong>AI-first products & automation</strong></div>
            <div className="status-cell"><span>Working model</span><strong>Founder systems in public</strong></div>
          </div>
        </section>

        <section id="companies" className="chapter" data-station="01" aria-labelledby="companies-heading">
          <div className="sm-wrap">
            <Reveal className="section-top">
              <div>
                <div className="field-label"><span className="signal" /> Orbit / operating companies</div>
                <div className="section-rule" />
                <h2 id="companies-heading" className="section-title">Current companies, and the systems behind the next ones.</h2>
              </div>
              <div>
                <p className="section-copy">The work is not a collection of disconnected projects. SocialMoon and BPOlytix are active operating contexts for product thinking, technical direction, AI workflows, and execution.</p>
                <span className="section-note">01—03 / COMPANY BUILDING AS A PRACTICE</span>
              </div>
            </Reveal>
            <div className="company-constellation">
              {companies.map((company, index) => (
                <Reveal key={company.name} delay={index * 0.07}>
                  <article className={`company-card ${company.featured ? "featured" : ""}`}>
                    <div className="card-number"><span>{company.number}</span>{company.featured ? <Sparkles size={16} /> : <Activity size={15} />}</div>
                    <h3>{company.name}</h3>
                    <p>{company.description}</p>
                    <span className="company-meta">{company.meta}</span>
                    <ExternalAnchor href={company.href} className="company-link">{company.name === "In motion" ? "See field reports" : `Explore ${company.name}`} <ArrowUpRight size={15} /></ExternalAnchor>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="build" className="chapter chapter-light" data-station="02" aria-labelledby="build-heading">
          <div className="sm-wrap">
            <Reveal className="section-top">
              <div>
                <div className="field-label"><span className="signal" /> How I help founders move</div>
                <div className="section-rule" />
                <h2 id="build-heading" className="section-title">From first workflow to a system worth scaling.</h2>
              </div>
              <div>
                <p className="section-copy">I work across the useful intersections of product, engineering, automation, and founder strategy—keeping the execution grounded in what needs to work next.</p>
                <span className="section-note">FOUR MODES / ONE OPERATING MINDSET</span>
              </div>
            </Reveal>
            <div className="capability-grid">
              {capabilities.map((capability, index) => {
                const Icon = capability.icon;
                return <Reveal key={capability.title} delay={index * 0.06}><article className="capability"><Icon size={22} strokeWidth={1.7} /><small>{capability.label}</small><h3>{capability.title}</h3><p>{capability.copy}</p></article></Reveal>;
              })}
            </div>
          </div>
        </section>

        <section id="work" className="chapter" data-station="03" aria-labelledby="work-heading">
          <div className="sm-wrap">
            <Reveal className="section-top">
              <div>
                <div className="field-label"><span className="signal" /> Selected field reports</div>
                <div className="section-rule" />
                <h2 id="work-heading" className="section-title">A few systems I can point to. A larger trajectory still in motion.</h2>
              </div>
              <div>
                <p className="section-copy">The work index deliberately distinguishes active, public work from current queues. No inflated claims—just clear context for what exists, what is underway, and where I’m taking the next experiments.</p>
                <span className="section-note">PUBLIC PROOF / HONEST STAGES / DIRECT LINKS</span>
              </div>
            </Reveal>
            <div className="reports">
              {reports.map((report, index) => <Reveal key={report.title} delay={index * 0.07}><ExternalAnchor href={report.href} className={`report ${index === 0 ? "report-major" : "report-support"}`}><img src={report.image} alt="" /><div className="report-content"><div className="report-meta"><span>{report.type}</span><ArrowUpRight size={14} /></div><h3>{report.title}</h3><p>{report.copy}</p><span className="report-link">View source <ArrowRight size={13} /></span></div></ExternalAnchor></Reveal>)}
            </div>

            <Reveal className="work-index">
              <div className="index-heading">Complete work index / status is part of the story</div>
              {workIndex.map((item) => <ExternalAnchor key={item.id} href={item.href} className="work-row"><span className="work-id">{item.id}</span><strong className="work-name">{item.name}</strong><span className="work-summary">{item.summary}</span><span className="work-status">{item.status}</span><ArrowUpRight size={16} /></ExternalAnchor>)}
            </Reveal>
          </div>
        </section>

        <section id="about" className="chapter" data-station="04" aria-labelledby="about-heading">
          <div className="sm-wrap founder-grid">
            <Reveal>
              <div className="portrait-assembly">
                <div className="portrait-wrap"><img src={assets.portrait} alt="Vaibhav Saini" /></div>
                <div className="portrait-caption">VAIBHAV SAINI<br />FOUNDER / DEVELOPER / AI ENGINEER<br />LUCKNOW, INDIA</div>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="founder-text">
              <div className="field-label"><span className="signal" /> Founder profile / operating principles</div>
              <div className="section-rule" />
              <h2 id="about-heading" className="section-title">Systems are how an idea survives its first burst of energy.</h2>
              <p>I’m obsessed with replacing repetitive work with intelligent, adaptable systems. The goal is never technology for its own sake—it is a product, workflow, or company that becomes more useful as the people around it move faster.</p>
              <div className="principle-list">
                {principles.map(([index, title, detail]) => <div className="principle" key={index}><span className="principle-index">{index}</span><strong>{title}</strong><span>{detail}</span></div>)}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="chapter chapter-light" data-station="05" aria-labelledby="roles-heading">
          <div className="sm-wrap">
            <Reveal className="section-top">
              <div>
                <div className="field-label"><span className="signal" /> Current operating roles</div>
                <div className="section-rule" />
                <h2 id="roles-heading" className="section-title">The role is to make the next move possible.</h2>
              </div>
              <p className="section-copy">A founder/operator profile rather than a job-seeking timeline: each role is a real context for product, systems, and technical judgment.</p>
            </Reveal>
            <Reveal className="roles">
              {roles.map((role) => <div className="role-item" key={role.name}><span className="role-period">{role.period}</span><div><strong className="role-name">{role.name}</strong><span className="role-type">{role.type}</span></div><p className="role-description">{role.description}</p><ExternalAnchor href={role.href} className="role-link" aria-label={`Open ${role.name}`}><ExternalLink size={16} /></ExternalAnchor></div>)}
            </Reveal>
          </div>
        </section>
      </main>

      <section id="connect" className="contact" aria-labelledby="contact-heading">
        <div className="sm-wrap">
          <div className="contact-layout">
            <Reveal>
              <span className="contact-channel">DIRECT TRANSMISSION / CHANNEL 06</span>
              <div className="field-label"><span className="signal" /> Direct transmission / open channel</div>
              <h2 id="contact-heading" className="contact-title">Building a high-leverage workflow?</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="contact-copy">I’m open to thoughtful conversations with founders, operators, partners, and investors working on products or systems where technical clarity can change the outcome.</p>
              <div className="contact-actions"><a className="sm-button" href="mailto:sainivaibhav742@gmail.com?subject=Building%20something%20together"><Mail size={14} /> Email Vaibhav</a><ExternalAnchor href="https://www.linkedin.com/in/sainivaibhav742" className="sm-button secondary"><Linkedin size={14} /> LinkedIn</ExternalAnchor></div>
            </Reveal>
          </div>
          <div className="contact-foot"><span>© {new Date().getFullYear()} VAIBHAV SAINI / SOCIALMOON FIELD NOTES</span><span><ExternalAnchor href="https://github.com/sainivaibhav742">GitHub</ExternalAnchor> / <ExternalAnchor href="https://twitter.com/sainivaibhav742">X</ExternalAnchor> / <a href="mailto:sainivaibhav742@gmail.com">EMAIL</a></span></div>
        </div>
      </section>
    </div>
  );
}
