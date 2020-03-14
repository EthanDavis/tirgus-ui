/* eslint-disable indent */
import React from "react";
import ReactDOM from "react-dom";
import "./style/main.less";

class Welcome extends React.Component {
  render() {
    return <h1>hello</h1>;
  }
}

ReactDOM.render(<Welcome />, document.getElementById("root"));
