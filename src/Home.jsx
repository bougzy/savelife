import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Carousel, Button } from 'react-bootstrap';
import 'animate.css/animate.min.css'; // Import animate.css for animations

const Home = () => {
  const [donations, setDonations] = useState([]);
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    about: false,
    donate: false,
    team: false,
    news: false,
  });

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/donations');
        setDonations(response.data);
      } catch (error) {
        console.error('Error fetching donations:', error);
      }
    };

    fetchDonations();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      const scrollPosition = window.scrollY + window.innerHeight;

      sections.forEach((section) => {
        if (scrollPosition > section.offsetTop + 100) {
          setVisibleSections((prev) => ({
            ...prev,
            [section.id]: true,
          }));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Hero Section with Carousel */}
      <Carousel
        id="hero"
        className={`section animate__animated ${
          visibleSections.hero ? 'animate__fadeInDown' : ''
        }`}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1200x400?text=Join+Our+Cause"
            alt="Join Our Cause"
          />
          <Carousel.Caption>
            <h3>Save a Life Today</h3>
            <p>Your donation can make a huge difference in someone's life.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1200x400?text=Become+a+Hero"
            alt="Become a Hero"
          />
          <Carousel.Caption>
            <h3>Become a Hero</h3>
            <p>Support our humanitarian services and change lives.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1200x400?text=Every+Little+Helps"
            alt="Every Little Helps"
          />
          <Carousel.Caption>
            <h3>Every Little Helps</h3>
            <p>Your generosity fuels our mission to save lives.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* About Us Section */}
      <Container className="my-5 section" id="about">
        <Row
          className={`animate__animated ${
            visibleSections.about ? 'animate__fadeInLeft' : ''
          }`}
        >
          <Col>
            <div className="p-5 bg-light rounded">
              <h1>About Save a Life</h1>
              <p>
                We are a humanitarian organization dedicated to saving lives and providing aid to those in need.
                Our mission is to bring hope and support to communities worldwide through generous donations and volunteer efforts.
              </p>
              <Button variant="primary">Learn More</Button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* How It Works Section */}
      <Container className="my-5 section" id="donate">
        <Row>
          <Col md={4} className="text-center">
            <div
              className={`animate__animated ${
                visibleSections.donate ? 'animate__zoomIn' : ''
              }`}
            >
              <img src="https://via.placeholder.com/100" alt="Step 1" />
              <h4>Make a Donation</h4>
              <p>Your contribution helps us provide essential aid to those in need.</p>
            </div>
          </Col>
          <Col md={4} className="text-center">
            <div className={`animate__animated ${
              visibleSections.donate ? 'animate__zoomIn' : ''
            }`}>
              <img src="https://via.placeholder.com/100" alt="Step 2" />
              <h4>We Deliver</h4>
              <p>Our team ensures that all donations are distributed efficiently and effectively.</p>
            </div>
          </Col>
          <Col md={4} className="text-center">
            <div className={`animate__animated ${
              visibleSections.donate ? 'animate__zoomIn' : ''
            }`}>
              <img src="https://via.placeholder.com/100" alt="Step 3" />
              <h4>See the Impact</h4>
              <p>Stay updated with the positive changes your support makes in communities.</p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Donations Section */}
      <Container className="section" id="donations">
        <h2 className="my-4">Current Donation Campaigns</h2>
        {donations.length > 0 ? (
          <Row>
            {donations.map((donation) => (
              <Col key={donation._id} md={4} className="mb-4">
                <Card className={`animate__animated ${
                  visibleSections.donate ? 'animate__fadeInUp' : ''
                }`}>
                  {donation.mediaType === 'image' ? (
                    <Card.Img
                      variant="top"
                      src={`data:image/jpeg;base64,${donation.media}`}
                      alt={donation.title}
                    />
                  ) : (
                    <video
                      controls
                      src={`data:video/mp4;base64,${donation.media}`}
                      className="img-fluid"
                    />
                  )}
                  <Card.Body>
                    <Card.Title>{donation.title}</Card.Title>
                    <Card.Text>{donation.description}</Card.Text>
                    <Button variant="success">Donate Now</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <p>No donation campaigns available at the moment.</p>
        )}
      </Container>

      {/* Meet Our Team Section */}
      <Container className="my-5 section" id="team">
        <h2>Meet Our Team</h2>
        <Row className={`animate__animated ${
          visibleSections.team ? 'animate__fadeInRight' : ''
        }`}>
          <Col md={3} className="text-center">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Team Member 1" />
              <Card.Body>
                <Card.Title>John Doe</Card.Title>
                <Card.Text>CEO & Founder</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="text-center">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Team Member 2" />
              <Card.Body>
                <Card.Title>Jane Smith</Card.Title>
                <Card.Text>Head of Operations</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="text-center">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Team Member 3" />
              <Card.Body>
                <Card.Title>Emily Johnson</Card.Title>
                <Card.Text>Chief Financial Officer</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="text-center">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Team Member 4" />
              <Card.Body>
                <Card.Title>Michael Brown</Card.Title>
                <Card.Text>Head of Communications</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Latest News Section */}
      <Container className="my-5 section" id="news">
        <h2>Latest News</h2>
        <Row className={`animate__animated ${
          visibleSections.news ? 'animate__fadeInUp' : ''
        }`}>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" alt="News 1" />
              <Card.Body>
                <Card.Title>New Partnership</Card.Title>
                <Card.Text>We are excited to announce our new partnership with ABC Organization.</Card.Text>
                <Button variant="link">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" alt="News 2" />
              <Card.Body>
                <Card.Title>Fundraising Event</Card.Title>
                <Card.Text>Join us for our annual fundraising event and make a difference.</Card.Text>
                <Button variant="link">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" alt="News 3" />
              <Card.Body>
                <Card.Title>Upcoming Events</Card.Title>
                <Card.Text>Join us for our upcoming events and make an impact.</Card.Text>
                <Button variant="link">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
