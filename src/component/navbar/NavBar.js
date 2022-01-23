import React from 'react';
import { Container, Navbar, Nav, Row, Col} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

import branding from '../../images/branding.png';

export default function NavBar() {
    return (
        <Navbar bg='light' variant='light' expand="lg" className="mb-4">
            <Container>
                <Row className='align-items-center justify-content-between w-100'>
                    <Col className='col-3'>
                        <Navbar.Brand href="/" className='d-inline-block'>
                            <figure className="objectFit">
                                <img src={branding} alt="EUROVIS" />
                            </figure>
                        </Navbar.Brand>
                    </Col>
                    <Col className='col-2'>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                        <Nav>
                            <LinkContainer to="/" className="me-3">
                                <Nav.Link href="/">Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/contact">
                                <Nav.Link href="/contact">Contact</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        </Navbar.Collapse>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    )
}
