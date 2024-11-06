import React from 'react'
import Styles from './imgarray1.module.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import servpic1 from '../images/servic-1.jpg'
import servpic2 from '../images/servic-2.jpg'
import servpic3 from '../images/servic-3.jpg'
import servpic4 from '../images/servic-4.jpg'


function imgarray1() {

  const imageData = [
    {
      id: '1',
      imageSrc: servpic1,
      text: 'Document1',
    },
    {
      id: '2',
      imageSrc: servpic2,
      text: 'Document2',
    },
    {
      id: '3',
      imageSrc: servpic3,
      text: 'Document3',
    },

    {
      id: '4',
      imageSrc: servpic4,
      text: 'Document4',
    },
    {
      id: '5',
      imageSrc: servpic3,
      text: 'Document5',
    },
    {
      id: '6',
      imageSrc: servpic1,
      text: 'Document6',
    },

  ];





  return (
    <div >

      <div className={Styles.servicers} >
        <div className={Styles.container}>
          <div className={Styles.suctitle}>
            <span className={Styles.subtext1}>
              WHAT WE DO
            </span>
            <h2 className={Styles.heading1}>
              Develop comprehensive solutions<br></br>
              <span className={Styles.spanproject}>for each project</span>
            </h2><br></br>
          </div>
          <Row>


            {imageData.map((item, index) => (
              <Col md={4} class="col-lg-6 col-md-6 col-sm-12" >
                <div key={index}>
                  <img className={Styles.arrimag} src={item.imageSrc} alt={`Image ${index + 1}`} />


                  <p className={Styles.arrtext}>{item.text}</p>

                </div>
              </Col>
            ))}


          </Row>
        </div>
      </div>





    </div>
  )
}

export default imgarray1