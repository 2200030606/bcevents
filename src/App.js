import {BrowserRouter} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import MainRouting from './main/MainRouting';
import ClientNavBar from './client/ClientNavBar';
import EventManagerNavBar from './eventmanager/EventManagerNavBar';
import AdminNavBar from './admin/AdminNavBar';
import profile from './main/main_images/bg.jpg';

function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isClientLoggedIn, setIsClientLoggedIn] = useState(false);
  const [isManagerLoggedIn, setIsManagerLoggedIn] = useState(false);
  useEffect(() => {
    const adminLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
     const clientLoggedIn = localStorage.getItem('isClientLoggedIn') === 'true';
     const managerLoggedIn = localStorage.getItem('isManagerLoggedIn') === 'true';
    
     setIsAdminLoggedIn(adminLoggedIn);
     setIsClientLoggedIn(clientLoggedIn);
    setIsManagerLoggedIn(managerLoggedIn);
   }, []);

   const onAdminLogin = () => {
    localStorage.setItem('isAdminLoggedIn', 'true');
    setIsAdminLoggedIn(true);
  };

  const onClientLogin = () => {
    localStorage.setItem('isClientLoggedIn', 'true');
    setIsClientLoggedIn(true);
  };

  const onManagerLogin = () => {
    localStorage.setItem('isManagerLoggedIn', 'true');
    setIsManagerLoggedIn(true);
  };
  return (
    <div className="App" style={{ 
      backgroundImage: `url(${profile})`,
      width: '100%',
      minHeight: '100vh',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed', 
    }}>
      <BrowserRouter>
      {isAdminLoggedIn ? (
          <AdminNavBar />
        ) : isClientLoggedIn ? (
          <ClientNavBar />
        ) : isManagerLoggedIn ? (
          <EventManagerNavBar />
        ) : (
          <MainRouting
            onAdminLogin={onAdminLogin}
            onClientLogin={onClientLogin}
            onManagerLogin={onManagerLogin}
          />
        )}
      
      </BrowserRouter>
    </div>
  );
}

export default App;