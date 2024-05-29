// my-app/src/index.js
import React from "react";
import ReactDOM from "react-dom";
import AppLayout from "./components/layout";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <AppLayout>
      <App />
    </AppLayout>
  </BrowserRouter>
);
