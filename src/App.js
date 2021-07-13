import "./App.css";
import MainPage from "./modules/MainPage/MainPage";
import { BrowserRouter } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import { FirebaseAuthProvider } from "@react-firebase/auth";
import { CONFIG } from "./authConfig";

function App() {
  return (
    <FirebaseAuthProvider firebase={firebase} {...CONFIG}>
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    </FirebaseAuthProvider>
  );
}

export default App;
