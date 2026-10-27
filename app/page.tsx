const projects = [
  {
    number: "01",
    name: "Fieldnotes",
    category: "Product design · Web app",
    description:
      "A calmer space for collecting ideas, connecting the dots, and making room for the next big thing.",
    year: "2025",
    className: "project-card--peach",
    mark: "f.",
    markLabel: "Fieldnotes",
    href: "https://github.com/Croc-ker",
  },
  {
    number: "02",
    name: "Goodside",
    category: "Brand identity · E-commerce",
    description:
      "A bright, friendly identity for a neighborhood shop bringing the good stuff to everyday rituals.",
    year: "2024",
    className: "project-card--blue",
    mark: "GOOD\nSIDE",
    markLabel: "Goodside",
    href: "https://github.com/Croc-ker",
  },
  {
    number: "03",
    name: "Openhouse",
    category: "Creative development · Community",
    description:
      "A digital front door for the people, places, and small moments that make a city feel like home.",
    year: "2024",
    className: "project-card--green",
    mark: "oh!",
    markLabel: "Openhouse",
    href: "https://github.com/Croc-ker",
  },
];

const skills = ["React", "Next.js", "TypeScript", "CSS", "Figma", "Node.js"];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M4.167 10h11.666M10 4.167 15.833 10 10 15.833" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Croc-ker home">
          c<span>·</span>k
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a className="nav-contact" href="#contact">
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero page-width" id="home">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> INDEPENDENT CREATIVE DEVELOPER
            </p>
            <h1>
              Making the
              <br />
              internet feel
              <br />
              <span className="highlight">more human.</span>
            </h1>
            <div className="hero-bottom">
              <p className="hero-description">
                Hey, I&apos;m Croc-ker — a developer and designer turning good
                ideas into thoughtful digital experiences.
              </p>
              <a className="text-link" href="#work">
                Explore my work <ArrowIcon />
              </a>
            </div>
          </div>
          <div className="hero-art" aria-label="Abstract decorative artwork">
            <div className="art-sun" />
            <div className="art-arc art-arc--one" />
            <div className="art-arc art-arc--two" />
            <div className="art-stamp">GOOD<br />THINGS<br />TAKE SHAPE</div>
            <span className="art-caption">A LITTLE BIT OF<br />STRUCTURE, A LOT OF SOUL.</span>
            <span className="art-spark art-spark--one">✳</span>
            <span className="art-spark art-spark--two">✳</span>
          </div>
          <a className="scroll-cue" href="#work">
            <span className="scroll-line" /> SCROLL TO EXPLORE
          </a>
        </section>

        <section className="work-section section-pad" id="work">
          <div className="page-width">
            <div className="section-heading">
              <div>
                <p className="eyebrow">A FEW THINGS I&apos;VE MADE</p>
                <h2>Selected work<span className="period">.</span></h2>
              </div>
              <p className="section-note">
                A small selection of projects, collaborations, and happy
                accidents.
              </p>
            </div>
            <div className="project-list">
              {projects.map((project) => (
                <article className="project-row" key={project.number}>
                  <a
                    className={`project-card ${project.className}`}
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.name} — view on GitHub`}
                  >
                    <span className="project-card-label">{project.markLabel}</span>
                    <span className="project-mark" aria-hidden="true">
                      {project.mark}
                    </span>
                    <span className="project-card-arrow">
                      <ArrowIcon />
                    </span>
                  </a>
                  <div className="project-info">
                    <span className="project-number">{project.number}</span>
                    <div className="project-title-wrap">
                      <h3>{project.name}</h3>
                      <p>{project.category}</p>
                    </div>
                    <p className="project-description">{project.description}</p>
                    <span className="project-year">{project.year}</span>
                  </div>
                </article>
              ))}
            </div>
            <p className="template-note">
              Project names and descriptions are starter content — swap in your
              own work and links.
            </p>
          </div>
        </section>

        <section className="about-section section-pad" id="about">
          <div className="page-width about-grid">
            <div className="about-heading">
              <p className="eyebrow">A LITTLE ABOUT ME</p>
              <h2>
                Curious by
                <br />
                nature<span className="period">,</span>
                <br />
                <span className="serif-italic">builder by choice.</span>
              </h2>
              <div className="about-doodle" aria-hidden="true">
                <span>✳</span>
                <span>✳</span>
                <span>✳</span>
              </div>
            </div>
            <div className="about-copy">
              <p className="about-lead">
                I like making useful things that feel a little unexpected.
              </p>
              <p>
                I bring design and development together to make the web more
                welcoming, one detail at a time. From the first rough sketch to
                the final line of code, I care about how things work — and how
                they make people feel.
              </p>
              <p>
                When I&apos;m not at my desk, you might find me collecting
                references, trying a new recipe, or taking the long way home.
              </p>
              <div className="skills">
                <p className="eyebrow">THINGS I WORK WITH</p>
                <ul>
                  {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="page-width contact-inner">
            <p className="eyebrow">HAVE SOMETHING GOOD IN MIND?</p>
            <h2>
              Let&apos;s make
              <br />
              <span className="serif-italic">it happen.</span>
            </h2>
            <a className="contact-link" href="mailto:hello@croc-ker.dev">
              hello@croc-ker.dev <ArrowIcon />
            </a>
            <span className="contact-star" aria-hidden="true">✳</span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-width footer-inner">
          <a className="wordmark footer-wordmark" href="#home">
            c<span>·</span>k
          </a>
          <p>Made with care, curiosity &amp; a little bit of CSS.</p>
          <div className="footer-links">
            <a href="https://github.com/Croc-ker" target="_blank" rel="noreferrer">
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <a href="mailto:hello@croc-ker.dev">
              Email <span aria-hidden="true">↗</span>
            </a>
          </div>
          <span className="copyright">© {new Date().getFullYear()} Croc-ker</span>
        </div>
      </footer>
    </>
  );
}
