"use client";

import { useState, useEffect } from "react";
import { motion,  } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Resume", hash: "#resume" },
  { name: "Contact", hash: "#contact" },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState("Home");  
  
  // This effect uses the Intersection Observer API to detect which section is in view.
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: "-30% 0px -70% 0px" }); // This margin helps select the section in the middle of the screen

    sections.forEach(section => observer.observe(section));

    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  return (
    <motion.header 
      // Variants define the states for our animation (visible and hidden)
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      // The animate prop switches between variants based on the `hidden` state
      animate="visible"
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4"
    >
      <nav className="rounded-full border border-white/10 bg-black/20 px-3 py-2 shadow-lg backdrop-blur-lg">
        <ul className="flex items-center gap-x-1">
          {navLinks.map((link) => (
            <li key={link.name} className="relative">
              {/* If the link is the active one, show the animated background pill */}
              {activeSection === link.name.toLowerCase() && (
                <motion.span
                  layoutId="activeSectionPill" // This magic prop makes the pill animate between links
                  className="absolute inset-0 rounded-full bg-white/10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                ></motion.span>
              )}
              <Link
                className="relative block px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium text-gray-300 hover:text-white transition-colors"
                href={link.hash}
                onClick={() => {
                  // Manually set active section on click for instant feedback
                  setActiveSection(link.name.toLowerCase());
                }}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;