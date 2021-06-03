import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>Bank System</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                        <LinkContainer to='/transaction'>
                                <Nav.Link><i className="fas fa-history"></i> Transactions </Nav.Link>
                            </LinkContainer>
                        <LinkContainer to='/create'>
                                <Nav.Link><i className="fas fa-plus-circle"></i> Create </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/customer'>
                                <Nav.Link><i className="fas fa-user"></i> View All </Nav.Link>
                            </LinkContainer>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
