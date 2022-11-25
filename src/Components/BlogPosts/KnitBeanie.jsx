import React, { useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";
import Figure from 'react-bootstrap/Figure';

function KnitBeanie() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (

        <div className="blog">
            <div className="section-title">
                <h2>Project: Beanie</h2>
            </div>
            This is our second project together so we'll ramp up the difficulty
            slightly and create a simple Beanie Cap.
            <br />
            I'll be following the measurements and the basic design of a Beanie
            I got from the San Siro in Milan, so you can rest easy knowing that the cap
            you'll be making is worthy enough to be kept in the AC Milan/Inter Milan
            stadium shop...
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
                            <ListGroup.Item><Link to={"/learn/knitting-patterns#rib"} >
                                <div className="wide-link">2x2 Rib Stitch</div>
                            </Link></ListGroup.Item>
                            <ListGroup.Item><Link to={"/learn/simple-knit"} >
                                <div className="wide-link">Simple Knit</div>
                            </Link></ListGroup.Item>
                            <ListGroup.Item><Link to={"/learn/decrease-stitches"} >
                                <div>Decrease Stitches (Right Leaning)</div>
                            </Link></ListGroup.Item>
                            <ListGroup.Item><Link to={"/learn/bind-off"} >
                                <div>Bind Off</div>
                            </Link></ListGroup.Item>
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
                            <ListGroup.Item>Yarn (Any Colour)</ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <br /><br />
            Points to remember:
            <ol>
                <li>If you occassionally drop a stitch or make extra stitches, you can open the work again
                    and have another go from sometime before it, or take a look at
                    the tutorial for picking up a <Link to={"/learn/dropped-stitch"} >Dropped Stitch</Link></li>
                <li>You might need to add a new yarn for both colours but it should
                    be relatively simple</li>
                <li>You will have tails of the yarn hanging off but we'll take care of it later.
                    Let about 10cm long tail of the old yarn hang off when adding a new yarn
                </li>
                <li>Most of all, try to have fun</li>
            </ol>

            <br /><br />
            Before we start off, we should decide on what measurements we'll be using to develop
            the beanie. Since we already have a ready made beanie, lets just use that as our guide.
            <br /><br />
            We'll be knitting the beanie from the bottom to the top, so we'll make a few rows of
            the <Link to={"/learn/knitting-patterns#rib"} >2x2 Rib Pattern</Link> first,
            then few rows of the simple <Link to={"/learn/simple-knit"} >Knit Stich</Link> and
            when the moment arises, start to <Link to={"/learn/decrease-stitches"} >Decrease Stitches </Link>
            till all the stitches converge at the top, which is when we will stitch the two ends together
            and the Beanie will finally take shape. We must also decide how many sections the converging top
            will have. In the AC Milan Beanie, its 6 sections.
            <br /><br />
            Measurements will be as shown in Fig.1:

            <Figure style={{
                margin: "0 auto", display: "block", paddingTop: "1rem", width: "40%", minWidth: "10rem"
            }}>
                <Figure.Image
                    alt="Beanie Diagram"
                    src="../beanie-diagram.jpeg"
                />
                <Figure.Caption>
                    Fig.1: Beanie Dimensions
                </Figure.Caption>
            </Figure>
            <br /><br />
            If youre unsure about the measurements and the thickness of the yarn you're using, just relax
            and remember the <Link to={"/learn/knitting-patterns#rib"} >2x2 Rib Pattern</Link> is very forgiving.
            I use 9mm thick knitting needles and a commonly available yarn of regular thickness - not too thick,
            not too thin, and I cast on 130 stitches and with my relatively larger head, it fits me quite well
            with a bit of stretch...
            <br /><br />
            If the steps feel unclear, you can follow any of the Tutorials you find online. I just found that
            this kind of Beanie was the simplest one to make for beginners.
            <br /><br />
            Steps:
            <ol>
                <li>Lets start off by casting on 130 stitches</li>
                <li>We'll start by knitting the 
                    <Link to={"/learn/knitting-patterns#rib"} >2x2 Rib Pattern</Link> for x cm/ y inches</li>
                <li>Once we're done with that, we'll knit z cm/ t inches of the <Link to={"/learn/simple-knit"} >Knit Stich</Link></li>

                <li>Now we must start decreasing the number of stitches. So we'll be decreasing two stitches using 
                    the <Link to={"/learn/decrease-stitches"} >Right Leaning Decrease</Link>.
                    <br />
                    So in the first row, knit the first 19 stitches as normal,
                    <br />
                    Then, decrease the stitches by taking the next two stitches and knitting them together. And then another two together
                    <br /><br />
                    Then, knit the next 18 stitches as normal,
                    <br />
                    And decrease the stitches by taking the next two stitches and knitting them together. And then another two together
                    <br /><br />
                    Carry this on till the end of the row. In the last section there may be 19 stitches which can be knitted as normal...
                </li>
                <li>Now turn around the workpiece and knit the whole row as normal - We'll be decreasing stitches only on one side of the Beanie</li>
                <li>Turn the workpiece around decrease the stitches in line with the previous row. It might be a little tough to spot the location
                    of the decreased stitches, but you can use the photos in the Tutorial...
                </li>
                <li>Carry on the process of 1 row decreasing and 1 row as normal till we reach the point that all decreased
                    stitches converge.
                </li>
                <li>We must now stitch together the Top of the Beanie with a fine needle and some yarn attached to our work.
                    It might not look exactly the same as in the video but its basically the same thing.
                    <iframe className='video'
                        title='Youtube player'
                        sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                        src="https://youtube.com/embed/yp8N7vl-qU8?autoplay=0"
                        allowFullScreen>
                    </iframe>
                </li>
                <li>Using the same technique, we need to stitch together the entire Beanie from top to bottom,
                    And we're DONE!
                    <iframe className='video'
                        title='Youtube player'
                        sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                        src="https://youtube.com/embed/5kGkxn46_To?autoplay=0"
                        allowFullScreen>
                    </iframe>
                    </li>
            </ol>
            <br /><br />
            Congratulations on making your first Beanie!
            <br /><br />
            We hope you had a lot of fun and enjoyed the Tutorial!
            Ofcourse there are plenty of variations in making the Beanie, so go ahead and try
            using different Knitting Patterns and colours! Dont be afraid of trying.
            <br />
            Ofcourse if you want to add one final finishing touch, you can make 
            a <Link to={"/learn/pom-pom"} >Pom Pom</Link> and stitch it
            to the top of the Beanie which gives the Beanie some character!
        </div>
    );
}

export default KnitBeanie;