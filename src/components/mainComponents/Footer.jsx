import React from 'react';
import wifi from "../../assets/images/wifi.svg"
import x from "../../assets/images/twiter.svg"
import s3 from "../../assets/images/s3.svg"
import facebook from "../../assets/images/facebook.svg"
import logoFooter from "../../assets/images/logoFooter.png"
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer d-flex flex-column flex-lg-row">
               <div className="left d-flex flex-column flex-lg-row">
                  <div className="right-min">
                        <img src={logoFooter} alt="icon" />
                        <span>copyright 2020 | NBC NEWS</span>
                    </div>
                    <div className="left-min ">
                        <Link className="term">Privacy Policy</Link>
                        <Link className="term">Do not sell my personal info</Link>
                        <Link className="term">Terms of Service</Link>
                        <Link className="term">nbcnews.com Site Map</Link>
                    </div>
               </div>
                <div className="right">
                    <div className="nav-footer">
                      <Link className='footer-item'>About</Link>
                      <Link className='footer-item'>Contact</Link>
                      <Link className='footer-item'>Careers</Link>
                      <Link className='footer-item'>Coupons</Link>
                    </div>
                    <div className="social">
                      <img src={wifi} alt="icon" />
                      <img src={x} alt="icon" />
                      <img src={s3} alt="icon" />
                      <img src={facebook} alt="icon" />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
