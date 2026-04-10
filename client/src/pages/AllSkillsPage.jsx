import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";

import {
    SiJavascript, SiPython, SiCplusplus,
    SiReact, SiTailwindcss, SiHtml5,
    SiNodedotjs, SiExpress,
    SiMongodb, SiMysql,
    SiGit, SiGithub,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";

/* ------------------ DATA ------------------ */

const allSkills = [
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E", category: "Language", description: "Used for dynamic web apps and front-end interactivity.", level: 3 },
    { name: "Python", icon: <SiPython />, color: "#3776AB", category: "Language", description: "Great for automation, data science, and backend APIs.", level: 3 },
    { name: "C++", icon: <SiCplusplus />, color: "#00599C", category: "Language", description: "Used for high-performance applications and algorithms.", level: 4 },
    { name: "React", icon: <SiReact />, color: "#61DAFB", category: "Frontend", description: "Builds reactive UI components efficiently.", level: 4 },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4", category: "Frontend", description: "Utility-first CSS framework.", level: 4.5 },
    { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26", category: "Frontend", description: "Semantic markup for modern web pages.", level: 4.5 },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6", category: "Frontend", description: "Styling and layout.", level: 4.5 },
    { name: "Node.js", icon: <SiNodedotjs />, color: "#339933", category: "Backend", description: "Server-side JavaScript runtime.", level: 3.5 },
    { name: "Express.js", icon: <SiExpress />, color: "#888888", category: "Backend", description: "Minimal Node.js framework.", level: 2 },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248", category: "Database", description: "NoSQL database.", level: 2.5 },
    { name: "MySQL", icon: <SiMysql />, color: "#4479A1", category: "Database", description: "Relational DB.", level: 3.5 },
    { name: "Git", icon: <SiGit />, color: "#F05032", category: "Tools", description: "Version control.", level: 4 },
    { name: "GitHub", icon: <SiGithub />, color: "#888888", category: "Tools", description: "Code hosting.", level: 4 },
];

const tabs = ["All", "Frontend", "Backend", "Database", "Language", "Tools"];

/* ------------------ ANIMATIONS ------------------ */

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4 },
    },
};

/* ------------------ STAR ------------------ */

const StarRating = ({ level, color }) => {
    const gradientId = `halfGrad-${color.replace("#", "")}`;

    return (
        <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => {
                let fill = "none";
                if (level >= star) fill = color;
                else if (level >= star - 0.5) fill = `url(#${gradientId})`;

                return (
                    <svg key={star} width="14" height="14" viewBox="0 0 24 24"
                        stroke={color} strokeWidth="2"
                    >
                        <defs>
                            <linearGradient id={gradientId}>
                                <stop offset="50%" stopColor={color} />
                                <stop offset="50%" stopColor={color} stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                            fill={fill}
                            style={{ opacity: fill === "none" ? 0.3 : 1 }}
                        />
                    </svg>
                );
            })}
            <span className="text-[10px] text-[var(--muted)] ml-1">{level}/5</span>
        </div>
    );
};

/* ------------------ CARD ------------------ */

const SkillCard = ({ name, icon, color, category, description, level }) => {
    return (
        <motion.div
            variants={fadeUp}
            layout
            whileHover={{ y: -6, scale: 1.03 }}
            className="flex flex-col gap-4 p-5 rounded-2xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all duration-300 group h-full"
        >
            <div className="flex items-center justify-between">
                <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl"
                    style={{ background: `${color}18`, color }}
                >
                    {icon}
                </div>
                <span className="text-xs text-[var(--muted)]">{category}</span>
            </div>

            <h3 className="text-base font-bold text-[var(--text)]">{name}</h3>

            <p className="text-xs text-[var(--muted)] flex-1">{description}</p>

            <StarRating level={level} color={color} />
        </motion.div>
    );
};

/* ------------------ PAGE ------------------ */

const AllSkillsPage = () => {
    const [active, setActive] = useState("All");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const filtered =
        active === "All"
            ? allSkills
            : allSkills.filter((s) => s.category === active);

    return (
        <div className="min-h-screen bg-[var(--bg)]">
            <Navbar />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-5xl mx-auto px-6 pt-28 pb-20"
            >

                {/* Back */}
                <Link
                    to="/"
                    className="text-sm text-[var(--muted)] hover:text-[var(--text)] mb-8 inline-block"
                >
                    ← Back
                </Link>

                {/* Heading */}
                <motion.div variants={fadeUp} initial="hidden" animate="show">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-[var(--text)]">
                        All Skills
                    </h1>
                    <p className="text-sm text-[var(--muted)] mt-2">
                        Complete overview of my technical expertise
                    </p>
                </motion.div>

                {/* Tabs */}
                <div className="flex flex-wrap gap-2 my-8">
                    {tabs.map((tab) => (
                        <motion.button
                            key={tab}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActive(tab)}
                            className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition ${active === tab
                                    ? "bg-[var(--text)] text-[var(--bg)]"
                                    : "border-[var(--border)] text-[var(--muted)] hover:text-[var(--text)]"
                                }`}
                        >
                            {tab}
                        </motion.button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                >
                    <AnimatePresence>
                        {filtered.map((skill) => (
                            <SkillCard key={skill.name} {...skill} />
                        ))}
                    </AnimatePresence>
                </motion.div>

            </motion.div>
        </div>
    );
};

export default AllSkillsPage;