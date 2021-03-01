import React, { Fragment } from 'react';
import { Navbar, Nav, FormControl, Button, Form,  Container } from 'react-bootstrap';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRunning } from '@fortawesome/free-solid-svg-icons'



const MainNavbar = () => {
  return (
    <Fragment>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <h4 className="white">Premier League Team Selection </h4>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home"></Nav.Link>
              <Nav.Link href="#link"></Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </Fragment>











    // <Fragment>
    //     <Container fluid className="navbar">
    //         <Row>
    //             <Col lg={12} md={12}>
    //                 <div>
    //                     <h3><FontAwesomeIcon icon={faRunning} /> National Cricket Player of Bangladesh </h3>
    //                 </div>
    //             </Col>
    //         </Row>
    //     </Container>
    // </Fragment>
  );
};

export default MainNavbar;