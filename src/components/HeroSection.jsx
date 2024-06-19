import React from 'react';
import { Container, Button } from 'react-bootstrap';
import backgroundImage from '../assets/interior-design-blog-background-sm.jpg';
import logoImg from '../assets/logo.png'

const HeroSection = () => (
    <div 
    className="hero-section text-center bg-light py-5" 
    style={{ 
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh'
    }}
  >
    
    <Container>
      
      <h1>Woodspec Interior Designs</h1>
      <p>A descriptive paragraph that tells clients how good you are and proves that you are the best choice.</p>
      <br /><br /><br />
      <h4>Explore Now</h4>

      <a href="#about"><i class="fa-solid fa-chevron-down fs-4"></i></a>
 
    </Container>
    
  </div>
  
);

export default HeroSection;
