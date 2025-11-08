import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Eye } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = useMemo(() => [
    { id: 'hero', label: 'Home', type: 'scroll' },
    { id: 'about', label: 'About', type: 'scroll' },
    { id: 'skills', label: 'Skills', type: 'scroll' },
    { id: 'education', label: 'Education', type: 'scroll' },
    { id: 'projects', label: 'Projects', type: 'scroll' },
    { id: 'experience', label: 'Experience', type: 'scroll' },
    { id: 'certifications', label: 'Certifications', type: 'scroll' },
    { id: 'blog', label: 'Blog', type: 'scroll' },
    { id: 'contact', label: 'Contact', type: 'scroll' }
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Only update active section on home page
      if (location.pathname === '/') {
        const scrollBottom = window.scrollY + window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // Special case: If the user has scrolled to the very bottom of the page
        if (scrollBottom >= documentHeight - 100) {
          setActiveSection('footer');
          return;
        }

        // General case: For all other scroll positions
        const scrollPosition = window.scrollY + 100;
        for (let i = navItems.length - 1; i >= 0; i--) {
          const item = navItems[i];
          if (item.type === 'scroll') {
            const section = document.getElementById(item.id);
            if (section && section.offsetTop <= scrollPosition) {
              setActiveSection(item.id);
              break;
            }
          }
        }
      } else if (location.pathname.startsWith('/blog')) {
        setActiveSection('blog');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems, location.pathname]);

  const handleNavClick = (item) => {
    setIsOpen(false);
    if (item.type === 'link') {
      navigate(`/${item.id}`);
    } else {
      // If not on home page, navigate to home first, then scroll
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollTo: item.id } });
      } else {
        // Scroll to section if already on home page
        const element = document.getElementById(item.id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const resumeUrl = '/OmDeshpande_Resume.pdf'; 

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-zinc-900/90 backdrop-blur-xl border-b border-zinc-700/50 shadow-2xl shadow-zinc-900/20'
          : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.button
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-display font-bold bg-gradient-to-r from-primary-400 via-secondary-500 to-accent-500 bg-clip-text text-transparent hover:from-primary-300 hover:via-secondary-400 hover:to-accent-400 transition-all duration-300"
              whileHover={{
                textShadow: "0 0 20px rgba(139, 92, 246, 0.5)"
              }}
            >
              OD.dev
            </motion.button>
          </motion.div>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className="relative px-3 py-2 text-sm font-medium text-zinc-300 hover:text-primary-400 transition-all duration-300 group"
                whileHover={{
                  scale: 1.05,
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-400 via-secondary-500 to-accent-500 rounded-full"
                    layoutId="underline"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-400/10 to-secondary-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                  initial={false}
                />
              </motion.button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <motion.a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm flex items-center gap-2 bg-zinc-800/50 hover:bg-zinc-700/50 border border-zinc-600 hover:border-primary-400/50 backdrop-blur-sm"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(139, 92, 246, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <Eye size={16} />
              </motion.div>
              View
            </motion.a>
            <motion.a
              href={resumeUrl}
              download="OmDeshpande_Resume.pdf"
              className="btn-primary text-sm flex items-center gap-2 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-400 hover:to-secondary-400 shadow-lg hover:shadow-primary-500/25"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(139, 92, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Download size={16} />
              </motion.div>
              Download
            </motion.a>
          </div>

          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-200 hover:text-primary-400 focus:outline-none"
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={isOpen ? 'x' : 'menu'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-zinc-900/95 border-t border-zinc-700">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium transition-colors duration-300 ${
                    activeSection === item.id
                      ? 'text-primary-400 bg-zinc-800'
                      : 'text-zinc-300 hover:text-primary-400 hover:bg-zinc-800'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {item.label}
                </motion.button>
              ))}
              <div className="pt-4 mt-4 border-t border-zinc-700 flex items-center gap-3 px-3">
                 <motion.a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary w-full flex items-center justify-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                    <Eye size={16} /> View
                 </motion.a>
                 <motion.a href={resumeUrl} download="OmDeshpande_Resume.pdf" className="btn-primary w-full flex items-center justify-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                    <Download size={16} /> Download
                 </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
