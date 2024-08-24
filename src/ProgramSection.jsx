import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css'; // Ensure you have animate.css for animations

const ProgramsSection = () => {
  return (
    <>
      <section className="program-section bg-light text-dark py-5">
        <Container>
          <Row className="mb-4">
            <Col lg={12} className="text-center animate__animated animate__bounce">
              <h1 className="section-heading">Our Programs</h1>
              <p className="lead">Discover the various initiatives we undertake to make a difference.</p>
            </Col>
          </Row>
          <Row className="program">
            <Col md={4} className="text-center animate__animated animate__fadeInUp">
              <Card>
                <Card.Body>
                  <Card.Title>Healthcare Outreach</Card.Title>
                  <Card.Text>
                    Our Healthcare Outreach program provides essential medical services to underserved communities. We organize mobile clinics, health camps, and medical missions to ensure that everyone has access to basic healthcare.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="text-center animate__animated animate__fadeInUp">
              <Card>
                <Card.Body>
                  <Card.Title>Shelter and Rehabilitation</Card.Title>
                  <Card.Text>
                    Our Shelter and Rehabilitation program offers a safe haven for homeless individuals and families. We provide temporary shelter, meals, and support services to help them get back on their feet and regain independence.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="text-center animate__animated animate__fadeInUp">
              <Card>
                <Card.Body>
                  <Card.Title>Education Initiatives</Card.Title>
                  <Card.Text>
                    Through our Education Initiatives, we aim to break the cycle of poverty by providing educational opportunities for children and adults. We offer school enrollments, scholarships, adult literacy programs, and vocational training.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="program">
            <Col md={4} className="text-center animate__animated animate__fadeInUp">
              <Card>
                <Card.Body>
                  <Card.Title>Nutrition and Food Security</Card.Title>
                  <Card.Text>
                    Our Nutrition and Food Security program addresses hunger and malnutrition by distributing food supplies to families in need. We also educate communities on sustainable farming practices to ensure long-term food security.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="text-center animate__animated animate__fadeInUp">
              <Card>
                <Card.Body>
                  <Card.Title>Women Empowerment</Card.Title>
                  <Card.Text>
                    We empower women by providing them with the resources, education, and support needed to achieve economic independence. Our programs include skill development, microfinance, and leadership training.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="text-center animate__animated animate__fadeInUp">
              <Card>
                <Card.Body>
                  <Card.Title>Disaster Relief</Card.Title>
                  <Card.Text>
                    In times of crisis, our Disaster Relief program provides immediate assistance to those affected by natural disasters. We supply emergency aid, including food, water, shelter, and medical care, to help communities recover and rebuild.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <Container className="mt-5">
        <Row>
          <Col md={12} className="d-flex justify-content-center align-items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl0F-913aVLuleg6KKtYAmMJaBfHndkXf-wf5izNWBAUYPY2Gh1ta0uNvT_aGTxEyP2PQ&usqp=CAU"
              className="img-fluid"
              alt="Image 1"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProgramsSection;
