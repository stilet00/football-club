import React, { useState } from 'react';
import "./Players.css"
import { Button, Fab } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory, useRouteMatch } from "react-router";
import PlayerList from "./PlayersList/PlayerList";
import { PLAYERS } from "../../mocks/mocks";
import { Link } from "react-router-dom";
function Players (props) {
    const history = useHistory()
    const { path } = useRouteMatch()
    const [ players, setPlayers ] = useState(PLAYERS)
    return (
        <div className={'players'}>
            <PlayerList players={players}/>
            <div className={'control-buttons'}>
                <Fab  aria-label="add" onClick={() => history.push('/')}>
                    <Link to={path + '/add'}><ArrowBackIcon /></Link>
                </Fab>
                <Fab  aria-label="add">
                    <Link to={path + '/add'}><AddIcon /></Link>
                </Fab>

            </div>

        </div>
    );
}

export default Players;