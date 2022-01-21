import React from "react";
import MenuBar from "../MenuBar/MenuBar";
import { Switch, Route } from "react-router-dom";
import "./Main.css";
import { useMainPage } from "./hooks";
import background from "../../images/background.jpg";
import { Routes } from "../../shared/routes/routes";
import { Redirect } from "react-router";

function Main() {
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
            {
                Routes.map((route) => <Route {...route} />)
            }
          {/*<Route*/}
          {/*  path={"/add"}*/}
          {/*  exact*/}
          {/*  component={() => <Form onFormSubmit={onFormSubmit} />}*/}
          {/*/>*/}
          {/*<Route*/}
          {/*  path={"/players"}*/}
          {/*  component={() => (*/}
          {/*    <Players*/}
          {/*      deletePlayer={deletePlayer}*/}
          {/*      players={players}*/}
          {/*      onFormSubmit={onFormSubmit}*/}
          {/*    />*/}
          {/*  )}*/}
          {/*/>*/}
          {/*<Route path={"/location"} exact component={Location} />*/}
          {/*<Route*/}
          {/*  path={"/statistics"}*/}
          {/*  exact*/}
          {/*  component={() => <Statistics players={players} />}*/}
          {/*/>*/}
        </Switch>
      </div>
    </div>
  );
}

export default Main;
