import { Routes, Route } from 'react-router-dom';

import Details from './pages/NotebookDetails';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import Signup from './pages/Signup';
import Login from './pages/Login';

import ProtectedRoutes from './features/hooks/ProtectedRoutes';
// import NotebookDetails from "./pages/NotebookDetails";

const MainRoutes = () => {
  return (
    <Routes>
    <Route path="/*" element={<NotFound/>}/>
    <Route path="/" element={<Signup/>}/>
    <Route path="/login" element={<Login/>}/>
    {/*<Route path="/u" element={<ProtectedRoutes/>}>*/}
      <Route path="/u/dashboard" element={<Dashboard/>}/>
      {/*<Route path="/u/:id" element={<NotebookDetails/>}/>*/}
    {/*</Route>*/}
  </Routes>
  );
}
export default MainRoutes;