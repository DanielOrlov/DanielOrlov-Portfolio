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
            I build secure REST APIs, automated testing pipelines, and
            cloud-deployed backend services using Node.js and ASP.NET.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            mollis, orci ac ultricies hendrerit, odio nibh mattis ligula, nec
            maximus neque lorem vel metus. Nulla dictum ullamcorper dolor eu
            molestie. Phasellus vitae sagittis velit. Donec at viverra sem.
            Donec porttitor lacinia feugiat. Phasellus nec sem tempor, varius
            risus in, viverra enim. Morbi metus turpis, bibendum sit amet leo
            vel, tristique consectetur leo. Proin diam nunc, elementum in metus
            at, luctus cursus sem.
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
