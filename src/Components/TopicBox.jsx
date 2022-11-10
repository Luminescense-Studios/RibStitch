import React from "react";
import { Link } from "react-router-dom";

function TopicBox(props) {
    return (
        <div className="topic-box">
            <div className="topic-box-inner">
                <Link to={"/learn/" + props.link} >
                    <div className="topic-icon">
                        <div className="subject-icon">
                            <img className="subject-icon-img" src={props.imagePath} alt={props.text} />
                        </div>
                    </div>
                    <div className="topic-title">{props.text}</div>
                </Link>
            </div>
        </div>
    );
}

export default TopicBox;