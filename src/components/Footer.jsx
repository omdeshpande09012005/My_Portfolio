import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../config/personalInfo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // --- FIX: Updated 'Contact' href to point to the new footer ID ---
  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#footer' } 
  ];

  const socialLinks = [
    {
      icon: Github,
      href: personalInfo.social.github,
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: personalInfo.social.linkedin,
      label: "LinkedIn"
    }
  ];

  const footerDescription = "I design and ship reliable systems. From Next.js products (TextShare) to C++ game AI (GameAI-Pathfinder), I care about engineering clarity, performance, and developer ergonomics.";

  return (
    // --- FIX: Changed id to "footer" to avoid conflicts ---
    <footer id="footer" className="relative py-16 bg-zinc-900 border-t border-zinc-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <a href="#hero" onClick={(e) => { e.preventDefault(); document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-2xl font-display font-bold gradient-text mb-4 inline-block">
                OD.dev
              </a>
              <p className="text-zinc-400 leading-relaxed text-sm">
                {footerDescription}
              </p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-zinc-400 hover:text-primary-400 transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Let's Connect</h4>
            <div className="space-y-4 mb-6">
              <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-3 text-zinc-400 hover:text-primary-400 transition-colors">
                <Mail size={18} />
                <span>{personalInfo.email}</span>
              </a>
              <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`} className="flex items-center justify-center md:justify-start gap-3 text-zinc-400 hover:text-primary-400 transition-colors">
                <Phone size={18} />
                <span>{personalInfo.phone}</span>
              </a>
            </div>
            <div className="flex justify-center md:justify-start gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass rounded-full text-zinc-300 hover:text-primary-400 hover:bg-zinc-700/50 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent mb-8"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-500 text-sm">
          <p>© {currentYear} Om Deshpande. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Built with</span>
            <Heart size={16} className="text-red-500" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
