import React from "react";
import "../scss/Main.scss";
import {Navbar, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Search, Cart, PersonCircle } from "react-bootstrap-icons";

export function Header() {
  return (
    <Navbar sticky="top" variant="dark" className="py-2" bg="primary" expand="lg">
      <Container>
        <Navbar.Brand
          href="/"
          className="mx-5 fs-4 fw-bolder text-nowrap text-warning"
        >
          ByDesgn
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar" className="mx-3 mt-1 d-sm-inline-flex align-items-center">
          <label className="d-flex mx-auto">
            <input
              type="search"
              className="searchbar px-3"
              placeholder="Search..."
            />
            <Button className="btn btn-lg px-4" variant="warning">
              <Search/>
            </Button>
          </label>
          
            <Link  to="/login">
              <PersonCircle className="ms-3 me-1 fs-2 text-warning" />
              <a href="/login" className="text-warning d-lg-none">Login</a>
            </Link>

            <Link to="/cart">
              <Cart className="ms-3 me-1 fs-2 text-warning" />
              <a href="/cart" className="text-warning d-lg-none">Cart</a>

            </Link>
         
        </Navbar.Collapse>
      </Container>

    </Navbar>
  );
}
