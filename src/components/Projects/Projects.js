import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import anjani from "../../assets/projects/IMG_0579.JPG";
import "./Projects.css";
import Project1 from "../Modals/Project1";
import Project2 from "../Modals/Project2";
import Project3 from "../Modals/Project3";
import Project4 from "../Modals/Project4";
// import Model from "../model/Model";

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
    <>
      <div className="container" style={{ padding: "0px" }}>
        <div
          className="row justify-content-center resources-margin"
          style={{ fontFamily: "orpheuspro, serif" }}
        >
          <div className="col-md-5 title-section">
            <p className="subtitle-about">O U R</p>
            <h1 className="title-about">PROJECTS</h1>
          </div>
        </div>
        <Carousel responsive={responsive} infinite={true}>
          <div className="row justify-content-center container-resources project-margin">
            <div className="col-md-6 p-0">
              <img
                src="https://res.cloudinary.com/dewnmhir6/image/upload/v1595227301/riara/projects/papiton-lopi_ob5nnn.jpg"
                className="project-img img-fluid"
                alt="..."
              />
            </div>
            <div className="col-md-6 caption-projects">
              <div className="about-title">
                <h1
                  className="mt-3"
                  style={{ fontFamily: "orpheuspro, serif" }}
                >
                  PAPITON LOPI
                </h1>
                <p
                  className="subtitle"
                  style={{
                    fontFamily: "orpheuspro, serif",
                    fontSize: "larger",
                  }}
                >
                  Begin your odyssey
                </p>
              </div>
              <div className="about-description">
                <p style={{ fontFamily: "orpheuspro, serif" }}>
                  Our First Masterpiece. Wooden boat for leisure needs. Designed
                  and constructed to meet the standards for both luxury living
                  and stability. This boat is incredibly stable on a rough sea
                  for the guest comfort. We design special features that are
                  very Instagramable "Bow Spirit".
                </p>
                <div className="mobileproject">
                  <a
                    href="https://www.sailwithpapiton.com/"
                    style={{
                      textDecoration: "none",
                      color: "#2A2E32",
                      fontFamily: "orpheuspro, serif",
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.sailwithpapiton.com
                  </a>
                  <br />
                  <br />
                  <Project1 />
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center container-resources project-margin">
            <div className="col-md-6 p-0">
              <img
                src="https://res.cloudinary.com/dewnmhir6/image/upload/v1595227305/riara/projects/papiton-duwa_vr8wdj.jpg"
                className="project-img img-fluid"
                alt="..."
              />
            </div>
            <div className="col-md-6 caption-projects">
              <div className="about-title">
                <h1
                  className="mt-3"
                  style={{ fontFamily: "orpheuspro, serif" }}
                >
                  PAPITON DUWA
                </h1>
                <p
                  className="subtitle"
                  style={{
                    fontFamily: "orpheuspro, serif",
                    fontSize: "larger",
                  }}
                >
                  Begin your odyssey
                </p>
              </div>
              <div className="about-description">
                <p style={{ fontFamily: "orpheuspro, serif" }}>
                  Sister's of Papiton Lopi. Recretiaonal phinisi boat can
                  accommodate up to 12 guest in beautifully furnished ensuite
                  cabins. As a leisure boat, this boat is perfect for traveller.
                  Sailing area at Komodo National Park, Labuan Bajo, Indonesia.
                </p>
                <div className="mobileproject">
                  <a
                    href="https://www.sailwithpapiton.com/"
                    style={{
                      textDecoration: "none",
                      color: "#2A2E32",
                      fontFamily: "orpheuspro, serif",
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.sailwithpapiton.com
                  </a>
                  <br />
                  <br />
                  <Project2 />
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center container-resources project-margin">
            <div className="col-md-6 p-0">
              <img
                src="https://res.cloudinary.com/dewnmhir6/image/upload/v1595227311/riara/projects/vinca_bxhevl.jpg"
                className="project-img img-vinca img-fluid"
                alt="..."
              />
            </div>
            <div className="col-md-6 caption-projects">
              <div className="about-title">
                <h1
                  className="mt-3"
                  style={{ fontFamily: "orpheuspro, serif" }}
                >
                  VINCA
                </h1>
                <p
                  className="subtitle"
                  style={{
                    fontFamily: "orpheuspro, serif",
                    fontSize: "larger",
                  }}
                >
                  A journey to wonderfull place
                </p>
              </div>
              <div className="about-description">
                <p style={{ fontFamily: "orpheuspro, serif" }}>
                  Our2020 project. This boat can accomodate up to 16 guest in
                  Japanesse style Cabins. With relatively wider beam designed,
                  this boat has a very good construction strength. We also sort
                  the best quality of wood material. Soon launching in November
                  2020. See you on the sea.
                </p>
                <div className="mobileproject">
                  <p style={{ fontFamily: "orpheuspro, serif" }}>
                    Website coming soon
                  </p>
                  <Project3 />
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center container-resources project-margin">
            <div className="col-md-6 p-0">
              <img src={anjani} className="project-img img-fluid" alt="..." />
            </div>
            <div className="col-md-6 caption-projects">
              <div className="about-title">
                <h1
                  className="mt-3"
                  style={{ fontFamily: "orpheuspro, serif" }}
                >
                  ANJANI VOYAGE
                </h1>
                <p
                  className="subtitle"
                  style={{
                    fontFamily: "orpheuspro, serif",
                    fontSize: "larger",
                  }}
                >
                  Your trip solution
                </p>
              </div>
              <div className="about-description">
                <p style={{ fontFamily: "orpheuspro, serif" }}>
                  Designed to meet the standards for luxury diving boat. As a
                  dive liveboard, it has several special features included for
                  diving enthusiast. With a beam of 6 meters, this boat has a
                  fairly wide room. Plan for start building in 2021.
                </p>
                <div className="mobileproject">
                  <p style={{ fontFamily: "orpheuspro, serif" }}>
                    Website coming soon
                  </p>
                  <Project4 />
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      {/* <Model /> */}
    </>
  );
};

export default Projects;
