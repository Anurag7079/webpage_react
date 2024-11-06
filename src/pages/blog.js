import React from "react";
import Styles from "./blog.module.css";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ab1 from "../images/ab1.jpg";
import ab2 from "../images/ab2.jpg";
import ab3 from "../images/ab3.jpg";
import ab4 from "../images/ab4.jpg";
import ab5 from "../images/ab5.jpg";

function blog() {
  const blogData = [
    {
      id: "1",
      imageSrc: ab1,
      Title: "We really appreciate content about the construction",
      text: "Some quick example text to build on the card title and make up the    bulk of the card Some quick example text to build on the card title and make up the bulk of the card Some quick example text to build on the card title and make up the",
    },

    {
      id: "2",
      imageSrc: ab2,
      Title: "Best practices construction law on construction",
      text: "Some quick example text to build on the card title and make up the    bulk of the card Some quick example text to build on the card title and make up the bulk of the card Some quick example text to build on the card title and make up the",
    },

    {
      id: "3",
      imageSrc: ab3,
      Title: "Although many people may overlook the need",
      text: "Some quick example text to build on the card title and make up the    bulk of the card Some quick example text to build on the card title and make up the bulk of the cardSome quick example text to build on the card title and make up the",
    },

    {
      id: "4",
      imageSrc: ab4,
      Title: "Construction executive holds a very special place",
      text: "Some quick example text to build on the card title and make up the    bulk of the card Some quick example text to build on the card title and make up the bulk of the card Some quick example text to build on the card title and make up the",
    },

    {
      id: "5",
      imageSrc: ab5,
      Title: "This is another massive sites with a ton of information",
      text: "Some quick example text to build on the card title and make up the bulk of the card Some quick example text to build on the card title and make up the bulk of the card Some quick example text to build on the card title and make up the",
    },
  ];

  return (
    <div>
      <div className={Styles.breadcrumbs}>
        <div className={Styles.container1}>
          <div className={Styles.breadcrumbsinner}>
            <h1 className={Styles.pagetitle}>Blog</h1>
            <span className={Styles.subtext007}>
              Excepteur Sint Occaecat Cupidatat Non Proident, Sunt In Coulpa Qui
              Official<br></br>
              Modeserunt Mollit Anim Id Est 20 Years Experience.
            </span>
          </div>
        </div>
      </div>

      <div className={Styles.innerblog}>
        <div className={Styles.container2}>
          <Row className={Styles.blogrow}>
            <Card style={{ width: "48.1rem" }} className={Styles.blogcards}>
              {blogData.map((card, index) => (
                <Col>
                  <img
                    className={Styles.cardimg}
                    alt="jjj"
                    src={card.imageSrc}
                  />
                  <Card.Body>
                    <h5 className={Styles.cardtitle}>{card.Title}</h5>
                    <Card.Text>{card.text}</Card.Text>
                  </Card.Body>
                </Col>
              ))}
            </Card>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default blog;
