import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 8;
        if (next >= 100) { clearInterval(interval); return 100; }
        return next;
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center text-center overflow-hidden px-4"
      style={{ backgroundColor: "#12121f" }}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99,179,237,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,179,237,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Top tag */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 0.4, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-[10px] tracking-[4px] uppercase text-gray-400 mb-5"
      >
        Initializing system
      </motion.p>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-4xl sm:text-5xl md:text-7xl font-extrabold uppercase text-center leading-tight"
      >
        <span className="block text-gray-200">Harsh</span>
        <span className="block text-[var(--accent)]">Pandey</span>
      </motion.h1>

      {/* Role */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 0.6 }}
        className="text-[11px] tracking-[3px] uppercase mt-4"
        style={{ color: "rgba(99,179,237,0.7)" }}
      >
        Full Stack Developer
      </motion.p>

      {/* Divider line */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "120px" }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="h-px mt-4"
        style={{ backgroundColor: "#63b3ed" }}
      />

      {/* Pulse dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="flex gap-1.5 mt-7"
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: "#63b3ed" }}
            animate={{ scale: [0.6, 1, 0.6], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </motion.div>

      {/* Progress */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex flex-col items-center gap-1.5 mt-3"
      >
        <span className="text-[11px] tracking-widest text-gray-600">
          {Math.round(progress)}%
        </span>
        <div
          className="w-[120px] h-px rounded-full overflow-hidden"
          style={{ backgroundColor: "rgba(99,179,237,0.15)" }}
        >
          <motion.div
            className="h-full"
            style={{ backgroundColor: "#63b3ed", width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Loader;