import React, { Component } from "react";
import Homepage from "./Components/Homepage.jsx";
import Learn from "./Components/BlogPosts/Learn.jsx"
import { inject, observer } from "mobx-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

@inject("store")
@observer
class App extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Router>
        <Switch>
        <Route path="/learn/:viewKey" component={Learn} />{" "}

          <Route path="/">
            <Homepage />
          </Route>{" "}

          
        </Switch>{" "}
      </Router>
    );
  }
}

export default App;
