import React, { useRef, forwardRef } from "react";
import Link from "next/link";
import classnames from "classnames";

// reactstrap components
import { Collapse, NavbarBrand, Navbar, Nav, Container } from "reactstrap";

const MultiDropdownNavbar = ({ children }) => {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [bodyClick, setBodyClick] = React.useState(false);
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 699 ||
        document.body.scrollTop > 699
      ) {
        setNavbarColor("black");
      } else if (
        document.documentElement.scrollTop < 700 ||
        document.body.scrollTop < 700
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {bodyClick ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setBodyClick(false);
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar
        className={classnames("fixed-top", navbarColor)}
        id="navbar-main"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
            <button
              className="navbar-toggler"
              id="navigation"
              type="button"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setBodyClick(true);
                setCollapseOpen(true);
              }}
            >
              <span className="navbar-toggler-bar bar1"></span>
              <span className="navbar-toggler-bar bar2"></span>
              <span className="navbar-toggler-bar bar3"></span>
            </button>
          </div>
          <Collapse navbar isOpen={collapseOpen}>
            <Nav className="ml-auto" navbar>
              <Link id="navbar-brand" href="/" passHref>
                <NavbarBrand id="navbar-brand">
                  <i className="nc-icon nc-minimal-right" /> Home
                </NavbarBrand>
              </Link>
              <Link id="navbar-brand" href="/djbistro#intro" passHref>
                <NavbarBrand id="navbar-brand">
                  <i className="nc-icon nc-minimal-right" /> DJ's Bistro
                </NavbarBrand>
              </Link>
              <Link id="navbar-brand" href="/maximbar#intro" passHref>
                <NavbarBrand id="navbar-brand">
                  <i className="nc-icon nc-minimal-right" /> Maxim's Bar
                </NavbarBrand>
              </Link>
              <Link id="navbar-brand" href="/accommodation#intro" passHref>
                <NavbarBrand id="navbar-brand">
                  <i className="nc-icon nc-minimal-right" /> Accommodation
                </NavbarBrand>
              </Link>
              <Link id="navbar-brand" href="/functions#intro" passHref>
                <NavbarBrand id="navbar-brand">
                  <i className="nc-icon nc-minimal-right" />
                  Functions/Facilities
                </NavbarBrand>
              </Link>
              <Link id="navbar-brand" href="/bottleshop#intro" passHref>
                <NavbarBrand id="navbar-brand">
                  <i className="nc-icon nc-minimal-right" /> Bottle Shop
                </NavbarBrand>
              </Link>
              <Link id="navbar-brand" href="/contactus#intro" passHref>
                <NavbarBrand id="navbar-brand">
                  <i className="nc-icon nc-minimal-right" /> Contact Us
                </NavbarBrand>
              </Link>
              <Link id="navbar-brand" href="/history#intro" passHref>
                <NavbarBrand id="navbar-brand">
                  <i className="nc-icon nc-minimal-right" /> History
                </NavbarBrand>
              </Link>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      {children}
    </>
  );
};

export default MultiDropdownNavbar;
