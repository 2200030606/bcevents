import React from 'react'
import {  Link ,useNavigate,Routes,Route} from 'react-router-dom';

import EventManagerProfile from '../eventmanager/EventManagerProfile';
import AddEvents from '../eventmanager/AddEvents';
import ViewAddedEvents from '../eventmanager/ViewAddedEvents';
import EventManagerHome from './EventManagerHome';


export default function EventManagerNavBar() {



 
  const navigate = useNavigate();

  
  const handleLogout = () => {
    localStorage.removeItem('isManagerLoggedIn');
    localStorage.removeItem('manager');

    navigate('/emlogin');
    window.location.reload()
  };
  
 

  

  return (
    <div>
        <ul className='navbar'>
     
        <li><Link  to="/emprofile">Profile</Link></li>
      <li><Link  to="/addevents">AddEvent</Link></li>
      <li><Link to="/viewevents">ViewAddedEvents</Link></li>
     
      <li><button className="logoutButton" onClick={handleLogout}>Logout</button></li>
        </ul>

        <Routes>
        <Route path='/emhome' element={<EventManagerHome/>}/>
       <Route path='/emprofile' element={<EventManagerProfile/>}/>
       <Route path='/addevents' element={<AddEvents/>}/>
       <Route path='/viewevents' element={<ViewAddedEvents/>}/>
        </Routes>
    </div>
  )
}