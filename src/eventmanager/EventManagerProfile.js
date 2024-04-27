import React, { useState, useEffect } from 'react';
import '../main/main_css/mainnavbar.css';
import '../client/client_css/clientprofile.css'


export default function EventManagerProfile() {

  const [managerData, setManagerData] = useState([]);

  useEffect(() => {
    const storedManagerData = localStorage.getItem('manager');
    if (storedManagerData) {
      const parsedManagerData = JSON.parse(storedManagerData);
      setManagerData(parsedManagerData);
    }
  }, []);
  return (
    <div className="profile">
      <div className="avatar">
        <div className="avatar-wrapper">
        </div>
      </div>
      <div className="body">
      <p>Name : {managerData ? managerData.fullname : "Loading..."}</p><br/>
        <p>Email : {managerData ? managerData.email : "Loading..."}</p><br/>
        <p>Contact : {managerData ? managerData.contact : "Loading..."}</p><br/>
        <p>Contact : {managerData ? managerData.brandname : "Loading..."}</p><br/>
</div>
    </div>
  );
}