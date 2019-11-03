import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";

const cache = new InMemoryCache();
const link = new HttpLink({ uri: `https://graphql-pokemon.now.sh/` });

const client = new ApolloClient({ cache, link });

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// made using tutorial from:
// https://www.sitepoint.com/how-to-build-a-web-app-with-graphql-and-react/
