import "./css/CapstoneDocumentation.css";

import project_summary from "/src/assets/files/capstone-docs/F25_T03_Project-Summary.pdf";
import project_vision from "/src/assets/files/capstone-docs/F25_T03_Project-Vision.pdf";
import project_reqs from "/src/assets/files/capstone-docs/F25_T03_High-Level-Requirements.pdf";
import project_plan from "/src/assets/files/capstone-docs/W26_T03_Project_Plan_v2.0.pdf";
import project_req_an from "/src/assets/files/capstone-docs/F25-T03-Requirements_Analysis_and_Design.pdf";
import project_mockups from "/src/assets/files/capstone-docs/F25_T03_Mockup.pdf";
import project_stat_rep_1 from "/src/assets/files/capstone-docs/W26_T3_ProjectReport1.pdf";
import project_stat_rep_2 from "/src/assets/files/capstone-docs/W26_T03_ProjectReport2.pdf";

const CapstoneDocumentation = () => {
  return (
    <section className="project-docs" id="project-docs">
      <div className="project-docs__container">
        <a href="/" className="project-docs__back">
          ← Back to Portfolio
        </a>

        <header className="project-docs__header">
          <h1 className="project-docs__title">QuietSpace Documentation</h1>
          <br />
          <p className="project-docs__intro">
            This page showcases the core planning, design, and progress
            documents used throughout the development of the QuietSpace capstone
            project.
          </p>
        </header>

        <div className="project-docs__grid">
          <article className="doc-card">
            <div className="doc-card__preview">
              <iframe
                src={project_summary}
                title="Project Summary PDF"
                className="doc-card__pdf"
              />
            </div>

            <div className="doc-card__content">
              <h2 className="doc-card__title">Project Summary</h2>

              <p className="doc-card__text">
                <strong>Description:</strong> Provides an overview of the
                QuietSpace as a concept for an application, with its purpose,
                core features, target users, and sample UI
              </p>

              <p className="doc-card__text">
                <strong>Purpose:</strong> Served as a project proposal during
                the initial stage of project planning.
              </p>

              <a href={project_summary} className="doc-card__button">
                View Full Document
              </a>
            </div>
          </article>

          <article className="doc-card">
            <div className="doc-card__preview">
              <iframe
                src={project_vision}
                title="Project Vision PDF"
                className="doc-card__pdf"
              />
            </div>

            <div className="doc-card__content">
              <h2 className="doc-card__title">Project Vision</h2>

              <p className="doc-card__text">
                <strong>Description:</strong> A strategic document that defines
                the product vision, business opportunity, stakeholders, scope,
                and overall direction of the QuietSpace application.
              </p>

              <p className="doc-card__text">
                <strong>Purpose:</strong> To align all stakeholders on the
                long-term goals and intended impact of the project, guiding
                decision-making throughout development.
              </p>

              <a href={project_vision} className="doc-card__button">
                View Full Document
              </a>
            </div>
          </article>
          <article className="doc-card">
            <div className="doc-card__preview">
              <iframe
                src={project_reqs}
                title="High Level Requirements PDF"
                className="doc-card__pdf"
              />
            </div>

            <div className="doc-card__content">
              <h2 className="doc-card__title">High Level Requierements</h2>

              <p className="doc-card__text">
                <strong>Description:</strong> A high-level overview of the
                system’s main features, including core functionalities like
                mapping, check-ins, gamification, and social connectivity.
              </p>

              <p className="doc-card__text">
                <strong>Purpose:</strong> To define the major system
                capabilities and business requirements in a simplified way for
                stakeholders before detailed design begins.
              </p>

              <a href={project_reqs} className="doc-card__button">
                View Full Document
              </a>
            </div>
          </article>
          <article className="doc-card">
            <div className="doc-card__preview">
              <iframe
                src={project_plan}
                title="Project Plan PDF"
                className="doc-card__pdf"
              />
            </div>

            <div className="doc-card__content">
              <h2 className="doc-card__title">Project Plan (v2.0)</h2>

              <p className="doc-card__text">
                <strong>Description:</strong> A comprehensive project management
                document outlining scope, deliverables, timelines, risks,
                communication plans, and team responsibilities for the second
                phase of the project.
              </p>

              <p className="doc-card__text">
                <strong>Purpose:</strong> To organize and control project
                execution by defining tasks, schedules, and resources, ensuring
                the team stays on track to meet deadlines.
              </p>

              <a href={project_reqs} className="doc-card__button">
                View Full Document
              </a>
            </div>
          </article>
          <article className="doc-card">
            <div className="doc-card__preview">
              <iframe
                src={project_req_an}
                title="Project Requirement Analysis and Design PDF"
                className="doc-card__pdf"
              />
            </div>

            <div className="doc-card__content">
              <h2 className="doc-card__title">
                Project Requirement Analysis and Design
              </h2>

              <p className="doc-card__text">
                <strong>Description:</strong> A detailed technical document that
                defines the system’s functional and non-functional requirements,
                system architecture, constraints, and data models for the
                QuietSpace application. It serves as a complete blueprint of how
                the system should behave and be built.
              </p>

              <p className="doc-card__text">
                <strong>Purpose:</strong> To guide developers and stakeholders
                by clearly specifying what the system must do and how it should
                perform, ensuring correct implementation and alignment with
                project goals.
              </p>

              <a href={project_reqs} className="doc-card__button">
                View Full Document
              </a>
            </div>
          </article>
          <article className="doc-card">
            <div className="doc-card__preview">
              <iframe
                src={project_mockups}
                title="Wireframes PDF"
                className="doc-card__pdf"
              />
            </div>

            <div className="doc-card__content">
              <h2 className="doc-card__title">Project Wireframes</h2>

              <p className="doc-card__text">
                <strong>Description:</strong> A visual representation of the
                app’s user interface, including screens like login, map view,
                location details, and check-in features.
              </p>

              <p className="doc-card__text">
                <strong>Purpose:</strong> To demonstrate the look and user
                experience of the application, helping stakeholders and
                developers understand design and usability before
                implementation.
              </p>

              <a href={project_reqs} className="doc-card__button">
                View Full Document
              </a>
            </div>
          </article>
          <article className="doc-card">
            <div className="doc-card__preview">
              <iframe
                src={project_stat_rep_1}
                title="Project Status report 1 PDF"
                className="doc-card__pdf"
              />
            </div>

            <div className="doc-card__content">
              <h2 className="doc-card__title">Status Report 1</h2>

              <p className="doc-card__text">
                <strong>Description:</strong> An earlier progress report
                detailing initial development achievements, foundational work,
                and remaining tasks after early project sprints.
              </p>

              <p className="doc-card__text">
                <strong>Purpose:</strong> To communicate early-stage progress,
                confirm that the project is on schedule, and identify risks or
                incomplete work needing resolution.
              </p>

              <a href={project_reqs} className="doc-card__button">
                View Full Document
              </a>
            </div>
          </article>
          <article className="doc-card">
            <div className="doc-card__preview">
              <iframe
                src={project_stat_rep_2}
                title="Project Status report 2 PDF"
                className="doc-card__pdf"
              />
            </div>

            <div className="doc-card__content">
              <h2 className="doc-card__title">Status Report 2</h2>

              <p className="doc-card__text">
                <strong>Description:</strong> A progress report summarizing the
                current development status, completed features, ongoing work,
                and remaining issues during later project sprints.
              </p>

              <p className="doc-card__text">
                <strong>Purpose:</strong> To provide stakeholders with an update
                on project health, track progress against goals, and highlight
                areas needing attention or improvement.
              </p>

              <a href={project_reqs} className="doc-card__button">
                View Full Document
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default CapstoneDocumentation;
