import React,{useState,useEffect} from 'react'
import axios from 'axios'
import config from '../config'


export default function ViewEventManagers() {


    const [managers, setManagers] = useState([]);

  const fetchManagers = async () => {
    try {
      const response = await axios.get(`${config.url}/viewmanagers`);
      setManagers(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchManagers();
  }, []);


  const deletemanager = async (email) => {
    try {
      await axios.delete(`${config.url}/deletemanager${email}`);
      fetchManagers()
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div>
      <h1 align="center" style={{color:"white"}}> View Event Managers</h1>
      
      <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
          <thead>
            <tr>
              <th style={{color:"white"}}>Full Name</th>
              <th style={{color:"white"}}>Brand Name</th>
              <th style={{color:"white"}}>Email</th>
              <th style={{color:"white"}}>Contact</th>
              <th style={{color:"white"}}>Action</th>
            </tr>
          </thead>
          <tbody>
  {Array.isArray(managers) && managers.length > 0 ? (
    managers.map((manager, index) => (
      <tr key={index}>
        <td style={{color:"white"}}>{manager.fullname}</td>
        <td style={{color:"white"}}>{manager.brandname}</td>
        <td style={{color:"white"}}>{manager.email}</td>
        <td style={{color:"white"}}>{manager.contact}</td>
        
        <td style={{color:"white"}}>
        <button onClick={() => deletemanager(manager.email)} className='button'>Delete</button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="7">Data Not Found</td>
    </tr>
  )}
</tbody>
        </table>
    </div>
  );
  
}