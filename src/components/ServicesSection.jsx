import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ServicesSection = () => (
  <div className="services-section py-5">
    <Container>
      <h2>Why Choose Us</h2>
      <Row>
        <Col md={4}>
          <h3>Building Planning</h3>
          <p>This is a short description elaborating the service you have mentioned above.</p>
        </Col>
        <Col md={4}>
          <h3>Renovating Space</h3>
          <p>This is a short description elaborating the service you have mentioned above.</p>
        </Col>
        <Col md={4}>
          <h3>Interior Space</h3>
          <p>This is a short description elaborating the service you have mentioned above.</p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default ServicesSection;
