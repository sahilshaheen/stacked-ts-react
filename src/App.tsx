import { Router } from "@reach/router";
import React, { useContext, useEffect } from "react";
import Home from "./Home";
import Login from "./Login";
import TokenContext from "./TokenContext";
import { useUser } from "reactfire";
import Users from "./Users";

const App: React.FC = () => {
  const [token, setToken] = useContext(TokenContext);
  const { data: user } = useUser();

  useEffect(() => {
    if (!token && user) user.getIdToken(true).then(setToken);
    else if (token && !user) setToken("");
  }, [user, token, setToken]);

  return (
    <>
      <div className="content"><p>Token: {token}</p></div>
      <Router>
        <Home path="/" />
        <Login path="/login" />
        <Users path="/users" />
      </Router>
    </>
  );
};

export default App;
