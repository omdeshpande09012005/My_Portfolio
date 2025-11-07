import React, { useState, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Blogs from './components/Blogs';
import Coursework from './components/Coursework';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Post from './components/Post';
import BlogIndex from './components/BlogIndex';
import { SkipToContent } from './components/SkipToContent';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { usePageSEO, seoConfig, personLD, injectJSONLD, removeJSONLD } from './seo';
import { useWebVitals } from './hooks/useWebVitals';
import { useAnalytics } from './hooks/useAnalytics';

// Home page component
const HomePage = () => {
  const location = useLocation();
  
  usePageSEO(
    seoConfig.pages.home.title,
    seoConfig.pages.home.description
  );

  // Inject Person schema for homepage
  const personData = personLD({
    jobTitle: 'Student / Software Engineer',
  });

  React.useEffect(() => {
    injectJSONLD(personData, 'person-schema');
    
    return () => {
      removeJSONLD('person-schema');
    };
  }, [personData]);

  // Handle scrollTo state from Navbar navigation
  React.useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Coursework />
      <Projects />
      <Experience />
      <Certifications />
      <Blogs />
      <Contact />
    </>
  );
};

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  
  // Initialize Web Vitals tracking (dev only)
  useWebVitals();
  
  // Initialize analytics
  useAnalytics();
  
  const handleLoadingComplete = () => {
    console.log('App: Loading complete, setting loading to false');
    setLoading(false);
  };
  
  console.log('App: Current loading state:', loading);
  
  // Show loading only on initial mount
  React.useEffect(() => {
    if (loading && location.pathname === '/') {
      // Show loading for home page
    } else {
      // Don't show loading for other pages
      setLoading(false);
    }
  }, [location]);
  
  return (
    <>
      <SkipToContent />
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>
      {!loading && (
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.5 }}>
          <ScrollProgressBar />
          <Background />
          {!location.pathname.startsWith('/blog/') && <Navbar />}
          <main id="main-content">
            <Suspense fallback={
              <div className="min-h-screen flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full"
                />
              </div>
            }>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/blog" element={<BlogIndex />} />
                <Route path="/blog/:slug" element={<Post />} />
              </Routes>
            </Suspense>
          </main>
          {!location.pathname.startsWith('/blog/') && <Footer />}
        </motion.div>
      )}
    </>
  );
}
export default App;
