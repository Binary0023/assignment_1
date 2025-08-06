import React from 'react';
import { Link } from 'react-router-dom';
import { HiSparkles, HiMail, HiPhone, HiLocationMarker, HiArrowRight } from 'react-icons/hi';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-8">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <HiSparkles className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-30"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-display font-bold">Nexus</span>
                <span className="text-sm font-medium text-gray-300">Digital Studio</span>
              </div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-md font-light">
              Crafting exceptional digital experiences that transform businesses and inspire innovation. 
              Your success is our mission, your vision is our inspiration.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: FaTwitter, name: 'Twitter', color: 'hover:bg-blue-500' },
                { icon: FaLinkedin, name: 'LinkedIn', color: 'hover:bg-blue-600' },
                { icon: FaGithub, name: 'GitHub', color: 'hover:bg-gray-700' },
                { icon: FaInstagram, name: 'Instagram', color: 'hover:bg-pink-500' }
              ].map((social, index) => (
                <button 
                  key={index}
                  className={`w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-white ${social.color} hover:scale-110 transition-all duration-300 border border-white/10 shadow-lg`}
                >
                  <social.icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-display font-bold mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/contact', label: 'Contact' },
                { to: '#', label: 'Services' },
                { to: '#', label: 'Portfolio' },
                { to: '#', label: 'Blog' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.to} 
                    className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-flex items-center group font-light"
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-4 group-hover:bg-white transition-colors duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-display font-bold mb-8 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Get in Touch
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mt-1">
                  <HiMail className="w-3 h-3 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 font-light">hello@nexus.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mt-1">
                  <HiPhone className="w-3 h-3 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 font-light">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mt-1">
                  <HiLocationMarker className="w-3 h-3 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 font-light">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-white/10 pt-12 mb-12">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-2xl font-display font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-8 font-light">Get the latest insights and updates delivered to your inbox.</p>
            <div className="flex space-x-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-light"
              />
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg flex items-center space-x-2">
                <span>Subscribe</span>
                <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 mb-4 md:mb-0 font-light">
            <p>&copy; 2024 Nexus Digital Studio. All rights reserved.</p>
          </div>
          <div className="flex space-x-8 text-sm">
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 font-light">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 font-light">Terms of Service</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 font-light">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;