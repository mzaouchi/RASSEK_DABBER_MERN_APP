import React, { Component } from "react";
import Register from "./Register";
export default class RegisterDesign extends Component {

  jQuerycode = () => {
    alert(
        "If you are not upset with the design, then it isn't a bad idea to color the grey heart pink.😁"
      );
  };

  componentDidMount() {
    this.jQuerycode();
  }
  render() {
    return <Register />;
  }
}
