import React, { useState } from 'react';
import { Button } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import "./MenuBar.css"
import { CSSTransition } from "react-transition-group";
import { Link, useRouteMatch } from "react-router-dom";
function MenuBar (props) {
    const [ menuShown, setMenuShown ] = useState(false)
    function toggleMenu() {
        setMenuShown(!menuShown)
    }
    const match = useRouteMatch()
    return (
        <div className={'menu'}>
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
                        <ul className={'fall-down-menu'}>
                            <li><Link to={match.path + 'players'}><Button onClick={toggleMenu}>Show all players</Button></Link></li>
                            <li><Link to={'/add'}><Button>Add new player</Button></Link></li>
                            <li><Button>menu3</Button></li>
                            <li><Button>menu4</Button></li>
                            <li><Button>menu5</Button></li>
                        </ul>
                </CSSTransition>
            </div>
            <h3>Liverpool players</h3>

        </div>
    );
}

export default MenuBar;