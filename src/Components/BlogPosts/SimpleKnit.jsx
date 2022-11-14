import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Figure from 'react-bootstrap/Figure';

function SimpleKnit() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <div className="blog">
            <div className="section-title">
                <h2>Simple Stitch (Garter Stitch)</h2>
            </div>
            We'll continue our foundation courses by learning the simple knit stitch.
            Again, it doesn't really matter if you have the exact equipment mentioned
            in the video tutorials. You can start off with what material you have available.
            <br /><br />
            This is just for practice, so dont be afraid to make mistakes and undo
            some of your work and starting again. There are ways to correct your mistakes
            - Take a look at the tutorial for <Link to={"/learn/dropped-stitch"} >dropped stitch</Link>.
            Make sure you practice well and
            develop a bit of a muscle memory. As these are the basics of knitting,
            we want to lay down really strong foundations so play around with it
            and make a lot of mistakes and start over again. And dont worry if you
            drop a few stitches along the way as this is only a practice piece.
            We're not going to show it off to anyone. You probably wont need to
            return to this part of the tutorial as it will be a part of your muscle
            memory.
            <br />

            <Figure style={{
                margin: "0 auto", display: "block", paddingTop: "1rem", width: "40%", minWidth: "10rem"
            }}>
                <Figure.Image
                    alt="Simple Knit"
                    src="../simple-knit.jpeg"
                />
                <Figure.Caption>
                    Fig.1: Simple Knit
                </Figure.Caption>
            </Figure>

            <br /><br />
            But to have a goal in sight, Lets make an around 10cm long squar-ish blanket. But
            you can make it as long as you like...
            <br /><br />
            <iframe className='video'
                title='Youtube player'
                sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                src="https://youtube.com/embed/Egp4NRhlMDg?autoplay=0"
                allowFullScreen>
            </iframe>

            <br /><br />
            This is a helpful tip I found for beginners. But you'll probably fix it yourself
            as you learn to knit. So dont worry if your knits are a little tight...
            <br /><br />
            <iframe className='video'
                title='Youtube player'
                sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                src="https://youtube.com/embed/FtU6pcRzZBQ?autoplay=0"
                allowFullScreen>
            </iframe>
        </div>
    );
}

export default SimpleKnit;