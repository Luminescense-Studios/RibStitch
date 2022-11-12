import React, { Component } from "react";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import TopBar from "./TopBar.jsx";
import Footer from "./Footer.jsx";
import CastOn from "./BlogPosts/CastOn.jsx"
import BindOff from "./BlogPosts/BindOff.jsx"
import SimpleKnit from "./BlogPosts/SimpleKnit.jsx"
import AddNewYarn from "./BlogPosts/AddNewYarn.jsx"
import KnitScarf from "./BlogPosts/KnitScarf.jsx"
import DroppedStitch from "./BlogPosts/DroppedStitch.jsx"
import PurlStitch from "./BlogPosts/PurlStitch.jsx"
import KnitPatterns from "./BlogPosts/KnitPatterns.jsx"
import IncreaseStitches from "./BlogPosts/IncreaseStitches.jsx"
import DecreaseStitches from "./BlogPosts/DecreaseStitches.jsx"
import KnitBeanie from "./BlogPosts/KnitBeanie.jsx"
import PomPom from "./BlogPosts/PomPom.jsx"
import { inject, observer } from "mobx-react";
import { initGA, PageView } from "../GATracker/index";
import { TRACKING_ID, GA_OPTIONS } from "../Constants";

@inject("store")
@observer
class Learn extends Component {
  componentDidMount() {
    initGA(TRACKING_ID, GA_OPTIONS);
    PageView();
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="main-page">
        <TopBar />
        <div className="content-page">
          <Breadcrumb className="breadcrumbs">
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/#learn">
              Get Started
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{this.props.match.params.viewKey}</Breadcrumb.Item>
          </Breadcrumb>
          {(this.props.match.params.viewKey === "cast-on") && (<CastOn />)}
          {(this.props.match.params.viewKey === "simple-knit") && (<SimpleKnit />)}
          {(this.props.match.params.viewKey === "bind-off") && (<BindOff />)}
          {(this.props.match.params.viewKey === "add-new-yarn") && (<AddNewYarn />)}
          {(this.props.match.params.viewKey === "knit-a-scarf") && (<KnitScarf />)}
          {(this.props.match.params.viewKey === "dropped-stitch") && (<DroppedStitch />)}
          {(this.props.match.params.viewKey === "purl-knit") && (<PurlStitch />)}
          {(this.props.match.params.viewKey === "knitting-patterns") && (<KnitPatterns />)}
          {(this.props.match.params.viewKey === "increase-stitches") && (<IncreaseStitches />)}
          {(this.props.match.params.viewKey === "decrease-stitches") && (<DecreaseStitches />)}
          {(this.props.match.params.viewKey === "knit-a-beanie") && (<KnitBeanie />)}
          {(this.props.match.params.viewKey === "pom-pom") && (<PomPom />)}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Learn;
