import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { CheckCircle } from 'lucide-react';

// --- All your logos are now being imported ---
import cppLogo from '../assets/logos/c++-logo.png';
import javascriptLogo from '../assets/logos/javascript-logo.png';
import phpLogo from '../assets/logos/php-logo.png';
import cLogo from '../assets/logos/c-logo.png';
import reactLogo from '../assets/logos/react.js-logo.png';
import nodeLogo from '../assets/logos/node.js-logo.png';
import tailwindLogo from '../assets/logos/tailwindcss-logo.png';
import htmlLogo from '../assets/logos/html5-logo.png';
import cssLogo from '../assets/logos/css3-logo.png';
import mysqlLogo from '../assets/logos/mysql-logo.png';
import postgresqlLogo from '../assets/logos/postgresql-logo.png';
import awsLogo from '../assets/logos/aws-logo.png';
import azureLogo from '../assets/logos/azure-logo.png';
import googleCloudLogo from '../assets/logos/googlecloud-logo.png';
import gitLogo from '../assets/logos/git-logo.png';
import githubLogo from '../assets/logos/github-logo.png';
import vscodeLogo from '../assets/logos/vscode-logo.png';
import cursoraiLogo from '../assets/logos/cursorai-logo.png';
// --- FIX: The import for the python logo is now active ---
import pythonLogo from '../assets/logos/python-logo.png';


const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: 'C++', proficiency: 'Advanced', iconText: 'C++', logo: cppLogo },
      // --- FIX: The pythonLogo is now assigned ---
      { name: 'Python', proficiency: 'Proficient', iconText: 'PY', logo: pythonLogo },
      { name: 'JavaScript', proficiency: 'Proficient', iconText: 'JS', logo: javascriptLogo },
      { name: 'PHP', proficiency: 'Intermediate', iconText: 'PHP', logo: phpLogo },
      { name: 'C', proficiency: 'Intermediate', iconText: 'C', logo: cLogo },
    ]
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: 'React.js', proficiency: 'Proficient', iconText: 'R', logo: reactLogo },
      { name: 'Node.js', proficiency: 'Intermediate', iconText: 'N', logo: nodeLogo },
      { name: 'TailwindCSS', proficiency: 'Advanced', iconText: 'T', logo: tailwindLogo },
      { name: 'HTML5', proficiency: 'Advanced', iconText: 'H5', logo: htmlLogo },
      { name: 'CSS3', proficiency: 'Advanced', iconText: 'C3', logo: cssLogo },
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: 'MySQL', proficiency: 'Advanced', iconText: 'SQL', logo: mysqlLogo },
      { name: 'PostgreSQL', proficiency: 'Intermediate', iconText: 'SQL', logo: postgresqlLogo },
    ]
  },
  {
    category: "Cloud & Tools",
    skills: [
      { name: 'AWS', proficiency: 'Intermediate', iconText: 'AWS', logo: awsLogo },
      { name: 'Azure', proficiency: 'Intermediate', iconText: 'AZ', logo: azureLogo },
      { name: 'Google Cloud', proficiency: 'Intermediate', iconText: 'GC', logo: googleCloudLogo },
      { name: 'Git', proficiency: 'Proficient', iconText: 'G', logo: gitLogo },
      { name: 'GitHub', proficiency: 'Proficient', iconText: 'GH', logo: githubLogo },
      { name: 'VS Code', proficiency: 'Advanced', iconText: 'VS', logo: vscodeLogo },
      { name: 'CursorAI', proficiency: 'Advanced', iconText: 'AI', logo: cursoraiLogo },
    ]
  }
];

const softSkills = [
  'Problem Solving',
  'System Optimization',
  'Technical Communication',
  'Team Collaboration',
  'Adaptability',
  'Attention to Detail',
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            My Technical <span className="gradient-text">Toolkit</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            A showcase of the languages, tools, and technologies I work with.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Technical Skills Grid */}
          <div className="lg:col-span-2">
            <AnimatedSection animation="fadeInLeft">
              <div className="space-y-10">
                {skillsData.map((category, catIndex) => (
                  <div key={catIndex}>
                    <h3 className="text-2xl font-display font-semibold text-white mb-6">{category.category}</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {category.skills.map((skill, skillIndex) => (
                        <SkillCard 
                          key={skill.name}
                          label={skill.name} 
                          proficiency={skill.proficiency} 
                          iconText={skill.iconText}
                          logo={skill.logo}
                          delay={skillIndex * 0.05}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Soft Skills List */}
          <div>
            <AnimatedSection animation="fadeInRight">
              <div className="glass rounded-2xl p-8 h-full">
                <h3 className="text-2xl font-display font-semibold text-white mb-8">
                  Professional Skills
                </h3>
                <div className="space-y-4">
                  {softSkills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      className="flex items-center gap-4"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle size={18} className="text-amber-400 flex-shrink-0" />
                      <span className="text-zinc-300">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

// This component now handles rendering either the logo or the fallback text
const SkillCard = ({ label, proficiency, iconText, logo, delay }) => (
  <motion.div
    className="glass rounded-xl p-4 flex flex-col items-center justify-center gap-3 group hover-glow h-36"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: delay }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05, y: -5 }}
  >
    <div className="h-12 flex items-center justify-center">
      {logo ? (
        <img src={logo} alt={`${label} logo`} className="max-h-12 max-w-full" />
      ) : (
        <span className="text-4xl text-zinc-300 group-hover:text-amber-400 transition-colors duration-300 font-bold">
          {iconText}
        </span>
      )}
    </div>
    <p className="text-white font-semibold text-sm text-center mt-auto">{label}</p>
    <p className="text-orange-400 text-xs font-mono">{proficiency}</p>
  </motion.div>
);

export default Skills;
