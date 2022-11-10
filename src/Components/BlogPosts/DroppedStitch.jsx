import React, { useEffect } from 'react';

function DroppedStitch() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (

        <div className="blog">
            <div className="section-title">
                <h2>Picking up Dropped Stitches</h2>
            </div>

            Its totally fine to make mistakes when you're learning something new.
            But there are ways to correct them. You can try these methods on a
            rough workpiece or on your projects...

            <br /><br />
            <h4>Picking up a dropped Stitch</h4>
            <iframe className='video'
                title='Youtube player'
                sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                src="https://youtube.com/embed/FcKrw4LcWgw?autoplay=0"
                allowFullScreen>
            </iframe>
            
            <br /><br />
            <h4>Possible method for fixing extra stitches</h4>
            <iframe className='video'
                title='Youtube player'
                sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                src="https://youtube.com/embed/1oP6EyCT93g?autoplay=0"
                allowFullScreen>
            </iframe>

            <br /><br />
            <h4>If you really need to unravel</h4>
            <iframe className='video'
                title='Youtube player'
                sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                src="https://youtube.com/embed/lG4XdtdWUpw?autoplay=0"
                allowFullScreen>
            </iframe>
        </div>
    );
}

export default DroppedStitch;