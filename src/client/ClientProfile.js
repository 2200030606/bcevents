import React, { useState, useEffect } from 'react';
import './client_css/clientprofile.css';
import { useNavigate } from 'react-router-dom';

export default function ClientProfile() {
  const [clientData, setClientData] = useState(null);
  

  useEffect(() => {
    const storedClientData = localStorage.getItem('client');
    if (storedClientData) {
      const parsedClientData = JSON.parse(storedClientData);
      setClientData(parsedClientData);
    }
  }, []);
  const navigate= new useNavigate()
  const handleevent=()=>{
    navigate('/updateclientprofile')
  }
  
  return (
    <div className="profile">
      <div className="avatar">
        <div className="avatar-wrapper">
        </div>
      </div>
      <div className="body">
        <p>Name : {clientData ? clientData.fullname : "Loading..."}</p><br/>
        <p>Email : {clientData ? clientData.email : "Loading..."}</p><br/>
        <p>Contact : {clientData ? clientData.contact : "Loading..."}</p><br/>
      </div>
      <button onClick={handleevent}>Update</button>
    </div>
  );
}
