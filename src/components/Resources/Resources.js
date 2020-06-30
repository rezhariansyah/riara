import React from "react";
import "./Resources.css";
import resourcesImg from "../../assets/resources/DSC06552.jpg";

const Resources = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-5 title-section">
            <p className="subtitle-about">H U M A N</p>
            <h1 className="title-about">RESOURCES</h1>
          </div>
        </div>
      </div>
      <div className="container container-resources">
        <div className="row justify-content-center">
          <div className="col-md-6 p-0">
            <img src={resourcesImg} className="about-image-1" alt="..." />
          </div>
          <div className="col-md-6">
            <div className="about-title">
              <h1 className="mt-3">OUR TEAM</h1>
              <p className="subtitle">
                They are not human resources. They are resourceful humans
              </p>
            </div>
            <div className="about-description">
              <p>
                As one of the larger shipyard company in Batam, we employ
                highly-skilled and well-rounded staff as we emphasize on fitting
                the right person to the right job to ensure customers’
                satisfaction. The company’s growth is largely attributed to
                motivating and empowering our employees at all levels, ensuring
                that every single member of our team feels fulfilled and
                enriched in their day-to-day operations. Besides that, training
                opportunities are frequently provided internally and
                supplemented with sponsored courses by relevant providers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resources;
