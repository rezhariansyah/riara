import React from "react";
import "./About.css";
import AboutModal from "../Modals/AboutModal";
import aboutImage1 from "../../assets/about/image1.jpg";
import aboutImage2 from "../../assets/about/image2.jpg";
import aboutImage3 from "../../assets/about/image3.jpg";
import integrity from "../../assets/icons/data-security.png";
import time from "../../assets/icons/hourglass.png";
import creativity from "../../assets/icons/knowledge.png";
import lessStress from "../../assets/icons/like.png";

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
              <img className="about-image-3" src={aboutImage3} alt="..." />
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="container">
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
                design interior
              </p>
              <div className="about-title mt-4">
                <h4 style={{ color: "#17A2BF" }}>Our Designs</h4>
              </div>

              <br />
            </div>
            <div className="about-description">
              <p>
                Our of box design makes our work different and unique. Making it
                easier for the ouwner to market the product. For the sake of
                preserving the environtment. we also maintain effient use of
                wood in the construction and eco - friendly machinging equipment
                for the oceans
              </p>
              <div className="about-mobile">
                <AboutModal />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-3 text-center core-title title-value">
          <p className="title-icon">Our Core Value</p>
        </div>
      </div>
      <div className="row justify-content-center text-center icon-wrapper">
        <div className="col-6 col-md-3">
          <img src={integrity} alt="..." className="icons-value" />
          <h5 className="sub-icons">Integrity</h5>
          <p className="desc-value">
            Integrity is consistently doing a job right with honesty, acting in
            a way that aligns with our core values
          </p>
        </div>
        <div className="col-6 col-md-3">
          <img src={time} alt="..." className="icons-value" />
          <h5 className="sub-icons">Time & Cost Savings</h5>
          <p className="desc-value">
            We maximize skill labor utilization by kitting and staging materials
            in production work areas
          </p>
        </div>
        <div className="col-6 col-md-3">
          <img src={creativity} alt="..." className="icons-value" />
          <h5 className="sub-icons">Creativity</h5>
          <p className="desc-value">
            Push for breakthrough innovations, explore the possibilities of the
            future
          </p>
        </div>
        <div className="col-6 col-md-3">
          <img src={lessStress} alt="..." className="icons-value" />
          <h5 className="sub-icons">Less Stress</h5>
          <p className="desc-value">
            We have a quality system and work standards that remove the
            hand-holding and stress often experienced with general fabricators
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
