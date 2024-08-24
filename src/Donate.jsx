import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const DonationSection = () => {
  return (
    <Container className="mt-4 text-center">
      <div className="fw-bold bg-dark p-3 text-white shadow">
        <h3>Donate Now</h3>
        <section className="donation-section bg-light text-dark">
          <Container>
            <Row>
              <Col lg={12} className="text-center animate__animated animate__bounce">
                <h3 className="section-heading">Make a Donation</h3>
                <p className="lead">Your generosity can save lives. Choose an amount to donate.</p>
              </Col>
            </Row>
            <Row>
              <Col lg={6} className="offset-lg-3 animate__animated animate__fadeInUp">
                <Form className="p-3">
                  <Form.Group controlId="donationAmount">
                    <Form.Label>Select Donation Amount</Form.Label>
                    <Form.Control as="select">
                      <option>$100</option>
                      <option>$500</option>
                      <option>$1000</option>
                      <option>$5000</option>
                      <option>Other</option>
                    </Form.Control>
                  </Form.Group>
                  <Button
                    type="button"
                    className="btn btn-dark p-3"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                  >
                    Make Donation
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </section>
        <p>Choose your preferred payment method:</p>
      </div>
      <Container className="mt-5 shadow p-3">
        <Card>
          <Card.Header>Payment Methods</Card.Header>
          <Card.Body>
            <Row>
              <Col md={4} className="mb-3">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Payment Method"
                  className="img-fluid"
                />
              </Col>
              <Col md={4} className="mb-3">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Payment Method"
                  className="img-fluid"
                />
              </Col>
              <Col md={4} className="mb-3">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Payment Method"
                  className="img-fluid"
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
};

export default DonationSection;
