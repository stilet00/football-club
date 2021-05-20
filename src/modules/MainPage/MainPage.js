import React from "react";
import MenuBar from "../MenuBar/MenuBar";
import { Switch, Route } from "react-router-dom";
import Players from "../Players/Players";
import Main from "../../Components/Main/Main";
import "./MainPage.css";
import Form from "../Form/Form";
import { useMainPage } from "./hooks";

function MainPage() {
  const { players, onFormSubmit, deletePlayer } = useMainPage();
  return (
    <div className={"main-page"}>
      <MenuBar />
      <div className={"main-container"}>
        <Switch>
          <Route
            path={"/add"}
            exact
            component={() => <Form onFormSubmit={onFormSubmit} />}
          />
          <Route
            path={"/players"}
            component={() => (
              <Players
                deletePlayer={deletePlayer}
                players={players}
                onFormSubmit={onFormSubmit}
              />
            )}
          />
        </Switch>
      </div>
      <Main />
    </div>
  );
}

export default MainPage;
