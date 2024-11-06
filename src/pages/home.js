import React from "react";
import Styles from "./home.module.css";
import Imgarray1 from "../components/imgarray1";
import Imgarray2 from "../components/imgarray2";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../images/h1-1.jpg";
import img2 from "../images/h1-2.jpg";
import img3 from "../images/h1-1.jpg";
import img4 from "../images/img4.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img5 from "../images/abzt.jpg";
import check from "../images/checklist.png";
import signature from "../images/signeture1.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import num1 from "../images/number-one.png";
import num2 from "../images/two.png";
import num3 from "../images/3.png";
import num4 from "../images/four.png";
import person1 from "../images/testi4.jpg";
import person2 from "../images/testi3.jpg";
import Container from "react-bootstrap/Container";
import { Stack } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import loc from "../images/orange1.png";
import mes from "../images/orange2.png";
import calo from "../images/orange3.png";
import b1 from "../images/botmpic1.jpg";
import b2 from "../images/botmpic2.jpg";
import b3 from "../images/botmpic3.jpg";
import tabsimage from "../images/tabs-images.png";

function home() {
  const reviews = [
    { _id: 1, text: "abc" },
    { _id: 2, text: "def" },
    { _id: 3, text: "ghi" },
  ];

  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            className={Styles.caroupic}
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <div className={Styles.cardiv}>
              <span className={Styles.consbuss}>Construction Business</span>
              <br></br>
              <h3 className={Styles.caption}>
                We build something<br></br>
                &nbsp;new and consistent...
              </h3>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            className={Styles.caroupic}
            src={img2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <div className={Styles.cardiv2}>
              <span className={Styles.consbuss2}>Construction Business</span>
              <br></br>
              <h3 className={Styles.caption2}>
                We build something<br></br>
                &nbsp;new and consistent...
              </h3>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            className={Styles.caroupic}
            src={img3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <div className={Styles.cardiv}>
              <span className={Styles.consbuss}>Construction Business</span>
              <br></br>
              <h3 className={Styles.caption}>
                We build something<br></br>
                &nbsp;new and consistent...
              </h3>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Row className={Styles.roow}>
        <Col class="col-lg-6 col-md-6 col-sm-12">
          <img src={img4} alt="mmm" />
        </Col>
        <Col class="col-lg-6 col-md-6 col-sm-12">
          <div className={Styles.sectitle}>
            <span className={Styles.subtext}>Who We Are</span>
            <h2 className={Styles.title}>
              Construction solutions<br></br> focused future ready
            </h2>
            <p className={Styles.desc}>
              Leverage agile frameworks to provide a robust synopsis<br></br>
              for high level overviews. Iterative approaches to corporate
              <br></br>
              strategy data foster to collaborative thinking to<br></br>
              empowerment.
            </p>
            <div className={Styles.middle}>
              <div className={Styles.imgbox}>
                <img alt="hvssg" src={img5}></img>
              </div>
              <div className={Styles.threelist}>
                <ul className={Styles.checklist}>
                  <li className={Styles.listitems}>
                    <span className={Styles.icon}>
                      <img alt="dcg" src={check}></img>
                    </span>
                    <span className={Styles.listtext}>
                      Pre-construction services
                    </span>
                    <br></br>
                    <span className={Styles.icon}>
                      <img alt="dcg" src={check}></img>
                    </span>
                    <span className={Styles.listtext}>
                      Industrial manufacturing
                    </span>
                    <br></br>

                    <span className={Styles.icon}>
                      <img alt="dcg" src={check}></img>
                    </span>
                    <span className={Styles.listtext}>
                      Industrial manufacturing
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className={Styles.signature}>
              <img alt="ascd" src={signature}></img>
            </div>
          </div>
        </Col>
      </Row>

      <Imgarray1 />

      <Row className={Styles.roow}>
        <Col class="col-lg-6 col-md-6 col-sm-12">
          <div className={Styles.faqcontant}>
            <div className={Styles.sectitle1}>
              <span className={Styles.bbbbm}>YOUR BENEFIT</span>
              <h2 className={Styles.title}>
                Build better futures with steady focus on quality
              </h2>
            </div>
            <Card>
              <Card.Header className={Styles.ch}>
                We are a global family that values diversity.
              </Card.Header>
              <Card.Body className={Styles.ct}>
                <Card.Text>
                  Nor is there anyone who loves or pursues or desires to obtain
                  pain of itself, because it is pain, but occasionally
                  cumstances occur in which toil and pain can procuresteady
                  steady.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body className={Styles.card1}>
                We own and shape our future.
              </Card.Body>
            </Card>
            <Card>
              <Card.Body className={Styles.card1}>
                We create sustainable growth.
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col class="col-lg-6 col-md-6 col-sm-12">
          <img className={Styles.faqimage} src={tabsimage} alt="mmm" />
        </Col>
      </Row>

      <div>
        <Imgarray2 />
      </div>

      <Row className={Styles.row2}>
        <Col className={Styles.cyboom} class=""></Col>
        <Col className={Styles.faqimage45} class="">
          <div className={Styles.wrapcontent1}>
            <div className={Styles.sectitle1}>
              <span className={Styles.bbbbm}>WHY CHOOSE US</span>
              <h2 className={Styles.title}>
                Why you should choose our konstruk platform.
              </h2>
              <p className={Styles.desc}>
                Nor is there anyone who loves or<br></br>
                pursues or desires to obtain pain<br></br>
                of theitself, because it is pain,<br></br>
                but occasionally cumstances.<br></br>
              </p>
            </div>

            <div className={Styles.random}>
              <div className={Styles.coling}>
                <div className={Styles.addonservices}>
                  <div className={Styles.serviceitems}>
                    <div className={Styles.serielnumber}>
                      <img alt="ssx" src={num1}></img>
                    </div>
                    <div className={Styles.servicetext}>
                      <div className={Styles.servicetitle}>
                        <h4 className={Styles.sustain}>Best sustainability</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={Styles.coling}>
                <div className={Styles.addonservices}>
                  <div className={Styles.serviceitems}>
                    <div className={Styles.serielnumber}>
                      <img alt="ssx" src={num2}></img>
                    </div>
                    <div className={Styles.servicetext}>
                      <div className={Styles.servicetitle}>
                        <h4 className={Styles.sustain}>Health and safety</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={Styles.coling}>
                <div className={Styles.addonservices}>
                  <div className={Styles.serviceitems}>
                    <div className={Styles.serielnumber}>
                      <img alt="ssx" src={num3}></img>
                    </div>
                    <div className={Styles.servicetext}>
                      <div className={Styles.servicetitle}>
                        <h4 className={Styles.sustain}>Certified engineer</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={Styles.coling}>
                <div className={Styles.addonservices}>
                  <div className={Styles.serviceitems}>
                    <div className={Styles.serielnumber}>
                      <img alt="ssx" src={num4}></img>
                    </div>
                    <div className={Styles.servicetext}>
                      <div className={Styles.servicetitle}>
                        <h4 className={Styles.sustain}>Modern methods</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={Styles.skillspart}>
              <div className={Styles.rowymiddle}>
                <div className={Styles.worcli}>
                  <div className={Styles.titleinner}>
                    <h4 className={Styles.sustain}>Working skill</h4>
                  </div>

                  <div className={Styles.titleinner}>
                    <h4 className={Styles.sustain}>Client rating</h4>
                  </div>
                </div>
                <div className={Styles.workk}>
                  <div className={Styles.skillbar}>
                    <p className={Styles.bar}></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <div className={Styles.carouseldiv}>
        <Container className={Styles.carouselcon}>
          <Row className={Styles.carouselrow}>
            <Col className={Styles.carouselcol}>
              <div className={Styles.TESTIMONIALSdiv}>
                <div className={Styles.suctitletermi}>
                  <span className={Styles.subtext1termi}>TESTIMONIALS</span>
                  <h2 className={Styles.heading1termi}>
                    Our clients reviews...
                  </h2>
                </div>
              </div>

              <div>
                <Carousel style={{ height: 500 }}>
                  {reviews.map((review, index) => (
                    <Carousel.Item style={{ height: 500 }}>
                      <Stack
                        direction="horizontal"
                        className="h-100 justify-content-center align-items-center"
                        gap={3}
                      >
                        <Card style={{ width: "18rem" }}>
                          <Card.Img variant="top" src={person1} />
                          <Card.Body>
                            <Card.Title>David M. Martin</Card.Title>
                            <Card.Text>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">CEO, Pro Theme</Button>
                          </Card.Body>
                        </Card>

                        <Card style={{ width: "18rem" }}>
                          <Card.Img variant="top" src={person2} />
                          <Card.Body>
                            <Card.Title>Don Bosco</Card.Title>
                            <Card.Text>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">
                              CEO, Brick Consulting
                            </Button>
                          </Card.Body>
                        </Card>

                        <Card style={{ width: "18rem" }}>
                          <Card.Img variant="top" src={person1} />
                          <Card.Body>
                            <Card.Title>David Warnar</Card.Title>
                            <Card.Text>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">
                              HR, Motors Consultant
                            </Button>
                          </Card.Body>
                        </Card>
                      </Stack>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div>
        <Row className={Styles.formrow}>
          <Col className={Styles.formcol}>
            <div className={Styles.formtem}>
              <div className={Styles.contactform}>
                <div className={Styles.sectitle1}>
                  <span className={Styles.bbbbm}>LETS TALK</span>
                  <h2 className={Styles.title}>Have an upcoming project?</h2>

                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                      <Form.Label>User name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Username.."
                      />
                      <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email.." />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="ind_phone" className="mb-3">
                      <Form.Label> phone number</Form.Label>
                      <Form.Control type="tel" placeholder="Enter number.." />
                    </Form.Group>

                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Example textarea</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>

                    <Button variant="warning" type="submit">
                      Submit
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </Col>
          <Col className={Styles.formcol}>
            <div className={Styles.contactboxitems}>
              <div className={Styles.contactbox}>
                <div className={Styles.contacticons}>
                  <img alt="imeeg" src={loc} className={Styles.picaso}></img>
                </div>
                <div className={Styles.contacttext}>
                  <span className={Styles.subtext}>USA office</span>
                  <p>
                    55 Gerad Lane,<br></br>
                    NY 11201, USA
                  </p>
                </div>
              </div>
              <br></br>
              <div className={Styles.contactbox}>
                <div className={Styles.contacticons}>
                  <img alt="imeeg" src={mes} className={Styles.picaso}></img>
                </div>
                <div className={Styles.contacttext}>
                  <span className={Styles.subtext}>Email us</span>
                  <p>
                    test@gamil.com<br></br>
                    test2@gamil.com
                  </p>
                </div>
              </div>
              <br></br>
              <div className={Styles.contactbox}>
                <div className={Styles.contacticons}>
                  <img alt="imeeg" src={calo} className={Styles.picaso}></img>
                </div>
                <div className={Styles.contacttext}>
                  <span className={Styles.subtext}>Call us</span>
                  <p>
                    (+088) 589-8745<br></br>
                    (+088) 222-9999
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className={Styles.bottomo}>
        <div className={Styles.container}>
          <div className={Styles.suctitle}>
            <span className={Styles.subtext1}>NEWS & BLOG</span>
            <h2 className={Styles.heading1}>
              Our latest news postand articles?<br></br> <br></br>
            </h2>
          </div>
        </div>

        <Carousel>
          {reviews.map((review, index) => (
            <Carousel.Item>
              <Stack
                direction="horizontal"
                className="h-100 justify-content-center align-items-center"
                gap={3}
              >
                <Card style={{ width: "18rem" }}>
                  <div className={Styles.imaghoverdiv}>
                    <Card.Img
                      variant="top"
                      className={Styles.imaghover}
                      src={b1}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                      We really appreciate content about the construction
                    </Card.Text>
                    <Button variant="primary">READ MORE</Button>
                  </Card.Body>
                </Card>

                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={b2} />
                  <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                      Best practices construction law on construction
                    </Card.Text>
                    <Button variant="primary">READ MORE</Button>
                  </Card.Body>
                </Card>

                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={b3} />
                  <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                      Although many people may overlook the need
                    </Card.Text>
                    <Button variant="primary">READ MORE</Button>
                  </Card.Body>
                </Card>
              </Stack>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default home;

// pt-120 pb-120 md-pt-80 md-pb-80
