//import "./App.css";

import AcademicCredentials from "./components/AcademicCredentials";
import PersonalData from "./components/PersonalData";
import ProfessionalSummary from "./components/ProfessionalSummary";
import AcademicWorkExperience from "./components/AcademicWorkExperience";

export default function App() {
  return (
    <>
      <PersonalData />
      {/* <section id="spacer"></section> */}
      <div className="summary-divider" />
      <ProfessionalSummary />
      <div className="summary-divider" />
      <AcademicCredentials />
      <div className="summary-divider" />
      <AcademicWorkExperience />
    </>
  );
}
