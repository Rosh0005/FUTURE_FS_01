import "./Education.css"

const education = [
  {
    degree: "Bachelor of Science — Information Technology",
    institution: "Model College",
    year: "2024 — 2027",
    score: "CGPA: 9.63",
  },
  {
    degree: "Higher Secondary Certificate (HSC) — Science",
    institution: "St. Xaviers College",
    year: "2022 — 2024",
    score: "Percentage: 70.83%",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Model English School",
    year: "2022",
    score: "Percentage: 90.40%",
  },
]

function Education() {
  return (
    <section className="education" id="education">
      <h2 className="section-title">Education</h2>
      <p className="section-subtitle">My academic background</p>
      <div className="education-timeline">
        {education.map((edu, index) => (
          <div className="education-card" key={index}>
            <div className="edu-dot"></div>
            <div className="edu-content">
              <h3 className="edu-degree">{edu.degree}</h3>
              <p className="edu-institution">{edu.institution}</p>
              <div className="edu-meta">
                <span className="edu-year">{edu.year}</span>
                <span className="edu-score">{edu.score}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education