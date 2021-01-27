import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import { djbistro } from "assets/information";
import Tilt from "react-parallax-tilt";

function DjBistro() {
  return (
    <>
      <div className="wrapper" id="intro">
        <div className="section text-center landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="5">
                <h2 className="title">{djbistro[0].name}</h2>
                <h5>{djbistro[0].description}</h5>
                <br />
              </Col>
              <Tilt
                className="m-auto"
                glareEnable={true}
                glareMaxOpacity={0.45}
                scale={1.25}
              >
                <div style={{ height: "300px" }} perspective={500}>
                  <img
                    alt="FUCKING HELL NO IMAGE"
                    src={require("assets/images/djbistro.jpg")}
                    width="100%"
                  />
                </div>
              </Tilt>
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
