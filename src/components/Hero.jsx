import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { personalInfo } from '../config/personalInfo';
import profilePhoto from '../assets/profile-photo.jpg'; 

import SocialLinksMenu from './SocialLinksMenu';

const textsToType = [
  'Software Engineer', 
  'Web Developer',
  'Full Stack Developer',
  'Cloud Engineer',
  'PC Builder and Tester'
];

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const typeSpeed = 120;
    const deleteSpeed = 75;
    const pauseTime = 2000;

    const handleTyping = () => {
      const currentWord = textsToType[currentIndex];
      
      if (isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
      } else {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === currentWord) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % textsToType.length);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting]);

  const socialLinks = [
    { icon: Github, href: personalInfo.social.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: Twitter, href: personalInfo.social.twitter, label: 'Twitter' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/5 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <motion.div
              className="mb-6"
              initial={{ scale: 0, y: 0 }}
              animate={{
                scale: 1,
                y: [0, -10, 0],
              }}
              transition={{
                scale: { duration: 0.8, ease: "easeOut", delay: 0.5 },
                y: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.3 
                }
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 p-1.5 shadow-lg">
                <img 
                  src={profilePhoto} 
                  alt="Om Deshpande" 
                  className="w-full h-full rounded-full object-cover" 
                />
              </div>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={0.4}>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              Hi, I'm <span className="gradient-text">{personalInfo.name.split(' ')[0]}</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={0.6}>
            <div className="text-2xl md:text-3xl font-mono text-zinc-400 mb-8 h-12 flex items-center justify-center">
              <span className="mr-2 text-zinc-300">I'm a</span>
              <span className="gradient-text min-w-[300px] text-left">
                {currentText}
                <span className="animate-[blink_1s_steps(1,start)_infinite] text-amber-400">|</span>
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={0.8}>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Proactive Computer Science student with hands-on experience in full-stack web development and cloud security. Proven ability to engineer complete applications and a passion for system optimization, demonstrated by building and configuring over 20 custom PCs to achieve a 15% average performance increase. Seeking to apply a strong foundation in software engineering and a unique hardware perspective to a challenging development role.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={1.0}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.button
                className="btn-primary flex items-center justify-center gap-2"
                onClick={() => scrollToSection('projects')}
              >
                <span>View My Work</span>
                <ChevronDown size={20} />
              </motion.button>
              
              {/* The "Get In Touch" button has been removed from here */}

            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeInUp" delay={1.6}>
            <motion.div
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <button
                onClick={() => scrollToSection('about')}
                className="p-2 glass rounded-full hover:bg-zinc-700/50 transition-all duration-300"
              >
                <ChevronDown size={24} className="text-zinc-400" />
              </button>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
      
      <SocialLinksMenu links={socialLinks} />
    </section>
  );
};

export default Hero;
