import React from "react";
import logo from "../../logo.png";
import "./SmallLogo.css";
function SmallLogo(props) {
  return (
    <div className={"logo-small"}>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default SmallLogo;
