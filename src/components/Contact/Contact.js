import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact-wrapper">
        <div className="container container-about">
          <div className="row">
            <div className="col-md-3">
              <div className="container" style={{ paddingRight: "0px" }}>
                <div className="contact-title">
                  <p style={{fontFamily:"orpheuspro, serif"}}>
                    LET'S TALK WITH OUR ENGINEER OR PRODUCT MANAGER
                  </p>
                </div>

                <br />
                <div className="about-description detail-contact mb-4">
                  <h5 style={{ color: "#17A2BF", fontFamily:"orpheuspro, serif" }}>RIARA</h5>
                  <p style={{fontFamily:"orpheuspro, serif"}}>
                    Desa Ara <br /> Bulukumba <br /> Sulawesi Selatan <br />{" "}
                    Indonesia 95721 <br /> <br />
                    <i>hello@riara.co</i> <br /> Telp : +62 852 4463 1945 <br />{" "}
                    <br /> Indonesia Bussiness Hours <br /> Monday - Saturday{" "}
                    <br /> 08.00 AM - 05.00 PM (WITA)
                  </p>
                  <button
                    type="button"
                    onClick={() => window.open("https://wa.link/48ta3n", "_blank")}
                    className="btn btn-warning"
                  >
                    LET'S TALK
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <img src="https://res.cloudinary.com/dewnmhir6/image/upload/v1595228925/riara/contact%20map/map_jhdobe.png" className="about-image-1" style={{borderRadius:"10px"}} alt="..." />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
