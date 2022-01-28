import React from "react";
import MenuBar from "../MenuBar/MenuBar";
import { Switch, Route } from "react-router-dom";
import "./Main.css";
import background from "../../images/background.jpg";
import { mainRoutes } from "../../shared/routes/routes";

function Main() {
  return (
    <div
      className={"main-page"}
      style={{
        background: "url(" + background + ")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <MenuBar />
      <div className={"main-container"}>
        <Switch>
          {mainRoutes.map((route) => (
            <Route {...route} key={route.path} />
          ))}
        </Switch>
      </div>
    </div>
  );
}

export default Main;
