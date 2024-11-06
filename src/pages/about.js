import React from "react";
import Styles from "./about.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img4 from "../images/img4.png";
import img5 from "../images/abzt.jpg";
import check from "../images/checklist.png";
import signature from "../images/signeture1.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import loc from "../images/orange1.png";
import mes from "../images/orange2.png";
import calo from "../images/orange3.png";

function about() {
  const now = 90;

  return (
    <div>
      <div className={Styles.breadcrumbs}>
        <div className={Styles.container1}>
          <div className={Styles.breadcrumbsinner}>
            <h1 className={Styles.pagetitle}>About Us</h1>
            <span className={Styles.subtext007}>
              Excepteur Sint Occaecat Cupidatat Non Proident, Sunt In Coulpa Qui
              Official<br></br>
              Modeserunt Mollit Anim Id Est 20 Years Experience.
            </span>
          </div>
        </div>
      </div>

      <Row className={Styles.roow}>
        <Col>
          <img src={img4} alt="mmm" />
        </Col>
        <Col>
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

      <Row className={Styles.management}>
        <Col className={Styles.container1}>
          <div className={Styles.rowymiddle}>
            <div className={Styles.bbnm}>
              <div className={Styles.sectitlea}>
                <h2 className={Styles.pagetitle1}>
                  Our management<br></br> skills and work<br></br> experience
                </h2>
                <p className={Styles.para12}>
                  Podcasting operational change management inside of workflows
                  to<br></br>
                  establish a framework. Taking seamless key performance.
                </p>
              </div>
              <div>
                <span className={Styles.skilbartitle}>Planning :</span>
                <ProgressBar now={now} label={`${now}%`} />;<br></br>
                <span className={Styles.skilbartitle}>Design :</span>
                <ProgressBar now={now} label={`${now}%`} />;<br></br>
                <span className={Styles.skilbartitle}>Development :</span>
                <ProgressBar now={now} label={`${now}%`} />;<br></br>
                <br></br>
              </div>
            </div>
            <div className={Styles.picket43}></div>
          </div>
        </Col>
      </Row>

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
    </div>
  );
}

export default about;
