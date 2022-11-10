import React, { useEffect } from 'react';

function IncreaseStitches() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (

        <div className="blog">
            <div className="section-title">
                <h2>Increase Stitches</h2>
            </div>
            This is a very useful skill, but if you want to skip it, you can for now
            as there is no requirement for it in our next project which is a Beanie. 
            Feel free to return to the tutorial once the need arises
            <br /><br />
            <iframe className='video'
                title='Youtube player'
                sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                src="https://youtube.com/embed/lsJndA4LzR8?autoplay=0"
                allowFullScreen>
            </iframe>
        </div>
    );
}

export default IncreaseStitches;