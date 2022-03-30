import React from "react";
import logo from "../../images/logo.png";
import "./SmallLogo.css";
function SmallLogo() {
  return (
    <div className={"logo-small"}>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default SmallLogo;
