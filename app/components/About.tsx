"use client";
import { motion } from "framer-motion";

const skills = [
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
  "MongoDB",
  "Tailwind CSS",
  "RadixUI",
];

const About = () => {
  return (
    <section id="about" className="w-full max-w-4xl py-24">
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-12"
      >
        About Me
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-gray-300 leading-relaxed">
            I am a passionate Full-Stack Engineer with a love for creating
            beautiful, functional, and user-centric web applications. With few
            years of experience, I have a strong foundation in modern web
            technologies and a knack for solving complex problems. I thrive in
            collaborative environments and I am always eager to learn and grow.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full border border-white/20 bg-white/5 text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
