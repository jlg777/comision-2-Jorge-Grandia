import React from "react";
import ReactDOM from "react-dom/client";
import AppPublickRouter from "./routes/PublicRoutes.jsx";
import AppPrivateRouter from "./routes/PrivateRoutes.jsx";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/Footer.jsx";
import { NavbarApp } from "./components/NavBar.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <NavbarApp />
        <AppPublickRouter>
          <AppPrivateRouter />
        </AppPublickRouter>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
