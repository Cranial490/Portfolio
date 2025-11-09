import { resumeData } from '../data/resume';

export default function Publications() {
  return (
    <section id="publications" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Publications</h2>
        
        <div className="space-y-6">
          {resumeData.publications.map((pub, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {pub.link ? (
                  <a href={pub.link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                    {pub.title}
                  </a>
                ) : (
                  pub.title
                )}
              </h3>
              
              <div className="flex flex-wrap gap-3 mb-3 text-sm">
                <span className="text-blue-600 font-semibold">{pub.venue}</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-600">{pub.year}</span>
              </div>
              
              <p className="text-gray-700">{pub.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
