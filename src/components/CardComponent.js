import React from "react";
import '../Main.scss';
import {Container, Row, Col, Card} from "react-bootstrap";
import {Star, StarFill, StarHalf, SuitHeartFill} from "react-bootstrap-icons";



export function Product (){
    return (
    <Container>
        
         {/* 1st row */}

        <Row>
           <Col className="mt-5 justify-content-center" >
                <Card className=" mb-1 p-5 pb-1 border-0 border-bottom rounded-5 shadow" >

                    {/* card starts here */}

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

                  {/* card ends here */}
                </Card>          
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