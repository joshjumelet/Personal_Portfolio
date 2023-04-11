import { useState } from 'react'

const Contact = () => {
  const [contacts, setContacts] = useState(false)

  const handleShowContacts = (e) => {
    e.preventDefault()
    setContacts(!contacts)
  }

  return (
    <div className="contact-container">
      <div className="sidebar">
        <div className="img-container">
          <img
            className="sidebar-img"
            src="https://i.imgur.com/9vJoA8w.png?1"
            alt="Joshua Jumelet"
            width="175"
          />
        </div>
        <div className="sidebar-info">
          <h1 className="name">Joshua Jumelet</h1>
          <p className="contact-title">Full Stack Software Engineer</p>
        </div>
        <button
          className="sidebar-button"
          type="button"
          onClick={handleShowContacts}
        >
          Contact Info
        </button>
        {contacts && (
          <div className="sidebar-contacts">
            <ul className="contacts-list">
              <li className="contacts-item">
                <div className="contacts-info">
                  <img
                    className="contact-img"
                    src="https://i.imgur.com/AeBwowt.png"
                    alt="Email"
                    width="50"
                  />
                </div>
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
                  <img
                    className="contact-img"
                    src="https://i.imgur.com/p6NUdH2.png"
                    alt="Phone"
                    width="50"
                  />
                </div>
                <div className="contacts-info">
                  <p className="contacts-title">Phone</p>
                  <a href="tel:+13603676583" className="contact-link">
                    (360) 367-6583
                  </a>
                </div>
              </li>
              <li className="contacts-item">
                <div className="contacts-info">
                  <img
                    className="contact-img"
                    src="https://i.imgur.com/DWDqHEx.jpg"
                    alt="Date"
                    width="50"
                  />
                </div>
                <div className="contacts-info">
                  <p className="contacts-title">Birthday</p>
                  <time dateTime="1993-03-37" className="contact-link">
                    March 31, 1993
                  </time>
                </div>
              </li>
              <li className="contacts-item">
                <div className="contacts-info">
                  <img
                    className="location-img"
                    src="https://i.imgur.com/vyNsLhU.png"
                    alt="Location"
                    width="40"
                  />
                </div>
                <div className="contacts-info">
                  <p className="contacts-title">Location</p>
                  <address className="contact-link">
                    Granite Falls, Washington
                  </address>
                </div>
              </li>
            </ul>
            <ul className="socials-list">
              <li className="socials-item">
                <div className="contacts-info">
                  {/* <p className="contacts-title">GitHub</p> */}
                  <a
                    className="josh-git"
                    href="https://github.com/joshjumelet"
                    target="blank"
                  >
                    <img
                      className="github"
                      style={{ width: 40, height: 40 }}
                      src="https://cdn-icons-png.flaticon.com/512/38/38401.png"
                      alt="github"
                    />
                  </a>
                </div>
              </li>
              <li className="socials-item">
                <div className="contacts-info">
                  {/* <p className="contacts-title">LinkedIn</p> */}
                  <a
                    className="josh-linkedIn"
                    href="https://www.linkedin.com/in/joshua-jumelet/"
                    target="blank"
                  >
                    <img
                      className="linkedIn"
                      style={{ width: 40, height: 40 }}
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
