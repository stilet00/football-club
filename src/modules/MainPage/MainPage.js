import React from "react";
import MenuBar from "../MenuBar/MenuBar";
import { Switch, Route } from "react-router-dom";
import Players from "../Players/Players";
import "./MainPage.css";
import Form from "../Form/Form";
import { useMainPage } from "./hooks";
import { Redirect } from "react-router";
import Location from "../../Components/Location/Location";
import background from "../../images/background.jpg";
import Statistics from "../Statistics/Statistics";
import Authorization from "../Authorization/Authorization";

function MainPage() {
  const { players, onFormSubmit, deletePlayer } = useMainPage();
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
          <Route path={"/location"} exact component={Location} />
          <Route
            path={"/statistics"}
            exact
            component={() => <Statistics players={players} />}
          />

          <Route path={"/"} component={Authorization} />
          <Route path={"*"}>
            <Redirect to={"/"} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default MainPage;
