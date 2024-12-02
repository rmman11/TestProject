import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import myImage from '../img/poza1.png';

function MydModalWithGrid(props) {
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
        About this project In Web intrefaces
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="grid-example">
          <Container>
            <Row>
              <Col xs={6} md={4}>

              <img src={myImage} width="150" height="150" />


              </Col>
              <Col xs={6} md={8}>
              <p>
              React and Vue are two popular JavaScript frameworks used for building user interfaces. 
              Both React and Vue are open-source and provide developers with the ability to create dynamic, 
              interactive web applications. React, developed by Facebook, is widely used in the industry and has a 
              large community of developers supporting it. On the other hand, Vue is a newer framework created by 
              Evan You and is gaining popularity for its ease of use and flexibility.
        </p>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

function AboutModal() {
    const [modalShow, setModalShow] = useState(false);
  return (
    <>
   <Button variant="primary" onClick={() => setModalShow(true)}>
      More Details
      </Button>

      <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default AboutModal;