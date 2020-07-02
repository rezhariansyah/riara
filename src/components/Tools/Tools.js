import React from "react";
import "./Tools.css";
import autocad from "../../assets/tools/autocad.jpg";
import maxsuft from "../../assets/tools/maxsuft.png";
import office from "../../assets/tools/office.png";
import rhino from "../../assets/tools/rhino.jpg";
import sketchup from "../../assets/tools/sketchup.png";
import roomle from "../../assets/tools/roomle.jpeg";

const Tools = () => {
  return (
    <>
      <div className="tools-wrapper">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-2 tools-section">
              <h4 className="title-tools">TOOLS</h4>
            </div>
          </div>
          <div className="row justify-content-center text-center flex-wrap align-items-center mt-5 pb-5 px-5">
            <div className="col-4 col-md-2">
              <img src={autocad} alt="" className="client-collab" />
            </div>
            <div className="col-4 col-md-2">
              <img src={maxsuft} alt="" className="client-collab" />
            </div>
            <div className="col-4 col-md-2">
              <img src={office} alt="" className="client-collab" />
            </div>
            <div className="col-4 col-md-2">
              <img src={rhino} alt="" className="client-collab" />
            </div>
            <div className="col-4 col-md-2">
              <img src={sketchup} alt="" className="client-collab" />
            </div>
            <div className="col-4 col-md-2">
              <img src={roomle} alt="" className="client-collab" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tools;
