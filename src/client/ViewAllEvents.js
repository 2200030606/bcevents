import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';
import config from '../config';

const SearchContainer = styled(Paper)(({ theme }) => ({
  padding: '2px 4px',
  display: 'flex',
  alignItems: 'center',
  width: 400,
  margin: 'auto',
  marginBottom: '20px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
}));

const SearchInput = styled(InputBase)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  flex: 1,
}));

const StyledSelect = styled('select')({
  marginLeft: '10px',
  padding: '4px 12px',
  fontSize: '16px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  backgroundColor: '#fff',
  cursor: 'pointer',
});

export default function ViewAllEvents(props) {
  const location = useLocation();
  const category = location.state.category;
  const [eventDetails, setEventDetails] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [wishlist, setWishlist] = useState([]);

  const navigate = useNavigate();
  const handleEvent = (eventid) => {
    navigate(`/event`, { state: { eventid } });
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${config.url}/clientevents/${category}`);
        setEventDetails(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchEvents();
  }, [category]);

  const handleSearch = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const addToWishlist = (eventid) => {
    setWishlist([...wishlist, eventid]);
  };

  const compareCost = (a, b) => {
    if (sortBy === 'lowToHigh') {
      return a.cost - b.cost;
    } else if (sortBy === 'highToLow') {
      return b.cost - a.cost;
    } else {
      return 0;
    }
  };

  const filteredEvents = eventDetails
    .filter((event) => event.brandname.toLowerCase().includes(searchInput.toLowerCase()))
    .sort(compareCost);

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
        <SearchContainer>
          <IconButton disabled>
            <SearchIcon />
          </IconButton>
          <SearchInput
            placeholder="Search by company name..."
            inputProps={{ 'aria-label': 'search events' }}
            value={searchInput}
            onChange={handleSearch}
          />
        </SearchContainer>

        <div>
          <label htmlFor="sort" style={{ color: "white" }}>Sort by:</label>
          <StyledSelect id="sort" value={sortBy} onChange={handleSortChange}>
            <option value="">Select</option>
            <option value="lowToHigh">Cost: Low to High</option>
            <option value="highToLow">Cost: High to Low</option>
          </StyledSelect>
        </div>
      </div>

      <ImageList sx={{ paddingTop: 1, width: 1600, height: 1050, border: '1px solid black', margin: '50px', marginLeft: '22px' }} cols={4} rowHeight={194}>

        {filteredEvents.map((event) => (
          <ImageListItem key={event.eventid} sx={{ borderBottom: '1px solid black' }}>
            <img
              src={`http://localhost:1011/clienteventimage/${event.file}`}
              style={{ width: '100%', height: '190%', objectFit: 'cover' }}
              alt={event.title}
              loading="lazy"
            />
            <IconButton
              onClick={() => addToWishlist(event.eventid)}
              style={{ position: 'absolute', top: '8px', right: '8px', color: wishlist.includes(event.eventid) ? 'yellow' : 'white' }}
            >
              ★
            </IconButton>
            <ImageListItemBar
              title={`Company: ${event.brandname}`}
              subtitle={`Cost: ${event.cost}`}
              actionIcon={
                <IconButton sx={{ color: 'rgba(255, 255, 255, 0.54)' }} aria-label={`info about ${event.title}`} onClick={() => handleEvent(event.eventid)}>
                  <InfoIcon />
                </IconButton>
              }
              position="below"
              sx={{ borderTop: '1px solid white', color: 'white' }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
