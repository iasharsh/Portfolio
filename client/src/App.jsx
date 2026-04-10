import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import AllSkillsPage from "./pages/AllSkillsPage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // loader duration

    return () => clearTimeout(timer);
  }, []);

  // ✅ Home page (all sections)
  const Home = () => (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Hero />
          <Skills />
          <About />
          <Projects />
          <Contact />
        </>
      )}
    </>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<AllSkillsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;