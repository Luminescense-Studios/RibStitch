import React, { useEffect } from 'react';
import Figure from 'react-bootstrap/Figure';

function AddNewYarn() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (

        <div className="blog">
            <div className="section-title">
                <h2>Adding New yarn</h2>
            </div>
            For this tutorial, we need two knitting needles and two yarn balls -
            Different colours are preferred but same colour yarn is also good.
            The procedure for changing colour and adding new yarn will be the same.
            <br /><br />
            Now, Im going to ask you to cast on a few stitches (15 should be enough)
            and knit a few rows, whatever feels comfortable for you. Make it atleast 5-6 cm long
            so that it feels comfortable to hold.
            <br /><br />
            Now, we want to add a new yarn from the start of a new row. But the procedure
            will be same even if you want to change yarn in the middle of the row.
            <br />

            <Figure style={{
                margin: "0 auto", display: "block", paddingTop: "1rem", width: "40%", minWidth: "10rem"
            }}>
                <Figure.Image
                    alt="Add New yarn"
                    src="../simple-knit.jpeg"
                />
                <Figure.Caption>
                    Fig.1: Add New yarn
                </Figure.Caption>
            </Figure>

            <br /><br />
            Feel free to return to this part of the tutorial if you ever
            forget how to change yarn...
            <br /><br />
            <iframe className='video'
                title='Youtube player'
                sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                src="https://youtube.com/embed/LsmHWRIo2UI?autoplay=0"
                allowFullScreen>
            </iframe>
        </div>
    );
}

export default AddNewYarn;