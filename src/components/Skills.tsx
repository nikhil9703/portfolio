import React from 'react';
import { Code, Database, Globe, Smartphone, Server, GitBranch, BarChart2Icon } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-8 h-8" />,
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 60 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 88 }
      ]
    },
    
    {
      title: "Backend Development",
      icon: <Server className="w-8 h-8" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 75 },
        { name: "REST APIs", level: 85 },
      ]
    },
    {
      title: "Data Analytics",
      icon: <BarChart2Icon className="w-8 h-8" />, // Assuming you're using lucide-react icons
      skills: [
        { name: "Python", level: 85 },
        { name: "Pandas & NumPy", level: 80 },
        { name: "Power BI", level: 75 },
        { name: "Microsoft Excel", level: 90 },
        { name: "SQL", level: 70 },
        { name: "Data Visualization", level: 85 },
        { name: "Matplotlib/Seaborn", level: 80 }
      ]
    },
    {
      title: "Database & Tools",
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 75 },
        // { name: "Firebase", level: 85 },
        { name: "PostgreSQL", level: 70 },
        // { name: "Redis", level: 65 }
      ]
    },
    {
      title: "Development Tools",
      icon: <GitBranch className="w-8 h-8" />,
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        // { name: "Vercel", level: 85 }
      ]
    }
  ];

  const additionalSkills = [
    "Problem Solving",
    "Algorithm Design",
    "Data Structures",
    "System Design",
    "Agile Methodology",
    "Team Collaboration",
    "Code Review",
    "Testing & Debugging"
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and the technologies I work with
            </p>
          </div>

          {/* Technical Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="text-blue-600 mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-700 font-medium">{skill.name}</span>
                        <span className="text-slate-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Code className="w-8 h-8 text-blue-600 mr-4" />
              <h3 className="text-2xl font-bold text-slate-800">
                Additional Skills
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {additionalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-lg text-center hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span className="text-slate-700 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications or Learning */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Continuous Learning
            </h3>
            <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto">
              I'm constantly learning new technologies and improving my skills. Currently exploring 
              advanced React patterns, cloud technologies, and modern development practices.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">
                🎯 Currently Learning: Next.js
              </div>
              <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">
                📚 Studying: System Design
              </div>
              <div className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-medium">
                🚀 Exploring: Cloud Computing
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;