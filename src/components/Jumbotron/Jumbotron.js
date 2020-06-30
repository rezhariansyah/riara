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
              <p className="quote-banter">
                We believe that <span className="bold">customer</span> satisfaction is the
                greatest <span className="bold">achievment</span>
              </p>
            </div>
          </div>
        </Jumbotron>
      </div>
    </>
  );
};

export default Banner;
