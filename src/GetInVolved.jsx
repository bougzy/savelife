import React from 'react';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const GetInvolved = () => {
  return (
    <Container>
      <Row className="my-5 text-center">
        <Col>
          <h1>Get Involved</h1>
          <p>There are many ways you can contribute to Save a Life and help us make a difference. Discover how you can get involved and make an impact today.</p>
        </Col>
      </Row>

      <Row className="my-5">
        <Col md={4}>
          <h2>Donate</h2>
          <p>Your financial support is crucial for our programs and operations. You can make a one-time donation or set up a recurring gift to help us continue our work.</p>
          <Button variant="primary" size="lg"><Link className="text-white" to="/donate">Start Fundraising</Link></Button>
        </Col>
        <Col md={4}>
          <h2>Volunteer</h2>
          <p>Join our team of dedicated volunteers and help us in various capacities. Whether on the ground or remotely, your time and skills are valuable to us.</p>
          <Button variant="primary" size="lg"><Link className="text-white" to="/donate">Start Fundraising</Link></Button>
        </Col>
        <Col md={4}>
          <h2>Fundraise</h2>
          <p>Start a fundraiser in your community or online to support our cause. Your efforts can help us reach more people and make a greater impact.</p>
          <Button variant="primary" size="lg"><Link className="text-white" to="/donate">Start Fundraising</Link></Button>
        </Col>
      </Row>
    </Container>
  );
};

export default GetInvolved;
