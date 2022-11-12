import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Nav from 'react-bootstrap/Nav';

function IndividualIntervalsExample() {
  return (
    <Carousel id="home"
      controls={false}
      autoPlay={true}
      variant="dark"
    >
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="./knitting-page.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <Nav.Link href="/#learn"><div className="carousel-caption-custom">Get Started!</div></Nav.Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="./knitting-page2.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <Nav.Link href="/#contact"><div className="carousel-caption-custom">Help us Improve!</div></Nav.Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;