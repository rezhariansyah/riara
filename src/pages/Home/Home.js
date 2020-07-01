import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Jumbotron/Jumbotron";
import BigQuote from "../../components/BigQuote/BigQuote";
import About from "../../components/About/About";
import MyCarousel from "../../components/Facilities/Facilities";
import Resources from "../../components/Resources/Resources";
import Clients from "../../components/Clients/Clients";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";
import Projects from "../../components/Projects/Projects";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <BigQuote />
        <About />
        <MyCarousel />
        <Projects />
        <Resources />
        <Clients />
        <Contact />
        <Footer />
      </div>
    );
  }
}
