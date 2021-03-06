import React from "react";
import { Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import "./MenuBar.css";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import AddBoxIcon from "@material-ui/icons/AddBox";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import BarChartIcon from "@material-ui/icons/BarChart";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { useMenuBar } from "./hooks";
import logo from "../../images/logo.png";
import { useTranslation } from "react-i18next";
import { FirebaseAuthConsumer } from "@react-firebase/auth";
import firebase from "firebase";
import { useHistory } from "react-router";

function MenuBar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const { toggleMenu, menuShown, handleClickAway, path } = useMenuBar();

  const history = useHistory();

  return (
    <FirebaseAuthConsumer>
      {({ isSignedIn, user, providerId }) => {
        return (
          <ClickAwayListener onClickAway={handleClickAway}>
            <div className={"menu"}>
              <div className="right-menu-button-container">
                <Button
                  onClick={toggleMenu}
                  className={"right-menu-button"}
                  disabled={!isSignedIn}
                >
                  <MenuIcon />
                </Button>
                <CSSTransition
                  in={menuShown}
                  classNames="menu"
                  timeout={100}
                  unmountOnExit
                >
                  <ul className={"fall-down-menu"}>
                    <li>
                      <Button
                        onClick={() => changeLanguage("ru")}
                        variant={"outlined"}
                        className={"nav-button language-button"}
                        disabled={i18n.language === "ru"}
                      ></Button>
                      <Button
                        onClick={() => changeLanguage("en")}
                        variant={"outlined"}
                        className={"nav-button language-button"}
                        disabled={i18n.language === "en"}
                      ></Button>
                    </li>
                    <li>
                      <Link to={path + "players"}>
                        <Button
                          onClick={toggleMenu}
                          variant={"outlined"}
                          className={"nav-button"}
                        >
                          <SupervisorAccountIcon />
                          {t("menuButtons.show")}
                        </Button>
                      </Link>
                    </li>
                    <li>
                      <Link to={"players/add"}>
                        <Button
                          onClick={toggleMenu}
                          variant={"outlined"}
                          className={"nav-button"}
                        >
                          <AddBoxIcon />
                          {t("menuButtons.add")}
                        </Button>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/location"}>
                        <Button
                          onClick={toggleMenu}
                          variant={"outlined"}
                          className={"nav-button"}
                        >
                          <LocationOnIcon />
                          {t("menuButtons.location")}
                        </Button>
                      </Link>
                    </li>
                    <li>
                      <Link to={path + "statistics"}>
                        <Button
                          onClick={toggleMenu}
                          variant={"outlined"}
                          className={"nav-button"}
                        >
                          <BarChartIcon />
                          {t("menuButtons.statistics")}
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </CSSTransition>
              </div>
              <h2>{t("title")}</h2>
              <div className={"logo-container"}>
                {isSignedIn ? (
                  <Button
                    className={"auth-button"}
                    variant={"outlined"}
                    onClick={() => {
                      firebase.auth().signOut();
                      history.push("/");
                    }}
                  >
                    {t("authorization.singOutButton")}
                  </Button>
                ) : (
                  <img src={logo} className={"header-logo"} alt="logo" />
                )}
              </div>
            </div>
          </ClickAwayListener>
        );
      }}
    </FirebaseAuthConsumer>
  );
}

export default MenuBar;
