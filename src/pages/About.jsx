import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';


import useDocumentTitle from "../components/useDocumentTitle"


import HorizontalResponsiveExample  from '../components/HorizontalResponsiveExample.jsx';
import AboutModal from '../components/AboutModal.jsx';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const About = () => {
  useDocumentTitle("About")
    return (
      <Container>
<Row>
<Col>

<Card>
            <Card.Body>
              <Card.Text>
              <AboutModal/>
              </Card.Text>
            </Card.Body>
          </Card>

</Col>
<Col xs={4}>  

    </Col>
</Row>
        
<Row>
        <Col>
        
        
<HorizontalResponsiveExample />
        

        
        </Col>
        <Col xs={5}>
        

        
        </Col>
        <Col>3 of 3</Col>
      </Row>

    </Container>
 
      );
  }
  
  export default About;