import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import logo from "../../assets/logo/IMG_0462.PNG";
import "./Header.css";

const Header = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center bar-nav navbar-web fixed-top">
        <ul className="navbar-nav">
          <li className="nav-item ml-3 mr-3">
            <NavItem>
              <NavLink>WHO WE ARE</NavLink>
            </NavItem>
          </li>
          <li className="nav-item ml-3 mr-3">
            <NavItem>
              <NavLink>WHAT WE DO</NavLink>
            </NavItem>
          </li>
          <li className="nav-item ml-3 mr-3">
            <NavItem>
              <NavLink>PROJECTS</NavLink>
            </NavItem>
          </li>
          <li className="nav-item margin-logo">
            <NavItem>
              <NavbarBrand href="/">
                <img src={logo} className="logo-riara" alt="logo-riara" />
              </NavbarBrand>
            </NavItem>
          </li>
          <li className="nav-item ml-3 mr-3">
            <NavItem>
              <NavLink>RECOURCES</NavLink>
            </NavItem>
          </li>
          <li className="nav-item ml-3 mr-3">
            <NavItem>
              <NavLink>CLIENTS</NavLink>
            </NavItem>
          </li>
          <li className="nav-item ml-3 mr-3">
            <NavItem>
              <NavLink>GET IN TOUCH</NavLink>
            </NavItem>
          </li>
        </ul>
      </nav>

      <Navbar color="light" light className="navbar-mobile fixed-top">
        <NavbarBrand href="/">
          <img src={logo} className="logo-riara" alt="logo-riara" />
        </NavbarBrand>
        <NavbarToggler
          onClick={toggleNavbar}
          className="mr-2 mr-auto"
          style={{ height: "55px" }}
        />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">WHO WE ARE</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">WHAT WE DO</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">PROJECTS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">RECOURCES</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">CLIENTS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">GET IN TOUCH</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default Header;
