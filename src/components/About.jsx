import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { Code, Layers, Cloud, Cpu, GraduationCap, MapPin } from 'lucide-react';
import { personalInfo } from '../config/personalInfo';

const About = () => {
  const stats = [
    { number: '2+', label: 'Full-Stack Projects', icon: Layers },
    { number: '5+', label: 'Core Languages', icon: Code },
    { number: '3', label: 'Cloud Platforms', icon: Cloud },
    { number: '10+', label: 'High-Perf. Systems', icon: Cpu }
  ];

  const interests = [
    'Full-Stack Development',
    'Cloud Security',
    'Object-Oriented Programming',
    'AI/ML',
    'System Optimization',
    'PC Building'
  ];

  const values = [
    'Clean & Efficient Code',
    'Problem Solving',
    'Continuous Learning',
    'User-Centric Design'
  ];

  const education = [
    {
      degree: personalInfo.education.degree,
      institution: personalInfo.education.institution,
      year: personalInfo.education.year,
      gpa: personalInfo.education.gpa,
      icon: GraduationCap
    }
  ];

  const location = {
    city: personalInfo.location.city,
    country: personalInfo.location.country,
    availability: 'Available for Full-time & Internship roles',
    icon: MapPin
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            A developer driven by a passion for building robust software and understanding technology from the inside out.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content - Narrative */}
          <AnimatedSection animation="fadeInLeft">
            <div className="glass rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-display font-semibold text-white mb-6">
                My Journey in Tech
              </h3>
              <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                As a Computer Science student, my focus is on building practical, high-quality software. I've engineered a full-stack e-commerce application from the ground up using PHP and MySQL, and explored core software design by developing a multi-game platform in C++, focusing on OOP principles.
              </p>
              <p className="text-zinc-300 text-lg leading-relaxed mb-8">
                My curiosity extends to the infrastructure that powers modern applications, leading me to research and write about security challenges in multi-tenant cloud environments. While I have a strong interest in hardware and system optimization—honed by building and benchmarking high-performance PCs—I apply this foundational knowledge to write more efficient and resilient code. This gives me a unique, full-spectrum perspective on technology, from bare metal to the browser.
              </p>

              {/* Education */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <GraduationCap size={20} className="text-amber-400" />
                  Education
                </h4>
                {education.map((edu, index) => (
                  <div key={index} className="glass rounded-lg p-4">
                    <h5 className="text-white font-semibold">{edu.degree}</h5>
                    <p className="text-zinc-400 text-sm">{edu.institution}</p>
                    <div className="flex items-center gap-4 mt-2 text-sm">
                      <span className="text-amber-400">{edu.year}</span>
                      {edu.gpa && <span className="text-orange-400">GPA: {edu.gpa}</span>}
                    </div>
                  </div>
                ))}
              </div>

              {/* Location */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <location.icon size={20} className="text-amber-400" />
                  Location & Availability
                </h4>
                <div className="glass rounded-lg p-4">
                  <p className="text-zinc-200">{location.city}, {location.country}</p>
                  <p className="text-orange-400 text-sm mt-1">{location.availability}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Content - Stats and Details */}
          <AnimatedSection animation="fadeInRight">
            <div className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="glass rounded-xl p-6 text-center group hover-glow" // --- UPGRADE: Added hover-glow class ---
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon size={24} className="text-white" />
                    </div>
                    <p className="text-3xl font-bold text-white mb-2">
                      {stat.number}
                    </p>
                    <p className="text-zinc-400 text-sm font-medium">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Interests */}
              <motion.div
                className="glass rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h4 className="text-lg font-semibold text-white mb-4">Areas of Interest</h4>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1 bg-amber-500/10 border border-amber-400/30 rounded-full text-zinc-200 text-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Values */}
              <motion.div
                className="glass rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h4 className="text-lg font-semibold text-white mb-4">Core Values</h4>
                <div className="flex flex-wrap gap-2">
                  {values.map((value) => (
                    <span
                      key={value}
                      className="px-3 py-1 bg-orange-500/10 border border-orange-400/30 rounded-full text-zinc-200 text-sm"
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
