import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => (
  <>
  <Header/>
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <ServicesSection />
    <TestimonialsSection />
    <ContactSection />
    <Footer/>
  </>
);

export default App;
