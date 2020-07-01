import React from "react";
import "./Clients.css";
import papiton from "../../assets/clients/3.jpg";
import sulsel from "../../assets/clients/Logo-Kabupaten-Bulukumba-Sulawesi-Selatan.jpg";
import anjani from "../../assets/clients/anjanivoyage_PNG.jpg";
import putrabahari from "../../assets/clients/putrabahari.PNG";
import vinca from "../../assets/clients/vinca.jpg";

const Clients = () => {
  return (
    <>
      <div className="clients-wrapper" style={{ backgroundColor: "white" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-5 title-section">
              <p className="subtitle-about">O U R &nbsp;  V A L U E D</p>
              <h1 className="title-about">CLIENTS</h1>
            </div>
          </div>
          <div className="row justify-content-center text-center flex-wrap align-items-center mt-5">
            <div className="col-4 col-md-2">
              <img src={papiton} alt="" className="client-collab" />
            </div>
            <div className="col-4 col-md-2">
              <img src={sulsel} alt="" className="client-collab" />
            </div>
            <div className="col-4 col-md-2">
              <img src={anjani} alt="" className="client-collab" />
            </div>
            <div className="col-4 col-md-2">
              <img src={putrabahari} alt="" className="client-collab" />
            </div>
            <div className="col-4 col-md-2">
              <img src={vinca} alt="" className="client-collab" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
