import React, { Component } from "react";
import Banner from "../../components/Jumbotron/Jumbotron";
import BigQuote from "../../components/BigQuote/BigQuote";
import About from "../../components/About/About";
import MyCarousel from "../../components/Facilities/Facilities";
import Resources from "../../components/Resources/Resources";
import Clients from "../../components/Clients/Clients";
import Contact from "../../components/Contact/Contact";
import Projects from "../../components/Projects/Projects";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import scrollToComponent from "react-scroll-to-component";
import "./Home.css";
import Model from "../../components/model/Model";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      navCollapsed: true,
      showNavbar: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center bar-nav navbar-web fixed-top">
          <ul className="navbar-nav">
            <li className="nav-item ml-3 mr-3">
              <NavItem>
                <NavLink
                  onClick={() =>
                    scrollToComponent(this.WhoWeAre, {
                      offset: -100,
                      align: "top",
                      duration: 500,
                      ease: "inCirc",
                    })
                  }
                  className="footer-nav"
                >
                  WHO WE ARE
                </NavLink>
              </NavItem>
            </li>
            <li className="nav-item ml-3 mr-3">
              <NavItem>
                <NavLink
                  onClick={() =>
                    scrollToComponent(this.WhatWeDo, {
                      offset: -20,
                      align: "top",
                      duration: 500,
                      ease: "inCirc",
                    })
                  }
                >
                  WHAT WE DO
                </NavLink>
              </NavItem>
            </li>
            <li className="nav-item ml-3 mr-3">
              <NavItem>
                <NavLink
                  onClick={() =>
                    scrollToComponent(this.OurProjects, {
                      offset: -20,
                      align: "top",
                      duration: 1000,
                      ease: "inCirc",
                    })
                  }
                >
                  PROJECTS
                </NavLink>
              </NavItem>
            </li>
            <li className="nav-item margin-logo">
              <NavItem>
                <NavbarBrand
                  onClick={() =>
                    scrollToComponent(this.Home, {
                      offset: -70,
                      align: "top",
                      duration: 1000,
                      ease: "inCirc",
                    })
                  }
                >
                  <img
                    src={"https://riarariara.b-cdn.net/IMG_0462.PNG"}
                    className="logo-riara"
                    alt="logo-riara"
                  />
                </NavbarBrand>
              </NavItem>
            </li>
            <li className="nav-item ml-3 mr-3">
              <NavItem>
                <NavLink
                  onClick={() =>
                    scrollToComponent(this.Resources, {
                      offset: -30,
                      align: "top",
                      duration: 1000,
                      ease: "inCirc",
                    })
                  }
                >
                  RECOURCES
                </NavLink>
              </NavItem>
            </li>
            <li className="nav-item ml-3 mr-3">
              <NavItem
                onClick={() =>
                  scrollToComponent(this.Clients, {
                    offset: -70,
                    align: "top",
                    duration: 1000,
                    ease: "inCirc",
                  })
                }
              >
                <NavLink>CLIENTS</NavLink>
              </NavItem>
            </li>
            <li className="nav-item ml-3 mr-3">
              <NavItem
                onClick={() =>
                  scrollToComponent(this.GetInTouch, {
                    offset: -100,
                    align: "top",
                    duration: 1000,
                    ease: "inCirc",
                  })
                }
              >
                <NavLink>GET IN TOUCH</NavLink>
              </NavItem>
            </li>
          </ul>
        </nav>
        <Navbar
          color="light"
          className="fixed-top navbar-mobile"
          light
          expand="md"
        >
          <NavbarBrand href="/">
            <img
              src={"https://riarariara.b-cdn.net/IMG_0462.PNG"}
              className="logo-riara"
              alt="logo-riara"
            />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} className="mr-auto" />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  onClick={() =>
                    scrollToComponent(this.WhoWeAre, {
                      offset: 420,
                      align: "top",
                      duration: 500,
                      ease: "inCirc",
                    })
                  }
                >
                  WHO WE ARE
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={() =>
                    scrollToComponent(this.WhatWeDo, {
                      offset: -280,
                      align: "top",
                      duration: 500,
                      ease: "inCirc",
                    })
                  }
                >
                  WHAT WE DO
                </NavLink>
              </NavItem>
              <NavItem
                onClick={() =>
                  scrollToComponent(this.OurProjects, {
                    offset: -250,
                    align: "top",
                    duration: 500,
                    ease: "inCirc",
                  })
                }
              >
                <NavLink>PROJECTS</NavLink>
              </NavItem>
              <NavItem
                onClick={() =>
                  scrollToComponent(this.Resources, {
                    offset: -280,
                    align: "top",
                    duration: 500,
                    ease: "inCirc",
                  })
                }
              >
                <NavLink>RESOURCES</NavLink>
              </NavItem>
              <NavItem
                onClick={() =>
                  scrollToComponent(this.Clients, {
                    offset: -270,
                    align: "top",
                    duration: 500,
                    ease: "inCirc",
                  })
                }
              >
                <NavLink>CLIENTS</NavLink>
              </NavItem>
              <NavItem
                onClick={() =>
                  scrollToComponent(this.GetInTouch, {
                    offset: -300,
                    align: "top",
                    duration: 500,
                    ease: "inCirc",
                  })
                }
              >
                <NavLink>GET IN TOUCH</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <section
          className="Home"
          ref={(section) => {
            this.Home = section;
          }}
        >
          <Banner />
        </section>
        <BigQuote />
        <section
          className="WhoWeAre"
          ref={(section) => {
            this.WhoWeAre = section;
          }}
        >
          <About />
        </section>
        <div style={{height:"800px", display:"block"}}>
          <Model />
        </div>
        <Model />
        <section
          className="WhatWeDo"
          ref={(section) => {
            this.WhatWeDo = section;
          }}
        >
          <MyCarousel />
        </section>
        <section
          className="OurProjects"
          ref={(section) => {
            this.OurProjects = section;
          }}
        >
          <Projects />
        </section>
        <section
          className="Resources"
          ref={(section) => {
            this.Resources = section;
          }}
        >
          <Resources />
        </section>
        <section
          className="Clients"
          ref={(section) => {
            this.Clients = section;
          }}
        >
          <Clients />
        </section>
        {/* <div>{this.model()}</div> */}
        <section
          className="GetInTouch"
          ref={(section) => {
            this.GetInTouch = section;
          }}
        >
          <Contact />
        </section>
        <div className="footer-wrapper">
          <div className="footer-overlay">
            <div className="container footer-inner">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <hr style={{ backgroundColor: "white" }} />
                  </div>
                </div>
              </div>
              <div className="row justify-content-center text-center">
                <div className="col-6 col-md-2">
                  <NavLink
                    onClick={() =>
                      scrollToComponent(this.WhoWeAre, {
                        offset: -200,
                        align: "top",
                        duration: 500,
                        ease: "inCirc",
                      })
                    }
                    className="footer-nav"
                  >
                    WHO WE ARE
                  </NavLink>
                </div>
                <div className="col-6 col-md-2">
                  <NavLink
                    onClick={() =>
                      scrollToComponent(this.WhatWeDo, {
                        offset: -200,
                        align: "top",
                        duration: 500,
                        ease: "inCirc",
                      })
                    }
                    style={{ cursor: "pointer" }}
                    className="footer-nav"
                  >
                    WHAT WE DO
                  </NavLink>
                </div>
                <div className="col-6 col-md-2">
                  <NavLink
                    onClick={() =>
                      scrollToComponent(this.OurProjects, {
                        offset: -200,
                        align: "top",
                        duration: 500,
                        ease: "inCirc",
                      })
                    }
                    style={{ cursor: "pointer" }}
                    className="footer-nav"
                  >
                    PROJECTS
                  </NavLink>
                </div>
                <div className="col-6 col-md-2">
                  <NavLink
                    onClick={() =>
                      scrollToComponent(this.GetInTouch, {
                        offset: -200,
                        align: "top",
                        duration: 500,
                        ease: "inCirc",
                      })
                    }
                    style={{ cursor: "pointer" }}
                    className="footer-nav"
                  >
                    CONTACT
                  </NavLink>
                </div>
              </div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <hr style={{ backgroundColor: "white" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
