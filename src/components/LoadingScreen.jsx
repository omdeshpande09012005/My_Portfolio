import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [currentPhase, setCurrentPhase] = useState(0);

  const phases = [
    "Initializing...",
    "Loading assets...",
    "Preparing experience...",
    "Almost ready..."
  ];

  useEffect(() => {
    let progressTimer;
    let phaseTimer;

    const startLoading = () => {
      // Phase changes
      phaseTimer = setInterval(() => {
        setCurrentPhase(prev => (prev + 1) % phases.length);
      }, 800);

      // Smooth progress animation
      progressTimer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressTimer);
            clearInterval(phaseTimer);

            // Elegant fade out with delay
            setTimeout(() => {
              setIsVisible(false);
            }, 1200);
            return 100;
          }

          // More natural progress curve
          const remaining = 100 - prev;
          const increment = prev < 30 ? Math.random() * 8 + 2 :
                           prev < 70 ? Math.random() * 5 + 1 :
                           prev < 90 ? Math.random() * 2 + 0.5 :
                           Math.random() * 1 + 0.2;

          return Math.min(prev + increment, 100);
        });
      }, 100);
    };

    // Start loading after a brief delay
    const startTimer = setTimeout(startLoading, 300);

    return () => {
      clearTimeout(startTimer);
      clearInterval(progressTimer);
      clearInterval(phaseTimer);
    };
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.1,
            filter: "blur(10px)"
          }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary-400/20 rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  scale: 0
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 0.6, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
              />
            ))}
          </div>

          <motion.div
            className="text-center relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Enhanced Logo Animation */}
            <div className="relative mb-12 w-40 h-40 mx-auto">
              {/* Outer rotating rings */}
              <motion.div
                className="absolute inset-0 border-2 border-transparent border-t-primary-400/60 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, ease: "linear", repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-1 border-2 border-transparent border-t-secondary-400/40 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 3, ease: "linear", repeat: Infinity, delay: 0.5 }}
              />
              <motion.div
                className="absolute inset-2 border-2 border-transparent border-t-accent-400/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, ease: "linear", repeat: Infinity, delay: 1 }}
              />

              {/* Center logo with enhanced animation */}
              <motion.div
                className="absolute inset-4 bg-gradient-to-br from-primary-400 via-secondary-500 to-accent-500 rounded-full flex items-center justify-center shadow-2xl"
                initial={{ scale: 0, rotate: -180 }}
                animate={{
                  scale: 1,
                  rotate: 0,
                  boxShadow: [
                    "0 0 20px rgba(139, 92, 246, 0.3)",
                    "0 0 40px rgba(139, 92, 246, 0.6)",
                    "0 0 20px rgba(139, 92, 246, 0.3)"
                  ]
                }}
                transition={{
                  scale: { duration: 0.8, delay: 0.6, ease: "backOut" },
                  rotate: { duration: 1, delay: 0.6, ease: "easeOut" },
                  boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <motion.span
                  className="text-3xl font-bold text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  OD
                </motion.span>
              </motion.div>
            </div>

            {/* Enhanced Logo Text */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.h1
                className="text-6xl font-display font-bold bg-gradient-to-r from-primary-400 via-secondary-500 to-accent-500 bg-clip-text text-transparent mb-2"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ backgroundSize: "200% 200%" }}
              >
                OD.dev
              </motion.h1>
              <motion.p
                className="text-zinc-400 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                Software Engineer & Developer
              </motion.p>
            </motion.div>

            {/* Enhanced Progress Bar */}
            <div className="w-80 h-3 bg-zinc-800/50 rounded-full mx-auto mb-6 overflow-hidden backdrop-blur-sm border border-zinc-700/50">
              <motion.div
                className="h-full bg-gradient-to-r from-primary-400 via-secondary-500 to-accent-500 rounded-full relative overflow-hidden"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* Animated shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
              </motion.div>
            </div>

            {/* Loading Text with Phase Changes */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <motion.p
                className="text-zinc-300 text-sm font-medium"
                key={currentPhase}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {phases[currentPhase]}
              </motion.p>

              <motion.p
                className="text-primary-400 font-mono text-lg font-semibold"
                animate={{
                  scale: [1, 1.05, 1],
                  color: ["#8b5cf6", "#a855f7", "#8b5cf6"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {Math.round(progress)}%
              </motion.p>
            </motion.div>

            {/* Subtle hint text */}
            <motion.p
              className="text-zinc-500 text-xs mt-6 max-w-xs mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              Crafting digital experiences with precision and passion
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
