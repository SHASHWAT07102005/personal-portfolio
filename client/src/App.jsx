
import "./App.css";

const skills = [
  {
    title: "Programming",
    items: ["Java", "Python", "C++"],
  },
  {
    title: "Software Development",
    items: ["JavaScript", "React", "HTML", "CSS"],
  },
  {
    title: "AI / Machine Learning",
    items: ["Machine Learning", "Deep Learning", "Data Visualization"],
  },
  {
    title: "Databases & Tools",
    items: ["SQL", "MongoDB", "Git", "Docker"],
  },
];

const projects = [
  {
    number: "01",
    title: "AI-Based Crop Intelligence",
    description:
      "An AI-powered project exploring crop-related insights using machine learning and data-driven predictions.",
    tags: ["Python", "Machine Learning", "Visualization"],
    status: "In development",
  },
  {
    number: "02",
    title: "Facial Emotion Recognition",
    description:
      "A computer vision project exploring facial emotion classification using deep learning.",
    tags: ["Python", "CNN", "Computer Vision"],
    status: "ML Project",
  },
  {
    number: "03",
    title: "Titanic Data Exploration",
    description:
      "A data cleaning and visualization project focused on exploring patterns and extracting meaningful insights.",
    tags: ["Python", "Pandas", "Visualization"],
    status: "Completed",
    link: "https://github.com/SHASHWAT07102005/Data-Cleaning-Visualization-Titanic",
  },
];

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <a className="logo" href="#home">
          SS<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="nav-contact">
            Contact ↗
          </a>
        </div>
      </nav>

      <main>
        <section className="hero section" id="home">
          <div className="hero-content">
            <p className="eyebrow">
              <span className="status-dot"></span>
              COMPUTER SCIENCE ENGINEERING STUDENT
            </p>

            <h1>
              Building software.
              <br />
              Exploring <span className="gradient-text">intelligence.</span>
            </h1>

            <p className="hero-description">
              I'm a software engineering student interested in building
              practical applications, exploring AI/ML, and turning ideas
              into working products.
            </p>

            <div className="hero-buttons">
              <a className="button button-primary" href="#projects">
                Explore my work ↗
              </a>
              <a className="button button-secondary" href="#contact">
                Get in touch
              </a>
            </div>

            <div className="hero-meta">
              <span>Software Engineering</span>
              <span>AI / ML Exploration</span>
              <span>Continuous Learning</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-glow"></div>
            <div className="code-card">
              <div className="code-header">
                <div className="window-dots">
                  <i></i><i></i><i></i>
                </div>
                <span>developer.js</span>
              </div>

              <div className="code-content">
                <p><span className="code-purple">const</span> developer = {"{"}</p>
                <p className="indent">
                  name: <span className="code-green">"Shashwat"</span>,
                </p>
                <p className="indent">
                  focus: <span className="code-green">"Software"</span>,
                </p>
                <p className="indent">
                  exploring: <span className="code-green">"AI/ML"</span>,
                </p>
                <p className="indent">
                  mindset: <span className="code-orange">"Build & Learn"</span>
                </p>
                <p>{"};"}</p>
                <br />
                <p>
                  <span className="code-purple">while</span> (learning) {"{"}
                </p>
                <p className="indent">
                  buildSomething<span className="code-blue">();</span>
                </p>
                <p>{"}"}</p>
              </div>

              <div className="code-footer">
                <span className="status-dot"></span>
                Always learning, always building
              </div>
            </div>

            <div className="floating-badge badge-top">{"{ }"} Code</div>
            <div className="floating-badge badge-bottom">✳ AI / ML</div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-label">01 / ABOUT ME</div>

          <div className="about-grid">
            <h2>
              Curious by nature.
              <br />
              <span className="muted-heading">Engineer by mindset.</span>
            </h2>

            <div className="about-copy">
              <p>
                I'm pursuing Computer Science Engineering with an interest
                in software development and artificial intelligence.
              </p>
              <p>
                I enjoy solving problems, learning how systems work, and
                experimenting with technologies that turn ideas into
                useful applications.
              </p>
              <p>
                I'm currently strengthening my programming fundamentals
                while exploring machine learning and full-stack development.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-label">02 / TECH STACK</div>
          <div className="section-heading">
            <h2>Tools I work with.</h2>
            <p>
              A growing toolkit across software development, data, and AI.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <article className="skill-card" key={skill.title}>
                <h3>{skill.title}</h3>
                <div className="skill-tags">
                  {skill.items.map((item) => (
                    <span className="skill-tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <p className="skills-note">
            Skills represent my current experience and learning areas.
          </p>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-label">03 / SELECTED WORK</div>

          <div className="section-heading project-heading">
            <div>
              <h2>Things I've built.</h2>
              <p>Projects where I learn by building and experimenting.</p>
            </div>
            <a
              className="text-link"
              href="https://github.com/SHASHWAT07102005"
              target="_blank"
              rel="noreferrer"
            >
              GitHub profile ↗
            </a>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-status">{project.status}</span>
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                {project.link && (
                  <a
                    className="project-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View project ↗
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section section" id="contact">
          <div className="section-label">04 / CONTACT</div>
          <h2>
            Let's build something
            <br />
            <span className="gradient-text">meaningful.</span>
          </h2>
          <p>
            Open to learning, collaboration, and opportunities in software
            engineering.
          </p>

          <div className="contact-links">
            <a
              className="button button-primary"
              href="https://github.com/SHASHWAT07102005"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <a
              className="button button-secondary"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="logo" href="#home">SS<span>.</span></a>
        <p>Designed and built with React.</p>
        <span>© {new Date().getFullYear()} Shashwat</span>
      </footer>
    </div>
  );
}

export default App;
