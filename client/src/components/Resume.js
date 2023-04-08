import Contact from './Contact'

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="contact-sidebar">
        <Contact />
      </div>
      <header>
        <h1 className="resume-header">Resume</h1>
      </header>
      <section>
        <div className="resume-text"></div>
      </section>
    </div>
  )
}

export default Resume
