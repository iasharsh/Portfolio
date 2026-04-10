import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { ProjectCard } from "../components/Projects";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const allProjects = [
    {
        title: "Taskify",
        description: "A task management app to create, update, and delete tasks using a REST API. Built with a clean UI and plans to integrate MongoDB as a persistent backend.",
        tags: ["React", "REST API", "Node.js", "Express"],
        category: "Full Stack",
        github: "#",
        live: "#",
        image: null,
    },
    {
        title: "Portfolio Website",
        description: "A modern personal portfolio with dark/light mode, smooth navigation, and a clean design built with React and Tailwind CSS.",
        tags: ["React", "Tailwind CSS", "React Router"],
        category: "Frontend",
        github: "#",
        live: "#",
        image: null,
    },
    {
        title: "Coming Soon",
        description: "Another project is in the works. Stay tuned for something exciting built with the MERN stack.",
        tags: ["MongoDB", "Express", "React", "Node.js"],
        category: "Full Stack",
        github: "#",
        live: "#",
        image: null,
    },
];

const tabs = ["All", "Full Stack", "Frontend", "Backend"];

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit:   { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
};

const ProjectsPage = () => {
    const [active, setActive] = useState("All");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const filtered = active === "All"
        ? allProjects
        : allProjects.filter((p) => p.category === active);

    return (
        <motion.div
            className="min-h-screen bg-[var(--bg)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
        >
            <Navbar />

            <div className="max-w-5xl mx-auto px-6 pt-28 pb-20">

                {/* Back link */}
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                >
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors mb-10"
                    >
                        ← Back to Home
                    </Link>
                </motion.div>

                {/* Heading */}
                <motion.div
                    className="mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                >
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--text)]">
                        All Projects
                    </h1>
                    <p className="mt-2 text-sm text-[var(--muted)]">
                        Everything I've designed and built
                    </p>
                    <div className="mt-3 w-10 h-px bg-[var(--border)]" />
                </motion.div>

                {/* Filter tabs */}
                <motion.div
                    className="flex flex-wrap gap-2 mb-8"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.25 }}
                >
                    {tabs.map((tab) => (
                        <motion.button
                            key={tab}
                            onClick={() => setActive(tab)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
                                active === tab
                                    ? "bg-[var(--text)] text-[var(--bg)] border-[var(--text)]"
                                    : "border-[var(--border)] text-[var(--muted)] hover:text-[var(--text)] hover:border-[var(--text)] bg-transparent"
                            }`}
                        >
                            {tab}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Grid with AnimatePresence for filter transitions */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                        variants={stagger}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        {filtered.map((project) => (
                            <motion.div key={project.title} variants={fadeUp}>
                                <ProjectCard {...project} />
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

            </div>
        </motion.div>
    );
};

export default ProjectsPage;