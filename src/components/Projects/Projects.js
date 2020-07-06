import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import papiton from "../../assets/projects/papitonLopi/papiton.jpg";
import lopiDuwa from "../../assets/projects/papitonDuwa/papiton-duwa.jpg";
import vinca from "../../assets/projects/vinca/vinca.jpg";
import anjani from "../../assets/projects/IMG_0579.JPG";
import "./Projects.css";
import Project1 from "../Modals/Project1";
import Project2 from "../Modals/Project2";
import Project3 from "../Modals/Project3";
import Project4 from "../Modals/Project4";

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
      <div className="container" style={{padding:"0px"}}>
        <div className="row justify-content-center resources-margin">
          <div className="col-md-5 title-section">
            <p className="subtitle-about">O U R</p>
            <h1 className="title-about">PROJECTS</h1>
          </div>
        </div>
        <Carousel responsive={responsive} infinite={true}>
          <div className="row justify-content-center container-resources project-margin">
            <div className="col-md-6 p-0">
              <img src={papiton} className="project-img img-fluid" alt="..."/>
            </div>
            <div className="col-md-6 caption-projects">
              <div className="about-title">
                <h1 className="mt-3">PAPITON LOPI</h1>
                <p className="subtitle">begin your odyssey</p>
              </div>
              <div className="about-description">
                <p>
                  Our First Masterpiece. Wooden boat for leisure needs. Designed
                  and constructed to meed the standards for both luxury living
                  and stability. This boat is incredibly stable on a rough sea
                  for the guest comfort. We design special features that are
                  very Instagramable "Bow Spirit"
                </p>
                <Project1 />
              </div>
            </div>
          </div>
          <div className="row justify-content-center container-resources project-margin">
            <div className="col-md-6 p-0">
              <img src={lopiDuwa} className="project-img img-fluid" alt="..."/>
            </div>
            <div className="col-md-6 caption-projects">
              <div className="about-title">
                <h1 className="mt-3">PAPITON DUWA</h1>
                <p className="subtitle">begin your odyssey</p>
              </div>
              <div className="about-description">
                <p>
                  Sister's of Papiton Lopi. Recretiaonal phinisi boat can
                  accommodate up to 12 guest in beautifully furnished ensuite
                  cabins. As a leisure boat, this boat is perfect for traveller.
                  Sailing are at Komodo National Park, Labuan Bajo, Indonesia.
                </p>
                <Project2 />
              </div>
            </div>
          </div>
          <div className="row justify-content-center container-resources project-margin">
            <div className="col-md-6 p-0">
              <img src={vinca} className="project-img img-fluid" alt="..."/>
            </div>
            <div className="col-md-6 caption-projects">
              <div className="about-title">
                <h1 className="mt-3">VINCA</h1>
                <p className="subtitle">A journey to wonderfull place</p>
              </div>
              <div className="about-description">
                <p>
                  Our2020 project. This boat can accomodate up to 16 guest in
                  Japanesse style Cabins. With relatively wider beam designed,
                  this boat has a very good construction strength. We also sort
                  the best quality of wood material. Soon launching in November
                  2020. See you on the sea
                </p>
                <Project3 />
              </div>
            </div>
          </div>
          <div className="row justify-content-center container-resources project-margin">
            <div className="col-md-6 p-0">
              <img src={anjani} className="project-img img-fluid" alt="..."/>
            </div>
            <div className="col-md-6 caption-projects">
              <div className="about-title">
                <h1 className="mt-3">ANJANI VOYAGE</h1>
                <p className="subtitle">Your trip solution</p>
              </div>
              <div className="about-description">
                <p>
                  Designed to meet the standards for luxury diving boat. As a
                  dive liveboard, it has several special features included for
                  diving ethusiast. With a beam of 6 meters, this boat has a
                  fairly wide room. Plan for start building on 2021
                </p>
                <Project4 />
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Projects;
