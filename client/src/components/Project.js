import Contact from './Contact'

const Project = () => {
  return (
    <div className="project-page">
      <div className="contact-sidebar">
        <Contact />
      </div>
      <div className="project-container">
        <header>
          <h1 className="project-title">Projects</h1>
        </header>
        <section>
          <div className="project-grid">
            <div className="project-item">
              <a
                className="project-link"
                href="https://thrill-ride-share.herokuapp.com/"
                target="blank"
              >
                <img
                  className="project-img"
                  style={{ width: 450, height: 275 }}
                  src="https://i.imgur.com/s8KHd0e.jpg"
                  alt="Thrill RideShare"
                />
              </a>
              <h3 className="project">Thrill RideShare</h3>
              <p>
                Full Stack React Application built with a MongoDB database.
                Built in 2.5 days during week 7 as a group hackathon with a team
                of 3.
              </p>
            </div>
            <div className="project-item">
              <a
                className="project-link"
                href="https://candy-land-game.surge.sh/index.html"
                target="blank"
              >
                <img
                  className="project-img"
                  style={{ width: 450, height: 275 }}
                  src="https://i.imgur.com/PbERsGX.jpg"
                  alt="Candy Land Game"
                />
              </a>
              <h3 className="project">Candy Land Game</h3>
              <p>
                JavaScript game built after 2 weeks of General Assembly Software
                Engineering Immersive course. Utilizes the DOM to manipulate the
                game board.
              </p>
            </div>
            <div className="project-item">
              <a
                className="project-link"
                href="https://tic-tac-toe-josh.surge.sh/"
                target="blank"
              >
                <img
                  className="project-img"
                  style={{ width: 450, height: 275 }}
                  src="https://i.imgur.com/msCy22f.jpg"
                  alt="Tic Tac Toe"
                />
              </a>
              <h3 className="project">Tic Tac Toe</h3>
              <p>
                A Tic Tac Toe game built within the first week of General
                Assembly Software Engineering Immersive course.{' '}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Project
