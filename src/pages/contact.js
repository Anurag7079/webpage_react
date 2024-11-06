/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/iframe-has-title */
import { useState } from "react";
import React from "react";
import Styles from "./contact.module.css";
import { Col, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import loc from "../images/orange1.png";
import mes from "../images/orange2.png";
import calo from "../images/orange3.png";

function contact() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [message, setMessage] = useState("");

  const [usernameError, setuserNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phonenumberError, setPhonenumberError] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleButtonClicked = async (e) => {
    if (username === "") {
      setuserNameError("Name is required!");
      console.log(usernameError);
    }

    if (email === "") {
      setEmailError("email is required!");
      console.log(emailError);
    }

    if (phonenumber === "") {
      setPhonenumberError("Phonenumber is required!");
      console.log(phonenumberError);
    }

    if (message === "") {
      setMessageError("message is required!");
      console.log(messageError);
    }
  };

  return (
    <div>
      <div className={Styles.breadcrumbs}>
        <div className={Styles.container1}>
          <div className={Styles.breadcrumbsinner}>
            <h1 className={Styles.pagetitle}>Contact Us</h1>
            <span className={Styles.subtext007}>
              Excepteur Sint Occaecat Cupidatat Non Proident, Sunt In Coulpa Qui
              Official<br></br>
              Modeserunt Mollit Anim Id Est 20 Years Experience.
            </span>
          </div>
        </div>
      </div>

      <Row className={Styles.rows}>
        <Col>
          <iframe
            class="gmap_iframe"
            className={Styles.mapframe}
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University of Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </Col>

        <Col className={Styles.cols}>
          <div className={Styles.abc}>
            <div className={Styles.contactwrap}>
              <div className={Styles.sectitle}>
                <h2 className={Styles.heading2}>Get in touch</h2>
              </div>
              <div>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label className={Styles.namess}>User name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Username.."
                      id="userName"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <Form.Text className="text-muted"></Form.Text>
                    {usernameError && (
                      <span className={Styles.textt}>{usernameError}</span>
                    )}
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={Styles.namess}>
                      Email address
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email.."
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError && (
                      <span className={Styles.textt}>{emailError}</span>
                    )}
                  </Form.Group>

                  <Form.Group controlId="ind_phone" className="mb-3">
                    <Form.Label className={Styles.namess}>
                      {" "}
                      phone number
                    </Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Enter number.."
                      id="phoneNumber"
                      onChange={(e) => setPhonenumber(e.target.value)}
                    />
                    {phonenumberError && (
                      <span className={Styles.textt}>{phonenumberError}</span>
                    )}
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label className={Styles.namess}>
                      Example textarea
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      id="message"
                      onChange={(e) => setMessage(e.target.value)}
                    />
                    {messageError && (
                      <span className={Styles.textt}>{messageError}</span>
                    )}
                  </Form.Group>

                  <Button
                    variant="warning"
                    type="button"
                    onClick={(e) => handleButtonClicked()}
                  >
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </Col>

        <Col className={Styles.imagebg}></Col>
      </Row>

      <Row className={Styles.rowboy1}>
        <Col className={Styles.container}>
          <div className={Styles.child1}>
            <div className={Styles.contactbox}>
              <div className={Styles.contacticon}>
                <img className={Styles.img22} src={loc} alt="fdg"></img>
              </div>
              <div className={Styles.contanttext}>
                <h4 className={Styles.heading4}>Office address</h4>
                <p className={Styles.parag}>
                  Ta-134/A, Gulshan Badda<br></br> Link Rd, Dhaka
                </p>
              </div>
            </div>
          </div>

          <div className={Styles.child1}>
            <div className={Styles.contactbox}>
              <div className={Styles.contacticon}>
                <img className={Styles.img22} src={mes} alt="fdg"></img>
              </div>
              <div className={Styles.contanttext}>
                <h4 className={Styles.heading4}>Email us</h4>
                <p className={Styles.parag}>
                  example@gmail.com<br></br> example123@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className={Styles.child1}>
            <div className={Styles.contactbox}>
              <div className={Styles.contacticon}>
                <img className={Styles.img22} src={calo} alt="fdg"></img>
              </div>
              <div className={Styles.contanttext}>
                <h4 className={Styles.heading4}>Call Us</h4>
                <p className={Styles.parag}>
                  9999444444<br></br> 8888855555
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default contact;
