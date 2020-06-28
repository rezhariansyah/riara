import React from "react";
import "./BigQuote.css";
// import example from "../../assets/example.jpeg"

const BigQuote = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-6 text-center">
        <div className="container">
          <p className="quote">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nulla
            quam, enim officiis maiores animi rerum.
          </p>
        </div>

        {/* <img src={example} alt=""/> */}
      </div>
    </div>
  );
};

export default BigQuote;
