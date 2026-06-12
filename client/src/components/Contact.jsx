import "./Contact.css"
import { useState } from "react"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState("")

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("sending")
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const data = await response.json()
      if (data.success) {
        setStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch (err) {
      setStatus("error")
    }
  }

  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Contact</h2>
      <p className="section-subtitle">Let's get in touch</p>
      <div className="contact-wrapper">

        <div className="contact-info">
          <h3>Let's talk! 👋</h3>
          <p>Whether you have an opportunity, a question, or just want to say hi — my inbox is always open.</p>
          <div className="contact-links">
            <a href="mailto:roshanigjha@gmail.com">📧 EMAIL</a>
            <a href="https://www.linkedin.com/in/roshani-jha-19767236a" target="_blank" rel="noreferrer">💼 LinkedIn</a>
            <a href="https://github.com/Rosh0005" target="_blank" rel="noreferrer">🐙 GitHub</a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="What's on your mind?"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Message →"}
          </button>
          {status === "success" && <p className="form-success">✅ Message sent successfully!</p>}
          {status === "error" && <p className="form-error">❌ Something went wrong. Try again!</p>}
        </form>

      </div>
    </section>
  )
}

export default Contact