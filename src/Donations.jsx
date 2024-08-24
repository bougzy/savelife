// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Card, Button } from 'react-bootstrap';

// const Donations = () => {
//   const [donations, setDonations] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:8000/api/donations')
//       .then(response => setDonations(response.data))
//       .catch(error => console.error(error));
//   }, []);

//   return (
//     <div>
//       <h2>Donations</h2>
//       {donations.map(donation => (
//         <Card key={donation._id} style={{ width: '18rem', marginBottom: '1rem' }}>
//           <Card.Img variant="top" src={donation.media} />
//           <Card.Body>
//             <Card.Title>{donation.title}</Card.Title>
//             <Card.Text>{donation.description}</Card.Text>
//             <Button variant="primary">Learn More</Button>
//           </Card.Body>
//         </Card>
//       ))}
//     </div>
//   );
// };

// export default Donations;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button, Modal, Form, Container, Row, Col } from 'react-bootstrap';

const Donations = () => {
  const [donations, setDonations] = useState([]);
  const [selectedDonation, setSelectedDonation] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [media, setMedia] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/donations')
      .then(response => setDonations(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/donations/${id}`);
      setDonations(donations.filter(donation => donation._id !== id));
    } catch (error) {
      console.error('Error deleting donation:', error);
    }
  };

  const handleEdit = async (id) => {
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      if (media) formData.append('media', media);

      await axios.put(`http://localhost:8000/api/donations/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      // Refresh donations list after update
      const response = await axios.get('http://localhost:8000/api/donations');
      setDonations(response.data);

      setShowEditModal(false);
    } catch (error) {
      console.error('Error updating donation:', error);
    }
  };

  const openEditModal = (donation) => {
    setSelectedDonation(donation);
    setTitle(donation.title);
    setDescription(donation.description);
    setMedia(null);
    setShowEditModal(true);
  };

  const closeEditModal = () => setShowEditModal(false);

  return (
    <Container>
      <Row className="my-5">
        <Col>
          <h2>Donations</h2>
          {donations.map(donation => (
            <Card key={donation._id} style={{ width: '18rem', marginBottom: '1rem' }}>
              <Card.Img variant="top" src={`data:${donation.mediaType};base64,${donation.media}`} />
              <Card.Body>
                <Card.Title>{donation.title}</Card.Title>
                <Card.Text>{donation.description}</Card.Text>
                <Button variant="primary" onClick={() => openEditModal(donation)}>Edit</Button>
                <Button variant="danger" onClick={() => handleDelete(donation._id)} className="ms-2">Delete</Button>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={closeEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Donation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => {
            e.preventDefault();
            handleEdit(selectedDonation._id);
          }}>
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
                rows={3}
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
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Donations;
