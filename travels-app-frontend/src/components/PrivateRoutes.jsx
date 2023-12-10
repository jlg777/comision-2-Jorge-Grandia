import { useContext, useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoutes = () => {
  const { auth, isLogin, loading } = useContext(AuthContext);
  console.log("PrivateRoutes: Usuario autenticado", { auth });
  const navigate = useNavigate();

  //useEffect(() => {
  //  if (auth === null) {
  //    navigate("/login");
  //  }
  //}, [auth, navigate]);

  //if (auth === undefined) return <div>Loading...</div>;

  if (loading) return <div>loading...</div>;

  if (!loading && !isLogin) return <Navigate to="login" />

  console.log("PrivateRoutes: Usuario autenticado", { auth });
  return <Outlet />;
};

export default PrivateRoutes;
