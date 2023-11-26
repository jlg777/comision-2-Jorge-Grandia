import { Route, Routes } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import App from '../App';
import HomePage from '../pages/homePage';
import NavbarApp from '../components/navBar';

function AppPublickRouter() {
    return (
      <Routes>
        <Route path="/" element={<HomePage />}  />
  
        <Route path="*" element={<Outlet />}/>
      </Routes>
    );
  }
  export default AppPublickRouter;