import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [auth, setAuth] = useState(null);

  const login = ({ user, token }) => {
    setAuth({ user, token });

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setAuth(null);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");

    // si no tenemos alguno de los dos campos en el localStorage borramos todo
    if (!user || !token) {
      localStorage.removeItem("user");
      localStorage.removeItem("token");

      setAuth(null);
      return;
    }

    setAuth({ user, token });
  }, []);

 console.log(auth); 
  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;
