import React from 'react'
import {  Link, Route ,Routes,useNavigate} from 'react-router-dom';
import ViewClients from './ViewClients';
import ViewEventManagers from '../admin/ViewEventManagers'
import AdminHome from './AdminHome';
import ChangeAdminPwd from './ChangeAdminPwd';
import ViewEvents from './ViewEvents';
import '../main/main_css/mainnavbar.css'

export default function AdminNavBar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    localStorage.removeItem('admin');
    navigate('/adminlogin');
    window.location.reload()
  };
  return (
    <div >
        <ul className='navbar'>
        <li><Link to="/adminhome">Home</Link></li> 
      <li><Link  to="/viewclient">ViewClients</Link></li>
      <li><Link  to="/viewmanager">ViewEventManagers</Link></li>
      <li><Link  to="/changeadminpwd">ChangePassword</Link></li>
      <li><Link  to="/viewevents">ViewEvents</Link></li>
      <li><Link  to="/login"></Link></li>
      <li><button className="logoutButton" onClick={handleLogout}>Logout</button></li>
      </ul>

      <Routes>
      <Route path='/adminhome' element={<AdminHome/>} exact/>
      <Route path='/viewclient' element={<ViewClients/>}/>
      <Route path='/viewmanager' element={<ViewEventManagers/>}/>
      <Route path='/changeadminpwd' element={<ChangeAdminPwd/>}/>
      <Route path='/viewevents' element={<ViewEvents/>}/>
      </Routes>

    </div>
  )
}