import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, ChevronDown } from 'lucide-react';
import { personalInfo } from '../config/personalInfo';

// --- IMPORT YOUR COLLEGE LOGO HERE ---
import mitwpuLogo from '../assets/logos/mitwpu-logo.png';

const Education = () => {
  // --- Updated data structure to include course descriptions ---
  const educationData = [
    {
      degree: personalInfo.education.degree,
      institution: personalInfo.education.institution,
      year: personalInfo.education.year,
      gpa: personalInfo.education.gpa,
      location: personalInfo.education.location,
      description: "Pursuing a comprehensive Computer Science curriculum covering programming fundamentals, data structures, algorithms, and modern software development practices.",
      logo: mitwpuLogo,
      courses: [
        { 
          name: "Data Structures & Algorithms", 
          description: "Mastered fundamental data structures and analyzed algorithm complexity (Big O) to write efficient, scalable code for complex problem-solving." 
        },
        { 
          name: "Object-Oriented Programming", 
          description: "Learned to design modular and reusable software using core OOP principles like encapsulation, inheritance, and polymorphism, primarily through C++." 
        },
        { 
          name: "Database Management Systems", 
          description: "Gained expertise in relational database design, data modeling, and writing complex SQL queries to ensure data integrity and efficient retrieval." 
        },
        { 
          name: "Software Engineering", 
          description: "Studied the software development lifecycle, including requirements gathering, design patterns, testing, and agile methodologies for team-based projects." 
        },
        { 
          name: "Computer Networks", 
          description: "Explored the underlying principles of the internet, focusing on network protocols like TCP/IP, routing, and ensuring reliable data transmission." 
        },
      ]
    }
  ];

  const [expandedCourse, setExpandedCourse] = useState(null);

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
                      <GraduationCap size={64} className="text-amber-400" />
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
                    {edu.gpa && <div className="flex items-center gap-2"><Award size={16} /><span className="text-orange-400 font-medium">GPA: {edu.gpa}</span></div>}
                  </div>
                  <p className="text-zinc-300 leading-relaxed">{edu.description}</p>
                </div>
              </div>

              {/* --- NEW: Interactive Coursework Accordion --- */}
              <div className="border-t border-zinc-700 pt-8">
                <h3 className="text-2xl font-display font-semibold text-white mb-6 flex items-center gap-3">
                  <BookOpen className="text-amber-400" />
                  Key Coursework Insights
                </h3>
                <div className="space-y-3">
                  {edu.courses.map((course, index) => (
                    <div key={index} className="glass rounded-lg overflow-hidden">
                      <motion.button
                        onClick={() => setExpandedCourse(expandedCourse === index ? null : index)}
                        className="w-full flex justify-between items-center p-4 text-left"
                      >
                        <span className="font-semibold text-white">{course.name}</span>
                        <motion.div
                          animate={{ rotate: expandedCourse === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="text-amber-400" />
                        </motion.div>
                      </motion.button>
                      <AnimatePresence>
                        {expandedCourse === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="px-4"
                          >
                            <p className="text-zinc-300 pb-4 border-t border-zinc-700 pt-3 text-sm">
                              {course.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default Education;
