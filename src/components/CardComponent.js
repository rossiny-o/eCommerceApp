import React, { useState } from "react";
import '../Main.scss';
import { Header } from "./HeaderComponent";
import {Container, Row, Col, Card, Modal, Button} from "react-bootstrap";
import {Star, StarFill, StarHalf, SuitHeartFill} from "react-bootstrap-icons";



export function Product (){

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    

    return (
    <Container className="m-4 p-4" fluid>
        
         {/* 1st row */}

        <Row>
           <Col className="mt-5 mx-auto" sm={4}>

                {/* card 1 starts here */}

                    <Card className=" mb-1 p-5 pb-1 border-0 border-bottom rounded-5 shadow" onClick={handleShow} >

                  <Card.Img className="p-3 mx-auto img-thumbnail bg-warning border-0 border-bottom rounded rounded-3  shadow" variant="top" src="bird.jpg" alt="Bird Drawing"/>

                  <Card.Body className="card-body mt-2 me-3 px-3 py-4">

                        {/* <div className=" heart-icon float-end"><SuitHeartFill className="text-danger" size={30} /></div> */}

                        <div className="text-center">
                            <Card.Title as="h3" className="text-primary text-uppercase font-monaco fw-bolder mt-3 ">Pastel Bird</Card.Title>
                            <Card.Subtitle as="h5" className="text-muted fst-italic" >by Jennifer Miranda</Card.Subtitle>
                        </div>

                        <div className="star-icons text-warning text-center my-2">
                            <StarFill className="mx-1" size={30}/>
                            <StarFill className="mx-1" size={30}/>
                            <StarFill className="mx-1" size={30}/>
                            <StarHalf className="mx-1" size={30}/>
                            <Star className="mx-1" size={30}/>
                        </div>

                        <Card.Text as="h2" className=" fst-italic font-monaco text-center text-primary pb-3">$ 49.99</Card.Text>

                  </Card.Body>

                    </Card> 

                {/* card 1 ends here */}

                {/* modal 1 starts here */}

                <Modal show={show} fullscreen onHide={handleClose}>
            
                    

                        <Container className="m-5 p-5">

                            <Modal.Header fluid><Header /></Modal.Header>

                            <Row className="d-flex mx-auto p-5">
                            
                                <Col className="p-2">

                                    <img className=" mx-auto img-thumbnail bg-warning border-0 border-bottom rounded rounded-3  shadow" src="bird.jpg" alt="Bird Drawing" />
                                    
                                </Col>

        

                                <Col bg="secondary" gap={2} className="pe-3">
                                    <h1 className="text-primary text-uppercase text-start font-monaco display-2">Pastel Bird</h1>

                                    <div className="star-icons text-warning text-start my-2">
                                        <StarFill className="mx-1" size={40}/>
                                        <StarFill className="mx-1" size={40}/>
                                        <StarFill className="mx-1" size={40}/>
                                        <StarHalf className="mx-1" size={40}/>
                                        <Star className="mx-1" size={40}/>
                                    </div>

                                    <h5 className="text-muted fst-italic text-start">by Jennifer Miranda</h5>
                                    <h4 className="fs-4 text-start">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.
                                    </h4>

                                    <div className="py-2">
                                    <h1 className=" d-flex fst-italic display-5 font-monaco text-primary text-start float-start">$ 49.99</h1>

                                    <label className="d-flex float-end ">
                                        <h5 className="pe-3" >Qty: </h5>
                                     <input width={10} className="fs-3 text-start border-0"                                 type="number"></input>
                                    </label>
                                    </div>

                                    <div className="pt-3 d-inline-flex float-start">
                                    <Button pill className="mx-3 p-4 text-uppercase" size="lg" variant="warning">ADD TO CART</Button>
                                    <Button pill className="mx-3 p-4 text-uppercase" size="lg" variant="secondary" onClick={handleClose}>
                                        Close</Button>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
      </Modal>

                {/* modal 1 ends here */}

            </Col>

           <Col className="my-5">
                <Card border="primary" className="card">
                  <Card.Img variant="top" src="birdlog.jpg" />
                  <Card.Body className="card-body m-2 px-3 py-2">
                      <div className="">
                        <div className="text-end"><SuitHeartFill className=" heart-icon text-danger" size={40} /></div>
                        <Card.Title as="h1" className="text-primary text-start">Homeless Bird</Card.Title>
                        <Card.Subtitle as="h6" className="text-start text-muted" >by Jennifer Miranda</Card.Subtitle>
                      </div>
                      <div className="star-icons text-warning mt-2 ms-2">
                            <StarFill className="me-2" size={22}/>
                            <StarFill className="me-2" size={22}/>
                            <StarFill className="me-2" size={22}/>
                            <StarFill className="me-2" size={22}/>
                            <StarHalf className="me-2" size={22}/>
                            <Card.Text as="small" className="mb-3 text-muted">504</Card.Text>
                        </div>
                        <Card.Text className="text-end" as="h6"><del>$54.99</del></Card.Text>
                      <Card.Text as="h1" className=" text-end text-primary">$ 49.99</Card.Text>
                  </Card.Body>
                </Card>          
           </Col>

           <Col className="my-5">
                <Card border="primary" className="card">
                  <Card.Img variant="top" src="bigcat.jpg" />
                  <Card.Body className="card-body m-2 px-3 py-2">
                      <div className="">
                        <div className="text-end"><SuitHeartFill className=" heart-icon text-danger" size={40} /></div>
                        <Card.Title as="h1" className="text-primary text-start">Elephant Graveyard</Card.Title>
                        <Card.Subtitle as="h6" className="text-start text-muted" >by Jennifer Miranda</Card.Subtitle>
                      </div>
                      <div className="star-icons text-warning mt-2 ms-2">
                            <StarFill className="me-2" size={22}/>
                            <StarFill className="me-2" size={22}/>
                            <StarFill className="me-2" size={22}/>
                            <StarFill className="me-2" size={22}/>
                            <StarHalf className="me-2" size={22}/>
                            <Card.Text as="small" className="mb-3 text-muted">504</Card.Text>
                        </div>
                        <Card.Text className="text-end" as="h6"><del>$54.99</del></Card.Text>
                      <Card.Text as="h1" className=" text-end text-primary">$ 49.99</Card.Text>
                  </Card.Body>
                </Card>          
           </Col>

           <Col className="my-5">
                <Card border="primary" className="card">
                  <Card.Img variant="top" src="elephanthorns.jpg" />
                  <Card.Body className="card-body m-2 px-3 py-2">
                      <div>
                        <div className="text-end"><SuitHeartFill className=" heart-icon text-danger" size={40} /></div>
                        <Card.Title as="h1" className="text-primary text-start">Elephant Horns</Card.Title>
                        <Card.Subtitle as="h6" className="text-start text-muted" >by Jennifer Miranda</Card.Subtitle>
                      </div>
                      <div className="star-icons text-warning mt-2 ms-2">
                            <StarFill className="me-2" size={22}/>
                            <StarFill className="me-2" size={22}/>
                            <StarFill className="me-2" size={22}/>
                            <StarFill className="me-2" size={22}/>
                            <StarHalf className="me-2" size={22}/>
                            <Card.Text as="small" className="mb-3 text-muted">504</Card.Text>
                        </div>
                        <Card.Text className="text-end" as="h6"><del>$54.99</del></Card.Text>
                      <Card.Text as="h1" className=" text-end text-primary">$ 49.99</Card.Text>
                  </Card.Body>
                </Card>          
           </Col>
        </Row>

             {/* 2nd row */}

        <Row>
            <Col className="my-5">
                <Card border="primary" className="card">
                  <Card.Img variant="top" src="elephlower.jpg" />
                  <Card.Body className="card-body m-2 px-3 py-2">
                      <div className="">
                        <div className="text-end"><SuitHeartFill className=" heart-icon text-danger" size={40} /></div>
                        <Card.Title as="h1" className="text-primary text-start">Flower Trunk</Card.Title>
                        <Card.Subtitle as="h6" className="text-start text-muted" >by Jennifer Miranda</Card.Subtitle>
                      </div>
                      <div className="star-icons text-warning mt-2 ms-2">
                            <StarFill className="me-2" size={22}/>
                            <StarFill className="me-2" size={22}/>
                            <StarFill className="me-2" size={22}/>
                            <StarFill className="me-2" size={22}/>
                            <StarHalf className="me-2" size={22}/>
                            <Card.Text as="small" className="mb-3 text-muted">504</Card.Text>
                        </div>
                        <Card.Text className="text-end" as="h6"><del>$54.99</del></Card.Text>
                      <Card.Text as="h1" className=" text-end text-primary">$ 49.99</Card.Text>
                  </Card.Body>
                </Card>          
            </Col>

            <Col className="my-5">
                <Card border="primary" className="card">
                  <Card.Img variant="top" src="facialfeatures.jpg" />
                  <Card.Body className="card-body m-2 px-3 py-2">
                      <div className="">
                        <div className="text-end"><SuitHeartFill className=" heart-icon text-danger" size={40} /></div>
                        <Card.Title as="h1" className="text-primary text-start">Facial Features</Card.Title>
                        <Card.Subtitle as="h6" className="text-start text-muted" >by Jennifer Miranda</Card.Subtitle>
                      </div>
                      <div className="star-icons text-warning mt-2 ms-2">
                            <StarFill className="me-2" size={22}/>
                            <StarFill className="me-2" size={22}/>
                            <StarFill className="me-2" size={22}/>
                            <StarFill className="me-2" size={22}/>
                            <StarHalf className="me-2" size={22}/>
                            <Card.Text as="small" className="mb-3 text-muted">504</Card.Text>
                        </div>
                        <Card.Text className="text-end" as="h6"><del>$54.99</del></Card.Text>
                      <Card.Text as="h1" className=" text-end text-primary">$ 49.99</Card.Text>
                  </Card.Body>
                </Card>          
           </Col>

           <Col className="my-5">
                <Card border="primary" className="card">
                  <Card.Img variant="top" src="flowerfox.jpg" />
                  <Card.Body className="card-body m-2 px-3 py-2">
                      <div className="">
                        <div className="text-end"><SuitHeartFill className=" heart-icon text-danger" size={40} /></div>
                        <Card.Title as="h1" className="text-primary text-start">Flower Fox</Card.Title>
                        <Card.Subtitle as="h6" className="text-start text-muted" >by Jennifer Miranda</Card.Subtitle>
                      </div>
                      <div className="star-icons text-warning mt-2 ms-2">
                            <StarFill className="me-2" size={22}/>
                            <StarFill className="me-2" size={22}/>
                            <StarFill className="me-2" size={22}/>
                            <StarFill className="me-2" size={22}/>
                            <StarHalf className="me-2" size={22}/>
                            <Card.Text as="small" className="mb-3 text-muted">504</Card.Text>
                        </div>
                        <Card.Text className="text-end" as="h6"><del>$54.99</del></Card.Text>
                      <Card.Text as="h1" className=" text-end text-primary">$ 49.99</Card.Text>
                  </Card.Body>
                </Card>          
           </Col>

           <Col className="my-5">
                <Card border="primary" className="card">
                  <Card.Img variant="top" src="hamster.jpg" />
                  <Card.Body className="card-body m-2 px-3 py-2">
                      <div className="">
                        <div className="text-end"><SuitHeartFill className=" heart-icon text-danger" size={40} /></div>
                        <Card.Title as="h1" className="text-primary text-start">Hamster</Card.Title>
                        <Card.Subtitle as="h6" className="text-start text-muted" >by Jennifer Miranda</Card.Subtitle>
                      </div>
                      <div className="star-icons text-warning mt-2 ms-2">
                            <StarFill className="me-2" size={22}/>
                            <StarFill className="me-2" size={22}/>
                            <StarFill className="me-2" size={22}/>
                            <StarFill className="me-2" size={22}/>
                            <StarHalf className="me-2" size={22}/>
                            <Card.Text as="small" className="mb-3 text-muted">504</Card.Text>
                        </div>
                        <Card.Text className="text-end" as="h6"><del>$54.99</del></Card.Text>
                      <Card.Text as="h1" className=" text-end text-primary">$ 49.99</Card.Text>
                  </Card.Body>
                </Card>          
           </Col>
        </Row>

            {/* 3rd row */}

        <Row>
            <Col className="my-5">
                <Card border="primary" className="card">
                  <Card.Img variant="top" src="horse.jpg" />
                  <Card.Body className="card-body m-2 px-3 py-2">
                      <div className="">
                        <div className="text-end"><SuitHeartFill className=" heart-icon text-danger" size={40} /></div>
                        <Card.Title as="h1" className="text-primary text-start">Horsey</Card.Title>
                        <Card.Subtitle as="h6" className="text-start text-muted" >by Jennifer Miranda</Card.Subtitle>
                      </div>
                      <div className="star-icons text-warning mt-2 ms-2">
                            <StarFill className="me-2" size={22}/>
                            <StarFill className="me-2" size={22}/>
                            <StarFill className="me-2" size={22}/>
                            <StarFill className="me-2" size={22}/>
                            <StarHalf className="me-2" size={22}/>
                            <Card.Text as="small" className="mb-3 text-muted">504</Card.Text>
                        </div>
                        <Card.Text className="text-end" as="h6"><del>$54.99</del></Card.Text>
                      <Card.Text as="h1" className=" text-end text-primary">$ 49.99</Card.Text>
                  </Card.Body>
                </Card>          
           </Col>

           <Col className="my-5">
                <Card border="primary" className="card">
                  <Card.Img variant="top" src="sheepinwolfclothing.jpg" />
                  <Card.Body className="card-body m-2 px-3 py-2">
                      <div className="">
                        <div className="text-end"><SuitHeartFill className=" heart-icon text-danger" size={40} /></div>
                        <Card.Title as="h1" className="text-primary text-start">Sheep Wolf</Card.Title>
                        <Card.Subtitle as="h6" className="text-start text-muted" >by Jennifer Miranda</Card.Subtitle>
                      </div>
                      <div className="star-icons text-warning mt-2 ms-2">
                            <StarFill className="me-2" size={22}/>
                            <StarFill className="me-2" size={22}/>
                            <StarFill className="me-2" size={22}/>
                            <StarFill className="me-2" size={22}/>
                            <StarHalf className="me-2" size={22}/>
                            <Card.Text as="small" className="mb-3 text-muted">504</Card.Text>
                        </div>
                        <Card.Text className="text-end" as="h6"><del>$54.99</del></Card.Text>
                      <Card.Text as="h1" className=" text-end text-primary">$ 49.99</Card.Text>
                  </Card.Body>
                </Card>          
           </Col>

           <Col className="my-5">
                <Card border="primary" className="card">
                  <Card.Img variant="top" src="thinking.jpg" />
                  <Card.Body className="card-body m-2 px-3 py-2">
                      <div className="">
                        <div className="text-end"><SuitHeartFill className=" heart-icon text-danger" size={40} /></div>
                        <Card.Title as="h1" className="text-primary text-start">Thinking Woman</Card.Title>
                        <Card.Subtitle as="h6" className="text-start text-muted" >by Jennifer Miranda</Card.Subtitle>
                      </div>
                      <div className="star-icons text-warning mt-2 ms-2">
                            <StarFill className="me-2" size={22}/>
                            <StarFill className="me-2" size={22}/>
                            <StarFill className="me-2" size={22}/>
                            <StarFill className="me-2" size={22}/>
                            <StarHalf className="me-2" size={22}/>
                            <Card.Text as="small" className="mb-3 text-muted">504</Card.Text>
                        </div>
                        <Card.Text className="text-end" as="h6"><del>$54.99</del></Card.Text>
                      <Card.Text as="h1" className=" text-end text-primary">$ 49.99</Card.Text>
                  </Card.Body>
                </Card>          
           </Col>

           <Col className="my-5">
                <Card border="primary" className="card">
                  <Card.Img variant="top" src="vforvendetta.jpg" />
                  <Card.Body className="card-body m-2 px-3 py-2">
                      <div className="">
                        <div className="text-end"><SuitHeartFill className=" heart-icon text-danger" size={40} /></div>
                        <Card.Title as="h1" className="text-primary text-start">V. Vendetta</Card.Title>
                        <Card.Subtitle as="h6" className="text-start text-muted" >by Jennifer Miranda</Card.Subtitle>
                      </div>
                      <div className="star-icons text-warning mt-2 ms-2">
                            <StarFill className="me-2" size={22}/>
                            <StarFill className="me-2" size={22}/>
                            <StarFill className="me-2" size={22}/>
                            <StarFill className="me-2" size={22}/>
                            <StarHalf className="me-2" size={22}/>
                            <Card.Text as="small" className="mb-3 text-muted">504</Card.Text>
                        </div>
                        <Card.Text className="text-end" as="h6"><del>$54.99</del></Card.Text>
                      <Card.Text as="h1" className=" text-end text-primary">$ 49.99</Card.Text>
                  </Card.Body>
                </Card>          
           </Col>
        </Row>
     
    </Container>
    );
}