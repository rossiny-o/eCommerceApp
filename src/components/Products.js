import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import { Star, StarFill, StarHalf } from "react-bootstrap-icons";
// import { Link } from "react-router-dom";

export default function Products(props) {
  const { products } = props;
//   const link = `/products/${product.name}`;

  return (
    <Container>
      <Row className="justify-content-center">
        <h2>Rendered Products</h2>
          {products.map((product) => (
            <CardProduct onClick={products.map((product) => (<PageProduct key={product.id} product={product} />))} key={product.id} product={product}></CardProduct>
          ))}
      </Row>
    </Container>
  );
}

function CardProduct(props) {
  const { product } = props;

  return (
    <Card
      style={{ width: "18rem" }}
      className="card-style m-3 p-4 border-0 border-bottom rounded-5 shadow"
    >
      <img
        className="p-3 mx-auto img-thumbnail bg-warning border-0 border-bottom rounded rounded-3  shadow"
        variant="top"
        src={product.image}
        alt={product.name}
        width={200}
      />
      <Card.Body>
        {/* <div className=" heart-icon float-end"><SuitHeartFill className="text-danger" size={30} /></div> */}

        <div className="font-monaco text-center text-nowrap`">
          <Card.Title className="pt-2 fs-5 text-primary text-uppercase fw-bolder">
            {product.name}
          </Card.Title>
          <Card.Subtitle className="fs-6 text-muted fst-italic">
            by {product.artist_name}
          </Card.Subtitle>

          <div className="star-icons fs-4 text-warning">
            <StarFill className="mx-1" />
            <StarFill className="mx-1" />
            <StarFill className="mx-1" />
            <StarHalf className="mx-1" />
            <Star className="mx-1" />
          </div>

          <Card.Text className="fs-5 fst-italic text-primary">
            $ {product.price}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

function PageProduct(props) {
  const { product } = props;
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Container>
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
            >
              ADD TO CART
            </Button>
            {/* add to cart takes the product item and the value of its quantity field multiplied by the price and adds it to cart page  */}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
