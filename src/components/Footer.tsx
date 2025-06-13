import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4">M. Nikhil</h3>
              <p className="text-slate-300 leading-relaxed">
                Full Stack Developer with a strong interest in data science and AI—building seamless web apps and intelligent systems that solve real-world problems.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-slate-300 hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-slate-300 hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-slate-300 hover:text-white transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-slate-300 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-2 text-slate-300">
                <p>📧 mnrs8835@gmail.com</p>
                <p>📍 India</p>
                <p>💼 Available for opportunities</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center gap-2 text-slate-300 mb-4 md:mb-0">
                <span>Made with</span>
                <Heart size={16} className="text-red-500" />
                <span>and</span>
                <Code size={16} className="text-blue-400" />
                <span>by M. Nikhil</span>
              </div>
              
              <div className="text-slate-300">
                <p>&copy; {currentYear} M. Nikhil. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;