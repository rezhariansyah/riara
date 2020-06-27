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
import logo from "../../assets/logo/logo-riara.png";
import "./Header.css";

const Header = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center bar-nav navbar-web fixed-top">
        <ul className="navbar-nav">
          <li className="nav-item ml-3 mr-3">
            <NavItem>
              <NavLink>ABOUT</NavLink>
            </NavItem>
          </li>
          <li className="nav-item ml-3 mr-3">
            <NavItem>
              <NavLink>OUR SERVICES</NavLink>
            </NavItem>
          </li>
          <li className="nav-item ml-3 mr-3">
            <NavItem>
              <NavLink>FACILITY</NavLink>
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
              <NavLink>CONTACT</NavLink>
            </NavItem>
          </li>
          <li className="nav-item ml-3 mr-3">
            <NavItem>
              <NavLink>CLIENTS</NavLink>
            </NavItem>
          </li>
          <li className="nav-item ml-3 mr-3">
            <NavItem>
              <NavLink>RECOURCES</NavLink>
            </NavItem>
          </li>
        </ul>
      </nav>

      <Navbar color="dark" dark className="navbar-mobile fixed-top">
        <NavbarBrand href="/">
          <img src={logo} className="logo-riara" alt="logo-riara" />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" style={{height:"55px"}} />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">ABOUT</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">OUR SERVICES</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">FACILITY</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">CONTACT</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">CLIENTS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">RECOURCES</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default Header;
