import './App.css';
import MainPage from "./modules/MainPage/MainPage";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>

  );
}

export default App;
