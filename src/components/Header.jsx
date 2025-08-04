import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Header component with smooth scrolling and scroll-based styling
const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    // Effect to detect if the page has been scrolled
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        // Cleanup function to remove the event listener
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = ['about', 'experience', 'projects', 'skills', 'certifications'];

    // Function to smoothly scroll to a section
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.header 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/70 backdrop-blur-lg shadow-2xl' : 'bg-transparent'}`}
        >
            <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold tracking-wider cursor-pointer" onClick={() => scrollToSection('hero')}>
                    OM <span className="text-blue-400">D.</span>
                </div>
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map(link => (
                        <motion.button 
                            key={link} 
                            onClick={() => scrollToSection(link)}
                            whileHover={{ scale: 1.1, color: '#60a5fa' }}
                            whileTap={{ scale: 0.95 }}
                            className="capitalize text-gray-300"
                        >
                            {link}
                        </motion.button>
                    ))}
                </nav>
                 <motion.button 
                    onClick={() => scrollToSection('footer')} 
                    whileHover={{ scale: 1.05, boxShadow: '0px 0px 8px rgb(59, 130, 246)' }}
                    whileTap={{ scale: 0.95 }}
                    className="hidden md:block bg-blue-600 text-white font-semibold py-2 px-5 rounded-lg transition-all duration-300 shadow-lg"
                >
                    Contact
                </motion.button>
            </div>
        </motion.header>
    );
}

export default Header;
