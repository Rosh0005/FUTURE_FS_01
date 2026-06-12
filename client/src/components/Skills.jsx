import "./Skills.css"

const skills = [
  { category: "Languages", items: ["Python", "JavaScript", "C", "C++", "SQL"] },
  { category: "Frontend", items: ["React.js", "HTML5", "CSS3"] },
  { category: "Backend", items: ["Node.js", "Express.js"] },
  { category: "Database", items: ["MySQL"] },
  { category: "Tools", items: ["Git", "GitHub", "VS Code", "Figma"] },
]

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">Technologies I work with</p>
      <div className="skills-grid">
        {skills.map((group) => (
          <div className="skill-card" key={group.category}>
            <h3 className="skill-category">{group.category}</h3>
            <div className="skill-items">
              {group.items.map((item) => (
                <span className="skill-badge" key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills