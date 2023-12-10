import { Route, Routes } from "react-router-dom";
import { Outlet } from "react-router-dom";
import HomePage from "../pages/homePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import PostPage from "../pages/PostPage";
import NewPostPage from "../pages/NewPostPage";
import TravelPage from "../pages/TravelPage";
import Error404Page from "../pages/Error404Page";
import IndexPage from "../pages/IndexPage";
import PrivateRoutes from "../components/PrivateRoutes";


function AppPublickRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/post" element={<PostPage />} />
      <Route path="/travel/:postlistId" element={<TravelPage />} />

      <Route element={<PrivateRoutes />}>
        <Route path="/index" element={<IndexPage />} />
        <Route path="/newPostPage" element={<NewPostPage />} />
      </Route>

      <Route path="*" element={<Error404Page />} />
    </Routes>
  );
}
export default AppPublickRouter;
