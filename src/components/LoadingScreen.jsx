import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Trigger content animation
    const contentTimer = setTimeout(() => setShowContent(true), 500);

    // Progress bar simulation
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          // Wait a moment after reaching 100% before fading out
          setTimeout(() => {
            setIsVisible(false);
          }, 800);
          return 100;
        }
        // More realistic loading simulation
        const increment = prev < 70 ? Math.random() * 10 : Math.random() * 3;
        return Math.min(prev + increment, 100);
      });
    }, 150);

    return () => {
      clearTimeout(contentTimer);
      clearInterval(progressTimer);
    };
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-900" // --- THEME: Updated background ---
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo Animation */}
            <div className="relative mb-8 w-32 h-32 mx-auto">
              {/* Outer ring */}
              <motion.div
                className="absolute inset-0 border-4 border-transparent border-t-amber-400 rounded-full" // --- THEME: Updated color ---
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, ease: "linear", repeat: Infinity }}
              />
              {/* Middle ring */}
              <motion.div
                className="absolute inset-2 border-4 border-transparent border-t-orange-500 rounded-full" // --- THEME: Updated color ---
                animate={{ rotate: -360 }}
                transition={{ duration: 2, ease: "linear", repeat: Infinity, delay: 0.3 }}
              />
              {/* Center logo */}
              <motion.div
                className="absolute inset-6 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center" // --- THEME: Updated color ---
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              >
                <span className="text-2xl font-bold text-white">OD</span>
              </motion.div>
            </div>

            {/* Logo Text */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h1 className="text-5xl font-display font-bold gradient-text mb-2">
                OD.dev
              </h1>
              <p className="text-zinc-400 text-lg">
                Software Engineer & Developer
              </p>
            </motion.div>

            {/* Progress Bar */}
            <div className="w-80 h-2 bg-zinc-800 rounded-full mx-auto mb-4 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full" // --- THEME: Updated color ---
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Loading Text */}
            <motion.p
              className="text-zinc-300 text-sm mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              Initializing digital experience... {/* --- TEXT: Updated to be more professional --- */}
            </motion.p>
            
            <motion.p
              className="text-amber-400 font-mono text-sm" // --- THEME: Updated color ---
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {Math.round(progress)}%
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
