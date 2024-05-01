import React from 'react'
import {  Link ,useNavigate,Routes,Route} from 'react-router-dom';
import ClientProfile from './ClientProfile'
import '../main/main_css/mainnavbar.css'
import BookEvent from './BookEvent'
import ClientHome from './ClientHome';
import ViewAllEvents from './ViewAllEvents';
import EventInformation from './EventInformation';
import UpdateClientProfile from './UpdateClientProfile';
import BookNowPage from './BookNowPage';


export default function ClientNavBar() {



  
  const navigate = useNavigate();

  

  const handleLogout = () => {
    localStorage.removeItem('isClientLoggedIn');
    localStorage.removeItem('client');

    navigate('/login');
    window.location.reload()
  };
 
  return (
    <div>
         <ul className='navbar'>
          <li><Link to="/clienthome">Home</Link></li>
        <li><Link  to="/clientprofile">Profile</Link></li>
      <li><Link  to="/bookevent">BookEvent</Link></li>
      <li><button className="logoutButton" onClick={handleLogout}>Logout</button></li>
        </ul>
        
        <Routes>
        <Route path='/clienthome' element={<ClientHome />} />
         <Route path='/clientprofile' element={<ClientProfile/>}/>
         <Route path='/bookevent' element={<BookEvent/>}/> 
         <Route path='booknowpage' element={<BookNowPage/>}></Route>
         <Route path='/viewallevents' element={<ViewAllEvents/>}/>
         <Route path='/event' element={<EventInformation/>}></Route>
         <Route path='/updateclientprofile' element={<UpdateClientProfile/>}/>
        </Routes>
    </div>
  )
}