import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";
import CapstoneDocumentation from "./components/CapstoneDocumentation.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/capstone-docs" element={<CapstoneDocumentation />} />
      </Routes>
    </BrowserRouter>
  );
}
