import React from "react";

// reactstrap components
import {
  Card,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

import { history } from "assets/information";

const carouselItems = [
  {
    src: require("assets/images/history/History_ANZAC_hill_view.jpeg"),
    altText: "Somewhere",
    caption: "Somewhere",
  },
  {
    src: require("assets/images/history/History_desert_palace_opening.jpeg"),
    altText: "Somewhere else",
    caption: "Somewhere else",
  },
  {
    src: require("assets/images/history/History_look_for_new_hotel.jpg"),
    altText: "Here it is",
    caption: "Here it is",
  },
];

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
  // carousel states and functions
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === carouselItems.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? carouselItems.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  return (
    <>
      <div className="wrapper" id="intro">
        <div className="section text-center landing-section">
          <Container className="text-left">
            <Row>
              <Col md="6" sm="12">
                <h2>{history[0].title}</h2>
                {history[0].description}
              </Col>
              <Col md="6" sm="12">
                <h2>{history[1].title}</h2>
                {history[1].description}
              </Col>
            </Row>
            <Row>
              <h2>{history[2].title}</h2>
              {history[2].description}
            </Row>
            <Row>
              <Col md="6" sm="12">
                <h2>{history[3].title}</h2>
                {history[3].description}
              </Col>
              <Col md="6" sm="12">
                <h2>{history[4].title}</h2>
                {history[4].description}
              </Col>
            </Row>
            <br />
            <br />
          </Container>
        </div>
      </div>
      <Row>
        <Col className="ml-auto mr-auto" md="5">
          <Card className="card-raised page-carousel">
            <Carousel activeIndex={activeIndex} next={next} previous={previous}>
              <CarouselIndicators
                items={carouselItems}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
              />
              {carouselItems.map((item) => {
                return (
                  <CarouselItem
                    onExiting={onExiting}
                    onExited={onExited}
                    key={item.src}
                  >
                    <img src={item.src} alt={item.altText} />
                    <CarouselCaption
                      captionText={item.caption}
                      captionHeader=""
                    />
                  </CarouselItem>
                );
              })}
              <a
                className="left carousel-control carousel-control-prev"
                data-slide="prev"
                href="#pablo"
                onClick={(e) => {
                  e.preventDefault();
                  previous();
                }}
                role="button"
              >
                <span className="fa fa-angle-left" />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="right carousel-control carousel-control-next"
                data-slide="next"
                href="#pablo"
                onClick={(e) => {
                  e.preventDefault();
                  next();
                }}
                role="button"
              >
                <span className="fa fa-angle-right" />
                <span className="sr-only">Next</span>
              </a>
            </Carousel>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default DjBistro;
