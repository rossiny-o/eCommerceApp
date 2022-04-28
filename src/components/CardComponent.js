import React, { useState } from "react";
import '../Main.scss';
import {Container, Row, Col, Card, Modal, Button, Carousel} from "react-bootstrap";
import {Star, StarFill, StarHalf, SuitHeartFill} from "react-bootstrap-icons";
import { product1 } from '../Product';


export function Product (){

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    

    return (
    <Container className="m-4 p-4">
        
         {/* 1st row */}

        <Row>
           <Col className="mt-5 mx-auto" sm={4}>

                {/* card 1 starts here */}

                    <Card className=" mb-1 p-5 pb-1 border-0 border-bottom rounded-5 shadow" onClick={handleShow} >

                  <Card.Img className="p-3 mx-auto img-thumbnail bg-warning border-0 border-bottom rounded rounded-3  shadow" variant="top" src={product1.image} alt="Bird Drawing"/>

                  <Card.Body className="mt-2 me-3 px-3 py-4">

                        {/* <div className=" heart-icon float-end"><SuitHeartFill className="text-danger" size={30} /></div> */}

                        <div className="text-center">
                            <Card.Title as="h3" className="text-primary text-uppercase font-monaco fw-bolder mt-3 ">{product1.name}</Card.Title>
                            <Card.Subtitle as="h5" className="text-muted fst-italic" >by {product1.artist_name}</Card.Subtitle>
                        </div>

                        <div className="star-icons text-warning text-center my-2">
                            <StarFill className="mx-1" size={30}/>
                            <StarFill className="mx-1" size={30}/>
                            <StarFill className="mx-1" size={30}/>
                            <StarHalf className="mx-1" size={30}/>
                            <Star className="mx-1" size={30}/>
                        </div>

                        <Card.Text as="h2" className=" fst-italic font-monaco text-center text-primary pb-3">$ {product1.price}</Card.Text>

                  </Card.Body>

                    </Card> 

                {/* card 1 ends here */}

                {/* modal 1 starts here */}

                <Modal show={show} size="xl" className="modal-position" onHide={handleClose}>
                            <Modal.Header  closeButton className="border-0 pe-4 pt-4">

                            </Modal.Header>
                            <Modal.Body>
                                <Container  className="p-4">
                                <Row>


                                 <Col className=" m-2 px-5 justify-content-center" md={5}>
                                    <Carousel>
                                        <Carousel.Item>
                                            <img className="p-3 mx-auto img-thumbnail bg-warning border-0 border-bottom rounded rounded-3  shadow" src="bird.jpg"  width={500} alt="Bird Drawing" />
                                        </Carousel.Item>
                                
                                        <Carousel.Item>
                                        <img className=" mx-auto img-thumbnail   shadow" src="bird(wall).jpg" alt="Bird Drawing" width={500} />
                                        </Carousel.Item>

                                        <Carousel.Item>
                                         <img className=" mx-auto img-thumbnail border-0 border-bottom rounded rounded-3  shadow" src="bird.jpg" alt="Bird Drawing" width={500} />
                                        </Carousel.Item>

                                    </Carousel>
                                    
                                </Col>

        

                                <Col className="pe-3 justify-content-center">
                                    <h3 className="text-primary text-uppercase font-monaco fw-bolder display-6 mt-3 ">{product1.name}</h3>

                                    <div className="star-icons text-warning text-start my-2">
                                        <StarFill className="mx-1" size={25}/>
                                        <StarFill className="mx-1" size={25}/>
                                        <StarFill className="mx-1" size={25}/>
                                        <StarHalf className="mx-1" size={25}/>
                                        <Star className="mx-1" size={25}/>
                                    </div>

                                    <h6 className="text-muted fst-italic text-start">by {product1.artist_name}</h6>
                                    <h4 className="fs-5 text-start">{product1.description}</h4>

                                    <div className="py-2">
                                    <h2 className=" d-flex fst-italic  font-monaco text-primary float-start">$ {product1.price}</h2>

                                    <label className="d-flex float-end ">
                                        <h5 className="pe-3" >Qty: </h5>
                                     <input placeholder="1" className="fs-3 ps-2 text-start border-0 qty-bar"                                 type="number"></input>
                                    </label>
                                    </div>

                                    <div className="my-5 d-inline-flex float-end">
                                    <Button className="mx-3 p-3 text-uppercase text-wrap" size="md" variant="warning">ADD TO CART</Button>
                                    <Button className="mx-3 p-3 text-uppercase" size="md" variant="outline-danger" onClick={handleClose}>
                                        Close</Button>
                                    </div>
                                </Col>
                            </Row>
                    </Container>
            </Modal.Body>            
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