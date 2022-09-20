import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const Globalstyle = createGlobalStyle`
  ${reset}
  body {
  font-weight: 300;
  font-family: 'Source Sans Pro', sans-serif;
  color:black;
  line-height: 1.2;
  background:linear-gradient(135deg,rgb(255, 255, 255),rgb(185, 185, 185));
}
`;

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    // <React.StrictMode>
    <>
        <Globalstyle />
        <App />
    </>
    // </React.StrictMode>
);
