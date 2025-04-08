import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Authenticator } from "@aws-amplify/ui-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div><h1>Trung Du Auth Checker from UNT using AWS technologies</h1></div>
    <Authenticator>
      <App />
    </Authenticator>
  </React.StrictMode>
);