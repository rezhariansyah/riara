import React from "react";
import { Jumbotron } from "reactstrap";
import "./Jumbotron.css";

const Banner = (props) => {
  return (
    <>
      <div className="wrapping-jumbotron">
        <Jumbotron className="jumbotron-body">
          <div className="overlay" />
          <div className="container">
            <div className="center-content">
              <h1>Hello Dunia</h1>
            </div>
          </div>
        </Jumbotron>
      </div>
    </>
  );
};

export default Banner;
