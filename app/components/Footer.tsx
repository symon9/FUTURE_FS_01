import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full max-w-5xl py-8 border-t border-white/10 text-center text-gray-400">
      <div className="flex justify-center gap-6 mb-4">
        <a href="https://github.com" target="_blank" className="hover:text-white transition-colors"><FaGithub size={24} /></a>
        <a href="https://linkedin.com" target="_blank" className="hover:text-white transition-colors"><FaLinkedin size={24} /></a>
      </div>
      <p>&copy; {new Date().getFullYear()} Simon Emmanuel. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
