
import React, {useState} from "react";
import "../css/Main.css";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import { product12 } from "../product-Info";
import { Header } from "../components/Header";

export function FlowerFox() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Header/>
      <Container>
        <Row>
          <Col className="mt-5 mx-auto d-flex align-items-center">

            <Carousel activeIndex={index} onSelect={handleSelect} variant="dark" fade>

              <Carousel.Item className="d-flex justify-content-center">
                <img className="bg-warning p-2"
                  src={product12.image}
                  width={400}
                  alt="Bird Drawing 1"
                />
              </Carousel.Item>

              <Carousel.Item className="d-flex justify-content-center">
                <img className="bg-warning p-2"
                  src={product12.image2}
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
              {product12.name}
            </h3>

            <h6 className="text-muted fst-italic text-start">
              by {product12.artist_name}
            </h6>
            <h6 className="text-start">{product12.description}</h6>

            <div className="py-1">
              <h3 className=" d-flex fst-italic font-monaco text-primary float-end">
                $ {product12.price}
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
              >
                ADD TO CART
              </Button>
            {/* add to cart takes the product item and the value of its quantity field multiplied by the price and adds it to cart page  */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
