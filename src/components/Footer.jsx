import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Github, Linkedin, Mail, Phone, Twitter, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../config/personalInfo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Blog', href: '#blog' }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: personalInfo.social.github,
      label: "GitHub",
      username: "@omdeshpande09012005"
    },
    {
      icon: Linkedin,
      href: personalInfo.social.linkedin,
      label: "LinkedIn",
      username: "Om Deshpande"
    }
  ];

  const featuredProjects = [
    { name: 'TextShare', href: 'https://textshare.xyz', description: 'Ephemeral content sharing platform' },
    { name: 'GameAI Pathfinder', href: 'https://github.com/omdeshpande09012005/GameAI-Pathfinder', description: 'A* vs Q-Learning analysis' },
    { name: 'Portfolio', href: '#hero', description: 'This website you\'re viewing' }
  ];

  return (
    <footer id="footer" className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-black border-t border-gray-800">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <a 
              href="#hero" 
              onClick={(e) => { 
                e.preventDefault(); 
                document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' }); 
              }} 
              className="inline-block mb-4"
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-primary-400 via-accent-400 to-primary-500 bg-clip-text text-transparent">
                OD.dev
              </h3>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Full-stack developer and AI enthusiast crafting scalable solutions from Next.js products to C++ game AI.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-400 hover:text-primary-400 hover:border-primary-500/50 hover:bg-gray-800 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold text-lg mb-6">Navigation</h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm group"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span className="inline-flex items-center gap-2">
                    {link.name}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Featured Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold text-lg mb-6">Featured Work</h4>
            <div className="space-y-4">
              {featuredProjects.map((project) => (
                <a
                  key={project.name}
                  href={project.href}
                  target={project.href.startsWith('http') ? '_blank' : '_self'}
                  rel={project.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="block group"
                  onClick={(e) => {
                    if (!project.href.startsWith('http')) {
                      e.preventDefault();
                      document.querySelector(project.href)?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <h5 className="text-sm font-medium text-gray-300 group-hover:text-primary-400 transition-colors">
                    {project.name}
                  </h5>
                  <p className="text-xs text-gray-500 mt-1">{project.description}</p>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold text-lg mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <a 
                href={`mailto:${personalInfo.email}`}
                className="flex items-start gap-3 text-gray-400 hover:text-primary-400 transition-colors group"
              >
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 mb-1">Email</p>
                  <p className="text-sm">{personalInfo.email}</p>
                </div>
              </a>
              <a 
                href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
                className="flex items-start gap-3 text-gray-400 hover:text-primary-400 transition-colors group"
              >
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 mb-1">Phone</p>
                  <p className="text-sm">{personalInfo.phone}</p>
                </div>
              </a>
              <div className="pt-4">
                <a 
                  href="#contact"
                  onClick={(e) => { 
                    e.preventDefault(); 
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); 
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-500/10 border border-primary-500/20 text-primary-400 hover:bg-primary-500/20 transition-all duration-300 text-sm font-medium"
                >
                  Send a Message
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-500 text-sm">
            © {currentYear} <span className="text-gray-400 font-medium">Om Deshpande</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Crafted with</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span>using</span>
            <span className="text-gray-400 font-medium">React</span>
            <span>+</span>
            <span className="text-gray-400 font-medium">Vite</span>
            <span>+</span>
            <span className="text-gray-400 font-medium">Tailwind CSS</span>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"></div>
    </footer>
  );
};

export default Footer;
