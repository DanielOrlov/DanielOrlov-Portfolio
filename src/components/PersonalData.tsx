import React from "react";
import "./css/PersonalData.css"; // we'll add this

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
        </div>

        <div className="personal__image">
          <img src="/src/assets/avatar.jpg" alt="Daniel Orlov" />
        </div>
      </div>
    </section>
  );
};

export default PersonalData;
