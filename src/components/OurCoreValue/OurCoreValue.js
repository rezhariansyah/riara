import React from "react";
import integrity from "../../assets/icons/data-security.png";
import time from "../../assets/icons/hourglass.png";
import creativity from "../../assets/icons/knowledge.png";
import lessStress from "../../assets/icons/like.png";
import "./OurCoreValue.css";

export default function OurCoreValue() {
  return (
    <div className="container-about wrapper-tools" style={{fontFamily:"orpheuspro, serif"}}>
      <div className="row justify-content-center">
        <div className="col-3 text-center core-title title-value">
          <p className="title-icon">Our Core Values</p>
        </div>
      </div>
      <div className="row justify-content-center text-center icon-wrapper">
        <div className="col-6 mt-3 col-lg-2">
          <img src={integrity} alt="..." className="icons-value" />
          <h5 className="sub-icons">Integrity</h5>
          <p className="desc-value">
            Integrity is consistently doing a job right with honesty, acting in
            a way that aligns with our core values
          </p>
        </div>
        <div className="col-6 mt-3 col-lg-2">
          <img src={time} alt="..." className="icons-value" />
          <h5 className="sub-icons">Time & Cost Savings</h5>
          <p className="desc-value">
            We maximize skill labor utilization by kitting and staging materials
            in production work areas
          </p>
        </div>
        <div className="col-6 mt-3 col-lg-2">
          <img src={creativity} alt="..." className="icons-value" />
          <h5 className="sub-icons">Creativity</h5>
          <p className="desc-value">
            Push for breakthrough innovations, explore the possibilities of the
            future
          </p>
        </div>
        <div className="col-6 mt-3 col-lg-2">
          <img src={lessStress} alt="..." className="icons-value" />
          <h5 className="sub-icons">Less Stress</h5>
          <p className="desc-value">
            We have a quality system and work standards that relieve stress
            often experienced with our engineer and handyman
          </p>
        </div>
      </div>
    </div>
  );
}
