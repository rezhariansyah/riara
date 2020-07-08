import React from "react";
import "./BigQuote.css";
// import example from "../../assets/example.jpeg"

const BigQuote = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-6 text-center">
        <div className="container">
          <p className="quote" style={{fontFamily:"orpheuspro, serif"}}>
            We can't control the weather, but we can control the schedule,
            quality, cost, and safety
            <br />
            <i className="hashtag" style={{fontFamily:"orpheuspro, serif"}}>#madebyexperience</i>
          </p>
        </div>

        {/* <img src={example} alt=""/> */}
      </div>
    </div>
  );
};

export default BigQuote;
