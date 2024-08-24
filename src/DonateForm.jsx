import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const DonateForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [media, setMedia] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('media', media);

    try {
      const response = await axios.post('http://localhost:8000/api/donations', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert(response.data.message);
    } catch (error) {
      console.error('Error submitting donation:', error);
    }
  };

  return (
    <Container>
      <Row className="my-5">
        <Col md={8} lg={6} className="mx-auto">
          <h2 className="text-center">Donate Form</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter title"
                required
              />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter description"
                required
              />
            </Form.Group>
            <Form.Group controlId="formMedia">
              <Form.Label>Media</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setMedia(e.target.files[0])}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Donate
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default DonateForm;
