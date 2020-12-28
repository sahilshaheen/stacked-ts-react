import { Router } from "@reach/router";
import React from "react";
import { render } from "react-dom";
import { FirebaseAppProvider } from "reactfire";
import "firebase/auth";
import { firebaseConfig } from "./firebase.config";
import Home from "./Home";
import Login from "./Login";
import "bulma/css/bulma.min.css";
import "./global.css";

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <Router>
          <Home path="/" />
          <Login path="/login" />
        </Router>
      </FirebaseAppProvider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
