import { Link } from "react-router-dom";
import "./css/AcademicWorkExperience.css";

import quietspace_logo from "../assets/img/quietspace-logo.png";
import api_logo from "../assets/img/docker-logo.jpg";
import gbc_logo from "../assets/img/academic-credentials/gbc-logo.png";
import comp3123_project from "../assets/img/employee-management.png";
import gomoku from "../assets/img/gomoku.png";
import asp_logo from "../assets/img/asp-logo.jpg";
import kotlin_logo from "../assets/img/kotlin.jpg";

const AcademicWorkExperience = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <h2 className="projects__title">Projects</h2>

        <div className="projects__group">
          <h3 className="projects__heading">Academic Projects</h3>

          <div className="projects__grid">
            <article className="project-card">
              <img
                src={quietspace_logo}
                alt="QuietSpace project preview"
                className="project-card__image"
              />

              <div className="project-card__content">
                <div className="project-card_header">
                  <h4 className="project-card__title">QuietSpace Mobile App</h4>
                  <span className="project-card__tag">CAPSTONE</span>
                </div>

                <p className="project-card__description">
                  A mobile app that helps users find quiet spaces using Google
                  Maps API, AI-powered location validation, and real-time
                  availability.
                </p>

                <p className="project-card__link">
                  GitHub:{" "}
                  <a href="https://github.com/DanielOrlov/QuietSpace">
                    QuietSpace Repo
                  </a>
                </p>
                <p className="project-card__link">
                  Documentation: <Link to="/capstone-docs">Link</Link>
                </p>

                <div className="project-card__stack">
                  <span>React Native</span>
                  <span>JavaScript</span>
                  <span>Node.js</span>
                  <span>Google Maps API</span>
                  <span>Supabase</span>
                </div>
              </div>
            </article>

            <article className="project-card">
              <img
                src={api_logo}
                alt="Containerized API Platform preview"
                className="project-card__image"
              />

              <div className="project-card__content">
                <h4 className="project-card__title">
                  Containerized API Platform
                </h4>

                <p className="project-card__description">
                  Containeraized Student Event and Wellness management
                  application implementing a microservice-based architechture,
                  role-based authentication, and featuring comprehensive
                  documentation
                </p>

                <p className="project-card__link">
                  GitLab:{" "}
                  <a href="https://gitlab.com/DanielOrlov/ContainerizedAPIPlatform">
                    Containerized API Platform Repo
                  </a>
                </p>
                <p className="project-card__link">
                  Video Demo:{" "}
                  <a href="https://www.youtube.com/watch?v=npZWwqjZHLg">
                    YouTube Link
                  </a>
                </p>

                <div className="project-card__stack">
                  <span>Node.js</span>
                  <span>TypeScript</span>
                  <span>Java</span>
                  <span>SpringBoot</span>
                  <span>MongoDB</span>
                  <span>Docker</span>
                  <span>Redis</span>
                </div>
              </div>
            </article>

            <article className="project-card">
              <img
                src={comp3123_project}
                alt="Mirror AI dating platform preview"
                className="project-card__image"
              />

              <div className="project-card__content">
                <h4 className="project-card__title">Employee management App</h4>

                <p className="project-card__description">
                  Web application for employee management developed using MERN
                  Stack, implemented in 2 separate deployments on Vercel
                  (Backend and Frontend)
                </p>

                <p className="project-card__link">
                  Vercel Deployment:{" "}
                  <a href="https://101500729-comp3123-assignment2-reac.vercel.app/login">
                    Link
                  </a>
                </p>

                <div className="project-card__stack">
                  <span>Javascript</span>
                  <span>MongoDB</span>
                  <span>Express</span>
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Vercel</span>
                </div>
              </div>
            </article>
          </div>

          <div className="projects__group">
            <div className="projects__grid">
              <article className="project-card">
                <img
                  src={gomoku}
                  alt="Gomoku-pic"
                  className="project-card__image"
                />

                <div className="project-card__content">
                  <h4 className="project-card__title">Gomoku game</h4>

                  <p className="project-card__description">
                    A simple command line interface Gomoku game implemented with
                    Java for 1 or 2 players. Singleplayer AI implemented with
                    the Minimax algorithm
                  </p>

                  <p className="project-card__link">
                    GitHub:{" "}
                    <a href="https://github.com/StegaDP/COMP2080_dsa_project">
                      Link
                    </a>
                  </p>

                  <div className="project-card__stack">
                    <span>Java</span>
                    <span>Minimax algorithm</span>
                    <span>Alpha-Beta Pruning</span>
                  </div>
                </div>
              </article>

              <article className="project-card">
                <img
                  src={asp_logo}
                  alt="comp2139-project"
                  className="project-card__image"
                />

                <div className="project-card__content">
                  <h4 className="project-card__title">
                    SmartInventory Web Application
                  </h4>

                  <p className="project-card__description">
                    Inventory management application developed with ASP.NET,
                    with full CRUD implemented and the Azure Deployment
                  </p>

                  <p className="project-card__link">
                    GitLab:{" "}
                    <a href="https://gitlab.com/DanielOrlov/ContainerizedAPIPlatform">
                      Containerized API Platform Repo
                    </a>
                  </p>
                  <p className="project-card__link">
                    Video Demo:{" "}
                    <a href="https://www.youtube.com/watch?v=mkhkhrnya6o">
                      YouTube Link
                    </a>
                  </p>

                  <div className="project-card__stack">
                    <span>ASP.NET</span>
                    <span>C#</span>
                    <span>Microsoft Azure</span>
                    <span>PostgreSQL</span>
                  </div>
                </div>
              </article>

              <article className="project-card">
                <img
                  src={kotlin_logo}
                  alt="comp3123_project"
                  className="project-card__image"
                />

                <div className="project-card__content">
                  <h4 className="project-card__title">Salary calculator</h4>

                  <p className="project-card__description">
                    Salary calculator with overtime payments - mini-project to
                    practice mobile development skills using Kotlin
                  </p>

                  <p className="project-card__link">
                    GitHub:{" "}
                    <a href="https://github.com/DanielOrlov/Salary-Calculator">
                      Link
                    </a>
                  </p>

                  <div className="project-card__stack">
                    <span>Android</span>
                    <span>Kotlin</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>

        <div className="projects__group">
          <h3 className="projects__heading">Research Project</h3>

          <div className="projects__grid">
            <article className="project-card">
              <img
                src={gbc_logo}
                alt="Research project preview"
                className="project-card__image"
              />

              <div className="project-card__content">
                <h4 className="project-card__title">
                  Grading Automation Project
                </h4>

                <p className="project-card__description">
                  In collaboration with George Brown faculty, refactored a Full
                  Stack course to implement instant feedback and grade
                  automation for Students
                </p>
                <div className="project-card__stack">
                  <span>Javascript</span>
                  <span>Mocha Test</span>
                  <span>Node.js</span>
                  <span>GitHub Actions</span>
                  <span>GitHub Classroom</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicWorkExperience;
