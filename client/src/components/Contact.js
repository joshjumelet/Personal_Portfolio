import { useState } from 'react'

const Contact = () => {
  const [contacts, setContacts] = useState(false)

  const handleShowContacts = (e) => {
    e.preventDefault()
    setContacts(!contacts)
  }

  return (
    <div className="contact-sidebar">
      <div className="sidebar">
        <div className="sidebar-img">
          <img
            src="https://i.imgur.com/9vJoA8w.png?1"
            alt="Joshua Jumelet"
            width="150"
          />
        </div>
        <div className="sidebar-info">
          <h1 className="name">Joshua Jumelet</h1>
          <p>Full Stack Software Engineer</p>
        </div>
        <button
          className="sidebar-more-info"
          type="button"
          onClick={handleShowContacts}
        >
          Show Contacts
        </button>
        {contacts && (
          <div className="sidebar-contacts">
            <ul className="contacts-list">
              <li className="contacts-item">
                <div className="contacts-info">
                  <p className="contacts-title">Email</p>
                  <a
                    href="mailto:joshuajumelet@gmail.com"
                    className="contact-link"
                  >
                    joshuajumelet@gmail.com
                  </a>
                </div>
              </li>
              <li className="contacts-item">
                <div className="contacts-info">
                  <p className="contacts-title">Phone</p>
                  <a href="tel:+13603676583" className="contact-link">
                    (360) 367-6583
                  </a>
                </div>
              </li>
              <li className="contacts-item">
                <div className="contacts-info">
                  <p className="contacts-title">Birthday</p>
                  <time dateTime="1993-03-37">March 31, 1993</time>
                </div>
              </li>
              <li className="contacts-item">
                <div className="contacts-info">
                  <p className="contacts-title">Location</p>
                  <address>
                    Greater Seatle Area (Granite Falls), Washington
                  </address>
                </div>
              </li>
              <li className="contacts-item">
                <div className="contacts-info">
                  <p className="contacts-title">GitHub</p>
                  <a
                    className="josh-git"
                    href="https://github.com/joshjumelet"
                    target="blank"
                  >
                    <img
                      className="github"
                      style={{ width: 30, height: 30 }}
                      src="https://i.imgur.com/AjmoOeq.png"
                      alt="github"
                    />
                  </a>
                </div>
              </li>
              <li className="contacts-item">
                <div className="contacts-info">
                  <p className="contacts-title">LinkedIn</p>
                  <a
                    className="josh-linkedIn"
                    href="https://www.linkedin.com/in/joshua-jumelet/"
                    target="blank"
                  >
                    <img
                      className="linkedIn"
                      style={{ width: 30, height: 30 }}
                      src="https://i.imgur.com/N4ceP5A.png"
                      alt="linkedIn"
                    />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Contact
