import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 relative">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-slate-100 flex items-center justify-center overflow-hidden">
                <img
                  src="src/assets/nikhil_pic.jpeg"
                  alt="M. Nikhil"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-green-500 w-6 h-6 rounded-full border-4 border-white"></div>
          </div>

          {/* Hero Text */}
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Nikhil</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
            Software Engineer & Data Analyst
          </p>
          
          <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto">
            Passionate about creating innovative web solutions and building scalable applications 
            with modern technologies. Completed B.Tech in Artificial Intelligence and Data Science.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#projects"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="mailto:mnrs8835@gmail.com"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <Mail size={24} className="text-slate-600" />
            </a>
            <a
              href="https://github.com/nikhil9703"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <Github size={24} className="text-slate-600" />
            </a>
            <a
              href="https://www.linkedin.com/in/nikhil-m-88ab6124a/"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <Linkedin size={24} className="text-slate-600" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown size={32} className="text-slate-400 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;