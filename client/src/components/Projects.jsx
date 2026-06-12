import "./Projects.css"

const projects = [
  {
    title: "Binance Trading Bot CLI",
    description: "A Python-based CLI trading bot that simulates placing BUY/SELL orders using real-time market data from Binance. Supports both MARKET and LIMIT orders with structured logging.",
    tech: ["Python 3", "python-binance"],
    github: "https://github.com/Rosh0005/binance-trading-bot-cli",
  },
  {
    title: "Expense Tracker Web Application",
    description: "A full-stack web application to manage and track daily expenses with a clean UI and persistent database storage.",
    tech: ["HTML/CSS", "JavaScript", "Java Servlets", "Apache Tomcat", "MySQL"],
    github: "https://github.com/Rosh0005/expense_tracker",
  },
  {
    title: "Personal Portfolio Website",
    description: "A modern full-stack personal portfolio website built with React.js frontend and Node.js + Express backend. Features a contact form with MySQL database integration.",
    tech: ["React.js", "Node.js", "Express.js", "MySQL"],
    github: "https://github.com/Rosh0005/FUTURE_FS_01",
  },
]

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">Things I've built</p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                GitHub ↗
              </a>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((t) => (
                <span className="tech-badge" key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects