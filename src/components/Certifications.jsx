import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { Award, ExternalLink, BrainCircuit, Users, BarChart3, Star } from 'lucide-react';

const Certifications = () => {
  // --- Data updated to remove the redundant 'color' property ---
  const certifications = [
    {
      id: 1,
      name: "5-Star Problem Solving, C++ & SQL",
      issuer: "HackerRank",
      category: "programming",
      description: "Achieved 5-star gold badges in C++, SQL, and Problem Solving, demonstrating advanced algorithmic thinking and database proficiency.",
      skills: ["C++", "SQL", "Algorithms", "Problem Solving"],
      credentialUrl: "https://www.hackerrank.com/profile/om_deshpande1"
    },
    {
      id: 2,
      name: "Data Visualization & Dashboards with Excel and Cognos",
      issuer: "IBM (via edX)",
      category: "data",
      description: "Mastered data visualization techniques and built interactive dashboards using industry-standard tools like Excel and IBM Cognos.",
      skills: ["Data Visualization", "Dashboards", "Excel", "IBM Cognos"],
      credentialUrl: "https://courses.edx.org/certificates/281522c1f8e8433cb83d0bea050e5228"
    },
    {
      id: 3,
      name: "Python Certification",
      issuer: "EdYoda Digital University",
      category: "programming",
      description: "Completed a comprehensive Python course covering core concepts, data structures, and object-oriented programming.",
      skills: ["Python", "OOP", "Data Structures", "Algorithms"],
      credentialUrl: "https://edyodalms.s3.amazonaws.com/files/certificates/Om_Deshpande_achivement_Python_Certification_18253_Qr_code_.png"
    },
    {
      id: 4,
      name: "Critical Thinking & Problem Solving",
      issuer: "RIT (via edX)",
      category: "communication",
      description: "Developed structured approaches to analyze complex problems and formulate effective, logical solutions.",
      skills: ["Critical Thinking", "Analytical Skills", "Decision Making"],
      credentialUrl: "https://courses.edx.org/certificates/4de80a0439c44fd58a6f77dc08833878"
    },
    {
      id: 5,
      name: "Teamwork & Collaboration",
      issuer: "RIT (via edX)",
      category: "communication",
      description: "Learned and applied best practices for effective teamwork, communication, and conflict resolution in a professional setting.",
      skills: ["Collaboration", "Teamwork", "Communication"],
      credentialUrl: "https://courses.edx.org/certificates/2a8ddabddf4241778900235356d2a63d"
    },
    {
      id: 6,
      name: "Excel for Beginners",
      issuer: "Great Learning",
      category: "tools",
      description: "Gained foundational skills in Microsoft Excel for data organization, calculation, and basic analysis.",
      skills: ["Microsoft Excel", "Data Entry", "Formulas"],
      credentialUrl: "https://www.mygreatlearning.com/certificate/VNVUOHFW"
    },
    {
      id: 7,
      name: "Job Focussed Professional Communication",
      issuer: "EdYoda Digital University",
      category: "communication",
      description: "Enhanced professional communication skills for workplace success, focusing on clarity, conciseness, and impact.",
      skills: ["Communication", "Presentation", "Professionalism"],
      credentialUrl: "https://edyodalms.s3.amazonaws.com/files/certificates/Om_Deshpande_achivement_Job_Focussed_Professional_Communication_Certification_15271_Qr_code_.png"
    },
    {
      id: 8,
      name: "Introduction to Personal Financial Planning",
      issuer: "Indiana University (via edX)",
      category: "professional",
      description: "Acquired foundational knowledge in financial planning, budgeting, and investment principles.",
      skills: ["Financial Literacy", "Budgeting", "Planning"],
      credentialUrl: "https://courses.edx.org/certificates/87a43deec69b4c6dba494a50bc9b87a7"
    },
    {
      id: 9,
      name: "Measuring Sustainable Development",
      issuer: "SDG Academy (via edX)",
      category: "professional",
      description: "Learned to measure and track progress towards the Sustainable Development Goals (SDGs) using key indicators.",
      skills: ["Sustainable Development", "Data Analysis", "Metrics"],
      credentialUrl: "https://courses.edx.org/certificates/2ae2e6142b15478e84762257572da0da"
    },
    {
      id: 10,
      name: "Introduction to Social-Emotional Learning (SEL)",
      issuer: "UCR (via edX)",
      category: "communication",
      description: "Gained an understanding of the core competencies of social-emotional learning and its impact on personal and professional growth.",
      skills: ["Emotional Intelligence", "Self-awareness", "Empathy"],
      credentialUrl: "https://courses.edx.org/certificates/acdbe12f379b4f8e9271908f62808a29"
    }
  ];

  const categories = [
    { id: 'all', label: 'All', count: certifications.length },
    { id: 'programming', label: 'Programming', count: certifications.filter(c => c.category === 'programming').length },
    { id: 'data', label: 'Data & Analytics', count: certifications.filter(c => c.category === 'data').length },
    { id: 'tools', label: 'Tools', count: certifications.filter(c => c.category === 'tools').length },
    { id: 'communication', label: 'Soft Skills', count: certifications.filter(c => c.category === 'communication').length },
    { id: 'professional', label: 'Professional Dev.', count: certifications.filter(c => c.category === 'professional').length },
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const filteredCertifications = selectedCategory === 'all'
    ? certifications
    : certifications.filter(cert => cert.category === selectedCategory);

  const categoryIcons = {
    programming: Star,
    data: BarChart3,
    tools: Award,
    communication: Users,
    professional: BrainCircuit
  };

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
          {categories.map((category) => (
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
              const Icon = categoryIcons[cert.category] || Award;
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
                      <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="text-white" />
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
                            className="px-3 py-1 bg-amber-500/10 border border-amber-400/30 rounded-full text-zinc-200 text-xs"
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
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
