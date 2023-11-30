import { Route, Routes } from "react-router-dom";
import IndexPage from "../pages/IndexPage";
import PrivateRoutes from "../components/PrivateRoutes";

function AppPrivateRouter() {
  return (
    <Routes element={<PrivateRoutes />}>
      <Route path="/index" element={<IndexPage />} />
    </Routes>
  );
}
export default AppPrivateRouter;
