import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

function PurlStitch() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (

        <div className="blog">
            <div className="section-title">
                <h2>Purl Stitch (Rib Stitch)</h2>
            </div>
            We'll continue our foundation courses by learning the purl knit stitch.
            <br /><br />
            This is just for practice, so dont be afraid to make mistakes and undo
            some of your work and starting again. There are ways to correct your mistakes
            - Take a look at the tutorial for <Link to={"/learn/dropped-stitch"} >dropped stitch</Link>.
            Make sure you practice well and develop a bit of a muscle memory. 
            As these are the basics of knitting,
            we want to lay down really strong foundations so play around with it
            and make a lot of mistakes and start over again. And dont worry if you
            drop a few stitches along the way as this is only a practice piece.
            We're not going to show it off to anyone. You probably wont need to
            return to this part of the tutorial as it will be a part of your muscle
            memory.
            <br /><br />
            <iframe className='video'
                title='Youtube player'
                sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                src="https://youtube.com/embed/7ePhLqw6HDM?autoplay=0"
                allowFullScreen>
            </iframe>
        </div>
    );
}

export default PurlStitch;