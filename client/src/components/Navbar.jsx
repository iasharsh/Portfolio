import { useState, useEffect, useRef } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const navLinks = [
    { label: "Home",     href: "/"         },
    { label: "Skills",   href: "#skills"   },
    { label: "About",    href: "#about"    },
    { label: "Projects", href: "#projects" },
    { label: "Contact",  href: "#contact"  },
];

const Navbar = () => {
    const [scrolled,  setScrolled]  = useState(false);
    const [menuOpen,  setMenuOpen]  = useState(false);
    const [active,    setActive]    = useState("/");
    const [dark,      setDark]      = useState(() => {
        const saved = localStorage.getItem("theme");
        if (saved) return saved === "dark";
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    const navigate = useNavigate();
    const location = useLocation();
    const menuRef     = useRef(null);
    const controlsRef = useRef(null);
    const toggleRef   = useRef(null);

    useEffect(() => {
        if (location.pathname !== "/") {
            setActive(location.pathname);
        } else {
            setActive("/");
        }
    }, [location.pathname]);

    useEffect(() => {
        if (location.pathname !== "/") return;
        const sectionIds = ["about", "contact", "projects", "skills"];
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(`#${entry.target.id}`);
                });
            },
            { threshold: 0.4 }
        );
        const timer = setTimeout(() => {
            sectionIds.forEach((id) => {
                const el = document.getElementById(id);
                if (el) observer.observe(el);
            });
        }, 100);
        return () => { clearTimeout(timer); observer.disconnect(); };
    }, [location.pathname]);

    useEffect(() => {
        if (location.pathname !== "/") return;
        const handleScroll = () => { if (window.scrollY < 100) setActive("/"); };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target) && !controlsRef.current?.contains(e.target))
                setMenuOpen(false);
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        let lastY = window.scrollY;
        const closeOnScroll = () => {
            const currentY = window.scrollY;
            if (Math.abs(currentY - lastY) > 10) setMenuOpen(false);
            lastY = currentY;
        };
        window.addEventListener("scroll", closeOnScroll);
        return () => window.removeEventListener("scroll", closeOnScroll);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e) => { if (e.key === "Escape") setMenuOpen(false); };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [dark]);

    const handleNav = (href) => {
        setMenuOpen(false);
        if (href === "/") {
            setActive("/");
            navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else if (href.startsWith("#")) {
            setActive(href);
            if (location.pathname !== "/") {
                navigate("/");
                setTimeout(() => {
                    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
                }, 100);
            } else {
                document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            setActive(href);
            navigate(href);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const isActive = (href) => active === href;

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? "bg-[var(--card)]/80 backdrop-blur-md border-b border-[var(--border)] shadow-sm" : "bg-transparent"
        }`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between relative">

                {/* Logo */}
                <button
                    onClick={() => handleNav("/")}
                    className="text-lg sm:text-xl font-extrabold tracking-tight text-[var(--text)] hover:opacity-70 transition flex-shrink-0"
                >
                    iasharsh<span className="text-[var(--accent)]">.</span>
                </button>

                {/* Desktop links */}
                <ul className="hidden md:flex items-center gap-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    {navLinks.map(({ label, href }) => (
                        <li key={href}>
                            <button
                                onClick={() => handleNav(href)}
                                className={`px-3 lg:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                                    isActive(href)
                                        ? "bg-[var(--text)] text-[var(--bg)]"
                                        : "text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--border)]"
                                }`}
                            >
                                {label}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Desktop right */}
                <div className="hidden md:flex items-center gap-2 lg:gap-3 flex-shrink-0">
                    <button
                        onClick={(e) => { e.stopPropagation(); setDark((d) => !d); }}
                        className="p-2 rounded-full border border-[var(--border)] bg-[var(--card)] hover:scale-105 transition-all duration-300"
                    >
                        {dark ? <FaSun size={14} /> : <FaMoon size={14} />}
                    </button>
                    <span className="hidden lg:flex items-center gap-2 text-xs text-[var(--muted)] font-medium">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        Open to work
                    </span>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 lg:px-4 py-2 bg-[var(--text)] text-[var(--bg)] text-xs font-medium rounded-lg hover:opacity-90 active:scale-95 transition-all duration-300"
                    >
                        Resume ↗
                    </a>
                </div>

                {/* Mobile controls */}
                <div ref={controlsRef} className="flex md:hidden items-center gap-2 flex-shrink-0">
                    <button
                        ref={toggleRef}
                        onClick={(e) => { e.stopPropagation(); setDark((d) => !d); }}
                        className="p-2 rounded-full border border-[var(--border)] bg-[var(--card)] hover:scale-105 transition-all duration-300"
                    >
                        {dark ? <FaSun size={14} /> : <FaMoon size={14} />}
                    </button>
                    <button
                        className="flex flex-col gap-1.5 p-2 rounded-lg hover:bg-[var(--border)] transition"
                        onClick={() => setMenuOpen((o) => !o)}
                    >
                        <span className={`block w-5 h-0.5 bg-[var(--text)] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2"    : ""}`} />
                        <span className={`block w-5 h-0.5 bg-[var(--text)] transition-all duration-300 ${menuOpen ? "opacity-0"                   : ""}`} />
                        <span className={`block w-5 h-0.5 bg-[var(--text)] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2"   : ""}`} />
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                ref={menuRef}
                className={`md:hidden transition-all duration-300 overflow-hidden ${
                    menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                } bg-[var(--card)]/95 backdrop-blur-md border-b border-[var(--border)]`}
            >
                <ul className="flex flex-col px-4 py-4 gap-1">
                    {navLinks.map(({ label, href }) => (
                        <li key={href}>
                            <button
                                onClick={() => handleNav(href)}
                                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                                    isActive(href)
                                        ? "bg-[var(--text)] text-[var(--bg)]"
                                        : "text-[var(--muted)] hover:bg-[var(--border)] hover:text-[var(--text)]"
                                }`}
                            >
                                {label}
                            </button>
                        </li>
                    ))}
                    <li className="mt-2 pt-3 border-t border-[var(--border)] flex items-center justify-between">
                        <span className="flex items-center gap-2 text-xs text-[var(--muted)]">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            Open to work
                        </span>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2 bg-[var(--text)] text-[var(--bg)] text-xs font-medium rounded-lg"
                        >
                            Resume ↗
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;