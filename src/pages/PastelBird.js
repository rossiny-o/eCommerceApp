import React from "react";
import "../Main.css";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import { Star, StarFill, StarHalf } from "react-bootstrap-icons";
import { product1 } from "../Product";

export function PastelBird() {
  return (
    <Container className="m-2" fluid>
      <Row>
        <Col className="mt-5 px-5">
          <Carousel variant="dark">
            <Carousel.Item className="d-flex justify-content-center">
              <img
                className="img-thumbnail p-3 bg-warning border-0 border-bottom rounded rounded-3 shadow"
                src={product1.image}
                width={650}
                alt="Bird Drawing"
              />
            </Carousel.Item>

            <Carousel.Item className="d-flex justify-content-center">
              <img
                className="img-thumbnail shadow"
                src={product1.image2}
                alt="Bird Drawing"
                width={650}
              />
            </Carousel.Item>

            <Carousel.Item className="d-flex justify-content-center">
              <img
                className="img-thumbnail border-0 border-bottom rounded rounded-3 shadow"
                src="bird.jpg"
                alt="Bird Drawing"
                width={650}
              />
            </Carousel.Item>
          </Carousel>
        </Col>

        <Col className="m-4 px-5 py-3 d-flex flex-column justify-content-center
        ">
          <h3 className="text-primary text-uppercase font-monaco fw-bolder display-2 mt-3 ">
            {product1.name}
          </h3>

          <div className="star-icons text-warning text-start my-2">
            <StarFill className="mx-1" size={45} />
            <StarFill className="mx-1" size={45} />
            <StarFill className="mx-1" size={45} />
            <StarHalf className="mx-1" size={45} />
            <Star className="mx-1" size={45} />
          </div>

          <h6 className="text-muted fst-italic fs-4 text-start">
            by {product1.artist_name}
          </h6>
          <h4 className="fs-4 text-start">{product1.description}</h4>

          <div className="py-2">
            <h2 className=" d-flex fst-italic fs-1 font-monaco text-primary float-start">
              $ {product1.price}
            </h2>

            <label className="d-flex float-end ">
              <h5 className="pe-3">Qty: </h5>
              <input
                placeholder="1"
                className="fs-3 ps-2 text-start border-0 qty-bar"
                type="number"
              ></input>
            </label>
          </div>

          <div className="my-5 d-inline-flex float-end">
            <Button
              className="px-5 py-3 text-uppercase text-wrap"
              size="lg"
              variant="warning"
            >
              ADD TO CART
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
