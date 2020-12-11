import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import { functions } from "assets/information";
import functionroom from "assets/images/function-room.png";

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
              <Col className="ml-auto mr-auto" xs="12">
                <h2 className="title">{functions[0].name}</h2>
                <h5>{functions[0].description}</h5>
                <br />
                <h2 className="title">{functions[1].name}</h2>
                <h5>{functions[1].description}</h5>
              </Col>
              <Col className="ml-auto mr-auto mt-auto mb-auto">
                <img src={functionroom} width="100%" />
              </Col>
            </Row>
            <br />
            <br />
          </Container>
        </div>
      </div>
    </>
  );
}

export default DjBistro;
