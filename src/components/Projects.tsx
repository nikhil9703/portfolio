import React from 'react';
import { Github, Code, HeartPulse } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Todo App with Authentication",
      description: "A full-stack todo application that includes user registration, JWT authentication, and CRUD functionality for managing tasks with due dates and status filters.",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Django", "JWT", "PostgreSQL", "TailwindCSS"],
      features: ["User Authentication", "Protected Routes", "Task Filtering", "Due Date Management"],
      github: "https://github.com/nikhil9703/todo-with-auth",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Myocardial Infarction (MI) Early Detection System",
      description: "A machine learning-based system for early detection of heart attacks by analyzing structural changes in the Left Ventricle (LV). Utilized advanced deep learning models to enable earlier diagnosis and personalized treatment.",
      image: "https://images.pexels.com/photos/8376237/pexels-photo-8376237.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Deep Learning", "CNN", "RNN", "LSTM", "GANs", "DBNs", "GNNs"],
      features: ["Early Detection", "LV Structural Analysis", "Advanced Pattern Recognition", "Personalized Insights"],
      icon: <HeartPulse className="w-6 h-6 text-red-600" />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A showcase of real-world applications I've built using full-stack and AI technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full">
                    {project.icon}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-700 mb-2">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  {project.github && (
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors text-sm font-medium"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* View More Projects Button */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/nikhil9703"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              <Github size={20} />
              View More on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
