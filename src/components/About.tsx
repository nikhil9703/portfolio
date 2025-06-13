import React from 'react';
import { Code, Lightbulb, Target, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full Stack Development",
      description: "Experienced in both frontend and backend technologies"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Problem Solving",
      description: "Strong analytical skills and creative problem-solving approach"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Goal Oriented",
      description: "Focused on delivering high-quality solutions on time"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Player",
      description: "Excellent collaboration and communication skills"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Passionate Developer & Lifelong Learner
              </h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                I'm a dedicated Artificial Intelligence and Data Science student with a passion for creating innovative web applications and solving complex problems through code and data-driven solutions. My journey in tech began with curiosity and has grown into a strong commitment to building meaningful, user-focused digital experiences that blend intelligent design with real-world functionality.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Completed pursuing my B.Tech in Artificial Intelligence and Data Science, I’ve gained hands-on experience in full-stack web development, working with technologies like ReactJS, Django, PostgreSQL, and Python. I enjoy building responsive, real-world applications with clean and efficient code. I’m passionate about learning emerging tools and trends, and I'm driven to apply my technical skills to solve meaningful problems through scalable and impactful solutions.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="bg-blue-50 px-4 py-2 rounded-full">
                  <span className="text-blue-700 font-medium">📍 Location: India</span>
                </div>
                <div className="bg-green-50 px-4 py-2 rounded-full">
                  <span className="text-green-700 font-medium">🎓 B.Tech AI&DS Student</span>
                </div>
                <div className="bg-purple-50 px-4 py-2 rounded-full">
                  <span className="text-purple-700 font-medium">💼 Open to Opportunities</span>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="text-blue-600 mb-4">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-3">
                    {item.title}
                  </h4>
                  <p className="text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;