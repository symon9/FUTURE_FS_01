import projects from "@/data/projects.json";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

const Projects = () => {

  return (
    <section id="projects" className="w-full max-w-5xl py-24">
      <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="fade-slide-up group rounded-xl border border-white/10 bg-black/20 p-6 shadow-lg backdrop-blur-lg transition-all duration-300 hover:border-white/20 hover:scale-[1.02] hover:shadow-2xl"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <div className="mb-4">
              <p className="bg-white/30 text-gray-900 dark:text-white/90 px-4 py-3 rounded-lg shadow-sm border border-white/20 transition-all duration-300 group-hover:bg-linear-to-r group-hover:from-blue-400/30 group-hover:to-purple-400/30">
                {project.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-full bg-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaExternalLinkAlt size={22} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
