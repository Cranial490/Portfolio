import { resumeData } from '../data/resume';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            {resumeData.summary}
          </p>
          
          <div className="mt-8 space-y-4">
            {resumeData.highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-600 rounded-full"></div>
                <p className="text-gray-700 leading-relaxed">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
