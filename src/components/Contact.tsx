import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "mnrs8835@gmail.com",
      link: "mailto:mnrs8835@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 9384294182",
      link: "tel:+919384294182"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "coimbatore,India",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/nikhil9703",
      color: "hover:text-gray-800"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/nikhil-m-88ab6124a/",
      color: "hover:text-blue-600"
    },
    // {
    //   icon: <ExternalLink className="w-6 h-6" />,
    //   name: "Portfolio",
    //   url: "#",
    //   color: "hover:text-purple-600"
    // }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>
          </div>

          {/* Contact Info Only */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-8">
              Let's Connect
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center p-4 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="text-blue-600 mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">{info.title}</h4>
                    <p className="text-slate-600">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div>
              <h4 className="text-xl font-bold text-slate-800 mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`p-3 bg-slate-100 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${social.color}`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl text-white">
              <h4 className="text-xl font-bold mb-2">Ready to work together?</h4>
              <p className="mb-4">
                I'm currently available for full-time opportunities.
              </p>
              <a
                href="mailto:mnrs8835@gmail.com"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                <Mail size={18} />
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
