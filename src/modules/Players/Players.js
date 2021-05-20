import React from "react";
import "./Players.css";
import { useRouteMatch } from "react-router";
import PlayerList from "./PlayersList/PlayerList";
import { Route, Switch } from "react-router-dom";
import Form from "../Form/Form";
function Players({ players, deletePlayer, onFormSubmit }) {
  const { path } = useRouteMatch();
  return (
    <div className={"players"}>
      <Switch>
        <Route
          path={path}
          exact
          component={() => (
            <PlayerList players={players} deletePlayer={deletePlayer} />
          )}
        />
        <Route
          path={path + "/add"}
          component={() => <Form onFormSubmit={onFormSubmit} />}
        />
        <Route
          path={path + "/:id"}
          component={() => <Form players={players} onFormSubmit={onFormSubmit}/>}
        />
      </Switch>
    </div>
  );
}

export default Players;
