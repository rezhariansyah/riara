import React, { Component } from "react";
import ReactCardCarousel from "react-card-carousel";
import imageCard1 from "../../assets/facilities/shipBuilding.jpg";
import imageCard2 from "../../assets/facilities/woodFabrication.jpg";
import imageCard3 from "../../assets/facilities/shipManagement.jpg";
import imageCard4 from "../../assets/facilities/navalArchitecture.jpg";
import imageCard5 from "../../assets/facilities/branding.jpg";
import imageCard6 from "../../assets/facilities/DSC09691.jpg";
import "./Facilities.css";
import Tools from "../Tools/Tools";

class MyCarousel extends Component {
  static get CONTAINER_STYLE() {
    return {
      position: "relative",
      height: "450px",
      width: "100%",
      display: "flex",
      flex: 1,
      justifyContent: "center",
    };
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-5 title-section">
              <p className="subtitle-about">W H A T</p>
              <h1 className="title-about">WE DO</h1>
            </div>
          </div>
        </div>
        <div style={MyCarousel.CONTAINER_STYLE}>
          <ReactCardCarousel autoplay={false} autoplay_speed={10000}>
            <div className="card card-facilities">
              <img
                className="card-img-top facility-image"
                src={imageCard1}
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center">Ship Building</h5>
                <p className="card-text desc-what-we-do">
                  It is our capability to build phinisi and fiberglass boat to
                  meet various demands for our clients. Riara Indonesia has
                  gained experience on building phinisi boat.
                </p>
              </div>
            </div>
            <div className="card card-facilities">
              <img
                className="card-img-top facility-image"
                src={imageCard2}
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center">Wood Fabrication</h5>
                <p className="card-text desc-what-we-do">
                  We offer specialist workshops and open fabrication are with
                  woodworking tools for made interior set
                </p>
              </div>
            </div>
            <div className="card card-facilities">
              <img
                className="card-img-top facility-image commersial"
                src={imageCard6}
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center">Commercial Services</h5>
                <p className="card-text desc-what-we-do">
                  With it's role as the independent assurance, Riara also
                  conducting QA & QC (second party) to ensure business the
                  customers running smoothly, guaranteed, safe and still
                  develop.
                </p>
              </div>
            </div>
            <div className="card card-facilities">
              <img
                className="card-img-top facility-image"
                src={imageCard4}
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center">Naval Architecture</h5>
                <p className="card-text desc-what-we-do">
                  We provide ship consultant services for design engineers, for
                  ship building needs. Sush as general arrangement, exterior and
                  interios design, 3D layout, intact stability, ship structure,
                  safety plan.
                </p>
              </div>
            </div>
            <div className="card card-facilities">
              <img
                className="card-img-top facility-image"
                src={imageCard3}
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center">Ship Management</h5>
                <p className="card-text desc-what-we-do">
                  We collaborate with tour and travel services, we will provide
                  advice for proper ship management. So we can confidently solve
                  it in the sea transportation business
                </p>
              </div>
            </div>
            <div className="card card-facilities">
              <img
                className="card-img-top facility-image"
                src={imageCard5}
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center">Branding</h5>
                <p className="card-text desc-what-we-do">
                  The most important part in marketing. We can also help you to
                  branding your boar. ranging from website creation to promotion
                </p>
              </div>
            </div>
          </ReactCardCarousel>
        </div>
        <Tools />
      </>
    );
  }
}

export default MyCarousel;
