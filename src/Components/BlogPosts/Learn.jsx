import React, { Component } from "react";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import TopBar from "../TopBar.jsx";
import Footer from "../Footer.jsx";
import CastOn from "./CastOn.jsx"
import BindOff from "./BindOff.jsx"
import SimpleKnit from "./SimpleKnit.jsx"
import AddNewYarn from "./AddNewYarn.jsx"
import KnitScarf from "./KnitScarf.jsx"
import DroppedStitch from "./DroppedStitch.jsx"
import PurlStitch from "./PurlStitch.jsx"
import KnitPatterns from "./KnitPatterns.jsx"
import IncreaseStitches from "./IncreaseStitches.jsx"
import DecreaseStitches from "./DecreaseStitches.jsx"
import KnitBeanie from "./KnitBeanie.jsx"
import PomPom from "./PomPom.jsx"
import { inject, observer } from "mobx-react";
import { initGA, PageView } from "../../GATracker/index";
import { TRACKING_ID, GA_OPTIONS } from "../../Constants";

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
