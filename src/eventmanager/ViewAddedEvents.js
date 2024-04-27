import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './eventmanager_css/viewaddedevents.css'; 
import config from '../config'

export default function ViewAddedEvents() {
  const [eventDetails, setEventDetails] = useState([]);
  const [managerData, setManagerData] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        if (managerData && managerData.contact) {
          const response = await axios.get(`${config.url}/managerevents/${managerData.contact}`);
          setEventDetails(response.data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchEvents();
  }, [managerData]);

  useEffect(() => {
    const storedManagerData = localStorage.getItem('manager');
    if (storedManagerData) {
      const parsedManagerData = JSON.parse(storedManagerData);
      setManagerData(parsedManagerData);
    }
  }, []);

  return (
    <div className="view-added-events-container">
      <div className="card">
        {eventDetails.length > 0 ? (
          eventDetails.map((event, index) => (
            <div className="event-container" key={index}>
              {event.file.endsWith('.jpg') || event.file.endsWith('.jpeg') || event.file.endsWith('.png') ? (
                <img src={`${config.url}/eventimage/${event.file}`} alt="Event" className="event-image" />
              ) : (
                <a href={`${config.url}/eventimage/${event.file}`} className="event-link">Click Here</a>
              )}
              <div className="event-details">
                <p className="detail" style={{color:"black"}}>Fullname: {event.fullname}</p><br/>
                <p className="detail"style={{color:"black"}}>Category: {event.category}</p><br/>
                <p className="detail"style={{color:"black"}}>Description: {event.description}</p><br/>
                <p className="detail"style={{color:"black"}}>Cost: {event.cost}</p><br/>
                <p className="detail"style={{color:"black"}}>Contact: {event.contact}</p><br/>
              </div>
            </div>
          ))
        ) : (
          <p className="no-data">Data Not found</p>
        )}
      </div>
    </div>
  );
}
