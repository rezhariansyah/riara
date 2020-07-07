import React from "react";
import "./Resources.css";

const Resources = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center resources-margin">
          <div className="col-md-5 title-section">
            <p className="subtitle-about">H U M A N</p>
            <h1 className="title-about">RESOURCES</h1>
          </div>
        </div>
      </div>
      <div className="container container-resources">
        <div className="row justify-content-center flex-wrap align-items-center">
          <div className="col-md-6 p-0">
            <img src="https://riarariara.b-cdn.net/DSC06552.jpg" className="about-image-1" alt="..." />
          </div>
          <div className="col-md-6">
            <div className="about-title">
              <h1 className="mt-3 mb-3">OUR TEAM</h1>
              <p className="subtitle">Together Everyone Accomplish More</p>
            </div>
            <div className="about-description">
              <p>
                We emply highly skilled and well-rounded staff as we emphasize
                on fitting the right person to the right job to ensure
                customer's saticsfaction.
              </p>
              <p>
                The Company's growth is largely attributed to motivating and
                empowering our employees at all levels, ensuring that every
                single member of our team feels fulfilled and enriched in thir
                day-to-day operations. Besides that, training opportunities are
                frequently provided internally and suplemented with sponsored
                courses by relevant providers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resources;
