import React from "react";
import autoCad from "../../assets/tools/autocad.png";
import maxsuft from "../../assets/tools/maxsuft.png";
import office from "../../assets/tools/office.png";
import rhino from "../../assets/tools/rhino.png";
import roomle from "../../assets/tools/roomle.jpeg";
import sketchup from "../../assets/tools/sketchup.png";
import "./Tools.css";

const Tools = () => {
  return (
    <>
      <div
        className="clients-wrapper"
        style={{ backgroundColor: "white", fontFamily: "orpheuspro, serif" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-5 tools-section">
              <p className="subtitle-about">D E S I G N</p>
              <h1 className="title-about">TOOLS</h1>
            </div>
          </div>
          <div className="row justify-content-center tools-margin text-center flex-wrap align-items-center ml-4 mr-4">
            <div className="col-4 col-md-2 mt-3">
              <img src={autoCad} alt="" className="tools-img" />
              <p className="mt-3 tools-name">AutoCad</p>
            </div>
            <div className="col-4 col-md-2 mt-3">
              <img src={maxsuft} alt="" className="tools-img" />
              <p className="mt-3 tools-name">Maxsurf</p>
            </div>
            <div className="col-4 col-md-2 mt-3">
              <img src={office} alt="" className="tools-img" />
              <p className="mt-3 tools-name">Ms Office</p>
            </div>
            <div className="col-4 col-md-2 mt-3">
              <img src={rhino} alt="" className="tools-img" />
              <p className="mt-3 tools-name">Rhinoceros</p>
            </div>
            <div className="col-4 col-md-2 mt-3">
              <img src={roomle} alt="" className="tools-img" />
              <p className="mt-3 tools-name">Roomle</p>
            </div>
            <div className="col-4 col-md-2 mt-3">
              <img src={sketchup} alt="" className="tools-img" />
              <p className="mt-3 tools-name">Sketchup</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tools;
