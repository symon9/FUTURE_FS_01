"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen w-full flex flex-col justify-center items-center text-center"
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      >
        <Image
          src="/avatar.png"
          alt="Avatar"
          width={120}
          height={120}
          className="rounded-full border-4 border-white/20 shadow-xl"
        />
      </motion.div>
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-4xl md:text-6xl font-bold mt-6"
      >
        Simon Emmanuel
      </motion.h1>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-lg md:text-xl text-gray-300 mt-2"
      >
        Full-Stack Software Engineer
      </motion.p>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex gap-4 mt-8"
      >
        <Link
          href="#contact"
          className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors shadow-lg"
        >
          Contact Me
        </Link>
        <a
          href="https://github.com/symon9"
          target="_blank"
          className="p-3.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors shadow-lg"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/simon-emmanuel"
          target="_blank"
          className="p-3.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors shadow-lg"
        >
          <FaLinkedin size={24} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
