import React from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { FaMapPin } from 'react-icons/fa'

function GridExample() {
    return (
        <Row className="mx-auto" id="testimonials">


            <Card className="mx-auto">
                <div className="card-top-line" />
                <Card.Img variant="top" src="./logo512.png" />
                <Card.Body>
                    <Card.Text>
                        Had so much fun learning to knit with this tutorial!
                        This is a great tool for beginners to get started.
                    </Card.Text>
                    <Card.Title>Sulekha</Card.Title>
                    <Card.Subtitle><FaMapPin /> Dublin</Card.Subtitle>
                </Card.Body>
            </Card>



            <Card className="mx-auto">
                <div className="card-top-line" />
                <Card.Img variant="top" src="./logo512.png" />
                <Card.Body>
                    <Card.Text>
                        Wanted to learn knitting for a long time and
                        this is exactly what I was looking for!
                    </Card.Text>
                    <Card.Title>Emilia</Card.Title>
                    <Card.Subtitle><FaMapPin />Munich</Card.Subtitle>
                </Card.Body>
            </Card>

            <Card className="mx-auto">
                <div className="card-top-line" />
                <Card.Img variant="top" src="./logo512.png" />
                <Card.Body>
                    <Card.Text>
                        Had so much fun learning to knit with this tutorial!
                        This is a great tool for beginners to get started.
                    </Card.Text>
                    <Card.Title>Some Guy</Card.Title>
                    <Card.Subtitle><FaMapPin />Some Place</Card.Subtitle>
                </Card.Body>
            </Card>


        </Row>
    );
}

export default GridExample;