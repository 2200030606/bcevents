import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';

import './admin_css/viewclient.css';

export default function ViewClients() {
  const [clients, setClients] = useState([]);

  const fetchClients = async () => {
    try {
      const response = await axios.get(`${config.url}/viewclients`);
      setClients(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const deleteClients = async (email) => {
    try {
      await axios.delete(`${config.url}/deleteclients${email}`);
      fetchClients();
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleSearch = () => {
    const input = document.getElementById('myInput');
    const filter = input.value.toUpperCase();
    const table = document.getElementById('myTable');
    const tr = table.getElementsByTagName('tr');

    for (let i = 0; i < tr.length; i++) {
      const td = tr[i].getElementsByTagName('td')[0];
      if (td) {
        const txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = '';
        } else {
          tr[i].style.display = 'none';
        }
      }
    }
  };

  return (
    <div align="center" style={{ paddingTop: '20px', color: 'black' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', color:"black" }}>
        <input
          style={{ color: 'black', marginRight: '10px'  }}
          type="text"
          id="myInput"
          onKeyUp={handleSearch}
          placeholder="Search for names.."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ color: 'white' }}>Clients</h1>
        <table
          border={1}
          id="myTable"
          align="center"
          style={{ width: 'auto', height: 'auto' }}
        >
          <thead>
            <tr>
              <th style={{ color: 'white' }}>Full Name</th>
              <th style={{ color: 'white' }}>Email</th>
              <th style={{ color: 'white' }}>Contact</th>
              <th style={{ color: 'white' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(clients) && clients.length > 0 ? (
              clients.map((client, index) => (
                <tr key={index}>
                  <td style={{ color: 'white' }}>{client.fullname}</td>
                  <td style={{ color: 'white' }}>{client.email}</td>
                  <td style={{ color: 'white' }}>{client.contact}</td>
                  <td>
                    <button
                      onClick={() => deleteClients(client.email)}
                      className="button"
                    >
                      Delete
                    </button>
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
    </div>
  );
}
