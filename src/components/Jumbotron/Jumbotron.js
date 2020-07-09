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
                Sustainable <span className="bold">Boat Raiser</span> Company.{" "}
                <br />
                <span className="subQuote">
                  <span className="bold">One Stop</span> to build your{" "}
                  <span className="bold">FLOATING DREAM.</span>
                </span>
              </p>
              <p className="list-icon">
                <a
                  href="https://www.instagram.com/riara.phinisi/"
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
                <a
                  href="mailto:hello@riara.co?subject=Hello, I want more info about the Phinisi"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-envelope-o icons" aria-hidden="true" />
                </a>

                <a
                  href="https://wa.link/48ta3n"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
