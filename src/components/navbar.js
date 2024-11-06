/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import Styles from "./navbar.module.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logodark from "../images/logo-dark.png";

function navbar() {
  return (
    <div>
      <div>
        <Navbar bg="light" expand="lg" className={Styles.navvv}>
          <Container fluid>
            <Navbar.Brand href="#">
              <img src={logodark} alt="none" className={Styles.img1}></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0 nan "
                style={{ maxHeight: "100px" }}
                navbarScroll
                className={Styles.nana}
              >
                <Nav.Link
                  href="/"
                  style={{ color: "#ffb703" }}
                  id="home"
                  className={Styles.ttt}
                >
                  Home
                </Nav.Link>
                <Nav.Link href="/About" className={Styles.navitemsa}>
                  About
                </Nav.Link>
                <Nav.Link href="/Services" className={Styles.navitemsa}>
                  Service
                </Nav.Link>
                <Nav.Link href="/Blog" className={Styles.navitemsa}>
                  Blog
                </Nav.Link>
                <Nav.Link href="/Contact" className={Styles.navitemsa}>
                  Contact
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2 "
                  aria-label="Search"
                  className={Styles.search}
                />
                <Button
                  class="me-auto my-2 my-lg-0 nan"
                  className={Styles.searcha}
                  variant="outline-success"
                >
                  Search
                </Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default navbar;
