import React, { Component } from "react";
import TopBar from "./TopBar.jsx";
import ContentPage from "./ContentPage.jsx";
import HeroSection from "./HeroSection.jsx"
import Footer from "./Footer.jsx";
import { inject, observer } from "mobx-react";
import { initGA, PageView } from "../GATracker/index";
import { TRACKING_ID, GA_OPTIONS } from "../Constants";

@inject("store")
@observer
class Homepage extends Component {
  componentDidMount() {
    initGA(TRACKING_ID, GA_OPTIONS);
    PageView();
  }

  render() {
    return (
      <div className="main-page">
        <TopBar />
        <div>
          <HeroSection />
        </div>
        <ContentPage />
        <Footer />
      </div>
    );
  }
}

export default Homepage;
