import React, { useEffect } from 'react';
import Figure from 'react-bootstrap/Figure';

function WeavingEnds() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (

        <div className="blog">
            <div className="section-title">
                <h2>Waeving in Tails</h2>
            </div>
            This is the last part of any project - tidying up and weaving in the tails.
            This makes for a very secure end and ensures it will never open with the added
            benefit of hiding your yarn tails from switching yarn...

            <br /><br />

            <iframe className='video'
                title='Youtube player'
                sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                src="https://youtube.com/embed/p4qsiyuI8?autoplay=0"
                allowFullScreen>
            </iframe>
        </div>
    );
}

export default WeavingEnds;