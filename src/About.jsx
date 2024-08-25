import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const AboutUs = () => {
  return (
    <Container>
      {/* Hero Section */}
      <Row className="my-5 text-center">
        <Col>
          <h1>Welcome to Save a Life</h1>
          <p>Our mission is to make the world a better place through dedicated humanitarian efforts.</p>
        </Col>
      </Row>

      {/* Mission Section */}
      <Row className="my-5">
        <Col>
          <h2>Our Mission</h2>
          <p>Our mission is simple yet profound: to save lives. Whether through emergency relief, medical aid, or support for ongoing crises, our focus remains on delivering hope and help where it is needed most. We believe in the power of kindness and the impact of collective action.</p>
        </Col>
      </Row>

      {/* What We Do Section */}
      <Row className="my-5">
        <Col>
          <h2>What We Do</h2>
          <Row>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Emergency Relief</Card.Title>
                  <Card.Text>We respond to natural disasters and humanitarian crises with rapid, effective assistance. From providing clean water, food, and shelter to offering medical aid and psychological support, our team is always ready to help.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Medical Assistance</Card.Title>
                  <Card.Text>Access to healthcare is a fundamental human right. We operate mobile clinics and provide essential medical supplies and services to underserved communities.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Educational Programs</Card.Title>
                  <Card.Text>Education empowers individuals and fosters long-term change. We invest in building schools, supplying educational materials, and offering scholarships to children in need.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Sustainable Development</Card.Title>
                  <Card.Text>We focus on sustainable projects that help communities grow and thrive independently. From building wells to creating agricultural programs, our goal is to support self-reliance.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Call to Action Section */}
      <Row className="my-5 text-center">
        <Col>
          <h2>Join Us</h2>
          <p>We believe that everyone has the power to contribute to the greater good. Whether through a donation, volunteering, or simply spreading the word, your involvement can make a tremendous difference. Together, we can save lives, one step at a time.</p>
          <Button variant="primary" size="lg"><Link to="/donate" className="text-white">Get Involved</Link></Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
