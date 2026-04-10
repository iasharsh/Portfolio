import { Link } from "react-router-dom";
import { SiJavascript, SiReact, SiNodedotjs } from "react-icons/si";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

const featuredSkills = [
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E", category: "Language", description: "Used for dynamic web apps and front-end interactivity.", level: 3 },
    { name: "React", icon: <SiReact />, color: "#61DAFB", category: "Frontend", description: "Builds reactive UI components efficiently.", level: 4 },
    { name: "Node.js", icon: <SiNodedotjs />, color: "#339933", category: "Backend", description: "Server-side JavaScript runtime for scalable apps.", level: 3 },
];

const categoryColors = {
    Language: { bg: "bg-purple-100 dark:bg-purple-900/30", text: "text-purple-600 dark:text-purple-400" },
    Frontend: { bg: "bg-blue-100 dark:bg-blue-900/30", text: "text-blue-600 dark:text-blue-400" },
    Backend: { bg: "bg-green-100 dark:bg-green-900/30", text: "text-green-600 dark:text-green-400" },
    Database: { bg: "bg-yellow-100 dark:bg-yellow-900/30", text: "text-yellow-600 dark:text-yellow-400" },
    Tools: { bg: "bg-rose-100 dark:bg-rose-900/30", text: "text-rose-600 dark:text-rose-400" },
};

const StarRating = ({ level, color }) => {
    const gradientId = `halfGrad-${color.replace("#", "")}`;  // unique per color

    return (
        <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => {
                let fill = "none";
                if (level >= star) fill = color;
                else if (level >= star - 0.5) fill = `url(#${gradientId})`;

                return (
                    <svg key={star} width="14" height="14" viewBox="0 0 24 24"
                        stroke={color} strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round"
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

const SkillCard = ({ name, icon, color, category, description, level }) => {
    const badge = categoryColors[category] || { bg: "bg-gray-100", text: "text-gray-500" };
    return (
        <motion.div
            variants={fadeUp}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex flex-col gap-4 p-5 rounded-2xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)] hover:shadow-lg transition-all duration-300 group"
        >

            {/* Top row */}
            <div className="flex items-center justify-between">
                <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl font-extrabold"
                    style={{ background: `${color}18`, color }}
                >
                    {name.charAt(0)}
                </div>
                <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${badge.bg} ${badge.text}`}>
                    {category}
                </span>
            </div>

            {/* Icon + name */}
            <div className="flex items-center gap-2">
                <span
                    className="text-xl transition-transform duration-200 group-hover:scale-110 group-hover:rotate-6"
                    style={{ color }}
                >
                    {icon}
                </span>
                <h3 className="text-base font-bold text-[var(--text)]">{name}</h3>
            </div>

            {/* Description */}
            <p className="text-xs text-[var(--muted)] leading-relaxed flex-1">{description}</p>

            {/* Star rating */}
            <StarRating level={level} color={color} />

        </motion.div>
    );
};

const Skills = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section id="skills" className="pt-24 pb-20 px-6 bg-[var(--bg)]">
            <div className="max-w-5xl mx-auto w-full">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-10 text-center"
                >
                    <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)]">
                        What I work with
                    </span>
                    <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--text)]">
                        Skills & Technologies
                    </h2>
                    <p className="mt-3 text-sm text-[var(--muted)] max-w-md mx-auto">
                        Technologies and tools that power my development journey
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
                >
                    {featuredSkills.map((skill) => (
                        <SkillCard key={skill.name} {...skill} />
                    ))}
                </motion.div>

                <div className="flex justify-center">
                    <Link
                        to="/skills"
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--card)] text-sm font-semibold text-[var(--text)] hover:border-[var(--accent)] hover:shadow-md transition-all duration-200"
                    >
                        View All Skills
                        <span className="text-[var(--accent)]">→</span>
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default Skills;