import { FaDownload, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import resumeData from "@/data/resume.json";

const Resume = () => {
  return (
    <section id="resume" className="w-full max-w-5xl mx-auto py-24 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        My Resume
      </h2>
      <p className="text-center text-gray-300 mb-8 max-w-2xl mx-auto">
        A concise overview of my professional experience and education. Download
        the PDF for a printable version.
      </p>

      <div className="flex justify-center mb-10">
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors shadow-lg focus:outline-none focus:ring-4 focus:ring-white/30"
          aria-label="Download resume as PDF"
        >
          <FaDownload />
          <span>Download PDF</span>
        </a>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/10">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
            <FaBriefcase className="text-cyan-300" /> Experience
          </h3>
          <div className="space-y-6">
            {resumeData.experience.map((item) => (
              <div
                key={`${item.role}-${item.company}-${item.period}`}
                className="relative pl-8"
              >
                <span className="absolute left-0 top-2 w-3 h-3 rounded-full bg-linear-to-r from-cyan-400 to-purple-400 shadow-md ring-4 ring-black/30"></span>
                <h4 className="font-bold text-lg text-white">{item.role}</h4>
                <p className="text-sm text-gray-300 font-medium">
                  {item.company} •{" "}
                  <span className="text-xs text-gray-400">{item.period}</span>
                </p>
                <p className="text-gray-300 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/10">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
            <FaGraduationCap className="text-indigo-300" /> Education
          </h3>
          <div className="space-y-6">
            {resumeData.education.map((item) => (
              <div
                key={`${item.degree}-${item.institution}-${item.period}`}
                className="relative pl-8"
              >
                <span className="absolute left-0 top-2 w-3 h-3 rounded-full bg-linear-to-r from-indigo-400 to-pink-400 shadow-md ring-4 ring-black/30"></span>
                <h4 className="font-bold text-lg text-white">{item.degree}</h4>
                <p className="text-sm text-gray-300 font-medium">
                  {item.institution} •{" "}
                  <span className="text-xs text-gray-400">{item.period}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
