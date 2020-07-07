import React from "react";
import "./About.css";
import AboutModal from "../Modals/AboutModal";
import OurCoreValue from "../OurCoreValue/OurCoreValue";

const About = () => {
  return (
    <>
      <div className="container container-about">
        <div className="row">
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-12">
                <img className="about-image-1" src="https://riarariara.b-cdn.net/image1.jpg" alt="..." />
              </div>
            </div>
            <div className="row">
              <div className="col-6 col-md-6 pr-0">
                <img className="about-image-2" src="https://riarariara.b-cdn.net/image2.jpg" alt="..." />
              </div>
              <div className="col-6 col-md-6 pl-0">
                <img className="about-image-3" src="https://riarariara.b-cdn.net/image3.jpg" alt="..." />
              </div>
            </div>
          </div>
          <div className="col-md-5 mobile-caption">
            <div className="about-title">
              <h1 className="mt-3">WHO WE ARE</h1>
              <h4 style={{ color: "#17A2BF" }}>Riara Indonesia</h4>
            </div>

            <br />
            <div className="about-description">
              <p>
                Established in 2020 in Bira, Indonesia, Riara Indonesia traces
                its history building quality ships. Riara provides shipbuilding
                solutions for Phinisi Boad & Fiberglass Boat. Our qualified and
                experienced in-house design and engineering team, as well as
                modern production, and quality check. We offer high grade
                products and services in new shipbuilding, remodeling, and
                design interior.
              </p>
              <div className="about-title mt-4">
                <h4 style={{ color: "#17A2BF" }}>Our Designs</h4>
              </div>

              <br />
            </div>
            <div className="about-description">
              <p>
                Out of box design makes our work different and unique. Making it
                easier for the owner to market the product. For the sake of
                preserving the environtment. We also maintain effient use of
                wood in the construction and eco - friendly machinging equipment
                for the oceans.
              </p>
              <div className="about-mobile">
                <AboutModal />
              </div>
            </div>
          </div>
        </div>
      </div>
      <OurCoreValue />
    </>
  );
};

export default About;
