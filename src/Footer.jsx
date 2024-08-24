import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start mt-4">
      <Container className="p-4">
        <Row>
          <Col lg={6} md={12} className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Save a Life</h5>
            <p>
              Your donations help us provide essential services to those in need. Thank you for your support.
            </p>
          </Col>
          <Col lg={6} md={12} className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact Us</h5>
            <ListGroup className="list-unstyled mb-0">
              {/* Uncomment and update these as needed */}
              {/* <ListGroup.Item as="a" href="#contact" className="text-dark">
                Email: info@savealife.org
              </ListGroup.Item>
              <ListGroup.Item as="a" href="#contact" className="text-dark">
                Phone: (123) 456-7890
              </ListGroup.Item> */}
            </ListGroup>
          </Col>
        </Row>
      </Container>
      <div className="text-center p-3 bg-dark text-white">
        &copy; 2024 Save a Life. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
