import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import birthday1 from './main_images/birthday1.jpg';
import birthday2 from './main_images/birthday2.jpg';
import birthday3 from './main_images/birthday3.jpg';
import birthday4 from './main_images/birthday4.jpg';
import birthday5 from './main_images/birthday5.jpg';
import birthday6 from './main_images/birthday6.jpg';
import birthday7 from './main_images/birthday7.jpg';
import birthday8 from './main_images/birthday8.jpg';




export default function BirthdayAlbum() {
  return (
    <div>
      <h3 align="center" style={{color:"white"}}>BIRTHDAY</h3>
    <ImageList sx={{ paddingTop: 1,width: 1750, height: 1050 }} cols={4} rowHeight={194}>
      
      {itemData.map((item) => (
        
        <ImageListItem key={item.img}>
        
          
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            style={{ width: '100%', height: '190%', objectFit: 'cover' }}
            loading="lazy"
          />
              
        </ImageListItem>
      ))}
    </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: birthday1, 
    title: 'Birthday',
  },
  {
    img: birthday2, 
    title: 'Birthday',
  },
  {
    img: birthday3, 
    title: 'Birthday',
  },
  {
    img: birthday4, 
    title: 'Birthday',
  },
  {
    img: birthday5, 
    title: 'Birthday',
  },
  {
    img: birthday6, 
    title: 'Birthday',
  },
  {
    img: birthday7, 
    title: 'Birthday',
  },
  {
    img: birthday8, 
    title: 'Birthday',
  },
  {
    img: birthday1, 
    title: 'Birthday',
  },
  {
    img: birthday2, 
    title: 'Birthday',
  },
  {
    img: birthday3, 
    title: 'Birthday',
  },
  {
    img: birthday4, 
    title: 'Birthday',
  },
  
];
