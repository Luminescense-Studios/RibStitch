import React, { useEffect } from 'react';
import Figure from 'react-bootstrap/Figure';

function CastOn() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (

        <div className="blog">
            <div className="section-title">
                <h2>Cast On</h2>
            </div>
            Before we begin, one thing we should clear up is that we have no
            affiliations to any of the youtube channels that have been posted.
            These are just the videos I find are good tutorials...
            <br /><br />
            Lets start by making a really small blanket of 10cm x 10cm or 4in x 4in.
            The measurements may be off but that isnt really relevant right now.
            <br />
            This would require around 25-30 stitches to be casted on to 9mm knitting needles.
            However, you're free to use any gauge of yarn and any thickness of knitting needles.
            Exact Dimensions dont matter as this is just for practice.

            <Figure style={{
                margin: "0 auto", display: "block", paddingTop: "1rem", width: "40%", minWidth: "10rem"
            }}>
                <Figure.Image
                    alt="Cast On"
                    src="../cast-on.jpeg"
                />
                <Figure.Caption>
                    Fig.1: Cast On 26 stitches
                </Figure.Caption>
            </Figure>

            <br /><br />
            We will continue with our blanket in the next tutorial. Till then you can try casting on
            a bunch of times to get familiar with it as this skill will be used in all the
            projects you take up. Feel free to come back to this part of the tutorial any time you need to...
            <br /><br />

            <iframe className='video'
                title='Youtube player'
                sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                src="https://youtube.com/embed/1vm6oaYzHyA?autoplay=0"
                allowFullScreen>
            </iframe>

        </div>
    );
}

export default CastOn;