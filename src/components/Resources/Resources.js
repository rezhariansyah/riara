import React from "react";
import "./Resources.css";
import Carousel from "react-multi-carousel";

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

const Resources = () => {
  return (
    <>
      <div className="container" style={{ fontFamily: "orpheuspro, serif" }}>
        <div className="row justify-content-center resources-margin">
          <div className="col-md-5 title-section">
            <p className="subtitle-about">O U R</p>
            <h1 className="title-about">TEAM</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <Carousel responsive={responsive} infinite={true}>
          <div
            className="container container-resources"
            style={{ fontFamily: "orpheuspro, serif" }}
          >
            <div className="row justify-content-center">
              <div className="col-md-6 p-0">
                <img
                  src="https://riarariara.b-cdn.net/resources.jpg"
                  className="about-image-1"
                  style={{ borderRadius: "10px" }}
                  alt="..."
                />
              </div>
              <div className="col-md-6">
                <div className="about-title">
                  <h1 className="mt-3 mb-3">HUMAN RESOURCES</h1>
                  <p className="subtitle" style={{ fontSize: "larger" }}>
                    Together Everyone Accomplish More
                  </p>
                </div>
                <div className="about-description">
                  <p>
                    We employ highly skilled and well-rounded staff as we
                    emphasize on fitting the right person to the right job to
                    ensure customer's satisfaction.
                  </p>
                  <p>
                    The Company's growth is largely attributed to motivating and
                    empowering our employees at all levels, ensuring that every
                    single member of our team feels fulfilled and enriched in
                    their day-to-day operations. Besides that, training
                    opportunities are frequently provided internally and
                    supplemented with sponsored courses by relevant providers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="container container-resources"
            style={{ fontFamily: "orpheuspro, serif" }}
          >
            <div className="row justify-content-center">
              <div className="col-md-6 p-0">
                <img
                  src="https://riarariara.b-cdn.net/resources-1.jpg"
                  className="about-image-1"
                  style={{ borderRadius: "10px" }}
                  alt="..."
                />
              </div>
              <div className="col-md-6">
                <div className="about-title">
                  <h1 className="mt-3 mb-3">DIRECTOR</h1>
                  <p className="subtitle" style={{ fontSize: "larger" }}>
                    Baginda Sitto Siregar, ST
                  </p>
                </div>
                <div className="about-description">
                  <p>
                    Innovation, Consistency, and always smile. 3 things that
                    become the principle of work. He is a graduate from
                    Hasanuddin University of Naval Architecture.
                  </p>
                  <p>
                    He always puts himself as a traveler when designing. So what
                    travelers want on vacation will be as they imagine. Comfort,
                    best position for enjoy sunset, instagramable spots, and
                    best sailing experience.
                  </p>
                </div>
                <div>
                  <a
                    href="https://www.bagindasitto.com/"
                    style={{
                      textDecoration: "none",
                      color: "#2A2E32",
                      fontFamily: "orpheuspro, serif",
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.bagindasitto.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="container container-resources"
            style={{ fontFamily: "orpheuspro, serif" }}
          >
            <div className="row justify-content-center">
              <div className="col-md-6 p-0">
                <img
                  src="https://riarariara.b-cdn.net/resouces-2.JPG"
                  className="about-image-1"
                  style={{ borderRadius: "10px" }}
                  alt="..."
                />
              </div>
              <div className="col-md-6">
                <div className="about-title">
                  <h1 className="mt-3 mb-3">PANRITA</h1>
                  <p className="subtitle" style={{ fontSize: "larger" }}>
                    That's mean Handyman, from Bahasa Konjo
                  </p>
                </div>
                <div className="about-description">
                  <p>
                    Our handyman are native to Ara village. More than 10 years
                    of shipbuilding experience. We also regenerate our handyman.
                    in order to maintain the sustainability of the Phinisi{" "}
                    <br /><br/>
                    <i>#culturalpreservation</i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Resources;
