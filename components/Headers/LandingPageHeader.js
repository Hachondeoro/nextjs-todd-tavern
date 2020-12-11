import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

function LandingPageHeader() {
  let pageHeader = React.createRef();
  return (
    <>
      <div
        className="page-header"
        ref={pageHeader}
        style={{
          backgroundImage:
            "url(" + require("assets/images/billar-pool.jpg") + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="motto">
              <img
                alt="FUCKING HELL NO IMAGE"
                src={require("assets/images/todd-logo.svg")}
              />
              <h1 className="title">TODD TAVERN</h1>
              <h3 className="description">The last traditional pub in town</h3>
              <br />
              <Button
                className="btn-round"
                color="neutral"
                href="https://www.facebook.com/ToddTavern/"
                type="button"
                outline
              >
                Facebook
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
