import React from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';

const Background = () => {
  const { x, y } = useMousePosition();

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient Mesh Backgrounds */}
      <motion.div
        className="gradient-mesh gradient-mesh-1"
        animate={{
          x: x * 0.02,
          y: y * 0.02,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      />
      <motion.div
        className="gradient-mesh gradient-mesh-2"
        animate={{
          x: x * -0.015,
          y: y * -0.015,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      />
      <motion.div
        className="gradient-mesh gradient-mesh-3"
        animate={{
          x: x * 0.01,
          y: y * 0.01,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      />
      <motion.div
        className="gradient-mesh gradient-mesh-4"
        animate={{
          x: x * -0.008,
          y: y * -0.008,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      />
      <motion.div
        className="gradient-mesh gradient-mesh-5"
        animate={{
          x: x * 0.012,
          y: y * 0.012,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      />

      {/* Floating Shapes */}
      <div className="floating-shape floating-shape-1" />
      <div className="floating-shape floating-shape-2" />
      <div className="floating-shape floating-shape-3" />
      <div className="floating-shape floating-shape-4" />

      {/* Interactive Particles */}
      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Animated Grid */}
      <div className="grid-pattern" />

      {/* Glow Effects */}
      <motion.div
        className="glow-effect glow-1"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="glow-effect glow-2"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Noise Overlay */}
      <div className="noise-overlay" />
    </div>
  );
};

export default Background;
