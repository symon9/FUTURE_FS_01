import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full max-w-7xl mx-auto py-12 px-4 border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* About Section */}
        <div className="text-left">
          <h3 className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-semibold text-lg mb-4">
            About
          </h3>
          <p className="text-gray-100 text-sm leading-relaxed">
            I&apos;m a passionate full-stack developer creating innovative
            solutions and bringing ideas to life through code.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-left">
          <h3 className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-semibold text-lg mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#projects"
                className="text-blue-300 hover:text-purple-400 transition-colors text-sm font-medium"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-blue-300 hover:text-purple-400 transition-colors text-sm font-medium"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-blue-300 hover:text-purple-400 transition-colors text-sm font-medium"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#resume"
                className="text-blue-300 hover:text-purple-400 transition-colors text-sm font-medium"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="text-left">
          <h3 className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-semibold text-lg mb-4">
            Connect
          </h3>
          <div className="flex gap-4 mb-4">
            <a
              href="https://github.com/symon9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-purple-400 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/simon-emmanuel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-purple-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-purple-400 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="mailto:iamsymon0@gmail.com"
              className="text-blue-300 hover:text-purple-400 transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center pt-8 border-t border-white/10">
        <p className="text-gray-300 text-sm">
          &copy; {new Date().getFullYear()} Simon Emmanuel. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
