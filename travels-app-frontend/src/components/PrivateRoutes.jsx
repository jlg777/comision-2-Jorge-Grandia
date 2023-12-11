import { useContext, useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoutes = () => {
  const { auth, isLogin, loading } = useContext(AuthContext);

  const navigate = useNavigate();

  //useEffect(() => {
  //  if (auth === null) {
  //    navigate("/login");
  //  }
  //}, [auth, navigate]);

  //if (auth === undefined) return <div>Loading...</div>;

  if (loading) return <div>loading...</div>;

  if (!loading && !isLogin) return <Navigate to="login" />;

  return <Outlet />;
};

export default PrivateRoutes;
