import React from "react";
import "./Contact.css";
import test from "../../assets/contact/map.png";

const Contact = () => {
  return (
    <>
      <div className="contact-wrapper">
        <div className="container container-about">
          <div className="row">
            <div className="col-md-3">
              <div className="container">
                <div className="about-title">
                  <h1 className="mt-3">CONTACT</h1>
                  <h1>DETAILS</h1>
                </div>

                <br />
                <div className="about-description">
                  <h5 style={{ color: "#17A2BF" }}>RIARA</h5>
                  <p>
                    Desa Ara <br /> Bulukumba <br /> Sulawesi Selatan <br />{" "}
                    Indonesia 95721 <br /> <br />
                    <i>hello@riara.co</i> <br /> Telp : +62 852 4463 1945 <br />{" "}
                    <br /> Indonesia Bussiness Hours <br /> Monday - Saturday{" "}
                    <br /> 08.00 AM - 05.00 PM (WITA)
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <img src={test} className="about-image-1" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
