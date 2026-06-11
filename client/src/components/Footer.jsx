import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      {/* <p className="footer-name">Roshani</p> */}
      <div className="footer-socials">
        <a href="https://github.com/Rosh0005" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/roshani-jha-19767236a" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:roshanigjha@gmail.com">Email</a>
      </div>
      <p className="footer-copy">© 2026 Roshani. All rights reserved.</p>
    </footer>
  )
}

export default Footer