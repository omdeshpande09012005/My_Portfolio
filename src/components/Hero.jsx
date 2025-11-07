import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Code, Award, Users } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { personalInfo } from '../config/personalInfo';
import { heroStats } from '../data/stats';
import profilePhoto from '../assets/profile-photo.jpg';

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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden py-20">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-primary-400/20 via-secondary-500/15 to-accent-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-secondary-400/15 via-accent-500/10 to-primary-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-primary-500/10 to-secondary-500/5 rounded-full blur-2xl"
          animate={{
            scale: [0.8, 1.3, 0.8],
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-400/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
              y: [null, Math.random() * -100]
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Profile Photo */}
          <div className="order-2 lg:order-1">
            <AnimatedSection animation="fadeInLeft" delay={0.2}>
              <motion.div
                className="relative"
                initial={{ scale: 0, rotate: -10 }}
                animate={{
                  scale: 1,
                  rotate: 0,
                  y: [0, -15, 0],
                }}
                transition={{
                  scale: { duration: 0.8, ease: "backOut", delay: 0.3 },
                  rotate: { duration: 0.8, ease: "easeOut", delay: 0.3 },
                  y: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.0
                  }
                }}
                whileHover={{
                  scale: 1.03,
                  rotate: 1,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Enhanced photo container with glow effect */}
                <motion.div
                  className="w-full max-w-md mx-auto lg:max-w-none lg:w-full aspect-square rounded-3xl bg-gradient-to-br from-primary-400 via-secondary-500 to-accent-500 p-2 shadow-2xl relative"
                  animate={{
                    boxShadow: [
                      "0 0 30px rgba(139, 92, 246, 0.3)",
                      "0 0 50px rgba(139, 92, 246, 0.6)",
                      "0 0 30px rgba(139, 92, 246, 0.3)"
                    ]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {/* Animated border rings */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl border-2 border-transparent border-t-primary-400/50"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute inset-1 rounded-3xl border-2 border-transparent border-b-secondary-400/30"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 12, ease: "linear", repeat: Infinity, delay: 1 }}
                  />

                  <div className="w-full h-full rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-800 p-1 relative overflow-hidden">
                    <motion.img
                      src={profilePhoto}
                      alt="Om Deshpande"
                      className="w-full h-full rounded-3xl object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Subtle overlay effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5, duration: 0.8 }}
                    />
                  </div>
                </motion.div>

                {/* Enhanced Floating Stats */}
                <motion.div
                  className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 bg-zinc-800/95 backdrop-blur-md rounded-2xl p-4 border border-zinc-700/50 shadow-2xl"
                  initial={{ opacity: 0, scale: 0, rotate: -10 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    y: [0, -5, 0]
                  }}
                  transition={{
                    delay: 1.2,
                    duration: 0.6,
                    y: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2
                    }
                  }}
                >
                  <div className="flex gap-4">
                    {heroStats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        className="text-center group cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4 + index * 0.1 }}
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <motion.div
                          animate={{
                            color: ["#8b5cf6", "#a855f7", "#8b5cf6"]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.5
                          }}
                        >
                          <stat.icon className="mx-auto mb-1 group-hover:scale-110 transition-transform duration-300" size={20} />
                        </motion.div>
                        <div className="text-lg font-bold text-white group-hover:text-primary-400 transition-colors duration-300">{stat.value}</div>
                        <div className="text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </AnimatedSection>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <AnimatedSection animation="fadeInRight" delay={0.4}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="mb-6">
                  <motion.span
                    className="inline-block px-4 py-2 bg-gradient-to-r from-primary-500/10 via-secondary-500/10 to-accent-500/10 border border-primary-400/30 rounded-full text-primary-400 text-sm font-medium mb-4 backdrop-blur-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)"
                    }}
                  >
                    👋 Welcome to my portfolio
                  </motion.span>
                  <motion.h1
                    className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  >
                    Hi, I'm{" "}
                    <motion.span
                      className="gradient-text bg-gradient-to-r from-primary-400 via-secondary-500 to-accent-500 bg-clip-text text-transparent"
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      style={{ backgroundSize: "200% 200%" }}
                    >
                      {personalInfo.name.split(' ')[0]}
                    </motion.span>
                  </motion.h1>
                </div>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight" delay={0.6}>
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="text-lg sm:text-xl lg:text-2xl font-mono text-zinc-400 mb-4 h-8 flex items-center justify-center lg:justify-start">
                  <span className="mr-2 text-zinc-300">I'm a</span>
                  <motion.span
                    className="gradient-text text-left bg-gradient-to-r from-primary-400 via-secondary-500 to-accent-500 bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    style={{ backgroundSize: "200% 200%" }}
                  >
                    {currentText}
                    <motion.span
                      className="animate-[blink_1s_steps(1,start)_infinite] text-primary-400"
                      animate={{
                        opacity: [1, 0, 1],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity
                      }}
                    >
                      |
                    </motion.span>
                  </motion.span>
                </div>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight" delay={0.8}>
              <motion.p
                className="text-lg lg:text-xl text-zinc-300 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                I'm Om — I design and ship reliable systems. From Next.js products (TextShare) to C++ game AI (GameAI-Pathfinder), I care about engineering clarity, performance, and developer ergonomics. Currently polishing my research and infrastructure chops; open to internships in AI/ML, systems, or game tech.
              </motion.p>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight" delay={1.0}>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <motion.button
                  className="btn-primary flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-400 hover:to-secondary-400 text-white font-semibold rounded-xl shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
                  onClick={() => scrollToSection('projects')}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(139, 92, 246, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View My Work</span>
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </motion.button>

                <motion.a
                  href="/OmDeshpande_Resume.pdf"
                  download="OmDeshpande_Resume.pdf"
                  className="btn-secondary flex items-center justify-center gap-2 px-8 py-3 bg-zinc-800/50 hover:bg-zinc-700/50 border border-zinc-600 hover:border-primary-400/50 text-zinc-300 hover:text-primary-400 font-semibold rounded-xl backdrop-blur-sm transition-all duration-300"
                  whileHover={{
                    scale: 1.05,
                    borderColor: "rgba(139, 92, 246, 0.5)",
                    boxShadow: "0 0 20px rgba(139, 92, 246, 0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Download size={20} />
                  </motion.div>
                  <span>Download CV</span>
                </motion.a>
              </motion.div>
            </AnimatedSection>

            {/* Enhanced Quick Links */}
            <AnimatedSection animation="fadeInRight" delay={1.2}>
              <motion.div
                className="flex justify-center lg:justify-start gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                {[
                  { text: 'About Me', section: 'about' },
                  { text: 'Skills', section: 'skills' },
                  { text: 'Experience', section: 'experience' }
                ].map((link, index) => (
                  <motion.button
                    key={link.section}
                    onClick={() => scrollToSection(link.section)}
                    className="relative text-zinc-400 hover:text-primary-400 transition-all duration-300 text-sm font-medium group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">{link.text}</span>
                    <motion.div
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-secondary-500 group-hover:w-full transition-all duration-300"
                      whileHover={{ width: "100%" }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary-400/10 to-secondary-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                      whileHover={{ opacity: 1 }}
                    />
                  </motion.button>
                ))}
              </motion.div>
            </AnimatedSection>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <AnimatedSection animation="fadeInUp" delay={1.6}>
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{
              y: [0, 12, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.button
              onClick={() => scrollToSection('about')}
              className="group relative p-4 glass rounded-full hover:bg-zinc-700/50 transition-all duration-300 overflow-hidden"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 25px rgba(139, 92, 246, 0.3)"
              }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Animated background glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-secondary-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0, 0.3, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <motion.div
                animate={{
                  y: [0, 3, 0],
                  color: ["#a1a1aa", "#8b5cf6", "#a1a1aa"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ChevronDown size={24} className="relative z-10 text-zinc-400 group-hover:text-primary-400 transition-colors duration-300" />
              </motion.div>

              {/* Pulsing ring effect */}
              <motion.div
                className="absolute inset-0 border-2 border-primary-400/30 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </motion.button>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hero;
