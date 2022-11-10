import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

function KnitPatterns() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (

        <div className="blog">
            <div className="section-title">
                <h2>Knitting Patterns for Beginners</h2>
            </div>
            There are a few handy knitting patterns that are needed to make some
            fancy projects
            <br /><br />
            We have now learned the basics and are atleast 1 scarf project into
            our knitting journey. Now is the time we learn a few new patterns.
            All Knitting patterns usually based on the 
            <Link to={"/learn/simple-knit"} > Knit Stitch</Link> and
            the <Link to={"/learn/purl-knit"} >Purl Stitch</Link>. 
            As with any of the tutorials, don't be afraid to make mistakes and just have fun with it!
            <br /><br />
            <ol>
                <li id="rib">
                    <h6>Rib Pattern (1x1 and 2x2)</h6>
                    The 1x1 Rib pattern is simply 1 Knit Stitch and 1 Purl Stitch
                    with a repeating pattern throughout the row.
                    <br />
                    The most popular of the patterns that I've come across is is the 2x2 Rib stitch.
                    As it forms a very stretchy
                    and elastic pattern, it is mostly used in caps and sleeves.
                    <br />
                    In simple terms, it consists of 2 stitches of the knit stitch and
                    2 stitches of purl stitch, and the pattern repeats. For now, all we need to
                    keep in mind is in the next row, we carry on the same knit from the last row
                    (it might change if you knit a different pattern)
                    <br /><br />
                    Lets create a small work piece with 12-16 stitches for practice.
                    You may switch between patterns throughout the workpiece and try to have fun...
                    <br /><br />
                    <iframe className='video'
                        title='Youtube player'
                        sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                        src="https://youtube.com/embed/dCJj3pW2nRY?autoplay=0"
                        allowFullScreen>
                    </iframe>
                </li>
            </ol>
            <br />
        </div>
    );
}

export default KnitPatterns;