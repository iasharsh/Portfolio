import { motion } from "framer-motion";
import profile from "../assets/profile.jpeg";
import jsslogoicon from "../assets/jsslogoicon.png";
import bvmlogoicon from "../assets/bvmlogoicon.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const stats = [
    { label: "Projects Built", value: "3"   },
    { label: "Technologies",   value: "10+" },
    { label: "Graduating",     value: "2027" },
    { label: "Cups of Coffee", value: "∞"   },
];

const hobbies  = ["Coding", "Gaming", "Music", "Badminton", "Exploring Tech"];
const learning = ["React", "Node.js", "System Design"];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    show:   { opacity: 1, x: 0,  transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeRight = {
    hidden: { opacity: 0, x: 40 },
    show:   { opacity: 1, x: 0,  transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
};

const About = () => {
    return (
        <section id="about" className="pt-24 pb-20 px-6 bg-[var(--bg)] min-h-screen">
            <div className="max-w-5xl mx-auto">

                {/* Heading */}
                <motion.div
                    className="mb-14"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                >
                    <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)]">
                        Get to know me
                    </span>
                    <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--text)]">
                        About Me
                    </h2>
                    <div className="mt-3 w-10 h-px bg-[var(--border)]" />
                </motion.div>

                {/* Main grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                    {/* Left — photo + stats */}
                    <motion.div
                        className="flex flex-col items-center md:items-start gap-6"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeLeft}
                    >
                        {/* Photo */}
                        <motion.div
                            className="relative"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 200 }}
                        >
                            <div className="absolute top-3 left-3 w-full h-full rounded-2xl border-2 border-[var(--accent)] opacity-40" />
                            <img
                                src={profile}
                                alt="Harsh Pandey"
                                className="relative w-64 h-72 object-cover object-[28%_20%] scale-105 rounded-2xl border border-[var(--border)]"
                            />
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            className="grid grid-cols-2 gap-3 w-64"
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {stats.map(({ label, value }) => (
                                <motion.div
                                    key={label}
                                    variants={fadeUp}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className="flex flex-col items-center p-3 rounded-xl border border-[var(--border)] bg-[var(--card)] cursor-default"
                                >
                                    <span className="text-xl font-extrabold text-[var(--text)]">{value}</span>
                                    <span className="text-[10px] text-[var(--muted)] text-center mt-0.5">{label}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right — bio + details */}
                    <motion.div
                        className="flex flex-col gap-6"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={stagger}
                    >

                        {/* Bio */}
                        <motion.div variants={fadeRight}>
                            <h3 className="text-xl font-bold text-[var(--text)] mb-3">Hi, I'm Harsh 👋</h3>
                            <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">
                                I'm a Computer Science student who loves building things for the web. I enjoy turning ideas into clean, functional products — whether it's a full stack web app or a simple UI component.
                            </p>
                            <p className="text-sm text-[var(--muted)] leading-relaxed">
                                I care about writing good code, learning continuously, and creating experiences that feel polished and intuitive. I'm actively looking for internship opportunities where I can contribute and grow.
                            </p>
                        </motion.div>

                        {/* Education */}
                        <motion.div
                            variants={fadeRight}
                            className="p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]"
                        >
                            <h3 className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] mb-3">
                                Education
                            </h3>
                            <div className="flex flex-row md:flex-col gap-6">
                                {/* JSS */}
                                <motion.div
                                    whileHover={{ x: 4 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="flex gap-3 items-start p-4 rounded-xl border border-[var(--border)] bg-[var(--card)] hover:shadow-lg transition-shadow duration-300"
                                >
                                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center overflow-hidden">
                                        <img src={jsslogoicon} alt="JSS Logo" className="w-full h-full object-contain" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <a
                                            href="https://jssaten.ac.in/"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="group flex flex-row items-center gap-1 text-sm font-semibold text-[var(--text)] hover:text-[var(--accent)] transition-colors duration-200"
                                        >
                                            JSS Academy Of Technical Education • 2023 – 2027
                                            <MdOutlineKeyboardArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                        </a>
                                        <p className="text-xs text-[var(--muted)]">B.Tech in Computer Science</p>
                                    </div>
                                </motion.div>

                                {/* BVM */}
                                <motion.div
                                    whileHover={{ x: 4 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="flex gap-3 items-start p-4 rounded-xl border border-[var(--border)] bg-[var(--card)] hover:shadow-lg transition-shadow duration-300"
                                >
                                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center overflow-hidden">
                                        <img src={bvmlogoicon} alt="BVM Logo" className="w-full h-full object-contain" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <a
                                            href="https://www.bvmschool.in/"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="group flex flex-row items-center gap-1 text-sm font-semibold text-[var(--text)] hover:text-[var(--accent)] transition-colors duration-200"
                                        >
                                            BVM (Bhai Parmanand Vidya Mandir) • 2021 – 2023
                                            <MdOutlineKeyboardArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                        </a>
                                        <p className="text-xs text-[var(--muted)]">High School - PCM with CS</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Career goal */}
                        <motion.div
                            variants={fadeRight}
                            className="p-4 rounded-xl border border-[var(--accent)]/30 bg-[var(--card)]"
                        >
                            <h3 className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] mb-2">
                                Career Goal
                            </h3>
                            <p className="text-sm text-[var(--muted)] leading-relaxed">
                                Looking for a <span className="text-[var(--text)] font-medium">Full Stack Developer internship</span> where I can apply my skills, build real-world products, and learn from experienced engineers.
                            </p>
                        </motion.div>

                        {/* Currently learning */}
                        <motion.div variants={fadeRight}>
                            <h3 className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] mb-3">
                                Currently Learning
                            </h3>
                            <motion.div
                                className="flex flex-wrap gap-2"
                                variants={stagger}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                            >
                                {learning.map((item) => (
                                    <motion.span
                                        key={item}
                                        variants={fadeUp}
                                        whileHover={{ scale: 1.08, y: -2 }}
                                        className="px-3 py-1.5 text-xs font-medium rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--muted)] cursor-default"
                                    >
                                        📖 {item}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Hobbies */}
                        <motion.div variants={fadeRight}>
                            <h3 className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] mb-3">
                                Hobbies & Interests
                            </h3>
                            <motion.div
                                className="flex flex-wrap gap-2"
                                variants={stagger}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                            >
                                {hobbies.map((hobby) => (
                                    <motion.span
                                        key={hobby}
                                        variants={fadeUp}
                                        whileHover={{ scale: 1.08, y: -2 }}
                                        className="px-3 py-1.5 text-xs font-medium rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--muted)] cursor-default"
                                    >
                                        {hobby}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;