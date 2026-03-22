import "./css/ProfessionalSummary.css";

const ProfessionalSummary = () => {
  return (
    <section className="summary-section" id="summary">
      <div className="summary-container">
        {/* <div className="summary-divider" /> */}

        <h2 className="summary-title">Philosophy & Career Goal</h2>

        <p className="summary-quote">
          “The secret to getting ahead is getting started.” – Mark Twain
        </p>

        <p className="summary-text">
          As a young software developer, I believe that success begins with
          taking initiative and turning ideas into actions. Throughout my
          academic journey of becoming a programmer, I have encountered a
          plethora of complex problems, technical obstacles and moments of
          uncertainty, but overcoming each of these hurdles have contributed to
          my growth in knowledge and skills.
        </p>

        <p className="summary-text">
          Looking ahead, my goal is to consistently climb both professionally
          and technically by building innovative and impactful software
          solutions. I am driven by the desire to create applications that are
          not only functional but also meaningful and user focused. By embracing
          new technology, challenging myself with complex projects, and staying
          committed to lifelong learning, I am to evolve into a developer who
          contributes to an efficiency and innovation in the tech industry.
        </p>
      </div>
    </section>
  );
};

export default ProfessionalSummary;
