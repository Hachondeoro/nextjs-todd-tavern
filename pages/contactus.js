import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import { contactus } from "assets/information";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("components/map-leaflet"), { ssr: false });

function DjBistro() {
  if (process.browser) {
    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
      document.body.classList.add("landing-page");
      return function cleanup() {
        document.body.classList.remove("landing-page");
      };
    });
  }
  return (
    <>
      <div className="wrapper" id="intro">
        <div className="section text-left landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto">
                <h2 className="title">{contactus[0].name}</h2>
                <h5>
                  <strong>Hotel: </strong>
                  {contactus[0].hotel}
                  <br />
                  <strong>Email: </strong>
                  {contactus[0].email}
                  <br />
                  <strong>Phone: </strong>
                  {contactus[0].phone}
                  <br />
                  <strong>Fax: </strong>
                  {contactus[0].fax}
                  <br />
                  <strong>Address: </strong>
                  {contactus[0].address}
                  <br />
                </h5>
              </Col>
            </Row>
            <br />
            <Map />
            <br />
          </Container>
        </div>
      </div>
    </>
  );
}

export default DjBistro;
