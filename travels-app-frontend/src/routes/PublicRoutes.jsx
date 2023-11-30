import { Route, Routes } from "react-router-dom";
import { Outlet } from "react-router-dom";
import HomePage from "../pages/homePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import PostPage from "../pages/PostPage";

function AppPublickRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/post" element={<PostPage />} />

      <Route path="*" element={<Outlet />} />
    </Routes>
  );
}
export default AppPublickRouter;
