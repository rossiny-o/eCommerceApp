import React from "react";
import '../Main.scss';
import { Nav, Navbar, Container, Button} from "react-bootstrap";
import {Search, Cart, PersonCircle} from 'react-bootstrap-icons';

export function Header (){
    return(
        <Navbar sticky="top"  className=" py-3" bg="primary">
        <Container>
        <Navbar.Brand href="#home"className="mx-5 fs-4 fw-bolder text-nowrap text-warning">ByDesgn</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar"/>
        <Navbar.Collapse id="navbar">
            <label className="d-flex mx-auto">
                <input type='search' className="searchbar p-3" placeholder="Search Item..." /> 
                <Button className="btn btn-lg px-4" variant="warning"><Search className="" /></Button>
            </label>
            <Nav className=" mx-5 text-nowrap d-flex text-end">
                <Nav.Link className=" mx-3 display-5" href="#login">
                    <PersonCircle className="text-warning"  />
                </Nav.Link>
               
                <Nav.Link className="mx-3 display-5" href="#cart">
                <Cart className="text-warning" />
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      
    );
}