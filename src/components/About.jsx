import React from 'react';
import SectionTitle from './SectionTitle';
import { personalInfo } from '../data/portfolioData.jsx';
import { motion } from 'framer-motion';


const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle id="about-title">About Me</SectionTitle>
        
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-text-secondary leading-relaxed">
            Hello! I'm Neelabh, a Math + Business Honors student at UT Austin passionate about building Backend Systems, Infrastructure, and ML Tools. With experience at companies like Capital One and Phenom, I enjoy tackling complex problems and creating efficient, scalable solutions. I'm always excited to learn new technologies and contribute to meaningful projects.
          </p>
          {/* Optional: Add a profile image here */}
          {/* <img src={profilePlaceholder} alt="Aditi Arya" className="w-40 h-40 rounded-full mx-auto my-6 border-4 border-accent-1" /> */}
        </motion.div>

      </div>
    </section>
  );
};

export default About;