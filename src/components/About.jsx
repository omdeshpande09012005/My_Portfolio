import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { Code, Layers, Cloud, Cpu, GraduationCap, MapPin } from 'lucide-react';
import { personalInfo } from '../config/personalInfo';
import { aboutStats } from '../data/stats';

const About = () => {
  const interests = [
    'AI & Reinforcement Learning',
    'Game Development & Physics',
    'Scalable Backend Systems',
    'Cloud-Native Platforms',
    'System Optimization',
    'DevOps & Infrastructure'
  ];

  const values = [
    'Engineering Clarity',
    'Performance',
    'Developer Ergonomics',
    'System Optimization',
    'Research-Driven Dev',
    'Scalable Design'
  ];

  const education = [
    {
      degree: personalInfo.education.degree,
      institution: personalInfo.education.institution,
      year: personalInfo.education.year,
      gpa: personalInfo.education.gpa,
      semesterGpa: personalInfo.education.semesterGpa,
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
            I design and ship reliable systems — from AI research and game development to scalable cloud platforms. Engineering clarity, performance, and developer ergonomics drive everything I build.
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
                I'm a Computer Science student who enjoys building systems that are not only <span className="text-primary-400 font-semibold">functional — but intelligent, efficient, and scalable</span>. I started by creating real-world applications: a full-stack Online Bookstore in PHP and MySQL, and later deepened my understanding of core software design by building a modular multi-game platform in C++.
              </p>
              <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                Over time, my curiosity shifted from <span className="italic">"how to build software"</span> to <span className="italic">"how to make it smarter, faster, and meaningful enough to solve real problems."</span> This pushed me into AI, reinforcement learning, and system-level development.
              </p>
              <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                I built <span className="text-secondary-400 font-semibold">GameAI-Pathfinder</span>, a research project comparing heuristic-based A* pathfinding with reinforcement learning agents — my first deep step into AI experimentation, reproducible results, statistical evaluation, and research writing. Alongside AI, I developed <span className="text-secondary-400 font-semibold">TextShare.xyz</span>, a production-ready Next.js platform for secure content sharing, and <span className="text-secondary-400 font-semibold">FormBridge Cloud</span>, a serverless AWS-based automation platform with email handling and AI analytics.
              </p>
              <p className="text-zinc-300 text-lg leading-relaxed mb-8">
                I also have a background in hardware and performance engineering — building, testing, and benchmarking high-performance PCs — which helps me understand computing from the metal to the machine learning model. Today, I'm actively exploring the intersection of <span className="text-primary-400 font-semibold">AI, game development, and scalable engineering systems</span> — building things that combine creativity with research-driven technology.
              </p>

              {/* Education */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <GraduationCap size={20} className="text-primary-400" />
                  Education
                </h4>
                {education.map((edu, index) => (
                  <div key={index} className="glass rounded-lg p-4">
                    <h5 className="text-white font-semibold">{edu.degree}</h5>
                    <p className="text-zinc-400 text-sm">{edu.institution}</p>
                    <div className="flex flex-col gap-1 mt-2 text-sm">
                      <div className="flex items-center gap-4">
                        <span className="text-primary-400">{edu.year}</span>
                        {edu.gpa && <span className="text-secondary-400">CGPA: {edu.gpa}</span>}
                      </div>
                      {edu.semesterGpa && (
                        <span className="text-primary-400 text-xs ml-0">Latest Semester: {edu.semesterGpa}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Location */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <location.icon size={20} className="text-primary-400" />
                  Location & Availability
                </h4>
                <div className="glass rounded-lg p-4">
                  <p className="text-zinc-200">{location.city}, {location.country}</p>
                  <p className="text-secondary-400 text-sm mt-1">{location.availability}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Content - Stats and Details */}
          <AnimatedSection animation="fadeInRight">
            <div className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {aboutStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="glass rounded-xl p-6 text-center group hover-glow" // --- UPGRADE: Added hover-glow class ---
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
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
                      className="px-3 py-1 bg-primary-500/10 border border-primary-400/30 rounded-full text-zinc-200 text-sm"
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
                      className="px-3 py-1 bg-secondary-500/10 border border-secondary-400/30 rounded-full text-zinc-200 text-sm"
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
