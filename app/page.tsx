const projects = [
  { name: "King of Couriers", description: "Collect-a-thon work-in-progress game." },
  { name: "Vile is the Flesh", description: "FnaF-inspired horror game. Also work-in-progress." },
  { name: "WARMONGER:45", description: "32v32 FPS shooter inspired by Battlefield and Helldivers 2.", link: "https://store.steampowered.com/app/3512780/WARMONGER45/" },
];

export default function Home() {
  return (
    <div className="page">
      <header className="site-header">

        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="https://rx.cv/wyatt.crockerm">Resume</a>
        </nav>
      </header>

      <main>
        <section className="intro" id="home">
          <h1>I'm Wyatt Crocker.</h1>
          <p>I develop software and games.</p>
        </section>

        <section className="section" id="about">
          <h2>About</h2>
          <p>Neumont University graduate with a passion for game development and software engineering. </p>
          <p>Graduated in September 2025, Summa Cum Laude</p>
          <p>Currently seeking a full-time position in software engineering or game development.</p>
        </section>
        <section className="section" id="work">
          <h2>Work</h2>
          <ul className="projects">
            {projects.map((project, index) => (
              <li className="project" key={index}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                {project.link && (
                  <p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer
">                      View Project
                    </a>
                  </p>
                )}
              </li>
            ))}
          </ul>
        </section>

        

        <section className="section" id="contact">
          <h2>Contact</h2>
          <p>
            <a href="https://github.com/Croc-ker">GitHub</a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/wyattcrocker/">LinkedIn</a>
          </p>
          <p>
            <a href="mailto:wyattcrockerm@gmail.com">Email</a>
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Croc-ker</p>
      </footer>
    </div>
  );
}
