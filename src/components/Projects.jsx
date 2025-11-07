import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import { Github, ExternalLink, X, CheckCircle, BookOpen } from 'lucide-react';
import { projectsData, projectCategories } from '../data/projects';
import { usePageSEO, seoConfig, projectLD, injectJSONLD, removeJSONLD } from '../seo';

const Projects = () => {
  usePageSEO(
    seoConfig.pages.projects.title,
    seoConfig.pages.projects.description
  );
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  // Inject schema for featured projects when component mounts
  useEffect(() => {
    // Get top 3 projects for structured data
    const featuredProjects = projectsData.slice(0, 3);
    
    // Inject each project schema
    featuredProjects.forEach((project, index) => {
      const projectData = projectLD({
        name: project.title,
        description: project.description,
        url: project.links?.demo || seoConfig.siteUrl,
        repoUrl: project.links?.github ? `https://${project.links.github}` : undefined,
        technologies: project.technologies,
        status: 'Completed',
      });

      injectJSONLD(projectData, `project-schema-${index + 1}`);
    });

    // Cleanup
    return () => {
      featuredProjects.forEach((_, index) => {
        removeJSONLD(`project-schema-${index + 1}`);
      });
    };
  }, []);

  const filteredProjects = filter === 'all' ? projectsData : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            A selection of my work, showcasing my skills from concept to completion.
          </p>
        </AnimatedSection>

        {/* Filter Buttons */}
        <AnimatedSection className="flex flex-wrap justify-center gap-4 mb-12" animation="fadeInUp" delay={0.2}>
          {projectCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                filter === category.id
                  ? 'btn-primary'
                  : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </AnimatedSection>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative cursor-pointer overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl"
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Border gradient */}
                <div className="absolute inset-0 border border-zinc-700 group-hover:border-primary-400 rounded-xl transition-colors duration-300" />
                
                {/* Content */}
                <div className="relative p-8 backdrop-blur-sm">
                  {/* Category/Type indicator */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-primary-400 group-hover:bg-secondary-400 transition-colors duration-300" />
                    <span className="text-xs font-semibold text-zinc-400 group-hover:text-zinc-300 transition-colors uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-primary-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-zinc-400 text-sm mb-6 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={tech}
                        className="inline-block px-3 py-1 text-xs font-medium text-zinc-400 bg-zinc-800/50 border border-zinc-700 rounded-full group-hover:border-primary-400 group-hover:text-primary-300 group-hover:bg-primary-500/10 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA Arrow */}
                  <div className="flex items-center gap-2 text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs font-semibold uppercase tracking-wider">View Details</span>
                    <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* "More to Come" Section */}
        <AnimatedSection className="text-center mt-16">
           <p className="text-lg text-zinc-400">
             I am continuously developing new projects and refining my skills. More to come soon.
           </p>
        </AnimatedSection>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-gradient-to-br from-zinc-900 via-zinc-900/95 to-zinc-950 backdrop-blur-2xl rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-zinc-700/50 shadow-2xl"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with gradient */}
              <div className="sticky top-0 border-b border-zinc-700/50 px-8 py-6 flex justify-between items-start gap-4 bg-gradient-to-r from-zinc-900/80 to-zinc-950/80 backdrop-blur-xl">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-primary-400" />
                    <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                      {selectedProject.category}
                    </span>
                  </div>
                  <h2 className="text-3xl font-display font-bold bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
                    {selectedProject.title}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-all duration-300"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Content */}
              <div className="p-8 space-y-8">
                {/* Technologies */}
                <div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-block px-4 py-2 text-xs font-medium text-primary-300 bg-primary-500/10 border border-primary-400/30 rounded-full hover:border-primary-400 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Overview */}
                <div>
                  <h3 className="text-lg font-display font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-1 h-6 bg-gradient-to-b from-primary-400 to-secondary-400 rounded-full" />
                    Project Overview
                  </h3>
                  <p className="text-zinc-300 leading-relaxed">{selectedProject.details}</p>
                </div>

                {/* Key Learnings */}
                <div>
                  <h3 className="text-lg font-display font-bold text-white mb-4 flex items-center gap-3">
                    <div className="w-1 h-6 bg-gradient-to-b from-primary-400 to-secondary-400 rounded-full" />
                    Key Learnings
                  </h3>
                  <div className="space-y-3">
                    {selectedProject.learnings.map((learning, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle size={16} className="text-primary-400 mt-1 flex-shrink-0" />
                        <p className="text-zinc-300 text-sm leading-relaxed">{learning}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 border-t border-zinc-700/50 pt-6">
                  {selectedProject.links.github && (
                    <a href={`https://${selectedProject.links.github}`} target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2">
                      <Github size={18} /> View Code
                    </a>
                  )}
                  {selectedProject.links.demo && (
                    <a href={`https://${selectedProject.links.demo}`} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2">
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  )}
                  {selectedProject.links.paper && (
                    <a 
                      href={selectedProject.links.paper.startsWith('http') || selectedProject.links.paper.startsWith('/') 
                        ? selectedProject.links.paper 
                        : `https://${selectedProject.links.paper}`}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-primary flex items-center gap-2"
                    >
                      <BookOpen size={18} /> Read Paper
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
