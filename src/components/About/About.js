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
                <img
                  className="about-image-1"
                  src="https://riarariara.b-cdn.net/about-main.jpg"
                  alt="..."
                />
              </div>
            </div>
            <div className="row">
              <div className="col-6 col-md-6 pr-0">
                <img
                  className="about-image-2"
                  src="https://riarariara.b-cdn.net/about-1.jpg"
                  alt="..."
                />
              </div>
              <div className="col-6 col-md-6 pl-0">
                <img
                  className="about-image-3"
                  src="https://riarariara.b-cdn.net/about-2.jpg"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="col-md-5 mobile-caption">
            <div className="about-title">
              <h1
                className="mt-3"
                style={{
                  fontFamily: "orpheuspro, serif",
                }}
              >
                WHO WE ARE
              </h1>
              <h4 style={{ color: "#17A2BF", fontFamily: "orpheuspro, serif" }}>
                Riara Indonesia
              </h4>
            </div>

            <br />
            <div
              className="about-description"
              style={{ fontSize: "larger", fontFamily: "orpheuspro, serif" }}
            >
              <p>
                Established in 2020 in Bira, Indonesia, Riara Indonesia traces
                its history building quality ships. Riara provides shipbuilding
                solutions for Phinisi Boad & Fiberglass Boat. We offer
                high-grade products and services in new shipbuilding,
                remodeling, and design interior.
              </p>
              <div className="about-title mt-4">
                <h4
                  style={{ color: "#17A2BF", fontFamily: "orpheuspro, serif" }}
                >
                  Our Designs
                </h4>
              </div>

              <br />
            </div>
            <div
              className="about-description"
              style={{ fontSize: "larger", fontFamily: "orpheuspro, serif" }}
            >
              <p>
                'Out of the box' design makes our work different and unique.
                Making it easier for the owner to market the product. For the
                sake of preserving the environment. We also maintain efficient
                use of wood in the construction and eco-friendly machining
                equipment for the oceans.
              </p>
            </div>
            <div className="about-mobile">
              <AboutModal />
            </div>
          </div>
        </div>
      </div>
      <OurCoreValue />
    </>
  );
};

export default About;
