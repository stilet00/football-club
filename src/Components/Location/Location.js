import React from "react";
import "./Location.css";

import logo from "../../logo.png";
import SmallLogo from "../SmallLogo/SmallLogo";
function Location(props) {
  return (
    <div className={"location-container"}>
      <h3>Liverpool's base stadium location</h3>
      <iframe
        className={"map-container"}
        loading="lazy"
        allowFullScreen
        seamless
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD3FIKBtxE1LKc7TIPS8LURGlMMfRIgNHw&q=Anfield+Stadium,Anfield,Liverpool"
      >
        Loading...
      </iframe>
       <SmallLogo />
    </div>
  );
}

export default Location;
