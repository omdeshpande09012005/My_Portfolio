import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { Mail, Send, Linkedin, CheckCircle, AlertCircle } from 'lucide-react';
import { personalInfo } from '../config/personalInfo';
import { usePageSEO, seoConfig } from '../seo';

// WhatsApp Icon SVG as a React Component
const WhatsAppIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const Contact = () => {
  usePageSEO(
    seoConfig.pages.contact.title,
    seoConfig.pages.contact.description
  );
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`,
    },
    {
      icon: WhatsAppIcon,
      label: "WhatsApp",
      href: `https://wa.me/${personalInfo.phone.replace(/\s/g, '')}`,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: personalInfo.social.linkedin,
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formRequestBody = new FormData(e.target);
    // --- ACCESS KEY ADDED ---
    formRequestBody.append("access_key", "c9488f4c-80f2-4fb3-90c5-09f66d134d99"); 
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formRequestBody,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        console.error("Form submission error:", result);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Network or other error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 6000);
    }
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fadeInUp">
          <div className="glass rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text" name="name" value={formData.name} onChange={handleInputChange} required
                    placeholder="Full Name *"
                    className="w-full px-4 py-3 bg-zinc-800/50 border-2 border-zinc-700 focus:border-primary-500 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-0 transition-colors duration-300"
                  />
                  <input
                    type="email" name="email" value={formData.email} onChange={handleInputChange} required
                    placeholder="Email Address *"
                    className="w-full px-4 py-3 bg-zinc-800/50 border-2 border-zinc-700 focus:border-primary-500 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-0 transition-colors duration-300"
                  />
                </div>
                <input
                  type="text" name="subject" value={formData.subject} onChange={handleInputChange}
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-zinc-800/50 border-2 border-zinc-700 focus:border-primary-500 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-0 transition-colors duration-300"
                />
                <textarea
                  name="message" value={formData.message} onChange={handleInputChange} required
                  rows={5}
                  placeholder="Your Message *"
                  className="w-full px-4 py-3 bg-zinc-800/50 border-2 border-zinc-700 focus:border-primary-500 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-0 transition-colors duration-300 resize-none"
                />

                <motion.button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 font-bold rounded-lg transition-all duration-500 relative overflow-hidden text-lg"
                  animate={isFormValid && !isSubmitting ? "valid" : "invalid"}
                  variants={{
                    valid: { backgroundColor: "rgba(245, 158, 11, 0)", color: "#ffffff" },
                    invalid: { backgroundColor: "rgba(63, 63, 70, 1)", color: "rgba(161, 161, 170, 1)" }
                  }}
                  whileHover="hover"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-600"
                    variants={{
                      valid: { width: "100%" },
                      invalid: { width: "0%" }
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/50 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </span>
                </motion.button>
                
                <AnimatePresence>
                  {submitStatus && (
                    <motion.div
                      className={`p-4 rounded-lg flex items-center gap-3 text-sm ${
                        submitStatus === 'success'
                          ? 'bg-green-500/10 border border-green-400/20 text-green-300'
                          : 'bg-red-500/10 border border-red-400/20 text-red-300'
                      }`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      {submitStatus === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                      {submitStatus === 'success' ? "Message sent! I'll get back to you soon." : "Failed to send. Please try again."}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>

              <div className="mt-12 pt-8 border-t border-zinc-700/50 text-center">
                <h3 className="text-xl font-display font-semibold text-white mb-6">
                  Or Connect Directly
                </h3>
                <div className="flex justify-center gap-4 sm:gap-6">
                  {contactMethods.map((method) => (
                    <motion.a
                      key={method.label}
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 glass rounded-full group hover-glow"
                      whileHover={{ scale: 1.1, y: -5 }}
                    >
                      <method.icon className="text-zinc-300 group-hover:text-primary-400 transition-colors duration-300" size={24} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;
