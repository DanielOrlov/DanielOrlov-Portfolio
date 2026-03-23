import React from "react";
import "./css/PersonalData.css";
import avatar from "/src/assets/avatar.jpg";

const ResumePath = "/src/assets/files/Daniel-Orlov-resume.pdf";

const PersonalData = () => {
  return (
    <section id="center">
      <div className="personal">
        <div className="personal__text">
          <h1>Daniel Orlov</h1>
          <h2>Software Developer</h2>
          <p>
            Software Developer with experience building secure REST APIs,
            automated testing pipelines, and clouddeployed services using
            Node.js and ASP.NET. Strong academic background and hands-on project
            experience in backend systems.
          </p>
          <br />
          <p>
            Strong academic background and hands-on project experience in
            backend systems.
          </p>

          <div className="personal__actions">
            <a href="/src/assets/files/Daniel-Orlov-resume.pdf" className="btn">
              View Resume
            </a>
            <a
              href="/src/assets/files/Daniel-Orlov-resume.pdf"
              download
              className="btn"
            >
              Download Resume
            </a>
            <a href="/src/assets/files/cover-letter.pdf" className="btn">
              View Cover Letter
            </a>
            <a
              href="https://www.linkedin.com/in/daniil-orlov-ua/"
              className="btn"
            >
              LinkedIn
            </a>
            <a href="https://github.com/DanielOrlov" className="btn">
              GitHub
            </a>
          </div>
        </div>

        <div className="personal__image">
          <img src={avatar} alt="Daniel Orlov" />
          <p>
            <strong>Email:</strong> daniil.orlov.ua@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> 437-970-3231
          </p>
          <p>
            <strong>Based in:</strong> Toronto, ON
          </p>
        </div>
      </div>
    </section>
  );
};

export default PersonalData;
