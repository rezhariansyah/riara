import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import resourcesImg from "../../assets/resources/DSC06552.jpg";
import "./Projects.css";
import Modals from "./Modals";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Projects = () => {
  return (
    <div className="container">
      <div className="row justify-content-center mb-5">
        <div className="col-md-5 title-section">
          <p className="subtitle-about">O U R</p>
          <h1 className="title-about">PROJECTS</h1>
        </div>
      </div>
      <Carousel responsive={responsive}>
        <div className="row justify-content-center container-resources project-margin">
          <div className="col-md-6 p-0">
            <img
              src={resourcesImg}
              className="about-image-1 project-height"
              alt="..."
            />
          </div>
          <div className="col-md-6">
            <div className="about-title">
              <h1 className="mt-3">PAPITON LOPI</h1>
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
              <Modals />
            </div>
          </div>
        </div>
        <div className="row justify-content-center container-resources project-margin">
          <div className="col-md-6 p-0">
            <img
              src={resourcesImg}
              className="about-image-1 project-height"
              alt="..."
            />
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
        <div className="row justify-content-center container-resources project-margin">
          <div className="col-md-6 p-0">
            <img
              src={resourcesImg}
              className="about-image-1 project-height"
              alt="..."
            />
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
        <div className="row justify-content-center container-resources project-margin">
          <div className="col-md-6 p-0">
            <img
              src={resourcesImg}
              className="about-image-1 project-height"
              alt="..."
            />
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
      </Carousel>
    </div>
  );
};

export default Projects;
