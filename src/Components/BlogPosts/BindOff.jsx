import React, { useEffect } from 'react';

function BindOff() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (

        <div className="blog">
            <div className="section-title">
                <h2>Bind Off</h2>
            </div>
            By now, you would have been an adept at casting on some yarn and knitting.
            In this part of the tutorial, we'll learn to bind off the work-piece.
            <br /><br />
            Feel free to come back to this part if in-case you forget to bind-off,
            as this usually happens once in a project.
            <br /><br />
            <iframe className='video'
                title='Youtube player'
                sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                src="https://youtube.com/embed/VSwjIUiQZlM?autoplay=0"
                allowFullScreen>
            </iframe>
        </div>
    );
}

export default BindOff;