import React from "react"

// reactstrap components
import { Button, Card, CardBody, CardFooter, CardTitle } from "reactstrap"

function SectionCards(props) {
  return (
    <>
      <Card className="card-blog">
        <div className="card-image">
          <a href={props.link} target="_blank">
            <img alt="..." className="img" src={props.image} />
          </a>
        </div>
        <CardBody className="text-center">
          <CardTitle tag="h4">{props.name}</CardTitle>
          <div className="card-description">{props.description}</div>
          <CardFooter>
            <Button
              className="btn-round"
              color="danger"
              href={props.link}
              target="_blank"
            >
              Book Now
            </Button>
          </CardFooter>
        </CardBody>
      </Card>
    </>
  )
}

export default SectionCards
