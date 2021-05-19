import React, { useState } from 'react';
import { Button } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import "./MenuBar.css"
import { CSSTransition } from "react-transition-group";
function MenuBar (props) {
    const [ menuShown, setMenuShown ] = useState(false)
    function toggleMenu() {
        setMenuShown(!menuShown)
    }
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
                            <li><Button>Show all players</Button></li>
                            <li><Button>Add new player</Button></li>
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