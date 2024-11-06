import React from "react";
import Styles from "./services.module.css";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ser1 from "../images/ser1.png";
import ser2 from "../images/ser2.png";
import ser3 from "../images/ser3.png";
import ser4 from "../images/ser4.png";
import ser5 from "../images/ser5.png";
import ser6 from "../images/ser6.png";

function services() {
  const serviceData = [
    {
      id: "1",
      imageSrc: ser1,
      Title: "General construction",
      text: "Some quick example text to build on the card title and make up the    bulk of the card",
    },

    {
      id: "2",
      imageSrc: ser2,
      Title: "Property maintenance",
      text: "Some quick example text to build on the card title and make up the    bulk of the card",
    },

    {
      id: "3",
      imageSrc: ser3,
      Title: "Project managment",
      text: "Some quick example text to build on the card title and make up the    bulk of the card",
    },

    {
      id: "4",
      imageSrc: ser4,
      Title: "Virtual design & build",
      text: "Some quick example text to build on the card title and make up the    bulk of the card",
    },

    {
      id: "5",
      imageSrc: ser5,
      Title: "Preconstruction",
      text: "Some quick example text to build on the card title and make up the    bulk of the card",
    },

    {
      id: "6",
      imageSrc: ser6,
      Title: "Design build",
      text: "Some quick example text to build on the card title and make up the    bulk of the card",
    },
  ];

  return (
    <div>
      <div className={Styles.breadcrumbs}>
        <div className={Styles.container1}>
          <div className={Styles.breadcrumbsinner}>
            <h1 className={Styles.pagetitle}>Services - Style One</h1>
            <span className={Styles.subtext007}>
              Excepteur Sint Occaecat Cupidatat Non Proident, Sunt In Coulpa Qui
              Official<br></br>
              Modeserunt Mollit Anim Id Est 20 Years Experience.
            </span>
          </div>
        </div>
      </div>

      <div className={Styles.vok}>
        <div className={Styles.container2}>
          <Row className={Styles.rowcard}>
            {serviceData.map((card, index) => (
              <Col md={4} className={Styles.cardcol}>
                <div className={Styles.servicsitems} key={index}>
                  <Card className={Styles.card} style={{ width: "18rem" }}>
                    <div>
                      <img
                        className={Styles.cardimg}
                        alt="jjj"
                        src={card.imageSrc}
                      />
                      <h5 className={Styles.h5}>{card.Title}</h5>
                      <p>{card.text}</p>
                    </div>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default services;
