import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllProjectsPage from "./pages/AllProjectsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<AllProjectsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
