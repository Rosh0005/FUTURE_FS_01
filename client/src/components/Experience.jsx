import "./Experience.css"

const experiences = [
  {
    role: "Full Stack Web Development Intern",
    company: "Future Interns",
    duration: "June 2026 — July 2026",
    points: [
      "Built a full-stack personal portfolio website using React.js, Node.js, Express and MySQL.",
      "Built a simple CRM to manage client leads generated from website contact forms.",
      "Built a professional website for a real local business.",
    ],
  },
  {
    role: "Web Development Intern",
    company: "InAmigos Foundation",
    duration: "May 2026",
    points: [
      "Built and deployed a personal portfolio website using HTML and CSS.",
      "Designed NGO website feature layouts using Figma, identifying key UI/UX components.",
      "Explored AI-powered web development tools to accelerate the design and build process.",
    ],
  },
]

function Experience() {
  return (
    <section className="experience" id="experience">
      <h2 className="section-title">Experience</h2>
      <p className="section-subtitle">Where I've worked</p>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <div className="exp-dot"></div>
            <div className="exp-content">
              <div className="exp-header">
                <h3 className="exp-role">{exp.role}</h3>
                <span className="exp-duration">{exp.duration}</span>
              </div>
              <p className="exp-company">{exp.company}</p>
              <ul className="exp-points">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience