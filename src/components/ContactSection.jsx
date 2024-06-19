import React from 'react';
import { Container, Button } from 'react-bootstrap';

const ContactSection = () => (
  <div className="contact-section py-5">
    <Container>
      <h2>Get In Touch</h2>
      <p>123 Fifth Avenue, Lane no 17, New York NY 688101.<br />123-456-7890/91<br />info@example.com</p>
      <Button variant="primary" href="#contact">Contact Us</Button>
    </Container>
  </div>
);

export default ContactSection;
