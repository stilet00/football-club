import Players from "../../pages/Players/Players";
import Form from "../../pages/Players/Form/Form";
import Location from "../../components/Location/Location";
import Statistics from "../../pages/Statistics/Statistics";
import Authorization from "../../pages/Authorization/Authorization";
import { Redirect } from "react-router";
import React from "react";

export const Routes = [
    {
        exact: true,
        path: "/add",
        component: Form
    },
    {
        exact: true,
        path: "/players",
        component: Players
    },
    {
        exact: true,
        path: "/location",
        component: Location
    },
    {
        exact: true,
        path: "/statistics",
        component: Statistics
    },
    {
        exact: true,
        path: "/",
        component: Authorization
    },
    {
        path: "*",
        component: function () {
            return <Redirect to={"/"} />
        }
    }
]