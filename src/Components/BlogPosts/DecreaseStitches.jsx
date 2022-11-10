import React, { useEffect } from 'react';

function DecreaseStitches() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (

        <div className="blog">
            <div className="section-title">
                <h2>Decrease Stitches</h2>
            </div>
            If you're a beginner, you might want to start off with learning just the
            Right Leaning Decrease as it is the most common and the one we'll be using 
            soon in an upcoming project. There are also Left Leaning and Central Decreases,
            But feel free to return to this tutorial at a later time once you've mastered the
            Right Leaning Decrease...
            <br /><br />
            <iframe className='video'
                title='Youtube player'
                sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                src="https://youtube.com/embed/1zku59ZyEzw?autoplay=0"
                allowFullScreen>
            </iframe>
        </div>
    );
}

export default DecreaseStitches;