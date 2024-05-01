import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import MainNavBar from './MainNavBar';
import Signup from './Signup';
import AdminLogin from '../admin/AdminLogin';
import EventManagaerSignup from '../eventmanager/EventManagerSignup';
import EventManagerLogin from '../eventmanager/EventManagerLogin';
import PageNotFound from './PageNotFound';
import MarriageAlbum from './MarriageAlbum';
import RacingEvents from './RacingEvents';
import BirthdayAlbum from './BirthdayAlbum';

export default function MainRouting({ onClientLogin, onAdminLogin, onManagerLogin }) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainNavBar />} exact />
        <Route path="/home" element={<MainNavBar />} exact />
        <Route path="/login" element={<Login onClientLogin={onClientLogin} />} exact />
        <Route path="/signup" element={<Signup />} exact />
        <Route path="/adminlogin" element={<AdminLogin onAdminLogin={onAdminLogin} />} exact />
        <Route path="/emlogin" element={<EventManagerLogin onManagerLogin={onManagerLogin} />} exact />
        <Route path="/emsignup" element={<EventManagaerSignup />} />
        <Route path="/portfolio/marriagealbum" element={<MarriageAlbum />} />
        <Route path="/portfolio/racingevents" element={<RacingEvents />} />
        <Route path="/portfolio/birthdayalbum" element={<BirthdayAlbum />} />
        <Route path="/adminlogin" element={<AdminLogin/>}exact/>
        <Route path="*" element={<PageNotFound />} exact />
      </Routes>
    </div>
  );
}
