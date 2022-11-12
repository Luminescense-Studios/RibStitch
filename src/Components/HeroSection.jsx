import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Nav from 'react-bootstrap/Nav';

function IndividualIntervalsExample() {
  return (
    <Carousel id="home" nextLabel='' prevLabel='' indicators={true} slide={false}
      autoPlay={true}
      interval={3000}
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./knitting-page.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <Nav.Link href="/#learn"><div className="carousel-caption-custom">Get Started!</div></Nav.Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
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