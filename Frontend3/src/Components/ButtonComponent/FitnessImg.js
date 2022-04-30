import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function MasonryImageList() {
  return (
    <Box sx={{ width: 650, height: 650, overflowY: 'hidden' }}>
      <ImageList variant="masonry" cols={3} gap={10}>
        {itemData.map((item ) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: 'https://img.etimg.com/thumb/msid-82063790,width-640,resizemode-4,imgsize-466568/higher-risk-of-death.jpg',
    title: 'Bed',
  },
  {
    img: 'https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Kitchen',
  },

  {
    img: 'https://c4.wallpaperflare.com/wallpaper/635/199/819/female-workout-fitness-wallpaper-preview.jpg',
    title: 'Chairs',
  },
  {
    img: 'https://images.unsplash.com/photo-1562088287-bde35a1ea917?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80',
    title: 'Laptop',
  },
  {
    img: 'https://c4.wallpaperflare.com/wallpaper/91/233/127/cassandra-martin-gym-clothes-gyms-bodybuilder-women-hd-wallpaper-preview.jpg',
    title: 'Doors',
  },
  {
    img: 'https://thumbs.dreamstime.com/b/man-dumbbell-weight-training-equipment-gym-22842248.jpg',
    title: 'Coffee',
  },
  {
    img: 'https://d39l2hkdp2esp1.cloudfront.net/img/photo/139273/139273_00_2x.jpg',
    title: 'Storage',
  },
 
  {
    img: 'https://i.insider.com/5aeb223619ee861c008b4903?width=700&format=jpeg&auto=webp',
    title: 'Coffee table',
  },

];