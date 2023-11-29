import { Route, Routes } from "react-router-dom";
import IndexPage from "../pages/IndexPage";
import PrivateRoutes from "../components/PrivateRoutes";

function AppPrivateRouter() {
  return (
    <Route element={<PrivateRoutes />}>
      <Route path="/app/index" element={<IndexPage />} />
    </Route>
  );
}
export default AppPrivateRouter;
