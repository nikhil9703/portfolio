import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Personal Projects",
      location: "Remote",
      period: "2024 - Present",
      description: [
        "Built and deployed full-stack web applications using ReactJS and Django",
        "Implemented JWT authentication and CRUD operations with PostgreSQL",
        "Designed responsive UIs using HTML, CSS, and Bootstrap",
        "Worked on real-world use cases like event portals and task management systems"
      ],
      technologies: ["ReactJS", "Django", "Python", "PostgreSQL", "JWT", "HTML/CSS", "Git"]
    },
    {
      title: "Trainee Programmer",
      company: "Tech Internship",
      location: "Chennai, India",
      period: "Feb 2025 - Apr 2025",
      description: [
        "Contributed to building full-stack applications in an Agile team",
        "Used React Redux for state management and Puppeteer for automation",
        "Deployed frontend on AWS S3 and backend on Render",
        "Collaborated with team members on feature development and testing"
      ],
      technologies: ["ReactJS", "Redux", "Django", "Puppeteer", "AWS S3", "Render", "PostgreSQL"]
    },
    {
      title: "AI & Data Science Student",
      company: "Dr. N.G.P Institute of Technology",
      location: "Coimbatore, India",
      period: "2021 - 2025",
      description: [
        "Completed B.Tech in Artificial Intelligence and Data Science",
        "Built projects involving machine learning and computer vision",
        "Developed a myocardial infarction detection system using deep learning",
        "Worked on a forest surveillance system using OpenCV and Python"
      ],
      technologies: ["Python", "OpenCV", "TensorFlow", "CNN", "LSTM", "GANs", "Power BI", "SQL"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              My journey in full-stack development, AI, and real-world problem solving
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center text-blue-600 font-semibold mb-2">
                      <ExternalLink size={18} className="mr-2" />
                      {exp.company}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-slate-500">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
