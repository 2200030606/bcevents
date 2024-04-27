import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import config from '../config'
import './client_css/event.css'; // Import CSS file

export default function EventInformation() {
    const location = useLocation();
    const eventid = location.state.eventid;
    const [eventDetails, setEventDetails] = useState([]);
    const navigate = useNavigate();

    const handleEvent = (cost) => {
        navigate(`/booknowpage`, { state: { cost } })
    }

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get(`${config.url}/clienteventsinfo/${eventid}`);
                setEventDetails(response.data);
            } catch (error) {
                console.log(error.message);
                // You can set an error state here and display an error message to the user
            }
        };

        fetchEvents();
    }, [eventid]);

    return (
        <div className="event-details-container">
            {Array.isArray(eventDetails) && eventDetails.length > 0 && eventDetails[0].file && (
                <div className='event-card'>
                    {eventDetails[0].file.endsWith('.jpg') || eventDetails[0].file.endsWith('.jpeg') || eventDetails[0].file.endsWith('.png') ? (
                        <img className="event-image-name" src={`${config.url}/eventimage/${eventDetails[0].file}`} alt="Event" />
                    ) : (
                        <a href={`${config.url}/eventimage/${eventDetails[0].file}`}>Click Here</a>
                    )}
                </div>
            )}
            <br/>
            {Array.isArray(eventDetails) && eventDetails.length > 0 ? (
                eventDetails.map((event) => (
                    <div key={event.id} className="event-details">
                        <div align="center" style={{color:"white", fontSize:"30px" , paddingBottom:"260px" , paddingRight:"420px"}}>
                            <b><u>{event.brandname}</u></b>
                        </div>
                        <p style={{fontFamily:"cursive",fontSize:"25px"}}><b>Event Manager Name: {event.fullname}</b></p><br/><br/>
                        <p  style={{fontFamily:"cursive" , fontSize:"25px"}}>Category: {event.category}</p><br/><br/>
                        <p style={{fontFamily:"cursive", fontSize:"25px"}}>Description: {event.description}</p><br/><br/>
                        <p style={{fontFamily:"cursive",fontSize:"25px"}}>Contact: {event.contact}</p><br/><br/>
                        <p style={{fontFamily:"cursive",fontSize:"25px"}}>Cost: {event.cost}</p><br/>
                        <div style={{paddingTop:"290px"}}>
                        <button onClick={() => handleEvent(event.cost)} className='booknow'>
                            BOOK NOW
                        </button>
                        </div>
                    </div>
                ))
            ) : (
                <p>Data Not found</p>
            )}
            
        </div>
    );
}
