import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Jumbotron/Jumbotron";
import BigQuote from "../../components/BigQuote/BigQuote";
import About from "../../components/About/About";
import MyCarousel from "../../components/OurServices/OurServices";

export default class Home extends Component {
  render() {
    return (
      <div style={{height:"800px"}}>
        <Header />
        <Banner />
        <BigQuote />
        <About />
        <MyCarousel />
      </div>
    );
  }
}
