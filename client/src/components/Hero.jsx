import "./Hero.css"

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-greeting">Hi, I'm</p>
        <h1 className="hero-name">Roshani Jha</h1>
        <h2 className="hero-role">Full Stack Developer</h2>
        <p className="hero-tagline">
          Passionate about technology, problem-solving, and building innovative solutions.
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