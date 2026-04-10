import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import AllSkillsPage from "./pages/AllSkillsPage";
import ProjectsPage from "./pages/ProjectsPage";

// ✅ Home defined OUTSIDE App to prevent re-mounting on every render
const Home = () => (
    <>
        <Navbar />
        <Hero />
        <Skills />
        <About />
        <Projects />
        <Contact />
    </>
);

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <BrowserRouter>
            <AnimatePresence mode="wait">
                {loading ? (
                    <Loader key="loader" />
                ) : (
                    <Routes>
                        <Route path="/"         element={<Home />}          />
                        <Route path="/skills"   element={<AllSkillsPage />} />
                        <Route path="/projects" element={<ProjectsPage />}  />
                    </Routes>
                )}
            </AnimatePresence>
        </BrowserRouter>
    );
}

export default App;