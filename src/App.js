import React, { Component, Fragment } from "react";
import MainBody from "./components/MainBody";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import NewNavbar from "./components/New_Navbar";
import GetInTouch from "./components/GetInTouch";
import {getInTouch} from "./editable-stuff/config.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <NewNavbar></NewNavbar>
        <MainBody></MainBody>
        <AboutMe></AboutMe>
        <Project></Project>
        <Skills></Skills>
        <GetInTouch heading={getInTouch.heading} message={getInTouch.message} email={getInTouch.email}></GetInTouch>
        <Footer>
        </Footer>
      </Fragment>
    );
  }
}

export default App;
