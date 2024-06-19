import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import bedroomimg from '../assets/bedroom.jpg';
// import AboutSection from '../'
const AboutSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="hero-section text-center bg-light py-5" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className={`text-center ${inView ? 'slide-in' : ''}`} ref={ref}>
            <img src={bedroomimg} alt="Bedroom" className="img-fluid" />
          </Col>
          <Col md={6}>
            <h1 className="text-center" style={{ fontFamily: 'cursive' }}>
              Wake Up In A Home You Love
            </h1>
            <p>
              A descriptive paragraph that tells clients how good you are and proves that you are
              the best choice that they’ve made.
            </p>
            {/* <Button variant="primary" href="#more">Know More</Button> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutSection;
