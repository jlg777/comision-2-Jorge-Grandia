import React from "react";
import ReactDOM from "react-dom/client";
import AppPublickRouter from "./routes/PublicRoutes.jsx";
import AppPrivateRouter from "./routes/PrivateRoutes.jsx";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/Footer.jsx";
import { NavbarApp } from "./components/navBar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavbarApp />
      <AppPublickRouter>
        <AppPrivateRouter />
      </AppPublickRouter>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
