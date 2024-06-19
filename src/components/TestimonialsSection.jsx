import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const TestimonialsSection = () => (
  <div className="testimonials-section bg-light py-5">
    <Container>
      <h2>What Our Clients Say</h2>
      <Row>
        <Col md={4}>
          <blockquote className="blockquote">
            <p className="mb-0">"Aptent mus quisque porttitor convallis tempora eaque blandit phasellus perspiciatis lectus."</p>
            <footer className="blockquote-footer">Michelle P.</footer>
          </blockquote>
        </Col>
        <Col md={4}>
          <blockquote className="blockquote">
            <p className="mb-0">"Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur."</p>
            <footer className="blockquote-footer">John J.</footer>
          </blockquote>
        </Col>
        <Col md={4}>
          <blockquote className="blockquote">
            <p className="mb-0">"Aptent mus quisque porttitor convallis tempora eaque blandit phasellus perspiciatis lectus."</p>
            <footer className="blockquote-footer">Smith T.</footer>
          </blockquote>
        </Col>
      </Row>
    </Container>
  </div>
);

export default TestimonialsSection;
