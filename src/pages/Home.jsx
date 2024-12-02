import React from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Contextual from '../components/Contextual';
import AllCollapseExample from '../components/AllCollapseExample';
import useDocumentTitle from "../components/useDocumentTitle";
import Games_one from '../components/Games_one';
import Memory_Game from '../components/Memory_Game';
import Calc from "./Calc";

const Home = () => {
  useDocumentTitle("Home")
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
    <Row>
      <Col sm={3}>
        <Nav variant="pills" className="flex-column">
          <Nav.Item>
            <Nav.Link eventKey="first">First</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="calc">Calculator</Nav.Link>
          </Nav.Item>   
          <Nav.Item>  
          <Nav.Link eventKey="game">Game</Nav.Link>
          </Nav.Item>

          <Nav.Item>  
          <Nav.Link eventKey="color">Color</Nav.Link>
          </Nav.Item>

        </Nav> 
</Col>
      <Col sm={9}>
        <Tab.Content>
          <Tab.Pane eventKey="first">
<AllCollapseExample />
          </Tab.Pane>
          <Tab.Pane eventKey="calc">Calculator
            <Calc />
          </Tab.Pane>
          <Tab.Pane eventKey="game">
          <Games_one />
          
           <Memory_Game/>

          </Tab.Pane>
          <Tab.Pane eventKey="color">
<Contextual />

          </Tab.Pane>
        </Tab.Content>
      </Col>
    </Row>
  </Tab.Container>
  );
  };
  
  export default Home;