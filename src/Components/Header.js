import React from 'react'
import { Navbar, Container, Nav, Form } from 'react-bootstrap';
import PropTypes from 'prop-types'

function Header(props) {
    return (
        <>
            <Navbar bg={`${props.mode}`} expand="lg" variant={`${props.mode}`} sticky="top">
                <Container>

                    <Navbar.Brand href="/">{props.title}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about_us">About Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                    <Form>
                        <Form.Check 
                            type="switch"
                            id="custom-switch"
                            onClick = {props.ThemeMode}
                        />
                    </Form>

                </Container>
            </Navbar>
        </>
    )
}

Header.propTypes = {    
    title : PropTypes.string.isRequired                
}

Header.defaultProps = {
    title : "SITE TITLE HERE",
}

export default Header
