import { Link, RouteComponentProps } from "@reach/router";
import React, { useContext } from "react";
import { AuthCheck, useAuth } from "reactfire";
import Login from "./Login";
import TokenContext from "./TokenContext";

const Home: React.FC<RouteComponentProps> = () => {
  const auth = useAuth();
  const [token] = useContext(TokenContext)

  return (
    <AuthCheck fallback={<Login />}>
      <div className="content"> 
      <nav>
        <ul>
          <li><Link to="/users">Users</Link></li>
        </ul>
      </nav>
      <h2 className="is-size-2">Hello, {auth.currentUser?.displayName}</h2>
      <button
        className="button is-light"
        onClick={() => {
          auth.signOut();
        }}
      >
        Sign Out
      </button>
      </div>
    </AuthCheck>
  );
};

export default Home;
