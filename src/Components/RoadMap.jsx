import React from "react";
import TopicBox from "./TopicBox.jsx"

function RoadMap() {
    return (
        <div className="course-level contact-form" id="learn">

            <div className="section-title">
                <h2>Get Started</h2>
                <p>
                    Get started with our curated tutorials geared towards beginners and new comers.
                    <br /><br />
                    This series takes you through the absolute basics while creating
                    beautiful and simple articles. With a development plan laid out,
                    all you need is a pair of knitting needles and some yarn...
                </p>
            </div>

            <div className="level-title">Level 1</div>
            <div className="topic-vertical-separator"></div>
            <div className="topic-vertical-separator short"></div>

            <div className="level-title level-description">Basics</div>
            <div className="topic-vertical-separator"></div>

            <div className="level-box">

                <div className="row">
                    <TopicBox text="Cast On" imagePath="./knitting-needles.png" link="cast-on" />
                    <TopicBox text="Simple Knit" imagePath="./knitting.png" link="simple-knit" />
                </div>

                <div className="row">
                    <TopicBox text="Bind Off" imagePath="./knitting-bind-off.png" link="bind-off" />
                    <TopicBox text="Add New Yarn" imagePath="./knitting-color.png" link="add-new-yarn" />
                </div>

            </div>

            <div className="topic-vertical-separator"></div>
            <div className="level-title">Level 2</div>
            <div className="topic-vertical-separator"></div>
            <div className="topic-vertical-separator short"></div>

            <div className="level-title level-description">Simple Scarf</div>
            <div className="topic-vertical-separator"></div>

            <div className="level-box">

                <div className="row">
                    <TopicBox text="Carrying up Yarn" imagePath="./stripe-pattern.png" link="stripe-pattern" />
                    <TopicBox text="Knit a Scarf" imagePath="./winter-scarf.png" link="knit-a-scarf" />
                </div>
                <div className="row">
                    <TopicBox text="Weaving in Ends" imagePath="./weaving-ends.png" link="weaving-ends" />
                    <TopicBox text="Dropped Stitch" imagePath="./knitting-dropped.png" link="dropped-stitch" />
                </div>
            </div>


            <div className="topic-vertical-separator"></div>
            <div className="level-title">Level 3</div>
            <div className="topic-vertical-separator"></div>
            <div className="topic-vertical-separator short"></div>

            <div className="level-title level-description">Intermediate Skills</div>
            <div className="topic-vertical-separator"></div>

            <div className="level-box">

                <div className="row">
                    <TopicBox text="Purl Knit" imagePath="./knitting-inverse.png" link="purl-knit" />
                    <TopicBox text="Knitting Patterns" imagePath="./textiles.png" link="knitting-patterns" />
                </div>

                <div className="row">
                    <TopicBox text="Decrease Stitches" imagePath="./knitting-increase.png" link="decrease-stitches" />
                    <TopicBox text="Increase Stitches" imagePath="./knitting-increase.png" link="increase-stitches" />
                </div>

            </div>

            <div className="topic-vertical-separator"></div>
            <div className="level-title">Level 4</div>
            <div className="topic-vertical-separator"></div>
            <div className="topic-vertical-separator short"></div>

            <div className="level-title level-description">Knit a Beanie</div>
            <div className="topic-vertical-separator"></div>

            <div className="level-box">

                <div className="row">
                    <TopicBox text="Knit a Beanie" imagePath="./beanie.png" link="knit-a-beanie" />
                    <TopicBox text="Pom Pom Top" imagePath="./winter-hat.png" link="pom-pom" />
                </div>

            </div>


            <div className="topic-vertical-separator"></div>
            <div className="level-title">Level 5</div>
            <div className="topic-vertical-separator"></div>
            <div className="topic-vertical-separator short"></div>

            <div className="level-title level-description">Advanced</div>
            <div className="topic-vertical-separator"></div>

            <div className="level-box">

                {/* <div className="row">
                    <TopicBox text="Baby Sweater" />
                </div> */}
                <div> Coming Soon...</div>

            </div>




        </div>
    );
}

export default RoadMap;