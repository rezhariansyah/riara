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
                We believe that <span className="bold">customer</span>{" "}
                satisfaction is the greatest{" "}
                <span className="bold">achievment</span>
              </p>
              <p className="list-icon">
                <a
                  href="https://www.instagram.com/riara.indonesia/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-instagram icons" aria-hidden="true" />
                </a>

                <i className="fa fa-linkedin-square icons" aria-hidden="true" />
                <i
                  className="fa fa-pinterest-square icons"
                  aria-hidden="true"
                />
                <a href="mailto:hello@riara.co?subject=Hello, I want more info about the shipbuilding" rel="noopener noreferrer">
                  <i className="fa fa-envelope-o icons" aria-hidden="true" />
                </a>

                <a href="https://wa.link/jr8r6k" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-whatsapp icons" aria-hidden="true" />
                </a>
              </p>
            </div>
          </div>
        </Jumbotron>
      </div>
    </>
  );
};

export default Banner;
