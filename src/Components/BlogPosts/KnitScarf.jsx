import React, { useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";

function KnitScarf() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (

        <div className="blog">
            <div className="section-title">
                <h2>Project: Simple Scarf</h2>
            </div>
            This is our first project and its as simple as it gets. We'll create a simple
            striped scarf and put to use all the skills that we've learned so far.
            <br /><br />
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                            Skills Required
                    </Accordion.Header>
                    <Accordion.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item><Link to={"/learn/cast-on"} >
                                <div className="wide-link">Cast On</div>
                            </Link></ListGroup.Item>
                            <ListGroup.Item><Link to={"/learn/simple-knit"} >
                                <div className="wide-link">Simple Knit</div>
                            </Link></ListGroup.Item>
                            <ListGroup.Item><Link to={"/learn/bind-off"} >
                                <div>Bind Off</div>
                            </Link></ListGroup.Item>
                            <ListGroup.Item><Link to={"/learn/add-new-yarn"} >
                                <div>Add New Yarn</div></Link></ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                            Materials Required
                    </Accordion.Header>
                    <Accordion.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Knitting Needles</ListGroup.Item>
                            <ListGroup.Item>Yarn (Any Colour 1)</ListGroup.Item>
                            <ListGroup.Item>Yarn (Any Colour 2)</ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <br /><br />
            Points to remember:
            <ol>
                <li>If you occassionally drop a stitch or make extra stitches, you can open the work again
                    and have another go from sometime before it, or take a look at
                    the tutorial for picking up a <Link to={"/learn/dropped-stitch"} >dropped stitch</Link></li>
                <li>You might need to add a new yarn for both colours but it should
                    be relatively simple</li>
                <li>You will have tails of the yarn hanging off but we'll take care of it later.
                    Let about 10cm long tail of the old yarn hang off when adding a new yarn
                </li>
                <li>Most of all, try to have fun</li>
            </ol>
            Lets draw up a rudimentary plan for our scarf. It should be about 18cm wide, 1.8m long.
            And we'll have stripes that last for 2 rows and alternate between the colours. For the first
            and last rows, we'll keep the width as 7 rows. But you're free to play around with it.
            <br />

            <img src="../scarf-diagram.jpeg" alt="Scarf Diagram" style={{
                margin: "0 auto", display: "block", paddingTop: "1rem", width: "100%", maxWidth: "35rem"
            }} />
            
            <br /><br />
            Steps:
            <ol>
                <li>Lets start off by casting on 45 stitches</li>
                <li>Then lets knit 7 rows of yarn of colour 1</li>
                <li>Then lets knit 2 rows of yarn of colour 2</li>
                <li>Then lets knit 2 rows of yarn of colour 1</li>
                <li>Carrying on this same process of switching yarn every 2 rows,
                    we want to create a scarf of about length 1.7 meters
                    (or whatever feels comfortable)
                </li>
                <li>Again lets knit 7 rows of yarn of colour 1</li>
                <li>Finally, Bind Off! And you have made your very first scarf! Congratulations!
                    We'll add some finishing touches like hiding the tails where we changed the yarn</li>
            </ol>

            You can try out plenty of variations like using more than 2 colours,
            or using a single colour for the entire project, or different thickness of stripes,
            Feel free to play around with it!

        </div>
    );
}

export default KnitScarf;