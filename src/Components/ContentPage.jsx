import React, { Component } from "react";
import RoadMap from "./RoadMap.jsx"
import Testimonials from "./Testimonials.jsx"
import About from "./About.jsx"
import Contact from "./Contact.jsx"

export default class ContentPage extends Component {
    render() {
        return (
            <div className="content-page">
                <div>
                    <RoadMap />
                </div>
                <div>
                    <Testimonials />
                </div>
                <div style={{marginTop: "4rem"}}>
                    <About />
                </div>
                <div>
                    <Contact />
                </div>
            </div>
        );
    }
}
