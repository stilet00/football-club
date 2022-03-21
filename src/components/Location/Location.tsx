import React, { useState } from "react";
import "./Location.css";
import Loader from "../Loader/Loader";
import { useTranslation } from "react-i18next";
function Location() {
  const { t } = useTranslation();

  const [loading, setLoading] = useState(true);

  const loader = loading ? <Loader /> : null;

  return (
    <div className={"location-container"}>
      <h3>{t("location")}</h3>
      <iframe
        title={"google map"}
        className={"map-container"}
        loading="lazy"
        seamless
        onLoad={() => setLoading(false)}
        src={
          "https://www.google.com/maps/embed/v1/place?key=AIzaSyD3FIKBtxE1LKc7TIPS8LURGlMMfRIgNHw&q=Anfield+Stadium,Anfield,Liverpool"
        }
      ></iframe>
      {loader}
    </div>
  );
}

export default Location;
