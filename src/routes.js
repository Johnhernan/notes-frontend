import { Routes, Route } from 'react-router-dom';

import Details from './Pages/Details';
import Dashboard from './Pages/Dashboard';
import NotFound from './Pages/NotFound';
import ProtectedRoutes from './components/ProtectedRoutes';
import Home from './Pages/Home';
import Login from './Pages/Login';

const MainRoutes = () => {
  return (
    <Routes>
    <Route path="/*" element={<NotFound/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/u" element={<ProtectedRoutes/>}>
      <Route path="/u/dashboard" element={<Dashboard/>}/>
      <Route path="/u/:id" element={<Details/>}/>
    </Route>
  </Routes>
  )
}
export default MainRoutes;