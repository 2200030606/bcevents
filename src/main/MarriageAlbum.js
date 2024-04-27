import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import wedding1 from './main_images/wedding1.jpg';
import wedding2 from './main_images/wedding2.jpg';
import wedding3 from './main_images/wedding3.jpg';
import wedding4 from './main_images/wedding4.jpg';
import wedding5 from './main_images/wedding5.jpg';
import wedding6 from './main_images/wedding6.jpg';
import wedding7 from './main_images/wedding1.jpg';
import wedding8 from './main_images/wedding2.jpg';
import wedding9 from './main_images/wedding3.jpg';
import wedding10 from './main_images/wedding4.jpg';
import wedding11 from './main_images/wedding5.jpg';
import wedding12 from './main_images/wedding6.jpg';




export default function MarriageAlbum() {
  return (
    <div>
      <h3 align="center" style={{color:"white"}}>WEDDING</h3>
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
    img: wedding1,
    title: 'wedding',
  },
  {
    img: wedding2, 
    title: 'wedding',
  },
  {
    img: wedding3, 
    title: 'wedding',
  },
  {
    img: wedding4, 
    title: 'wedding',
  },
  {
    img: wedding5, 
    title: 'wedding',
  },
  {
    img: wedding6, 
    title: 'wedding',
  },
  {
    img: wedding7, 
    title: 'wedding',
  },
  {
    img: wedding8, 
    title: 'wedding',
  },
  {
    img: wedding9, 
    title: 'wedding',
  },
  {
    img: wedding10, 
    title: 'wedding',
  },
  {
    img: wedding11,
    title: 'wedding',
  },
  {
    img: wedding12, 
    title: 'wedding',
  },
  
];
