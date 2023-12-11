import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [auth, setAuth] = useState(null);
  const [isLogin, setisLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  const login = ({ user, token }) => {
    setAuth({ user, token });

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    setisLogin(true);
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setAuth(null);
    setLoading(false);
    setisLogin(false);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");

    // si no tenemos alguno de los dos campos en el localStorage borramos todo
    if (!user || !token) {
      localStorage.removeItem("user");
      localStorage.removeItem("token");

      setisLogin(false);
      setAuth(null);
      setLoading(false);
      return;
    }

    setAuth({ user, token });
    setisLogin(true);
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ auth, login, logout, isLogin, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;
