import React from "react";
import "./About.css";
import aboutImage1 from "../../assets/about/image1.jpg";
import aboutImage2 from "../../assets/about/image2.jpg";
import aboutImage3 from "../../assets/about/image3.jpg";

const About = () => {
  return (
    <div className="container container-about">
      <div className="row">
        <div className="col-md-7">
          <div className="row">
            <div className="col-md-12">
              <img className="about-image-1" src={aboutImage1} alt="..." />
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-md-6 pr-0">
              <img className="about-image-2" src={aboutImage2} alt="..." />
            </div>
            <div className="col-6 col-md-6 pl-0">
              <img className="about-image-2" src={aboutImage3} alt="..." />
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="container">
            <div className="about-title">
              <h1 className="mt-3">WHO WE ARE</h1>
              <p className="subtitle">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>

            <br />
            <div className="about-description">
              <p>
                Established in 2005 in Batam, Indonesia, PT. Bahtera Bahari
                Shipyard (BBS) traces its history building quality ships. From
                tankers to luxury liveboard vessels, from 8 hectares expanded to
                52 hectares compacted ground shipyard with approximately 320
                meters of sea frontage, with up to 20 meters draft and concrete
                flooring, we can accommodate various projects of all sizes at
                any point.
              </p>
              <p>
                Established in 2005 in Batam, Indonesia, PT. Bahtera Bahari
                Shipyard (BBS) traces its history building quality ships. From
                tankers to luxury liveboard vessels, from 8 hectares expanded to
                52 hectares compacted ground shipyard with approximately 320
                meters of sea frontage, with up to 20 meters draft and concrete
                flooring, we can accommodate various projects of all sizes at
                any point.
              </p>
              <p>
                Established in 2005 in Batam, Indonesia, PT. Bahtera Bahari
                Shipyard (BBS) traces its history building quality ships. From
                tankers to luxury liveboard vessels, from 8 hectares expanded to
                52 hectares compacted ground shipyard with approximately 320
                meters of sea frontage, with up to 20 meters draft and concrete
                flooring, we can accommodate various projects of all sizes at
                any point.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
