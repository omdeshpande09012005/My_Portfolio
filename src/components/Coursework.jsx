import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import {
  BookOpen,
  ChevronDown,
  Code,
  Zap,
  Award,
  ExternalLink,
  Link as LinkIcon
} from 'lucide-react';
import { courseworkData } from '../data/coursework';

const Coursework = () => {
  const [expandedCourse, setExpandedCourse] = useState('ds');
  const [expandedUnit, setExpandedUnit] = useState(null);
  const [expandedLab, setExpandedLab] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  const course = courseworkData.find(c => c.id === expandedCourse);

  if (!course) return null;

  return (
    <div id="coursework">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
          Key <span className="gradient-text">Coursework</span>
        </h3>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
          Deep-dive into key courses with detailed syllabus, practical labs, and comprehensive learning resources.
        </p>
      </div>

      <div className="glass rounded-2xl p-8">
            {/* Course Selector */}
            <div className="mb-8 pb-8 border-b border-zinc-700">
              <h3 className="text-lg font-semibold text-white mb-4">Select Course</h3>
              <div className="flex flex-wrap gap-3">
                {courseworkData.map((c) => (
                  <motion.button
                    key={c.id}
                    onClick={() => {
                      setExpandedCourse(c.id);
                      setActiveTab('overview');
                      setExpandedUnit(null);
                      setExpandedLab(null);
                    }}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      expandedCourse === c.id
                        ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                        : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {c.name}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Course Header */}
            <div className="mb-8 pb-8 border-b border-zinc-700">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-3xl font-display font-bold text-white mb-2">{course.name}</h3>
                  <p className="text-zinc-400">{course.code} • {course.semester} • {course.credits} Credits</p>
                </div>
                <div className="flex gap-2">
                  {/* Tab Navigation */}
                  {['overview', 'syllabus', 'labs', 'skills', 'resources'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        activeTab === tab
                          ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
                          : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              <p className="text-zinc-300 text-lg">{course.description}</p>
            </div>

            {/* TAB 1: Overview */}
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Course Stats */}
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                      <Award className="text-primary-400" />
                      Course Highlights
                    </h4>
                    <div className="space-y-4">
                      <div className="glass rounded-lg p-4">
                        <p className="text-primary-400 font-semibold mb-1">Units</p>
                        <p className="text-white text-lg">{course.units.length} Comprehensive Units</p>
                      </div>
                      <div className="glass rounded-lg p-4">
                        <p className="text-secondary-400 font-semibold mb-1">Practical Labs</p>
                        <p className="text-white text-lg">{course.practicalExperience.length} Hands-on Projects</p>
                      </div>
                      <div className="glass rounded-lg p-4">
                        <p className="text-accent-400 font-semibold mb-1">Skills Acquired</p>
                        <p className="text-white text-lg">{course.keySkillsAcquired.length} Core Competencies</p>
                      </div>
                    </div>
                  </div>

                  {/* Skills Overview */}
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                      <Zap className="text-secondary-400" />
                      Key Skills
                    </h4>
                    <div className="space-y-3">
                      {course.keySkillsAcquired.slice(0, 8).map((skill, idx) => (
                        <div key={idx} className="flex items-center justify-between">
                          <span className="text-zinc-300">{skill.skill}</span>
                          <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                            skill.proficiency === 'Advanced' 
                              ? 'bg-primary-500/20 text-primary-400'
                              : 'bg-secondary-500/20 text-secondary-400'
                          }`}>
                            {skill.proficiency}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 2: Syllabus */}
            {activeTab === 'syllabus' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {course.units.map((unit, index) => (
                  <div key={index} className="glass rounded-lg overflow-hidden">
                    <motion.button
                      onClick={() => setExpandedUnit(expandedUnit === index ? null : index)}
                      className="w-full flex justify-between items-center p-4 text-left hover:bg-zinc-700/50 transition-colors"
                    >
                      <div>
                        <p className="text-primary-400 font-semibold">{unit.unit}</p>
                        <h5 className="text-white font-semibold mt-1">{unit.title}</h5>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedUnit === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="text-primary-400" />
                      </motion.div>
                    </motion.button>

                    <AnimatePresence>
                      {expandedUnit === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-4 pb-4 border-t border-zinc-700"
                        >
                          <div className="pt-4 space-y-2">
                            {unit.topics.map((topic, topicIdx) => (
                              <div key={topicIdx} className="flex items-start gap-3">
                                <Zap size={16} className="text-secondary-400 mt-1 flex-shrink-0" />
                                <p className="text-zinc-300">{topic}</p>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>
            )}

            {/* TAB 3: Labs */}
            {activeTab === 'labs' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {course.practicalExperience.map((lab, index) => (
                  <div key={index} className="glass rounded-lg overflow-hidden">
                    <motion.button
                      onClick={() => setExpandedLab(expandedLab === index ? null : index)}
                      className="w-full flex justify-between items-center p-4 text-left hover:bg-zinc-700/50 transition-colors"
                    >
                      <div>
                        <p className="text-secondary-400 font-semibold">{lab.lab}</p>
                        <h5 className="text-white font-semibold mt-1">{lab.title}</h5>
                        <p className="text-zinc-400 text-sm mt-1">{lab.description}</p>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedLab === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="text-secondary-400" />
                      </motion.div>
                    </motion.button>

                    <AnimatePresence>
                      {expandedLab === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-4 pb-4 border-t border-zinc-700"
                        >
                          <div className="pt-4">
                            <p className="text-primary-400 font-semibold mb-3">Key Tasks:</p>
                            <ul className="space-y-2 mb-4">
                              {lab.tasks.map((task, taskIdx) => (
                                <li key={taskIdx} className="flex items-start gap-3">
                                  <Code size={16} className="text-accent-400 mt-1 flex-shrink-0" />
                                  <span className="text-zinc-300">{task}</span>
                                </li>
                              ))}
                            </ul>
                            <p className="text-secondary-400 font-semibold mb-2">Skills Developed:</p>
                            <div className="flex flex-wrap gap-2">
                              {lab.skills.map((skill, skillIdx) => (
                                <span
                                  key={skillIdx}
                                  className="px-3 py-1 bg-secondary-500/20 border border-secondary-400/30 rounded-full text-zinc-200 text-sm"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>
            )}

            {/* TAB 4: Skills */}
            {activeTab === 'skills' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {Array.from(new Set(course.keySkillsAcquired.map(s => s.category))).map((category) => {
                    const categorySkills = course.keySkillsAcquired.filter(s => s.category === category);
                    return (
                      <div key={category} className="glass rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-white mb-4">{category}</h4>
                        <div className="space-y-3">
                          {categorySkills.map((skill, idx) => (
                            <div key={idx}>
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-zinc-300">{skill.skill}</span>
                                <span className={`text-xs font-medium px-2 py-1 rounded ${
                                  skill.proficiency === 'Advanced'
                                    ? 'bg-primary-500/20 text-primary-400'
                                    : 'bg-secondary-500/20 text-secondary-400'
                                }`}>
                                  {skill.proficiency}
                                </span>
                              </div>
                              <div className="w-full bg-zinc-700 rounded-full h-2">
                                <div
                                  className="h-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
                                  style={{
                                    width: skill.proficiency === 'Advanced' ? '90%' : '70%'
                                  }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* TAB 5: Resources */}
            {activeTab === 'resources' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* Textbooks */}
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Primary Textbooks</h4>
                  <div className="space-y-3">
                    {course.resources.textbooks.map((book, idx) => (
                      <div key={idx} className="glass rounded-lg p-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-semibold text-white">{book.title}</p>
                            <p className="text-zinc-400 text-sm">{book.authors}</p>
                            <p className="text-zinc-500 text-xs mt-1">{book.publisher}</p>
                            <p className="text-secondary-400 text-sm mt-2">{book.focus}</p>
                          </div>
                          <div className="flex gap-1">
                            {[...Array(book.rating)].map((_, i) => (
                              <span key={i} className="text-primary-400">★</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Reference Books */}
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Reference Books</h4>
                  <div className="space-y-3">
                    {course.resources.referenceBooks.map((book, idx) => (
                      <div key={idx} className="glass rounded-lg p-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-semibold text-white">{book.title}</p>
                            <p className="text-zinc-400 text-sm">{book.authors}</p>
                            <p className="text-zinc-500 text-xs mt-1">{book.publisher}</p>
                            <p className="text-accent-400 text-sm mt-2">{book.focus}</p>
                          </div>
                          <div className="flex gap-1">
                            {[...Array(book.rating)].map((_, i) => (
                              <span key={i} className="text-secondary-400">★</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Supplementary Readings */}
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Supplementary Readings</h4>
                  <div className="space-y-3">
                    {course.resources.supplementaryReadings.map((book, idx) => (
                      <div key={idx} className="glass rounded-lg p-4">
                        <p className="font-semibold text-white">{book.title}</p>
                        <p className="text-zinc-400 text-sm">{book.authors}</p>
                        <p className="text-zinc-500 text-xs mt-1">{book.publisher}</p>
                        {book.ISBN && <p className="text-zinc-500 text-xs">ISBN: {book.ISBN}</p>}
                        <p className="text-primary-400 text-sm mt-2">{book.focus}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Web Resources */}
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Web Resources</h4>
                  <div className="space-y-3">
                    {course.resources.webResources.map((resource, idx) => (
                      <a
                        key={idx}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass rounded-lg p-4 block hover:bg-zinc-700/50 transition-colors group"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-semibold text-white group-hover:text-primary-400 transition-colors">
                              {resource.title}
                            </p>
                            <p className="text-zinc-400 text-sm mt-1">{resource.description}</p>
                          </div>
                          <ExternalLink size={16} className="text-primary-400 flex-shrink-0" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* MOOCs */}
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Online Courses (MOOCs)</h4>
                  <div className="space-y-3">
                    {course.resources.moocs.map((mooc, idx) => (
                      <a
                        key={idx}
                        href={mooc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass rounded-lg p-4 block hover:bg-zinc-700/50 transition-colors group"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-semibold text-white group-hover:text-secondary-400 transition-colors">
                              {mooc.title}
                            </p>
                            <p className="text-accent-400 text-sm mt-1">{mooc.provider}</p>
                            <p className="text-zinc-400 text-sm mt-1">{mooc.description}</p>
                          </div>
                          <LinkIcon size={16} className="text-secondary-400 flex-shrink-0" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
    </div>
  );
};

export default Coursework;
