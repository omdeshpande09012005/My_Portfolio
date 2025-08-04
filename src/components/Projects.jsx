import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { Github, ExternalLink, X, BookOpen, CheckCircle } from 'lucide-react';

// --- IMPORT YOUR PROJECT IMAGES HERE ---
import bookstoreImg1 from '../assets/projects/bookstore-1.png'; 
import cloudResearchImg from '../assets/projects/cloud-research.png';
// import multiGameImg from '../assets/projects/multi-game.png';

// --- This is where you'll manage all your project data ---
const projectsData = [
  {
    id: 1,
    title: "Online Bookstore Web App",
    category: "web",
    image: bookstoreImg1, 
    images: [bookstoreImg1], 
    description: "A full-stack e-commerce platform for an online bookstore, featuring user authentication, order management, and an admin dashboard.",
    details: "This project was a deep dive into full-stack development, creating a complete online shopping experience. It includes a secure login system, a dynamic product catalog, a shopping cart, and a comprehensive admin panel for managing inventory and orders.",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    learnings: [
      "Mastered server-side logic and database interactions with PHP and MySQL.",
      "Implemented secure user authentication and session management.",
      "Learned the importance of database design for scalability and performance."
    ],
    links: {
      github: "github.com/omdeshpande09012005/Online_BookStore", 
      demo: null 
    }
  },
  {
    id: 2,
    title: "Multi-Game Platform",
    category: "desktop",
    image: null, // Replace null with multiGameImg
    images: [],
    description: "A console-based multi-game application developed in C++ to showcase core Object-Oriented Programming principles.",
    details: "This project was a practical application of OOP concepts learned in my coursework. It features a menu-driven system allowing users to choose from classic games like Snake, Tic-Tac-Toe, and more. The focus was on creating a modular, extensible architecture using classes, inheritance, and polymorphism.",
    technologies: ["C++", "OOP"],
    learnings: [
      "Solidified understanding of core OOP principles in a practical application.",
      "Learned how to manage program flow and state for multiple game modules.",
      "Gained experience in creating engaging console-based user interfaces."
    ],
    links: {
      github: null, 
      demo: null 
    }
  },
  {
    id: 3,
    title: "Cloud Security Research Paper",
    category: "research",
    image: cloudResearchImg, 
    images: [cloudResearchImg],
    description: "Published research exploring the security and privacy challenges inherent in multi-tenant cloud computing environments.",
    details: "This research paper, published in the International Journal of Research Publication and Reviews (IJRPR), investigates critical vulnerabilities in multi-tenant cloud systems. It covers topics like tenant data isolation, side-channel attacks, and modern security best practices to mitigate these risks.",
    technologies: ["Cloud Computing", "Cybersecurity", "Academic Research"],
    learnings: [
      "Gained a deep understanding of cloud architecture and its security vulnerabilities.",
      "Developed strong academic research and technical writing skills.",
      "Explored modern security practices used by major cloud providers."
    ],
    links: {
      paper: "ijrpr.com/uploads/V6ISSUE5/IJRPR45654.pdf" 
    }
  }
];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Apps' },
  { id: 'desktop', label: 'Desktop Apps' },
  { id: 'research', label: 'Research' }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

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
          {categories.map((category) => (
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
        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="glass rounded-2xl overflow-hidden group cursor-pointer hover-glow"
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image || 'https://placehold.co/600x400/18181b/f59e0b?text=Project+Image'}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-zinc-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-amber-500/10 border border-amber-400/30 rounded-full text-zinc-200 text-xs">
                        {tech}
                      </span>
                    ))}
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="glass rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-zinc-700 shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image || 'https://placehold.co/1200x600/18181b/f59e0b?text=Project+Showcase'}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-zinc-800/50 rounded-full text-white hover:bg-zinc-700 transition-colors duration-300"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-display font-bold text-white mb-2">{selectedProject.title}</h2>
                <div className="flex flex-wrap gap-3 mb-6">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-amber-500/10 border border-amber-400/30 rounded-full text-zinc-200 text-sm">{tech}</span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold text-white mb-4">Project Overview</h3>
                <p className="text-zinc-300 mb-8">{selectedProject.details}</p>

                <h3 className="text-xl font-semibold text-white mb-4">Key Learnings</h3>
                <div className="space-y-3 mb-8">
                  {selectedProject.learnings.map((learning, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-amber-400 mt-1 flex-shrink-0" />
                      <p className="text-zinc-300">{learning}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 border-t border-zinc-700 pt-6">
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
                    <a href={`https://${selectedProject.links.paper}`} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2">
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
