import { Typewriter } from "react-simple-typewriter";
import profile from "../assets/profile.jpeg";
import { FaLinkedin, FaGithub, FaArrowDown } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
};

const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
};

const container = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
};

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen relative bg-transparent overflow-hidden flex flex-col items-center justify-center px-6 pt-20 pb-16"
        >

            {/* Glows */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.2, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute top-[-80px] left-[-80px] w-[320px] h-[320px] bg-[var(--accent)] rounded-full blur-3xl pointer-events-none"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.2, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                className="absolute bottom-0 right-[-80px] w-[280px] h-[280px] bg-[var(--accent)] rounded-full blur-3xl pointer-events-none"
            />

            {/* Main content */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="relative z-10 flex flex-col items-center text-center max-w-2xl w-full"
            >

                {/* Avatar */}
                <motion.div
                    variants={fadeUp}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative mb-6"
                    whileHover={{ scale: 1.08 }}
                >
                    <div className="absolute inset-0 rounded-full bg-[var(--accent)] blur-2xl opacity-30 scale-110" />
                    <div className="relative w-40 h-40 md:w-36 md:h-36 rounded-full ring-4 ring-[var(--card)] shadow-xl overflow-hidden">
                        <img
                            src={profile}
                            alt="Harsh Pandey"
                            className="w-full h-full object-cover object-[22%_20%] scale-125"
                        />
                    </div>
                    <span className="absolute bottom-2 right-4 w-5 h-5 bg-green-400 border-2 border-[var(--card)] rounded-full" />
                </motion.div>

                {/* Badge */}
                <motion.span
                    variants={fadeUp}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--muted)] text-xs font-medium shadow-sm mb-6 tracking-wide"
                >
                    ✦ Computer Science Student
                </motion.span>

                {/* Name */}
                <motion.h1
                    variants={fadeUp}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.05] text-[var(--text)] mb-4"
                >
                    Harsh{" "}
                    <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                        Pandey
                    </span>
                </motion.h1>

                {/* Typewriter */}
                <motion.p
                    variants={fadeUp}
                    transition={{ duration: 0.5 }}
                    className="text-base md:text-lg text-[var(--muted)] mb-4 min-h-[28px]"
                >
                    <span className="italic">Aspiring </span>
                    <span className="font-semibold text-[var(--text)]">
                        <Typewriter
                            words={["Full Stack Developer", "Frontend Developer", "Backend Learner"]}
                            loop={true}
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                    </span>
                </motion.p>

                {/* Divider */}
                <motion.div
                    variants={fadeIn}
                    transition={{ duration: 0.6 }}
                    className="w-10 h-px bg-[var(--border)] my-5"
                />

                {/* Description */}
                <motion.p
                    variants={fadeUp}
                    transition={{ duration: 0.5 }}
                    className="text-[var(--muted)] text-sm md:text-base leading-relaxed max-w-lg mb-8"
                >
                    I build clean, functional web apps and love turning ideas into code.
                    Currently learning and{" "}
                    <span className="text-[var(--text)] font-medium">open to internship opportunities</span>.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    variants={fadeUp}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col sm:flex-row gap-3 mb-8 w-full sm:w-auto"
                >
                    <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                        className="flex items-center justify-center gap-2 px-7 py-3 bg-[var(--text)] text-[var(--bg)] text-sm font-medium rounded-xl shadow-md"
                    >
                        View Projects →
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        className="flex items-center justify-center gap-2 px-7 py-3 bg-[var(--card)] border border-[var(--border)] text-[var(--text)] text-sm font-medium rounded-xl shadow-sm"
                    >
                        ⬇ Download Resume
                    </motion.button>
                </motion.div>

                {/* Socials */}
                <motion.div
                    variants={fadeUp}
                    transition={{ duration: 0.5 }}
                    className="flex gap-3 flex-wrap justify-center"
                >
                    {[
                        { label: "GitHub", icon: <FaGithub />, link: "https://github.com/iasharsh" },
                        { label: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/harsh-pandey-5970bb278/" },
                        { label: "Email", icon: <MdEmail />, link: "mailto:iasharsh34@email.com" },
                    ].map(({ label, icon, link }, i) => (
                        <motion.a
                            key={label}
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ y: -3, scale: 1.05 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
                            className="flex items-center gap-2 px-4 py-2 bg-[var(--card)] border border-[var(--border)] rounded-full text-xs font-medium text-[var(--muted)] shadow-sm hover:border-[var(--text)] hover:text-[var(--text)] transition-colors duration-300"
                        >
                            <span className="text-[var(--muted)] text-[10px]">{icon}</span>
                            {label}
                        </motion.a>
                    ))}
                </motion.div>

                {/* Scroll hint */}
                <motion.button
                    onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="flex flex-col items-center mt-14 cursor-pointer"
                >
                    <span className="text-[10px] tracking-widest uppercase text-[var(--muted)] mb-1">
                        Scroll
                    </span>
                    <motion.span
                        animate={{ y: [0, 6, 0] }}
                        transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
                        className="text-xl text-[var(--muted)]"
                    >
                        <FaArrowDown />
                    </motion.span>
                    <div className="w-px h-8 bg-gradient-to-b from-[var(--border)] to-transparent mt-2" />
                </motion.button>

            </motion.div>
        </section>
    );
};

export default Hero;