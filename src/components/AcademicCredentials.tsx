import "./css/AcademicCredentials.css";

import gbc_logo from "../assets/img/academic-credentials/gbc-logo.png";
import step_logo from "../assets/img/academic-credentials/itstep-logo.jpg";
import humber_logo from "../assets/img/academic-credentials/humber-logo.jpg";
import humber_degree from "../assets/img/academic-credentials/humber-degree.jpg";
import deans_letters from "../assets/files/deans-letters.pdf";

const AcademicCredentials = () => {
  return (
    <section className="credentials" id="credentials">
      <div className="credentials__container">
        <h2 className="credentials__title">School & Certifications</h2>

        <div className="credentials__grid">
          <div className="credentials__column">
            <p className="credentials__label">Education</p>

            <div className="credentials__card">
              <div className="credentials__card-header">
                <div>
                  <h3>George Brown Polytechnic · Toronto</h3>
                  <p className="credentials__subtitle">
                    Advanced Diploma, Computer Programming
                  </p>
                  <p className="credentials__meta">
                    2024 – Present · Graduating 2026 (expected)
                  </p>
                </div>
                <img src={gbc_logo} alt="George Brown logo" />
              </div>
            </div>

            <div className="credentials__card">
              <div className="credentials__card-header">
                <div>
                  <h3>Step IT Academy · Online</h3>
                  <p className="credentials__subtitle">
                    Certificate, Computer Programming
                  </p>
                  <p className="credentials__meta">Completed Dec 2022</p>
                </div>
                <img src={step_logo} alt="Step IT logo" />
              </div>
            </div>

            <div className="credentials__card">
              <div className="credentials__card-header">
                <div>
                  <h3>Humber College · Toronto</h3>
                  <p className="credentials__subtitle">
                    Bachelor of Commerce - International Business
                  </p>
                  <a href={humber_degree} className="credentials__meta">
                    Graduated with Honours Standing
                  </a>
                  <p className="credentials__meta">2016 – 2020</p>
                </div>
                <img src={humber_logo} alt="Humber logo" />
              </div>
            </div>
          </div>

          <div className="credentials__column">
            <p className="credentials__label credentials__label--spaced">
              Awards
            </p>

            <div className="credentials__card">
              <div>
                <h3>Dean&apos;s List — 5 Consecutive Semesters</h3>
                <p className="credentials__meta">George Brown Polytechnic</p>
              </div>

              <p className="credentials__description">
                Recognized on Dean's Awards List through all semesters for
                academic excellence and a 3.96 GPA
              </p>

              <a href={deans_letters} className="credentials__button">
                View letters
              </a>
            </div>

            <div className="credentials__card">
              <div>
                <h3>IEEExtreme 18 - Canada's top 25</h3>
                <p className="credentials__meta">George Brown Polytechnic</p>
              </div>

              <p className="credentials__description">
                Represented George Brown at an international programming
                competition and placed among top 25 teams in Canada
              </p>
            </div>
          </div>
        </div>

        <div className="credentials__card credentials__card--muted credentials__card--full">
          <p className="credentials__label">Transcript</p>
          <p className="credentials__description">
            Full transcripts are avaiable on request - send me and email!
          </p>

          <a
            href="mailto:daniil.orlov.ua@gmail.com"
            className="credentials__button"
          >
            Request transcript
          </a>
        </div>
      </div>
    </section>
  );
};

export default AcademicCredentials;
