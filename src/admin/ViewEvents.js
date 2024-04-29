import React ,{useState,useEffect}from 'react'
import axios from 'axios'
import config from '../config'

export default function ViewEvents() {
    const [eventDetails, setEventDetails] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
          try {
            const response = await axios.get(`${config.url}/viewevents`);
            setEventDetails(response.data);
          } catch (error) {
            console.log(error.message);
          }
        };
    
        fetchEvents();
      }, []);

  return (
    <div>
     <h1 align="center" style={{color:"white"}}>Events</h1>
      <table border={1} align="center">
        <thead>
          <tr>
            <th style={{color:"white"}}>FullName</th>
            <th style={{color:"white"}}>Company</th>
            <th style={{color:"white"}}>Category</th>
            <th style={{color:"white"}}>Description</th>
            <th style={{color:"white"}}>Cost</th>
            <th style={{color:"white"}}>Image</th>
          </tr>
        </thead>
        <tbody>
          {eventDetails.length > 0 ? (
            eventDetails.map((event, index) => (
              <tr key={index}>
                <td style={{color:"white"}}>{event.fullname}</td>
                <td style={{color:"white"}}>{event.brandname}</td>
                <td style={{color:"white"}}>{event.category}</td>
                <td style={{color:"white"}}>{event.description}</td>
                <td style={{color:"white"}}>{event.cost}</td>
                
                <td style={{color:"white"}}>
  {event.file.endsWith('.jpg') || event.file.endsWith('.jpeg') || event.file.endsWith('.png') ? (
    <img src={`${config.url}/eventimage/${event.file}`} alt="Event" style={{ width: '250px', height: '250px' }} />
  ) : (
    <a href={`${config.url}/eventimage/${event.file}`}>Click Here</a>
  )}
</td>

              </tr>
            ))
          ) : (
            <tr style={{color:"white"}}>
              <td colSpan="6" align="center">No events found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}