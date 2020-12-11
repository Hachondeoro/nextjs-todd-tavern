import React from "react";
import { Link } from "next/link";
// nodejs library that concatenates strings
import classnames from "classnames";

// reactstrap components
import { Collapse, NavbarBrand, Navbar, Nav, Container } from "reactstrap";

function MultiDropdownNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [bodyClick, setBodyClick] = React.useState(false);
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 899 ||
        document.body.scrollTop > 899
      ) {
        setNavbarColor("black");
      } else if (
        document.documentElement.scrollTop < 900 ||
        document.body.scrollTop < 900
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
              <Link href="/presentation">
                <a>brand</a>
              </Link>
              <NavbarBrand id="navbar-brand" to="/djbistro#intro" tag={Link}>
                <i className="nc-icon nc-minimal-right" /> DJ's Bistro
              </NavbarBrand>
              <NavbarBrand id="navbar-brand" to="/maximbar#intro" tag={Link}>
                <i className="nc-icon nc-minimal-right" /> Maxim's Bar
              </NavbarBrand>
              <NavbarBrand
                id="navbar-brand"
                to="/accomodation#intro"
                tag={Link}
              >
                <i className="nc-icon nc-minimal-right" /> Accomodation
              </NavbarBrand>
              <NavbarBrand id="navbar-brand" to="/functions#intro" tag={Link}>
                <i className="nc-icon nc-minimal-right" /> Functions/Facilities
              </NavbarBrand>
              <NavbarBrand id="navbar-brand" to="/bottleshop#intro" tag={Link}>
                <i className="nc-icon nc-minimal-right" /> Bottle Shop
              </NavbarBrand>
              <NavbarBrand id="navbar-brand" to="/contactus#intro" tag={Link}>
                <i className="nc-icon nc-minimal-right" /> Contact Us
              </NavbarBrand>
              <NavbarBrand id="navbar-brand" to="/history#intro" tag={Link}>
                <i className="nc-icon nc-minimal-right" /> History
              </NavbarBrand>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MultiDropdownNavbar;
