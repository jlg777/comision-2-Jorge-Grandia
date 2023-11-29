import { Route, Routes } from "react-router-dom";
import { Outlet } from "react-router-dom";
import HomePage from "../pages/homePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import PrivateRoutes from "../components/PrivateRoutes";
import IndexPage from "../pages/IndexPage";

function AppPublickRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />

      <Route path="*" element={<Outlet />} />

      <Route element={<PrivateRoutes />}>
        <Route path="/app/index" element={<IndexPage />} />
      </Route>
    </Routes>
  );
}
export default AppPublickRouter;
