import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { Briefcase, Calendar, MapPin, Users, CheckCircle } from 'lucide-react';

// --- IMPORT YOUR LOGOS HERE ---
import squadUpLogo from '../assets/logos/squad-up-logo.png';
// 1. The import for your Gtek logo is now active.
import gtekLogo from '../assets/logos/gtek-logo.png';

const Experience = () => {
  // --- Data is now hardcoded based on your resume ---
  const experiences = [
    {
      title: "Admin of Production Department",
      company: "Squad Up Club",
      logo: squadUpLogo,
      duration: "Jan 2024 - Present",
      location: "MIT World Peace University, Pune",
      type: "Club Member",
      achievements: [
        "Successfully managed and administered 5+ major LAN and online gaming tournaments.",
        "Served over 50+ participants per event, ensuring a smooth experience.",
        "Configured and maintained 10+ high-performance PCs per event, achieving 99% uptime."
      ],
    },
    {
      title: "Intern - PC Benchmarking & Building",
      company: "Gtek Computers",
      // 2. The Gtek logo is now assigned to this experience
      logo: gtekLogo,
      duration: "May 2023 - Nov 2023",
      location: "Pune, India",
      type: "Internship",
      achievements: [
        "Built and configured over 20+ custom high-performance PCs for gaming and professional use.",
        "Achieved an average 15% performance increase over off-the-shelf systems.",
        "Conducted rigorous software and hardware testing using Cinebench and other tools."
      ],
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            A timeline of my professional journey and hands-on experience.
          </p>
        </AnimatedSection>

        {/* Timeline Container */}
        <div className="relative">
          {/* The vertical line */}
          <div className="absolute left-4 md:left-1/2 -ml-px w-0.5 h-full bg-gradient-to-b from-amber-500/30 via-orange-500/30 to-zinc-800/30" aria-hidden="true"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12">
              <div className={`flex items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content Card */}
                <motion.div
                  className="w-full md:w-5/12"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="glass p-6 sm:p-8 rounded-xl h-full">
                    {/* Header with Logo */}
                    <div className="flex items-start gap-4 mb-4">
                      {/* LOGO IMPLEMENTATION */}
                      <div className="w-16 h-16 bg-zinc-800 rounded-lg flex items-center justify-center border border-zinc-700 flex-shrink-0">
                        {exp.logo ? (
                          <img src={exp.logo} alt={`${exp.company} Logo`} className="w-12 h-12 object-contain" />
                        ) : (
                          <Briefcase size={32} className="text-amber-400" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-display font-bold text-white">
                          {exp.title}
                        </h3>
                        <p className="gradient-text font-semibold">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    
                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-zinc-400 text-sm mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle size={16} className="text-amber-400 mt-1 flex-shrink-0" />
                          <p className="text-zinc-300 text-sm">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Timeline Dot */}
                <motion.div
                  className="hidden md:flex w-2/12 items-center justify-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-4 h-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full border-4 border-zinc-900 shadow-lg"></div>
                </motion.div>

                {/* Spacer for alignment */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
