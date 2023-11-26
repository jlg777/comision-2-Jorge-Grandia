import { Route, Routes } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import App from '../App';
function AppPublickRouter() {
    return (
      <Routes>
        <Route path="/" element={<App />}  />
  
        <Route path="*" element={<Outlet />}/>
      </Routes>
    );
  }
  export default AppPublickRouter;