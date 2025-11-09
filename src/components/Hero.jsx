import { resumeData } from '../data/resume';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full text-center">
        {/* Profile Image Placeholder */}
        <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-4xl font-bold">
          {resumeData.name.split(' ').map(n => n[0]).join('')}
        </div>
        
        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          {resumeData.name}
        </h1>
        
        {/* Title */}
        <p className="text-xl md:text-2xl text-gray-600 mb-6 font-light">
          {resumeData.title}
        </p>
        
        {/* Bio */}
        <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
          {resumeData.summary}
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href={resumeData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href={resumeData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href={`mailto:${resumeData.email}`}
            className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition-all duration-200"
          >
            Contact
          </a>
        </div>
        
        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          <svg className="w-6 h-6 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
