import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { personalInfo } from '../config/personalInfo';
import Coursework from './Coursework';

// --- IMPORT YOUR COLLEGE LOGO HERE ---
import mitwpuLogo from '../assets/logos/mitwpu-logo.png';

const Education = () => {
  // --- Updated data structure for education ---
  const educationData = [
    {
      degree: personalInfo.education.degree,
      institution: personalInfo.education.institution,
      year: personalInfo.education.year,
      gpa: personalInfo.education.gpa,
      semesterGpa: personalInfo.education.semesterGpa,
      location: personalInfo.education.location,
      description: "Pursuing a comprehensive Computer Science curriculum covering programming fundamentals, data structures, algorithms, and modern software development practices.",
      logo: mitwpuLogo
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            My academic foundation in Computer Science and Engineering.
          </p>
        </AnimatedSection>

        {educationData.map((edu) => (
          <AnimatedSection
            key={edu.degree}
            animation="fadeInUp"
            delay={0.2}
          >
            <div className="glass rounded-2xl p-8 relative overflow-hidden group">
              <div className="grid lg:grid-cols-3 gap-8 items-center mb-8">
                {/* Left Side: Logo */}
                <motion.div 
                  className="lg:col-span-1 flex justify-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* --- FIX: Rectangular container for wide logo --- */}
                  <div className="w-full max-w-xs h-28 bg-zinc-800 rounded-lg flex items-center justify-center border border-zinc-700 p-4">
                    {edu.logo ? (
                      <img src={edu.logo} alt={`${edu.institution} Logo`} className="object-contain h-full w-full" />
                    ) : (
                      <GraduationCap size={64} className="text-primary-400" />
                    )}
                  </div>
                </motion.div>

                {/* Right Side: Details */}
                <div className="lg:col-span-2">
                  <div className="mb-4">
                    <h3 className="text-2xl font-display font-bold text-white">{edu.degree}</h3>
                    <p className="gradient-text font-semibold text-lg">{edu.institution}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-4 text-zinc-400">
                    <div className="flex items-center gap-2"><Calendar size={16} /><span>{edu.year}</span></div>
                    <div className="flex items-center gap-2"><MapPin size={16} /><span>{edu.location}</span></div>
                    {edu.gpa && (
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <Award size={16} />
                          <span className="text-secondary-400 font-medium">CGPA: {edu.gpa}</span>
                        </div>
                        {edu.semesterGpa && (
                          <div className="flex items-center gap-2 ml-6">
                            <span className="text-primary-400 font-medium text-sm">Latest Semester: {edu.semesterGpa}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  <p className="text-zinc-300 leading-relaxed">{edu.description}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}

        {/* Key Coursework - Integrated directly below Education */}
        <div className="mt-12">
          <Coursework />
        </div>
      </div>
    </section>
  );
};

export default Education;
