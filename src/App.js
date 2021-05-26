import "./App.css";
import MainPage from "./modules/MainPage/MainPage";
import { BrowserRouter } from "react-router-dom";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

function App() {
  return (
    <BrowserRouter>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <MainPage />
      </MuiPickersUtilsProvider>
    </BrowserRouter>
  );
}

export default App;
