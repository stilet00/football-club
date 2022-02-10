import React from "react";
import "./Players.css";
import { Route, Switch } from "react-router-dom";
import { playersRoutes } from "../../shared/routes/routes";
function Players() {
  return (
    <div className={"players"}>
      <Switch>
        {playersRoutes.map((route) => (
          <Route {...route} key={route.path} />
        ))}
      </Switch>
    </div>
  );
}

export default Players;
