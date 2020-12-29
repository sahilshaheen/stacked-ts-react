import React, { useContext } from "react";
import { useQuery, gql } from "@apollo/client";
import TokenContext from "./TokenContext";
import { AuthCheck } from "reactfire";
import Login from "./Login";
import { Link, RouteComponentProps } from "@reach/router";

const USERS = gql`
  {
    users {
      id
      username
      email
    }
  }
`;

const Users: React.FC<RouteComponentProps> = () => {
  const [token] = useContext(TokenContext)
  const { loading, data, error } = useQuery(USERS, {
    context: {
      token
    }
  });
  let body;
  if (loading) body = <p>Loading...</p>;
  else if (error) {
    body = <p>Error :(</p>
    console.log(error);
  }
  else body = (
    <ul>
      {data.users.map(({ username, id }: any) => (
        <li key={id}>{username}</li>
      ))}
    </ul>
  );
  return (
    <AuthCheck fallback={<Login />}>
      <div className="content">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav>
        <h2 className="is-size-2">Users</h2>
        {body}
      </div>
    </AuthCheck>
  )
};

export default Users;
