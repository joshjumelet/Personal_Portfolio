import Contact from './Contact'

const Project = () => {
  return (
    <div className="project-container">
      <div className="contact-sidebar">
        <Contact />
      </div>
      <header>
        <h1 className="project-title">Projects</h1>
      </header>
      <section>
        <div className="project-grid">
          <div className="project-item">
            <p className="project-title">Thrill RideShare</p>
            <a
              className="project-link"
              href="https://thrill-ride-share.herokuapp.com/"
              target="blank"
            >
              <img
                className="project-img"
                style={{ width: 500, height: 300 }}
                src="https://i.imgur.com/s8KHd0e.jpg"
                alt="Thrill RideShare"
              />
            </a>
          </div>
          <div className="project-item">
            <p className="project-title">Candy Land Game</p>
            <a
              className="project-link"
              href="https://candy-land-game.surge.sh/index.html"
              target="blank"
            >
              <img
                className="project-img"
                style={{ width: 500, height: 300 }}
                src="https://i.imgur.com/PbERsGX.jpg"
                alt="Candy Land Game"
              />
            </a>
          </div>
          <div className="project-item">
            <p className="project-title">Tic Tac Toe</p>
            <a
              className="project-link"
              href="https://tic-tac-toe-josh.surge.sh/"
              target="blank"
            >
              <img
                className="project-img"
                style={{ width: 500, height: 300 }}
                src="https://i.imgur.com/msCy22f.jpg"
                alt="Tic Tac Toe"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Project
