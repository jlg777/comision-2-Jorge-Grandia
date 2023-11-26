import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AppPublickRouter from "./routes/PublicRoutes.jsx";
import AppPrivateRouter from "./routes/PrivateRoutes.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <AppPublickRouter>
      <AppPrivateRouter>
        <App />
      </AppPrivateRouter>
    </AppPublickRouter>
    </BrowserRouter>
  </React.StrictMode>
);
