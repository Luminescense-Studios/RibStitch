import React, { useEffect } from 'react';
import Figure from 'react-bootstrap/Figure';

function StripePattern() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (

        <div className="blog">
            <div className="section-title">
                <h2>Carrying up Yarn</h2>
            </div>
            When we want to create a stripe pattern on our work, we don't want to cut up the yarn
            and weave it in throughout, so we carry up the yarn over the side of the work.
            <br />

            <Figure style={{
                margin: "0 auto", display: "block", paddingTop: "1rem", width: "40%", minWidth: "10rem"
            }}>
                <Figure.Image
                    alt="Carrying up the Yarn"
                    src="../carrying-up-yarn.jpeg"
                />
                <Figure.Caption>
                    Fig.1: Carrying up the Yarn
                </Figure.Caption>
            </Figure>

            <br /><br />

            Make sure to experiment with different stripe widths...
            <br />
            <Figure style={{
                margin: "0 auto", display: "block", paddingTop: "1rem", width: "40%", minWidth: "10rem"
            }}>
                <Figure.Image
                    alt="Stripe Widths"
                    src="../stripe-widths.jpeg"
                />
                <Figure.Caption>
                    Fig.2: Stripe widths
                </Figure.Caption>
            </Figure>
            <br /><br />
            <iframe className='video'
                title='Youtube player'
                sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                src="https://youtube.com/embed/eeJfbIFWZlI?autoplay=0"
                allowFullScreen>
            </iframe>
        </div>
    );
}

export default StripePattern;