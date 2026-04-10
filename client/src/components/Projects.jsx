import { Link } from "react-router-dom";
import { SiGithub } from "react-icons/si";
import { MdOutlineOpenInNew } from "react-icons/md";
import { motion } from "framer-motion";

const projects = [
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

const categoryColors = {
    "Full Stack": { bg: "bg-purple-100 dark:bg-purple-900/30", text: "text-purple-600 dark:text-purple-400" },
    "Frontend":   { bg: "bg-blue-100 dark:bg-blue-900/30",     text: "text-blue-600 dark:text-blue-400"     },
    "Backend":    { bg: "bg-green-100 dark:bg-green-900/30",   text: "text-green-600 dark:text-green-400"   },
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
};

export const ProjectCard = ({ title, description, tags, category, github, live, image }) => {
    const badge = categoryColors[category] || { bg: "bg-gray-100", text: "text-gray-500" };

    return (
        <motion.div
            variants={fadeUp}
            whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--card)] overflow-hidden hover:border-[var(--accent)] transition-colors duration-300 group"
        >
            {/* Image area */}
            <div className="relative w-full h-44 bg-gradient-to-br from-[var(--border)] to-[var(--card)] flex items-center justify-center overflow-hidden">
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="flex flex-col items-center gap-2 opacity-30">
                        <div className="w-12 h-12 rounded-xl border-2 border-[var(--muted)]" />
                        <div className="w-20 h-2 rounded-full bg-[var(--muted)]" />
                        <div className="w-14 h-2 rounded-full bg-[var(--muted)]" />
                    </div>
                )}
                <span className={`absolute top-3 right-3 text-[10px] font-semibold px-2.5 py-1 rounded-full ${badge.bg} ${badge.text}`}>
                    {category}
                </span>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-3 p-5 flex-1">
                <h3 className="text-base font-bold text-[var(--text)]">{title}</h3>
                <p className="text-xs text-[var(--muted)] leading-relaxed flex-1">{description}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2.5 py-1 text-[10px] font-semibold rounded-full border border-[var(--border)] bg-[var(--bg)] text-[var(--muted)]"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-1">
                    <motion.a
                        href={github}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ x: 2 }}
                        className="flex items-center gap-1.5 text-xs font-medium text-[var(--muted)] hover:text-[var(--text)] transition-colors duration-200"
                    >
                        <SiGithub size={13} /> Code
                    </motion.a>
                    <motion.a
                        href={live}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ x: 2 }}
                        className="flex items-center gap-1.5 text-xs font-medium text-[var(--muted)] hover:text-[var(--text)] transition-colors duration-200"
                    >
                        <MdOutlineOpenInNew size={13} /> Live
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="pt-20 pb-16 px-6 bg-[var(--bg)]">
            <div className="max-w-5xl mx-auto">

                {/* Heading */}
                <motion.div
                    className="mb-10 text-center"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                >
                    <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)]">
                        What I've built
                    </span>
                    <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--text)]">
                        Featured Projects
                    </h2>
                    <p className="mt-3 text-sm text-[var(--muted)] max-w-md mx-auto">
                        A selection of things I've designed and built
                    </p>
                </motion.div>

                {/* Cards grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8"
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {projects.slice(0, 2).map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </motion.div>

                {/* View All */}
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                        <Link
                            to="/projects"
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--card)] text-sm font-semibold text-[var(--text)] hover:border-[var(--accent)] hover:shadow-md transition-all duration-200"
                        >
                            View All Projects
                            <span className="text-[var(--accent)]">→</span>
                        </Link>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default Projects;