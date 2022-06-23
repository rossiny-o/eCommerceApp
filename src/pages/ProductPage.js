import React from "react";
import {Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import {
  CardElephantGrave,
  CardHomelessBird,
  CardPastelBird,
  CardElephantHorns,
  CardElephlower,
  CardFacialFeatures,
  CardThinkingThinker,
  CardHamster,
  CardGallopingHorse,
  CardVforVendetta,
  CardSheepinWolfClothing,
  CardFlowerFox
} from "../components/Cards";
import { Header } from "../components/Header";

export function ProductPage() {
  return (
    <div>
      <Header className="mb-5 pb-2" />
      <Container>

        <h1 className="display-5 text-primary m-3 mb-5 fw-bold">Products</h1>
        
        <Row className="m-3">
          <Col>
            <Link className="text-decoration-none" to="/product/pastelbird">
              <CardPastelBird />
            </Link>
          </Col>
          <Col>
            <Link className="text-decoration-none" to="/product/homelessbird">
            <CardHomelessBird />
            </Link>
          </Col>
          <Col>
            <Link className="text-decoration-none" to="/product/elephantgrave">
            <CardElephantGrave/>
            </Link>
          </Col>
          <Col>
            <Link className="text-decoration-none" to="/product/elephanthorns">
            <CardElephantHorns/>
            </Link>
          </Col>
        </Row>

        <Row className="m-4">
          <Col>
            <Link className="text-decoration-none" to='/product/elephlower'>
              <CardElephlower />
            </Link>
          </Col>

          <Col>
            <Link className="text-decoration-none" to='/product/facialfeatures'>
              <CardFacialFeatures />
            </Link>
          </Col>

          <Col>
            <Link className="text-decoration-none" to='/product/thinkingthinker'>
              <CardThinkingThinker />
            </Link>
          </Col>

          <Col>
            <Link className="text-decoration-none" to='/product/hamster'>
              <CardHamster />
            </Link>
          </Col>
          
        </Row>

        <Row className="m-4">
          <Col>
            <Link className="text-decoration-none" to='/product/gallopinghorse'>
              <CardGallopingHorse />
            </Link>
          </Col>

          <Col>
            <Link className="text-decoration-none" to='/product/vforvendetta'>
              <CardVforVendetta />
            </Link>
          </Col>

          <Col>
            <Link className="text-decoration-none" to='/product/sheepinwolfclothing'>
                <CardSheepinWolfClothing />
            </Link>
          </Col>

          <Col>
            <Link className="text-decoration-none" to='/product/flowerfox'>
              <CardFlowerFox />
            </Link>
          </Col>
          
        </Row>
      </Container>

     
    </div>
  );
}

