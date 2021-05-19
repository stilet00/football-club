import React from 'react';
import MenuBar from "../MenuBar/MenuBar";
import { useRouteMatch } from "react-router-dom";
import {
    Switch,
    Route,
    Link
} from "react-router-dom";
import Players from "../Players/Players";
import Main from "../../Components/Main/Main";
import "./MainPage.css"
import Form from "../Form/Form";


function MainPage (props) {
    return (
        <div className={'main-page'}>
            <MenuBar />
            <Switch>
                <Route path={'/'} exact component={Main} />
                <Route path={'/add'} component={Form} />
                <Route path={'/players/add'} component={Form} />
                <Route path={'/players'} component={Players} />

            </Switch>
            {/*<Link to={'players'}>ADSADSD</Link>*/}
        </div>
    );
}

export default MainPage;