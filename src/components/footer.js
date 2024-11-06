import React from 'react'
import Styles from './footer.module.css'
import img1 from '../images/logo-white.png'
import location from '../images/location.png'
import call from '../images/telephone.png'
import message from '../images/chat-bubble.png'
import list from '../images/list.png'




function footer  ()  {


  return (
    <div >
      <div className={Styles.footer}> 
        <div className={Styles.topfooter}>
          <div className={Styles.container}>
          <div className={Styles.row}>
              <div className={Styles.box1}>
                    <img alt='none' src={img1} className={Styles.logowhite}></img>
                    <div className={Styles.textwidget}>
                        <p className={Styles.para}>
                        Lorem ipsum dolor sit amet,
                        consec tetur adipiscing 
                        elit, sed do eiusmod tempor
                        in cididunt ut labore.
                        </p>
                        <p className={Styles.para}>
                         Opening Hours : Monday –
                          Sat: 9am to 6pm
                        </p>
                        <p className={Styles.para}>
                         Opening Hours : Monday –
                          Sunday: 9am to 2pm
                        </p>
                    </div>
                    
              </div>
              <div className={Styles.box2}>
                  <h1 className={Styles.title}>CONTACT INFO</h1>
                  <ul className={Styles.addressbar}>
                      <li>
                          <i className={Styles.icon}>
                              <img className={Styles.icons} alt='nnn' src={location}></img>
                          </i>
                          <p className={Styles.asas}>
                            Ta-134/A, Gulshan Badda Link
                            Rd, Dhaah
                          </p>
                      </li>

                      <li>
                          <i className={Styles.icon}>
                              <img className={Styles.icons} alt='nnn' src={call}></img>
                          </i>
                          <p className={Styles.asas}>
                          (+880)155 69569 365
                          (+880)155 69569 366
                          </p>
                      </li>

                      <li>
                          <i className={Styles.icon}>
                              <img className={Styles.icons} alt='nnn' src={message}></img>
                          </i>
                          <p className={Styles.asas}>
                          support@devsdesign.com
                          infoname@gmail.com
                          </p>
                      </li>
                  </ul>
              </div>

              <div className={Styles.box3}>
              <h1 className={Styles.title}>OUR SERVICES</h1>
              <ul className={Styles.addressbar}>
                <li>
                <i className={Styles.icon}>
                              <img className={Styles.icons} alt='nnn' src={list}></img>
                          </i>
                          <p className={Styles.asas}>
                              General Construction
                          </p>
                </li>

                <li>
                <i className={Styles.icon}>
                              <img className={Styles.icons} alt='nnn' src={list}></img>
                          </i>
                          <p className={Styles.asas}>
                              Property Maintainence
                          </p>
                </li>

                <li>
                <i className={Styles.icon}>
                              <img className={Styles.icons} alt='nnn' src={list}></img>
                </i>
                          <p className={Styles.asas}>
                              Project Managements
                          </p>

                </li>

                <li>
                <i className={Styles.icon}>
                              <img className={Styles.icons} alt='nnn' src={list}></img>
                </i>
                          <p className={Styles.asas}>
                          Virtual Design & Build
                          </p>
                </li>

                
              </ul>
              </div>

              <div className={Styles.box4}>
              <h1 className={Styles.title}>NEWSLETTER</h1>
              <p className={Styles.asas}>
              Tetur adipiscing elit, sed
               do eiusmod tempor in cididunt
                ut labore.
              </p>
              <p className={Styles.asas}>
                <input className={Styles.asas1} type="email" placeholder='enter email...' />
                <input className={Styles.asas2} type="submit" /> 
              </p>

              
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default footer


