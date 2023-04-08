import Contact from './Contact'

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="contact-sidebar">
        <Contact />
      </div>
      <header>
        <h1 className="resume-title">Resume</h1>
      </header>
      <section>
        <div className="resume-text">
          <div className="resume-link">
            <h5>
              Follow the link{' '}
              <a href="https://drive.google.com/file/d/1mHM-YnNT-QhczGqhpOEH3oFeDy2OF73r/view?usp=sharing">
                here
              </a>{' '}
              to access a copy of my Resume.
            </h5>
          </div>
          <div className="resume-body">
            <p>
              Adaptive and results-driven Software Developer with a unique
              background in competitive sales environments. Experience with
              building complex applications utilizing JavaScript, React and
              Python coupled with a keen understanding of customer needs and
              market dynamics. Prior experiences have honed the ability to
              communicate effectively, work collaboratively, and deliver on
              time. Eager to contribute a blend of technical expertise and sales
              acumen to drive value and success.
            </p>
          </div>
          <div className="resume-body">
            <div className="resume-header">
              <h2>Experience</h2>
            </div>
            <h3>Geneeral Assembly - Software Engineering Student</h3>
            <h5>01/2023 - 04/2023</h5>
            <ul>
              <li className="resume-list">
                <p>
                  Software Engineering Immersive 12-week, 420+ hour program
                  designed to build industry skills for the development of
                  full-stack applications with JavaScript, React, Express,
                  Python, SQL and MongoDB.
                </p>
              </li>
              <li className="resume-list">
                <p>
                  Provided an in-depth understanding of computer science
                  fundamentals, algorithms, and data structures through project
                  development.
                </p>
              </li>
            </ul>
            <h3>US Foods - Territory Manager | Sales</h3>
            <h5>12/2020 - 02/2023</h5>
            <ul>
              <li className="resume-list">
                <p>
                  Responsible for managing and growing a sales route of 45+
                  individual accounts that grew from an annual contribution of
                  $220,000 to averaging over $1,200,000.
                </p>
              </li>
              <li className="resume-list">
                <p>
                  Effectively handle multiple client requests simultaneously
                  while managing priorities to ensure sound decision making in a
                  high pressure environment.
                </p>
              </li>
              <li className="resume-list">
                <p>
                  Efficiently solve client facing and back-end complications and
                  proactively determine potential issues to identify the most
                  effective strategies to resolve each problem.
                </p>
              </li>
            </ul>
            <h3>ServPro of Seattle NW - Marketing | Account Manager</h3>
            <h5>01/2020 - 06/2020</h5>
            <ul>
              <li className="resume-list">
                <p>
                  Developed daily, weekly, and annual strategic plans to
                  increase engagement and adoption of company growth driving
                  programs that included meetings and training with key decision
                  makers.
                </p>
              </li>
              <li className="resume-list">
                <p>
                  Specialized in effective communication that occurred
                  concurrently with team members and clients while managing
                  escalating priorities on multiple projects.
                </p>
              </li>
            </ul>
            <h3>Edward Don - Account Manager | Sales</h3>
            <h5>05/2016 - 01/2020</h5>
            <ul>
              <li className="resume-list">
                <p>
                  Growth driven role that emphasized targeting new and
                  established accounts to increase overall penetration of goods
                  and services to meet quarterly sales requirements and goals.
                </p>
              </li>
              <li className="resume-list">
                <p>
                  Demonstrated exceptional critical thinking skills through
                  analyzing complex data and identifying key insights regarding
                  business analytics to assist in determining effective selling
                  strategies.
                </p>
              </li>
              <li className="resume-list">
                <p>
                  Emphasis on collaboration with team members to achieve client
                  and internal facing project goals and deliverables.
                </p>
              </li>
            </ul>
            <h3>United States Army - Sergeant E-5</h3>
            <h5>10/2010 - 10/2018</h5>
            <ul>
              <li className="resume-list">
                <p>
                  Maintained communication and compliance with command
                  directives throughout time of service.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Resume
