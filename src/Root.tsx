import React, { useState } from "react";
import { render } from "react-dom";
import { FirebaseAppProvider } from "reactfire";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import "bulma/css/bulma.min.css";
import "./global.css";
import App from "./App";
import TokenContext from "./TokenContext";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "http://localhost:5000/graphql",
});

const authLink = setContext((_, { token }) => {
  console.log(`Sending token: ${token}`);
  return {
    headers: {
      authorization: token,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const Root: React.FC = () => {
  const tokenHook = useState("");
  return (
    <React.StrictMode>
      <FirebaseAppProvider {...{ firebaseConfig }}>
        <TokenContext.Provider value={tokenHook}>
          <ApolloProvider {...{ client }}>
            <App />
          </ApolloProvider>
        </TokenContext.Provider>
      </FirebaseAppProvider>
    </React.StrictMode>
  );
};

render(<Root />, document.getElementById("root"));
