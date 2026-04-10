import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { motion } from "framer-motion";

const socials = [
    { label: "GitHub",    icon: <FaGithub size={16} />,     href: "https://github.com/iasharsh",      color: "hover:border-gray-400 hover:text-gray-300"   },
    { label: "LinkedIn",  icon: <FaLinkedin size={16} />,   href: "https://linkedin.com/in/iasharsh", color: "hover:border-blue-500 hover:text-blue-400"   },
    { label: "Email",     icon: <MdOutlineEmail size={16}/>, href: "mailto:harsh@email.com",           color: "hover:border-red-400 hover:text-red-400"     },
    { label: "Instagram", icon: <FaInstagram size={16} />,  href: "https://instagram.com/iasharsh",   color: "hover:border-pink-500 hover:text-pink-400"   },
];

const inputClass = "w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--card)] text-sm text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors duration-200";
const labelClass = "text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mb-2 block";

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

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [sent, setSent] = useState(false);

    const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", form);
        setSent(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSent(false), 4000);
    };

    return (
        <section id="contact" className="min-h-screen pt-20 pb-3 px-6 bg-[var(--bg)]">
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
                        Get in touch
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--text)]">
                        Contact Me
                    </h2>
                    <p className="mt-4 text-sm text-[var(--muted)] max-w-md mx-auto leading-relaxed">
                        Have an opportunity or just want to say hi? My inbox is always open.
                    </p>
                </motion.div>

                {/* Two column layout */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem" }}>

                    {/* Left — form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-6"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={fadeLeft}
                    >
                        <motion.div variants={fadeUp}>
                            <label className={labelClass}>Name</label>
                            <input
                                type="text" name="name" value={form.name}
                                onChange={handleChange} required
                                placeholder="Harsh Pandey"
                                className={inputClass}
                            />
                        </motion.div>
                        <motion.div variants={fadeUp}>
                            <label className={labelClass}>Email</label>
                            <input
                                type="email" name="email" value={form.email}
                                onChange={handleChange} required
                                placeholder="harsh@email.com"
                                className={inputClass}
                            />
                        </motion.div>
                        <motion.div variants={fadeUp}>
                            <label className={labelClass}>Message</label>
                            <textarea
                                name="message" value={form.message}
                                onChange={handleChange} required
                                rows={6}
                                placeholder="Hi Harsh, I'd love to connect..."
                                className={`${inputClass} resize-none`}
                            />
                        </motion.div>
                        <motion.button
                            type="submit"
                            variants={fadeUp}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            className="w-full px-6 py-3.5 bg-[var(--text)] text-[var(--bg)] text-sm font-semibold rounded-xl hover:opacity-90 transition-all duration-200"
                        >
                            {sent ? "✓ Message Sent!" : "Send Message →"}
                        </motion.button>
                    </motion.form>

                    {/* Right — cards + socials */}
                    <motion.div
                        className="flex flex-col gap-6"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={stagger}
                    >

                        {/* Availability */}
                        <motion.div
                            variants={fadeRight}
                            whileHover={{ scale: 1.01, x: 3 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="p-6 rounded-2xl border border-[var(--accent)]/30 bg-[var(--card)]"
                        >
                            <div className="flex items-center gap-2.5 mb-3">
                                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                                <span className="text-sm font-semibold text-[var(--text)]">Available for opportunities</span>
                            </div>
                            <p className="text-xs text-[var(--muted)] leading-relaxed">
                                Currently looking for internship and entry-level full stack developer roles. If you have an opportunity, I'd love to hear from you!
                            </p>
                        </motion.div>

                        {/* Response time */}
                        <motion.div
                            variants={fadeRight}
                            whileHover={{ scale: 1.01, x: 3 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)]"
                        >
                            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] mb-3">
                                Response Time
                            </p>
                            <p className="text-sm text-[var(--muted)] leading-relaxed">
                                I usually respond within{" "}
                                <span className="text-[var(--text)] font-semibold">24 hours</span>.
                                For urgent inquiries, reach me on LinkedIn or Email.
                            </p>
                        </motion.div>

                        {/* Socials */}
                        <motion.div variants={fadeRight}>
                            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] mb-4">
                                Find Me On
                            </p>
                            <motion.div
                                className="grid grid-cols-2 gap-3"
                                variants={stagger}
                            >
                                {socials.map(({ label, icon, href, color }) => (
                                    <motion.a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noreferrer"
                                        variants={fadeUp}
                                        whileHover={{ y: -3, scale: 1.04 }}
                                        transition={{ type: "spring", stiffness: 250 }}
                                        className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--card)] text-sm font-medium text-[var(--muted)] hover:shadow-md transition-colors duration-200 ${color}`}
                                    >
                                        <span className="flex-shrink-0">{icon}</span>
                                        {label}
                                    </motion.a>
                                ))}
                            </motion.div>
                        </motion.div>

                    </motion.div>
                </div>

                {/* Footer */}
                <motion.div
                    className="mt-15 pt-5 pb-3 border-t border-[var(--border)] text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <p className="text-xs text-[var(--muted)]">
                        Designed & Built by{" "}
                        <span className="text-[var(--text)] font-semibold">Harsh Pandey</span>
                        {" "}· {new Date().getFullYear()}
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default Contact;