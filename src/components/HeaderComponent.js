import React from "react";
import '../Main.scss';
import { Nav, NavDropdown, Navbar, Container, Button} from "react-bootstrap";
import {Search} from 'react-bootstrap-icons';

export function Header (){
    return(
        <Navbar className="secondColor py-3" variant="dark">
        <Container>
        <Navbar.Brand href="#home" className="me-auto"><img alt='' src="/ByDesgnLogo.png" width='30' height='30' className='d-inline-block align-top'/>ByDesgn</Navbar.Brand>
        <label className="d-flex me-auto">
            <Nav>
                <NavDropdown title="Categories">
                    <NavDropdown.Item> Item 1</NavDropdown.Item>
                    <NavDropdown.Item> Item 2</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <input type='search' placeholder="Search Item Here..."></input>
            <Button><Search /></Button>
        </label>
        <Nav className="me-auto d-flex justify-content-end">
          <Nav.Link href="#login">Login</Nav.Link>
          <Nav.Link href="#cart">Cart</Nav.Link>
        </Nav>

        </Container>
      </Navbar>
    );
}