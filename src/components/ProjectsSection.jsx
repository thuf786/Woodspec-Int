import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const ProjectsSection = () => (
  <div className="projects-section bg-light py-5">
    <Container>
      <h2>Award Winning Projects</h2>
      <p>A descriptive paragraph that tells clients how good you are and proves that you are the best choice that they’ve made.</p>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>NY Interior Design Firm of The Year - 2020</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>US Best Interior Firm - 2020</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>International Design Awards Nominee - 2019</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Button variant="primary" href="#all-projects">View All Projects</Button>
    </Container>
  </div>
);

export default ProjectsSection;
