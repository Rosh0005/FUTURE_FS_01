import "./Hero.css"

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-greeting">Hi, I'm</p>
        <h1 className="hero-name">Roshani</h1>
        <h2 className="hero-role">Full Stack Developer</h2>
        <p className="hero-tagline">
          I build clean, responsive web applications with modern technologies.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-secondary">Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default Hero