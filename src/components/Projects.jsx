import { resumeData } from '../data/resume';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {resumeData.projects.map((project, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-200">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.name}</h3>
                <p className="text-sm text-blue-600 font-semibold mb-3">{project.role}</p>
                <p className="text-gray-700 mb-4">{project.description}</p>
              </div>
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <ul className="space-y-2 mb-4">
                {project.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
              
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
