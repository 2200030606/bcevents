import React , { useEffect, useState } from 'react'
import axios from 'axios'
import config from '../config'
import './admin_css/home.css'
export default function AdminHome() {
  const [adminData, setAdminData] = useState("");
  const [counts, setCounts] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const storedAdminData = localStorage.getItem('admin');
    if (storedAdminData) {
      const parsedAdminData = JSON.parse(storedAdminData);
      setAdminData(parsedAdminData);
      fetchCounts();
    }
  }, []);

  const fetchCounts = async () => {
    try {
      const response = await axios.get(`${config.url}/analysis`);
      setCounts(response.data);
    } catch (error) {
      setError('Failed to fetch counts');
    }
  };
  return (
    <div>
       {adminData && (
        <div style={{alignContent:"center"}}> 
          <h1 style={{color:"white"}}>Welcome {adminData.username} Dashboard</h1>
          {counts ? (
            <div className="row">

             <div className="column">
                <div className="card9">
                  <h3 style={{color:"black"}}>Clients</h3>
                  <p style={{color:"black"}}>{counts.clientCount}</p>
                </div>
              </div>

              <div className="column">
                <div className="card9">
                  <h3 style={{color:"black"}}>Managers</h3>
                  <p style={{color:"black"}}>{counts.managerCount}</p>
                </div>
              </div>


              <div className="column">
                <div className="card9">
                  <h3 style={{color:"black"}}>Events</h3>
                  <p style={{color:"black"}}>{counts.eventCount}</p>
                </div>
              </div>

    
            </div>
          ) : (
            <p>Loading counts...</p>
          )}
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      )}
    </div>
  )
}
