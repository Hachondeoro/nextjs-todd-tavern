import React from "react";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";

// reactstrap components
import { Button, FormGroup, Container, Row, Col } from "reactstrap";

function FooterAboutUs() {
  const [languageSelect, setLanguageSelect] = React.useState({
    value: "en",
    label: "English",
  });
  const [curencySelect, setCurencySelect] = React.useState({
    value: "USD",
    label: "USD",
  });
  return (
    <>
      <footer className="footer footer-big footer-black">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="9" sm="9" xs="12">
              <Row>
                <Col md="3" sm="3" xs="6">
                  <img
                    alt="FUCKING HELL NO IMAGE"
                    src={require("assets/images/todd-logo.svg")}
                    width="85%"
                  />
                </Col>
                <Col md="3" sm="3" xs="6">
                  <div className="links">
                    <ul className="stacked-links">
                      <li>
                        <h4 className="uppercase">Visit Us</h4>
                      </li>
                      <li>
                        <p>
                          1 Todd Street
                          <br />
                          Alice Springs, NT
                        </p>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md="3" sm="3" xs="6">
                  <div className="links">
                    <ul className="stacked-links">
                      <li>
                        <h4>Follow Us</h4>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/ToddTavern/">
                          <i className="fa fa-facebook fa-2x" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md="3" sm="3" xs="6">
                  <div className="links">
                    <ul className="stacked-links">
                      <li>
                        <h4>Contact Us</h4>
                      </li>
                      <li>
                        <p>Email: info@toddtavern.com.au</p>
                        <p>Ph: (08) 8952 1255</p>
                        <p>Fax: (08) 8952 3830</p>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
              <hr />
              <div className="copyright">
                <div className="pull-left">
                  © {new Date().getFullYear()} Todd Tavern ABN: 96 596 279 413
                </div>
                <div className="links pull-right">
                  <ul>
                    <li className="mr-1">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Disclaimer
                      </a>
                    </li>
                    |{" "}
                    <li className="mr-1">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Privacy
                      </a>
                    </li>
                    |{" "}
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Copyright
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default FooterAboutUs;
