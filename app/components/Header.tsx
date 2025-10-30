"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const navLinks = ["Home", "About", "Projects", "Resume", "Contact"];

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 z-50 w-full"
    >
      <div className="mt-4 mx-auto max-w-lg rounded-full border border-white/10 bg-black/20 px-6 py-3 shadow-lg backdrop-blur-lg">
        <nav className="flex justify-center items-center">
          <ul className="flex items-center gap-x-6 text-sm font-medium text-gray-300">
            {navLinks.map((link) => (
              <li key={link}>
                <Link
                  className="hover:text-white transition-colors"
                  href={`#${link.toLowerCase()}`}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
