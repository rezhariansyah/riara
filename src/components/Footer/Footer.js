import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-wrapper">
        <div className="footer-overlay">
          <div className="container footer-inner">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <hr style={{ backgroundColor: "white" }} />
                </div>
              </div>
            </div>
            <div className="row justify-content-center text-center">
              <div className="col-6 col-md-2">ABOUT US</div>
              <div className="col-6 col-md-2">FACILITIES</div>
              <div className="col-6 col-md-2">PROJECTS</div>
              <div className="col-6 col-md-2">CONTACT</div>
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <hr style={{ backgroundColor: "white" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
