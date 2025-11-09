import { resumeData } from '../data/resume';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Experience</h2>
        
        <div className="space-y-12">
          {resumeData.experience.map((job, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-blue-600">
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-gray-900">{job.position}</h3>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {job.duration}
                  </span>
                </div>
                
                <p className="text-lg text-blue-600 font-semibold mb-1">{job.company}</p>
                <p className="text-sm text-gray-500 mb-4">{job.location}</p>
                
                <p className="text-gray-700 mb-4 italic">{job.description}</p>
                
                <ul className="space-y-2">
                  {job.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-gray-700 leading-relaxed">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
