import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


import racing1 from './main_images/racing9.jpg';
import racing2 from './main_images/racing2.jpg';
import racing3 from './main_images/racing3.jpg';
import racing4 from './main_images/racing4.jpg';
import racing5 from './main_images/racing5.jpg';
import racing6 from './main_images/racing6.jpg';
import racing7 from './main_images/racing7.jpg';
import racing8 from './main_images/racing8.jpg';
import racing9 from './main_images/racing9.jpg';
import racing10 from './main_images/racing1.jpg';
import racing11 from './main_images/racing4.jpg';
import racing12 from './main_images/racing6.jpg';



export default function RacingEvents() {
  return (
    <div>
      <h3 align="center" style={{color:"white"}}>RACING</h3>
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
    img: racing1, 
    title: 'Racing',
  },
  {
    img: racing2, 
    title: 'Racing',
  },
  {
    img: racing3, 
    title: 'Racing',
  },
  {
    img: racing4, 
    title: 'Racing',
  },
  {
    img: racing5, 
    title: 'Racing',
  },
  {
    img: racing6, 
    title: 'Racing',
  },
  {
    img: racing7,
    title: 'Racing',
  },
  {
    img: racing8, 
    title: 'Racing',
  },
  {
    img: racing9, 
    title: 'Racing',
  },
  {
    img: racing10, 
    title: 'Racing',
  },
  {
    img: racing11, 
    title: 'Racing',
  },
  {
    img:racing12, 
    title: 'Racing',
  },
  
];
