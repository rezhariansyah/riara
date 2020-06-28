import React, { Component } from "react";
import ReactCardCarousel from "react-card-carousel";
import imageCard1 from "../../assets/facilities/shipBuilding.jpg";
import imageCard2 from "../../assets/facilities/woodFabrication.jpg";
import imageCard3 from "../../assets/facilities/shipManagement.jpg";
import imageCard4 from "../../assets/facilities/navalArchitecture.jpg";
import imageCard5 from "../../assets/facilities/branding.jpg";
import "./OurServices.css";

class MyCarousel extends Component {
  static get CONTAINER_STYLE() {
    return {
      position: "relative",
      height: "600px",
      width: "100%",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "middle",
    };
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-5 title-section">
              <p className="subtitle-about">O U R</p>
              <h1 className="title-about">FACILITIES</h1>
            </div>
          </div>
        </div>
        <div style={MyCarousel.CONTAINER_STYLE}>
          <ReactCardCarousel autoplay={true} autoplay_speed={10000}>
            <div className="card card-facilities">
              <img
                className="card-img-top facility-image"
                src={imageCard1}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Ship Building</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam debitis, officia iure totam mollitia eius vitae nam
                  magni assumenda maxime repellat natus molestiae incidunt
                  cumque odio id excepturi sunt, quisquam omnis consectetur
                  distinctio laudantium. Quae exercitationem reiciendis aut,
                  temporibus eveniet architecto nihil porro qui totam nemo sint
                  quaerat, aspernatur facere.
                </p>
              </div>
            </div>
            <div className="card card-facilities">
              <img
                className="card-img-top facility-image"
                src={imageCard2}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Wood Fabrication</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam debitis, officia iure totam mollitia eius vitae nam
                  magni assumenda maxime repellat natus molestiae incidunt
                  cumque odio id excepturi sunt, quisquam omnis consectetur
                  distinctio laudantium. Quae exercitationem reiciendis aut,
                  temporibus eveniet architecto nihil porro qui totam nemo sint
                  quaerat, aspernatur facere.
                </p>
              </div>
            </div>
            <div className="card card-facilities">
              <img
                className="card-img-top facility-image"
                src={imageCard4}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Naval Architecture</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam debitis, officia iure totam mollitia eius vitae nam
                  magni assumenda maxime repellat natus molestiae incidunt
                  cumque odio id excepturi sunt, quisquam omnis consectetur
                  distinctio laudantium. Quae exercitationem reiciendis aut,
                  temporibus eveniet architecto nihil porro qui totam nemo sint
                  quaerat, aspernatur facere.
                </p>
              </div>
            </div>
            <div className="card card-facilities">
              <img
                className="card-img-top facility-image"
                src={imageCard3}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Ship Management</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam debitis, officia iure totam mollitia eius vitae nam
                  magni assumenda maxime repellat natus molestiae incidunt
                  cumque odio id excepturi sunt, quisquam omnis consectetur
                  distinctio laudantium. Quae exercitationem reiciendis aut,
                  temporibus eveniet architecto nihil porro qui totam nemo sint
                  quaerat, aspernatur facere.
                </p>
              </div>
            </div>
            <div className="card card-facilities">
              <img
                className="card-img-top facility-image"
                src={imageCard5}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Branding</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam debitis, officia iure totam mollitia eius vitae nam
                  magni assumenda maxime repellat natus molestiae incidunt
                  cumque odio id excepturi sunt, quisquam omnis consectetur
                  distinctio laudantium. Quae exercitationem reiciendis aut,
                  temporibus eveniet architecto nihil porro qui totam nemo sint
                  quaerat, aspernatur facere.
                </p>
              </div>
            </div>
          </ReactCardCarousel>
        </div>
      </>
    );
  }
}

export default MyCarousel;
