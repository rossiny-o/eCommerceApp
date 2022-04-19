import React from "react";
import '../Main.scss';
import { Nav, NavDropdown, Navbar, Container, Button} from "react-bootstrap";
import {Search, Cart, Envelope} from 'react-bootstrap-icons';

export function Header (){
    return(
        <Navbar className=" py-3" variant="dark"  bg="primary">
        <Container>
        <Navbar.Brand href="#home" className="me-auto"><img alt='' src="ByDesgnLogo.png" width='50' height='50' className='d-inline-block align-top my-0'/></Navbar.Brand>
        <label className="d-flex me-auto">
            <Nav>
                <NavDropdown title="Categories" as="h5">
                    <NavDropdown.Item> Item 1</NavDropdown.Item>
                    <NavDropdown.Item> Item 2</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <input type='search' className="searchbar px-3 py-2" placeholder="Search Item..." /> 
            <Button variant="warning"><Search /></Button>
        </label>
        <Nav className="me-auto d-flex justify-content-end">
          <Nav.Link as='h5' href="#login"><Envelope  /> Sign In</Nav.Link>
          <Nav.Link as='h5' href="#cart"><Cart /> Cart</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      
    );
}