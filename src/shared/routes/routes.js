import Players from "../../pages/Players/Players";
import Form from "../../pages/Players/Form/Form";
import Location from "../../components/Location/Location";
import Statistics from "../../pages/Statistics/Statistics";
import { Redirect } from "react-router";
import Authorization from "../../pages/Authorization/Authorization";
import PlayerList from "../../pages/Players/PlayersList/PlayerList";

export const mainRoutes = [
  {
    exact: true,
    path: "/add",
    component: Form,
  },
  {
    exact: false,
    path: "/players/",
    component: Players,
  },
  {
    exact: true,
    path: "/location",
    component: Location,
  },
  {
    exact: true,
    path: "/statistics",
    component: Statistics,
  },
  {
    exact: true,
    path: "/",
    component: Authorization,
  },
  {
    path: "*",
    component: function () {
      return <Redirect to={"/"} />;
    },
  },
];

export const playersRoutes = [
  {
    exact: true,
    path: "/players",
    component: PlayerList,
  },
  {
    exact: true,
    path: "/players/add",
    component: Form,
  },
  {
    exact: true,
    path: "/players/:id",
    component: Form,
  }
];
