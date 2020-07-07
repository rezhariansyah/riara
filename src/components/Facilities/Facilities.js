import React, { Component } from "react";
import ReactCardCarousel from "react-card-carousel";
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
                src="https://riarariara.b-cdn.net/shipBuilding.jpg"
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
                src="https://riarariara.b-cdn.net/woodFabrication.jpg"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center">Wood Fabrication</h5>
                <p className="card-text desc-what-we-do">
                  We offer specialist workshops and open fabrication are with
                  woodworking tools for made interior set. We can be your wood
                  funiture solution.
                </p>
              </div>
            </div>
            <div className="card card-facilities">
              <img
                className="card-img-top facility-image commersial"
                src="https://riarariara.b-cdn.net/DSC09691.jpg"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center" style={{fontSize:"18px"}}>Commercial Services</h5>
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
                src="https://riarariara.b-cdn.net/navalArchitecture.jpg"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center">Naval Architecture</h5>
                <p className="card-text desc-what-we-do">
                  We provide ship consultant services for design engineers, for
                  ship building needs. Such as general arrangement, exterior and
                  interios design, 3D layout, intact stability, ship structure,
                  safety plan.
                </p>
              </div>
            </div>
            <div className="card card-facilities">
              <img
                className="card-img-top facility-image"
                src="https://riarariara.b-cdn.net/shipManagement.jpg"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center">Ship Management</h5>
                <p className="card-text desc-what-we-do">
                  We collaborate with tour and travel services, we will provide
                  advice for proper ship management. So we can confidently solve
                  it in the sea transportation business.
                </p>
              </div>
            </div>
            <div className="card card-facilities">
              <img
                className="card-img-top facility-image"
                src="https://riarariara.b-cdn.net/branding.jpg"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center">Branding</h5>
                <p className="card-text desc-what-we-do">
                  The most important part in marketing. We can also help you to
                  branding your boat. Ranging from website creation to promotion.
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
