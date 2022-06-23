import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Link } from "react-router-dom";
import {useCart}from "react-use-cart";


export default function ItemPage(props) {
  const { product } = props;
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  const {addItem} = useCart();


  // this code below starts a page from the top
  useEffect(() => window.scroll(0, 0), []);

  return (
    <>
      <Header />

      <Container>
        <Row>
          <Link
            to="/"
            className="text-decoration-none d-flex mt-5"
          >
            <ArrowLeft className="mx-2" /><h6>Back</h6>
          </Link>
        </Row>
        <Row>
          <Col className="mt-5 mx-auto d-flex align-items-center">
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              variant="dark"
              fade
            >
              <Carousel.Item className="d-flex justify-content-center">
                <img
                  className="bg-warning p-2"
                  src={product.image}
                  width={400}
                  alt="Bird Drawing 1"
                />
              </Carousel.Item>

              <Carousel.Item className="d-flex justify-content-center">
                <img
                  className="bg-warning p-2"
                  src={product.image2}
                  alt="Bird Drawing 2"
                  width={400}
                />
              </Carousel.Item>
            </Carousel>
          </Col>

          <Col
            className="m-4 px-5
    "
          >
            <h3 className="text-primary text-uppercase font-monaco fw-bolder display-5 mt-3 ">
              {product.name}
            </h3>

            <h6 className="text-muted fst-italic text-start">
              by {product.artist_name}
            </h6>
            <h6 className="text-start">{product.description}</h6>

            <div className="py-1">
              <h3 className=" d-flex fst-italic font-monaco text-primary float-end">
                $ {product.price}
              </h3>

              <label className="d-flex float-end ">
                <h5 className="pe-3">Qty: </h5>
                <input
                  placeholder="1"
                  className="fs-5 ps-2 text-start border-0 qty-bar"
                  type="number"
                ></input>
              </label>
            </div>

            <div className="my-5 d-flex justify-content-end">
              <Button
                className="me-1 px-4 py-2 rounded-pill fs-6 text-uppercase text-nowrap"
                size="md"
                variant="primary"
              >
                BUY NOW
              </Button>

              {/* make modal for buy now button */}

              
              <Button
                className="ms-1 px-4 py-2 rounded-pill fs-6 text-uppercase text-nowrap"
                size="md"
                variant="warning"
                id={product.id}
                onClick={() => addItem(product)}
              >
                ADD TO CART
              </Button>
              {/* add to cart takes the product item and the value of its quantity field multiplied by the price and adds it to cart page  */}
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
