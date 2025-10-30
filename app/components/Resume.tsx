import { FaDownload } from "react-icons/fa";
import resumeData from "@/data/resume.json";

const Resume = () => {
  return (
    <section id="resume" className="w-full max-w-4xl py-24">
      <h2 className="text-3xl font-bold text-center mb-12">My Resume</h2>
      <div className="text-center mb-12">
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors shadow-lg"
        >
          <FaDownload /> Download PDF
        </a>
      </div>

      {/* Experience Timeline */}
      <div>
        <h3 className="text-2xl font-semibold mb-6">Experience</h3>
        <div className="relative border-l-2 border-white/20">
          {resumeData.experience.map((item, index) => (
            <div key={index} className="mb-8 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-white/20 rounded-full -left-3 ring-8 ring-zinc-900"></span>
              <h4 className="font-bold text-lg">{item.role}</h4>
              <p className="font-semibold text-md text-gray-400">
                {item.company} | {item.period}
              </p>
              <p className="text-gray-300 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Education Timeline */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-6">Education</h3>
        <div className="relative border-l-2 border-white/20">
          {resumeData.education.map((item, index) => (
            <div key={index} className="mb-8 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-white/20 rounded-full -left-3 ring-8 ring-zinc-900"></span>
              <h4 className="font-bold text-lg">{item.degree}</h4>
              <p className="font-semibold text-md text-gray-400">
                {item.institution} | {item.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
