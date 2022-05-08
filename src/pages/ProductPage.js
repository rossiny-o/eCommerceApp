import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import {
  CardElephantGrave,
  CardHomelessBird,
  CardPastelBird,
} from "../components/Cards";
import { PastelBird } from "../pages/PastelBird";
import { HomelessBird } from "../pages/HomelessBird";
import { ElephantGrave } from "../pages/ElephantGrave";


export function ProductPage() {
  return (
    <div>
      <Container >
        
        <Row className="mx-3 my-5">
          <Col xl={4} sm={6} gap={8}>
            <Link className="text-decoration-none" to="/product/pastelbird">
              <CardPastelBird />
            </Link>
          </Col>
          <Col xl={4} sm={6}>
            <Link className="text-decoration-none" to="/product/homelessbird">
            <CardHomelessBird />
            </Link>
          </Col>
          <Col xl={4} sm={6}>
            <Link className="text-decoration-none" to="/product/elephantgrave">
            <CardElephantGrave />
            </Link>
          </Col>
        </Row>
      </Container>

      <Routes>

        <Route path="/product" element={<ProductPage/>} />
        <Route path="/product/pastelbird" element={<PastelBird/>}/>
        <Route path="/product/homelessbird" element={<HomelessBird/>}/>
        <Route path="/product/elephantgrave" element={<ElephantGrave/>}/>
         
      </Routes>
    </div>
  );
}

