import React from 'react'
import Styles from './imgarray2.module.css'
import ab1 from '../images/ab1.jpg'
import ab2 from '../images/ab2.jpg'
import ab3 from '../images/ab3.jpg'
import ab4 from '../images/ab4.jpg'
import ab5 from '../images/ab5.jpg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function imgarray2() {

    const projects1 = [
        {
          id:'1',
          imageSrc: ab1 ,
          text: 'Document1',
        },
        { id:'2',
          imageSrc:  ab2 ,
          text: 'Document2',
        },
        { id:'3',
        imageSrc: ab3 ,
        text: 'Document3',
        },

        {
          id:'4',
          imageSrc: ab4 ,
          text: 'Document4',
        },
        { id:'5',
          imageSrc:  ab5 ,
          text: 'Document5',
        },
        { id:'6',
        imageSrc: ab2 ,
        text: 'Document6',
        },
       
      ];


  return (
    <div>
        <div className={Styles.servicers}>
        <div className={Styles.container}>
              <div className={Styles.suctitle}>
                    <span className={Styles.subtext1}>
                      PROJECTS
                    </span>
                    <h2 className={Styles.heading1}>
                   Latest completed projects
                    </h2>
              </div>
              <Row>
             
              {projects1.map((item, index) => (
                                      <Col md={4} >
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

export default imgarray2



