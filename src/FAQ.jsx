import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';

const FAQ = () => {
  return (
    <Container>
      <Row className="my-5 text-center">
        <Col>
          <h1>Frequently Asked Questions</h1>
        </Col>
      </Row>
      <Row className="my-5">
        <Col>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>What is Save a Life?</Accordion.Header>
              <Accordion.Body>
                Save a Life is a humanitarian organization dedicated to providing aid and support to communities in need worldwide. We focus on emergency relief, medical assistance, educational programs, and sustainable development to improve lives and foster positive change.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>How can I contribute to Save a Life?</Accordion.Header>
              <Accordion.Body>
                There are several ways you can contribute to Save a Life:
                <ul>
                  <li><strong>Donate:</strong> Financial donations are crucial for funding our programs and operations. You can make a one-time donation or set up a recurring gift.</li>
                  <li><strong>Volunteer:</strong> We welcome volunteers from all backgrounds to join our efforts on the ground or remotely.</li>
                  <li><strong>Fundraise:</strong> Start a fundraiser in your community or online to support our cause.</li>
                  <li><strong>Spread the Word:</strong> Share our mission with your friends, family, and social networks to raise awareness.</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Where does my donation go?</Accordion.Header>
              <Accordion.Body>
                Your donation goes directly to funding our programs and operations. We strive to maintain transparency and accountability, ensuring that the majority of our funds are allocated to on-the-ground services and support for those in need.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Can I volunteer with Save a Life?</Accordion.Header>
              <Accordion.Body>
                Yes, we welcome volunteers! Whether you have skills in medical care, education, logistics, or simply a passion for helping others, there is a place for you at Save a Life. Please visit our Volunteer page for more information on how to get involved.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Is my donation tax-deductible?</Accordion.Header>
              <Accordion.Body>
                Yes, donations made to Save a Life are tax-deductible to the extent allowed by law. After making a donation, you will receive a confirmation email with the details needed for tax purposes.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>How do you ensure the safety of your volunteers and staff?</Accordion.Header>
              <Accordion.Body>
                The safety of our volunteers and staff is our top priority. We conduct thorough risk assessments and provide extensive training and support to ensure that our team members are well-prepared and equipped for their roles. We also work closely with local authorities and partner organizations to monitor security situations and adapt our operations accordingly.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>Can I make a donation in someone else’s name?</Accordion.Header>
              <Accordion.Body>
                Absolutely! Making a donation in someone else’s name is a wonderful way to honor them while supporting our cause. Simply select the "Donate in Honor" option on our donation page and provide the necessary details.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>How can I stay updated on Save a Life's activities?</Accordion.Header>
              <Accordion.Body>
                You can stay updated on our latest activities and impact by subscribing to our newsletter, following us on social media, or regularly visiting our website's News and Updates section.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8">
              <Accordion.Header>What is your policy on data privacy?</Accordion.Header>
              <Accordion.Body>
                We take data privacy seriously and are committed to protecting your personal information. Please refer to our Privacy Policy page for detailed information on how we collect, use, and protect your data.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="9">
              <Accordion.Header>Who do I contact if I have more questions?</Accordion.Header>
              <Accordion.Body>
                For any additional questions, please feel free to contact us at <a href="mailto:info@savealife.org">info@savealife.org</a> or visit our Contact Us page for more options.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default FAQ;
