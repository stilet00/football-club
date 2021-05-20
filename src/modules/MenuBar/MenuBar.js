import React from "react";
import { Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";
import "./MenuBar.css";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import AddBoxIcon from "@material-ui/icons/AddBox";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { useMenuBar } from "./hooks";

function MenuBar() {
  const { toggleMenu, menuShown, path } = useMenuBar();
  return (
    <div className={"menu"}>
      <div className="right-menu-button">
        <Button onClick={toggleMenu}>
          <MenuIcon />
        </Button>
        <CSSTransition
          in={menuShown}
          timeout={100}
          classNames="menu"
          unmountOnExit
        >
          <ul className={"fall-down-menu"}>
            <li>
              <Link to={path + "players"}>
                <Button
                  onClick={toggleMenu}
                  variant={"outlined"}
                  className={"nav-button"}
                >
                  <SupervisorAccountIcon />
                  Show all players
                </Button>
              </Link>
            </li>
            <li>
              <Link to={"/add"}>
                <Button
                  onClick={toggleMenu}
                  variant={"outlined"}
                  className={"nav-button"}
                >
                  <AddBoxIcon />
                  Add one more player
                </Button>
              </Link>
            </li>
            <li>
              <Button onClick={toggleMenu}>
                <ArrowDropUpIcon />
              </Button>
            </li>
          </ul>
        </CSSTransition>
      </div>
      <h3>
        <SportsSoccerIcon /> Liverpool players <SportsSoccerIcon />
      </h3>
    </div>
  );
}

export default MenuBar;
