import React from 'react';
import logo from "../../logo.png";
import MenuBar from "../MenuBar/MenuBar";

function MainPage (props) {
    return (
        <>
            <MenuBar />
            <main className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </main>
        </>
    );
}

export default MainPage;