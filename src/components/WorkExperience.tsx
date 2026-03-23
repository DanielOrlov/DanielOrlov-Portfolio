import "./css/WorkExperience.css";

import kelly_logo from "../assets/img/kelly-services.png";
import gbc_logo from "../assets/img/gbc-logo.png";
import crc_logo from "../assets/img/crc-logo.png";

const WorkExperience = () => {
  return (
    <section className="experience" id="experience">
      <div className="experience__container">
        <h2 className="experience__title">Professioanl experience</h2>
        <br />

        <div className="experience__grid">
          {/* LEFT COLUMN */}
          <div className="experience__column">
            <div className="experience-card">
              <div className="experience-card__header">
                <div className="experience-card__company">
                  <img src={gbc_logo} alt="George Brown" />
                  <div>
                    <h3>Peer Tutor</h3>
                    <p>George Brown Polytechnic</p>
                  </div>
                </div>

                <span className="experience-card__date">
                  May 2025 – Present
                </span>
              </div>

              <ul className="experience-card__list">
                <li>
                  Provide one-on-one tutoring in English, Math, Programming
                  (Java, Python, C#, Javascript), and Computer Software, to
                  support student learning and academic success
                </li>
                <li>
                  Developed lesson materials to facilitate learning throughout
                  the semester
                </li>
              </ul>
            </div>

            <div className="experience-card">
              <div className="experience-card__header">
                <div className="experience-card__company">
                  <img src={kelly_logo} alt="Kelly logo" />
                  <div>
                    <h3>Interpreter</h3>
                    <p>Kelly Services</p>
                  </div>
                </div>

                <span className="experience-card__date">
                  February 2023 – May 2025
                </span>
              </div>

              <ul className="experience-card__list">
                <li>
                  Interpreted oral communication over the phone from Ukrainian
                  into English
                </li>
                <li>
                  Provided interpretation services for healthcare institutions,
                  insurance companies, social services, banks, police, school
                  boards, etc.
                </li>
                <li>
                  Developed expertise in specialized fields such as medical,
                  legal, technical, or other industries as required, ensuring
                  accurate interpretation of industry specific terminology
                </li>
                <li>
                  Adhered to a professional code of ethics, including honesty,
                  integrity, and respect for client confidentiality
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="experience__column">
            <div className="experience-card">
              <div className="experience-card__header">
                <div className="experience-card__company">
                  <img src={gbc_logo} alt="George Brown" />
                  <div>
                    <h3>Research Student</h3>
                    <p>George Brown Polytechnic</p>
                  </div>
                </div>

                <span className="experience-card__date">
                  May 2025 – September 2025
                </span>
              </div>

              <ul className="experience-card__list">
                <li>
                  Designed and implemented an automated assignment grading
                  pipeline (Javascript) using Mocha tests and Node.js, providing
                  immediate, test-based feedback on student submissions
                </li>
                <li>
                  Integrated grading scripts into GitHub Actions workflows
                  (YAML), enabling automatic execution and feedback generation
                  on each student code push
                </li>
                <li>
                  Collaborated with faculty to redesign and standardize 4 major
                  assignments, improving test coverage, consistency, and
                  reliability of automated evaluation
                </li>
              </ul>
            </div>

            {/* <p className="experience__label">Volunteering</p> */}

            <div className="experience-card">
              <div className="experience-card__header">
                <div className="experience-card__company">
                  <img src={crc_logo} alt="CRC logo" />
                  <div>
                    <h3>Interpreter</h3>
                    <p>Canadian Red Cross</p>
                  </div>
                </div>

                <span className="experience-card__date">
                  July 2022 – December 2022
                </span>
              </div>

              <ul className="experience-card__list">
                <li>
                  Greeted Ukrainian refugees and displaced people at Toronto
                  Pearson Airport · Collaborated with supervisors and managers
                  to perform triage and needs assessment
                </li>
                <li>
                  Supported Emergency Response team as interpreter, processing
                  over 100 cases per shift
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
