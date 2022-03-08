import Players from "../../pages/Players/Players";
import Redirecter from "../../components/Redirect/Redirecter";
import Form from "../../pages/Players/Form/Form";
import Location from "../../components/Location/Location";
import Statistics from "../../pages/Statistics/Statistics";
import Authorization from "../../pages/Authorization/Authorization";
import PlayerList from "../../pages/Players/PlayersList/PlayerList";

interface Route {
  exact?: boolean;
  path: string;
  component: React.FunctionComponent;
}

interface Routes extends Array<Route>{}

export const mainRoutes: Routes = [
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
    component: Redirecter,
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
