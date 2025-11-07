import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { Award, ExternalLink, BrainCircuit, Users, BarChart3, Star } from 'lucide-react';
import { certificationsData, certificationCategories, categoryIcons, issuerIconMap } from '../data/certifications';

const Certifications = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const filteredCertifications = selectedCategory === 'all'
    ? certificationsData
    : certificationsData.filter(cert => cert.category === selectedCategory);

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Certifications & <span className="gradient-text">Credentials</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            A collection of my professional certifications and skill-based credentials.
          </p>
        </AnimatedSection>

        <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-12" animation="fadeInUp" delay={0.2}>
          {certificationCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 text-sm ${
                selectedCategory === category.id
                  ? 'btn-primary'
                  : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
              <span className="text-xs bg-black/20 px-2 py-0.5 rounded-full">
                {category.count}
              </span>
            </motion.button>
          ))}
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredCertifications.map((cert, index) => {
              const categoryIcon = categoryIcons[cert.category] || Award;
              const issuerMeta = issuerIconMap[cert.issuer];
              const issuerIcon = issuerMeta?.icon || categoryIcon;
              const bgColor = issuerMeta?.bgColor || 'bg-gradient-to-br from-primary-500 to-secondary-600';
              const iconColor = issuerMeta ? 'text-inherit' : 'text-white';
              
              return (
                <motion.div
                  key={cert.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="glass rounded-2xl p-6 sm:p-8 relative overflow-hidden group hover-glow h-full flex flex-col"
                >
                  <div className="relative z-10 flex-grow flex flex-col">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 ${issuerMeta ? issuerMeta.bgColor : 'bg-gradient-to-br from-primary-500 to-secondary-600'} rounded-xl text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center w-16 h-16`}>
                        {issuerMeta?.logo ? (
                          <img src={issuerMeta.logo} alt={cert.issuer} className="w-12 h-12 object-contain" />
                        ) : (
                          React.createElement(issuerIcon, { className: issuerMeta ? issuerMeta.textColor : 'text-white', size: 32 })
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-1">
                          {cert.name}
                        </h3>
                        <p className="gradient-text font-semibold text-sm">{cert.issuer}</p>
                      </div>
                    </div>
                    <p className="text-zinc-300 mb-6 leading-relaxed text-sm flex-grow">
                      {cert.description}
                    </p>
                    <div className="mb-6">
                      <h4 className="text-zinc-200 font-semibold mb-3 text-sm">Skills Covered</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-primary-500/10 border border-primary-400/30 rounded-full text-zinc-200 text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    {cert.credentialUrl !== "N/A" && (
                      <motion.a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary inline-flex items-center gap-2 mt-auto self-start"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={16} />
                        View Credential
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
