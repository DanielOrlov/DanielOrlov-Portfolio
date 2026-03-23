//import "./App.css";

import AcademicCredentials from "./components/AcademicCredentials.tsx";
import PersonalData from "./components/PersonalData.tsx";
import ProfessionalSummary from "./components/ProfessionalSummary.tsx";
import AcademicWorkExperience from "./components/AcademicWorkExperience.tsx";
import WorkExperience from "./components/WorkExperience.tsx";

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
      <div className="summary-divider" />
      <WorkExperience />
    </>
  );
}
