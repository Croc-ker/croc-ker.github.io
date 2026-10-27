const projects = [
  { name: "Project name", description: "A short description of the project." },
  { name: "Project name", description: "A short description of the project." },
  { name: "Project name", description: "A short description of the project." },
];

export default function Home() {
  return (
    <div className="page">
      <header className="site-header">
        <a className="site-name" href="#home">
          Croc-ker
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="intro" id="home">
          <h1>Hi, I&apos;m Croc-ker.</h1>
          <p>I build things for the web.</p>
        </section>

        <section className="section" id="work">
          <h2>Work</h2>
          <ul className="projects">
            {projects.map((project, index) => (
              <li className="project" key={index}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </li>
            ))}
          </ul>
          <p className="hint">Replace these examples with your own projects.</p>
        </section>

        <section className="section" id="about">
          <h2>About</h2>
          <p>Add a short introduction here.</p>
        </section>

        <section className="section" id="contact">
          <h2>Contact</h2>
          <p>
            <a href="https://github.com/Croc-ker">GitHub</a>
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Croc-ker</p>
      </footer>
    </div>
  );
}
