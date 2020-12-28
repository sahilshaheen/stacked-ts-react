import { RouteComponentProps } from "@reach/router";
import React from "react";
import { AuthCheck } from "reactfire";
import Login from "./Login";

const Home: React.FC<RouteComponentProps> = () => {
  return (
    <AuthCheck fallback={<Login />}>
      <h1>Home</h1>
    </AuthCheck>
  );
};

export default Home;
