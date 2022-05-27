import React from "react";
import "../css/Main.css";
import {Card } from "react-bootstrap";
import { Star, StarFill, StarHalf} from "react-bootstrap-icons";
import {
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
  product10,
  product11,
  product12,
} from "../product-Info";

export function CardPastelBird() {
  return (
    <Card
      style={{ width: "18rem" }}
      className="card-style p-4 pb- border-0 border-bottom rounded-5 shadow"
    >
      <img
        className="p-3 mx-auto img-thumbnail bg-warning border-0 border-bottom rounded rounded-3  shadow"
        variant="top"
        src={product1.image}
        alt="Bird Drawing"
        width={200}
      />
      <Card.Body>
        {/* <div className=" heart-icon float-end"><SuitHeartFill className="text-danger" size={30} /></div> */}

        <div className="font-monaco text-center text-nowrap`">
          <Card.Title className="pt-2 fs-5 text-primary text-uppercase fw-bolder">
            {product1.name}
          </Card.Title>
          <Card.Subtitle className="fs-6 text-muted fst-italic">
            by {product1.artist_name}
          </Card.Subtitle>

          <div className="star-icons fs-4 text-warning">
            <StarFill className="mx-1" />
            <StarFill className="mx-1" />
            <StarFill className="mx-1" />
            <StarHalf className="mx-1" />
            <Star className="mx-1" />
          </div>

          <Card.Text className="fs-5 fst-italic text-primary">
            $ {product1.price}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export function CardHomelessBird() {
  return (
    <Card
      style={{ width: "18rem" }}
      className="card-style p-4 pb- border-0 border-bottom rounded-5 shadow"
    >
      <img
        className="p-3 mx-auto img-thumbnail bg-warning border-0 border-bottom rounded rounded-3  shadow"
        variant="top"
        src={product2.image}
        alt="Bird Drawing"
        width={200}
      />
      <Card.Body>
        {/* <div className=" heart-icon float-end"><SuitHeartFill className="text-danger" size={30} /></div> */}

        <div className="font-monaco text-center text-nowrap">
          <Card.Title className="pt-2 fs-5 text-primary text-uppercase fw-bolder">
            {product2.name}
          </Card.Title>
          <Card.Subtitle className="fs-6 text-muted fst-italic">
            by {product2.artist_name}
          </Card.Subtitle>

          <div className="star-icons fs-4 text-warning">
            <StarFill className="mx-1" />
            <StarFill className="mx-1" />
            <StarFill className="mx-1" />
            <StarHalf className="mx-1" />
            <Star className="mx-1" />
          </div>

          <Card.Text className="fs-5 fst-italic text-primary">
            $ {product2.price}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export function CardElephantGrave() {
  return (
    <Card
      style={{ width: "18rem" }}
      className="card-style p-4 pb- border-0 border-bottom rounded-5 shadow"
    >
      <img
        className="p-3 mx-auto img-thumbnail bg-warning border-0 border-bottom rounded rounded-3  shadow"
        variant="top"
        src={product3.image}
        alt="Bird Drawing"
        width={200}
      />
      <Card.Body>
        {/* <div className=" heart-icon float-end"><SuitHeartFill className="text-danger" size={30} /></div> */}

        <div className="font-monaco text-center text-nowrap">
          <Card.Title className="pt-2 fs-5 text-primary text-uppercase fw-bolder">
            {product3.name}
          </Card.Title>
          <Card.Subtitle className="fs-6 text-muted fst-italic">
            by {product3.artist_name}
          </Card.Subtitle>

          <div className="star-icons fs-4 text-warning">
            <StarFill className="mx-1" />
            <StarFill className="mx-1" />
            <StarFill className="mx-1" />
            <StarHalf className="mx-1" />
            <Star className="mx-1" />
          </div>

          <Card.Text className="fs-5 fst-italic text-primary">
            $ {product3.price}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export function CardElephantHorns() {
  return (
    <Card
      style={{ width: "18rem" }}
      className="card-style p-4 pb- border-0 border-bottom rounded-5 shadow"
    >
      <img
        className="p-3 mx-auto img-thumbnail bg-warning border-0 border-bottom rounded rounded-3  shadow"
        variant="top"
        src={product4.image}
        alt="Bird Drawing"
        width={200}
      />
      <Card.Body>
        {/* <div className=" heart-icon float-end"><SuitHeartFill className="text-danger" size={30} /></div> */}

        <div className="font-monaco text-center text-nowrap">
          <Card.Title className="pt-2 fs-5 text-primary text-uppercase fw-bolder">
            {product4.name}
          </Card.Title>
          <Card.Subtitle className="fs-6 text-muted fst-italic">
            by {product4.artist_name}
          </Card.Subtitle>

          <div className="star-icons fs-4 text-warning">
            <StarFill className="mx-1" />
            <StarFill className="mx-1" />
            <StarFill className="mx-1" />
            <StarHalf className="mx-1" />
            <Star className="mx-1" />
          </div>

          <Card.Text className="fs-5 fst-italic text-primary">
            $ {product4.price}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export function CardElephlower() {
  return (
    <Card
      style={{ width: "18rem" }}
      className="card-style p-4 pb- border-0 border-bottom rounded-5 shadow"
    >
      <img
        className="p-3 mx-auto img-thumbnail bg-warning border-0 border-bottom rounded rounded-3  shadow"
        variant="top"
        src={product5.image}
        alt="Bird Drawing"
        width={200}
      />

      <Card.Body>
        {/* <div className=" heart-icon float-end"><SuitHeartFill className="text-danger" size={30} /></div> */}

        <div className="font-monaco text-center text-nowrap">
          <Card.Title className="pt-2 fs-5 text-primary text-uppercase fw-bolder">
            {product5.name}
          </Card.Title>
          <Card.Subtitle className="fs-6 text-muted fst-italic">
            by {product5.artist_name}
          </Card.Subtitle>

          <div className="star-icons fs-4 text-warning">
            <StarFill className="mx-1" />
            <StarFill className="mx-1" />
            <StarFill className="mx-1" />
            <StarHalf className="mx-1" />
            <Star className="mx-1" />
          </div>

          <Card.Text className="fs-5 fst-italic text-primary">
            $ {product5.price}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export function CardFacialFeatures() {
  return (
    <Card
      style={{ width: "18rem" }}
      className="card-style p-4 pb- border-0 border-bottom rounded-5 shadow"
    >
      <img
        className="p-3 mx-auto img-thumbnail bg-warning border-0 border-bottom rounded rounded-3  shadow"
        variant="top"
        src={product6.image}
        alt="Bird Drawing"
        width={200}
      />

      <Card.Body>
        {/* <div className=" heart-icon float-end"><SuitHeartFill className="text-danger" size={30} /></div> */}

        <div className="font-monaco text-center text-nowrap">
          <Card.Title className="pt-2 fs-5 text-primary text-uppercase fw-bolder">
            {product6.name}
          </Card.Title>
          <Card.Subtitle className="fs-6 text-muted fst-italic">
            by {product6.artist_name}
          </Card.Subtitle>

          <div className="star-icons fs-4 text-warning">
            <StarFill className="mx-1" />
            <StarFill className="mx-1" />
            <StarFill className="mx-1" />
            <StarHalf className="mx-1" />
            <Star className="mx-1" />
          </div>

          <Card.Text className="fs-5 fst-italic text-primary">
            $ {product6.price}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export function CardThinkingThinker() {
  return (
    <Card
      style={{ width: "18rem" }}
      className="card-style p-4 pb- border-0 border-bottom rounded-5 shadow"
    >
      <img
        className="p-3 mx-auto img-thumbnail bg-warning border-0 border-bottom rounded rounded-3  shadow"
        variant="top"
        src={product7.image}
        alt="Bird Drawing"
        width={200}
      />

      <Card.Body>
        {/* <div className=" heart-icon float-end"><SuitHeartFill className="text-danger" size={30} /></div> */}

        <div className="font-monaco text-center text-nowrap">
          <Card.Title className="pt-2 fs-5 text-primary text-uppercase fw-bolder">
            {product7.name}
          </Card.Title>
          <Card.Subtitle className="fs-6 text-muted fst-italic">
            by {product7.artist_name}
          </Card.Subtitle>

          <div className="star-icons fs-4 text-warning">
            <StarFill className="mx-1" />
            <StarFill className="mx-1" />
            <StarFill className="mx-1" />
            <StarHalf className="mx-1" />
            <Star className="mx-1" />
          </div>

          <Card.Text className="fs-5 fst-italic text-primary">
            $ {product7.price}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export function CardHamster() {
  return (
    <Card
      style={{ width: "18rem" }}
      className="card-style p-4 pb- border-0 border-bottom rounded-5 shadow"
    >
      <img
        className="p-3 mx-auto img-thumbnail bg-warning border-0 border-bottom rounded rounded-3  shadow"
        variant="top"
        src={product8.image}
        alt="Bird Drawing"
        width={200}
      />

      <Card.Body>
        {/* <div className=" heart-icon float-end"><SuitHeartFill className="text-danger" size={30} /></div> */}

        <div className="font-monaco text-center text-nowrap">
          <Card.Title className="pt-2 fs-5 text-primary text-uppercase fw-bolder">
            {product8.name}
          </Card.Title>
          <Card.Subtitle className="fs-6 text-muted fst-italic">
            by {product8.artist_name}
          </Card.Subtitle>

          <div className="star-icons fs-4 text-warning">
            <StarFill className="mx-1" />
            <StarFill className="mx-1" />
            <StarFill className="mx-1" />
            <StarHalf className="mx-1" />
            <Star className="mx-1" />
          </div>

          <Card.Text className="fs-5 fst-italic text-primary">
            $ {product8.price}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export function CardGallopingHorse() {
  return (
    <Card
      style={{ width: "18rem" }}
      className="card-style p-4 pb- border-0 border-bottom rounded-5 shadow"
    >
      <img
        className="p-3 mx-auto img-thumbnail bg-warning border-0 border-bottom rounded rounded-3  shadow"
        variant="top"
        src={product9.image}
        alt="Bird Drawing"
        width={200}
      />

      <Card.Body>
        {/* <div className=" heart-icon float-end"><SuitHeartFill className="text-danger" size={30} /></div> */}

        <div className="font-monaco text-center text-nowrap">
          <Card.Title className="pt-2 fs-5 text-primary text-uppercase fw-bolder">
            {product9.name}
          </Card.Title>
          <Card.Subtitle className="fs-6 text-muted fst-italic">
            by {product9.artist_name}
          </Card.Subtitle>

          <div className="star-icons fs-4 text-warning">
            <StarFill className="mx-1" />
            <StarFill className="mx-1" />
            <StarFill className="mx-1" />
            <StarHalf className="mx-1" />
            <Star className="mx-1" />
          </div>

          <Card.Text className="fs-5 fst-italic text-primary">
            $ {product9.price}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export function CardVforVendetta() {
  return (
    <Card
      style={{ width: "18rem" }}
      className="card-style p-4 pb- border-0 border-bottom rounded-5 shadow"
    >
      <img
        className="p-3 mx-auto img-thumbnail bg-warning border-0 border-bottom rounded rounded-3  shadow"
        variant="top"
        src={product10.image}
        alt="Bird Drawing"
        width={200}
      />

      <Card.Body>
        {/* <div className=" heart-icon float-end"><SuitHeartFill className="text-danger" size={30} /></div> */}

        <div className="font-monaco text-center text-nowrap">
          <Card.Title className="pt-2 fs-5 text-primary text-uppercase fw-bolder">
            {product10.name}
          </Card.Title>
          <Card.Subtitle className="fs-6 text-muted fst-italic">
            by {product10.artist_name}
          </Card.Subtitle>

          <div className="star-icons fs-4 text-warning">
            <StarFill className="mx-1" />
            <StarFill className="mx-1" />
            <StarFill className="mx-1" />
            <StarHalf className="mx-1" />
            <Star className="mx-1" />
          </div>

          <Card.Text className="fs-5 fst-italic text-primary">
            $ {product10.price}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export function CardSheepinWolfClothing() {
  return (
    <Card
      style={{ width: "18rem" }}
      className="card-style p-4 pb- border-0 border-bottom rounded-5 shadow"
    >
      <img
        className="p-3 mx-auto img-thumbnail bg-warning border-0 border-bottom rounded rounded-3  shadow"
        variant="top"
        src={product11.image}
        alt="Bird Drawing"
        width={200}
      />

      <Card.Body>
        {/* <div className=" heart-icon float-end"><SuitHeartFill className="text-danger" size={30} /></div> */}

        <div className="font-monaco text-center text-nowrap">
          <Card.Title className="pt-2 fs-5 text-primary text-uppercase fw-bolder text-wrap">
            {product11.name}
          </Card.Title>
          <Card.Subtitle className="fs-6 text-muted fst-italic">
            by {product11.artist_name}
          </Card.Subtitle>

          <div className="star-icons fs-4 text-warning">
            <StarFill className="mx-1" />
            <StarFill className="mx-1" />
            <StarFill className="mx-1" />
            <StarHalf className="mx-1" />
            <Star className="mx-1" />
          </div>

          <Card.Text className="fs-5 fst-italic text-primary">
            $ {product11.price}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export function CardFlowerFox() {
  return (
    <Card
      style={{ width: "18rem" }}
      className="card-style p-4 pb- border-0 border-bottom rounded-5 shadow"
    >
      <img
        className="p-3 mx-auto img-thumbnail bg-warning border-0 border-bottom rounded rounded-3  shadow"
        variant="top"
        src={product12.image}
        alt="Bird Drawing"
        width={200}
      />

      <Card.Body>
        {/* <div className=" heart-icon float-end"><SuitHeartFill className="text-danger" size={30} /></div> */}

        <div className="font-monaco text-center text-nowrap">
          <Card.Title className="pt-2 fs-5 text-primary text-uppercase fw-bolder">
            {product12.name}
          </Card.Title>
          <Card.Subtitle className="fs-6 text-muted fst-italic">
            by {product12.artist_name}
          </Card.Subtitle>

          <div className="star-icons fs-4 text-warning">
            <StarFill className="mx-1" />
            <StarFill className="mx-1" />
            <StarFill className="mx-1" />
            <StarHalf className="mx-1" />
            <Star className="mx-1" />
          </div>

          <Card.Text className="fs-5 fst-italic text-primary">
            $ {product12.price}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}
