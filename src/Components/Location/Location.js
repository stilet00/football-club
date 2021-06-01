import React from "react";
import "./Location.css";
function Location(props) {
  return (
    <div className={"location-container"}>
      <h3>Liverpool's base stadium location</h3>
      <iframe
        className={"map-container"}
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD3FIKBtxE1LKc7TIPS8LURGlMMfRIgNHw&q=Anfield+Stadium,Anfield,Liverpool"
      >
        Loading...
      </iframe>
    </div>
  );
}

export default Location;
