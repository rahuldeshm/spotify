import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ContextProvider } from "./components/store/data-context";

const client = new ApolloClient({
  uri: "https://api.ss.dev/resource/api",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <ContextProvider>
      <App />
    </ContextProvider>
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
