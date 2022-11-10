import React, { useEffect } from 'react';

function PomPom() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <div className="blog">
            <div className="section-title">
                <h2>Pom Pom</h2>
            </div>
            Pom-Pom's can add a slight cuteness to your work and they look pretty as well.
            After you learn to make Pom-Pom's the sky's the limit!
            I usually dont use the technique used in the video but I found the technique to be 
            interesting and it seems to make a good looking Pom Pom. If you feel that its too much work,
            there are other techniques available online so go ahead and explore the world of Knitting...
            <br /><br />
            <iframe className='video'
                title='Youtube player'
                sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                src="https://youtube.com/embed/zok9hqyhTQ4?autoplay=0"
                allowFullScreen>
            </iframe>
        </div>
    );
}

export default PomPom;