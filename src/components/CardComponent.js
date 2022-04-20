import React from "react";
import '../Main.scss';
import {Container, Row, Col, Card} from "react-bootstrap";
import {StarFill, StarHalf, SuitHeartFill} from "react-bootstrap-icons";


export function Product (){
    return (
    <Container>
        <Row>
           <Col className="mt-5 card-container" >
                <Card className="border-0 rounded-5 shadow card">
                  <Card.Img variant="top" src="bird.jpg"/>
                  <Card.Body className="card-body mt-2 me-3 px-3 py-2">
                  <div className="text-end "><SuitHeartFill className=" heart-icon text-danger" size={30} /></div>
                    <div className="text-center">
                        <Card.Title as="h4" className="text-primary text-uppercase text-bold mt-2">Pastel Bird</Card.Title>
                        <Card.Subtitle as="h6" className="text-muted" >by Jennifer Miranda</Card.Subtitle>
                      </div>
                      <div className="star-icons text-warning text-center my-2">
                            <StarFill className="mx-1" size={22}/>
                            <StarFill className="mx-1" size={22}/>
                            <StarFill className="mx-1" size={22}/>
                            <StarFill className="mx-1" size={22}/>
                            <StarHalf className="mx-1" size={22}/>
                            <Card.Text as="small" className="mb-3 ms-2 text-muted text-bold">4.5</Card.Text>
                        </div>
                      <div>
                        <Card.Text as="h1" className=" text-center text-primary">$ 49.99</Card.Text>
                      </div>
                  </Card.Body>
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
      {/* <Row>
            <h3 className="py-4">Items</h3>
       <Col id='first-row-card' className="d-flex">
       <Card className="p-2" bg='success'>
            <Card.Img src="bird.jpg" variant=""/>
       </Card>
       

        <Card className='card-style'>
            <Card.Img variant="top" src="birdlog.jpg"  />
            <Card.Body>
                <Card.Title>Bird</Card.Title>
                <Card.Text size="lg">
               $174.99
                </Card.Text>
            </Card.Body>
        </Card>

        <Card className='card-style'>
            <Card.Img variant="top" src="bigcat.jpg" />
            <Card.Body>
                <Card.Title>Bird</Card.Title>
                <Card.Text size="lg">
               $174.99
                </Card.Text>
            </Card.Body>
        </Card>
       </Col>
        </Row>

        <Row>
        <Col id='second-row-card' className="d-flex">
            <Card className='card-style'>
            <Card.Img variant="top" src="elephanthorns.jpg" />
            <Card.Body>
                <Card.Title>Bird</Card.Title>
                <Card.Text size="xl">
               $174.99
                </Card.Text>
            </Card.Body>
            </Card>

            <Card className='card-style'>
            <Card.Img variant="top" src="elephlower.jpg" />
            <Card.Body>
                <Card.Title>Bird</Card.Title>
                <Card.Text size="lg">
               $174.99
                </Card.Text>
            </Card.Body>
            </Card>

            <Card className='card-style'>
            <Card.Img variant="top" src="facialfeatures.jpg" />
            <Card.Body>
                <Card.Title>Bird</Card.Title>
                <Card.Text size="lg">
               $174.99
                </Card.Text>
            </Card.Body>
        </Card>
        
        </Col>
        </Row>

        <Row>
        <Col id='second-row-card' className="d-flex">
            <Card className='card-style'>
            <Card.Img variant="top" src="flowerfox.jpg" />
            <Card.Body>
                <Card.Title>Bird</Card.Title>
                <Card.Text size="xl">
               $174.99
                </Card.Text>
            </Card.Body>
            </Card>

            <Card className='card-style'>
            <Card.Img variant="top" src="hamster.jpg" />
            <Card.Body>
                <Card.Title>Bird</Card.Title>
                <Card.Text size="lg">
               $174.99
                </Card.Text>
            </Card.Body>
            </Card>

            <Card className='card-style'>
            <Card.Img variant="top" src="sheepinwolfclothing.jpg" />
            <Card.Body>
                <Card.Title>Bird</Card.Title>
                <Card.Text size="lg">
               $174.99
                </Card.Text>
            </Card.Body>
        </Card>
        
        </Col>
        </Row>

        <Row>
        <Col id='second-row-card' className="d-flex">
            <Card className='card-style'>
            <Card.Img variant="top" src="thinking.jpg" />
            <Card.Body>
                <Card.Title>Bird</Card.Title>
                <Card.Text size="xl">
               $174.99
                </Card.Text>
            </Card.Body>
            </Card>

            <Card className='card-style'>
            <Card.Img variant="top" src="vforvendetta.jpg" />
            <Card.Body>
                <Card.Title>Bird</Card.Title>
                <Card.Text size="lg">
               $174.99
                </Card.Text>
            </Card.Body>
            </Card>

            <Card className='card-style'>
            <Card.Img variant="top" src="horse.jpg" />
            <Card.Body>
                <Card.Title>Bird</Card.Title>
                <Card.Text size="lg">
               $174.99
                </Card.Text>
            </Card.Body>
        </Card>
        
        </Col>
        </Row> */}
    </Container>
    );
}