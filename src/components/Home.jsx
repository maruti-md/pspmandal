// src/pages/HomePage.jsx
import React from 'react';
import { Box, Typography, Button, Paper, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const slides = [
  {
    title: 'Carpathian Mountains',
    subtitle: 'Mountain chain famous for its ancient forests.',
    image: 'https://source.unsplash.com/1600x900/?mountains,night',
  },
  {
    title: 'Winter Fairytale',
    subtitle: 'Explore the snowy peaks and winter adventure!',
    image: 'https://source.unsplash.com/1600x900/?snow,mountain',
  },
  {
    title: 'Sunrise on Hoverla',
    subtitle: 'The highest peak of Ukraine awaits you.',
    image: 'https://source.unsplash.com/1600x900/?sunrise,peak',
  },
  {
    title: 'Hiking Through Borzhava',
    subtitle: 'A trekker’s paradise in the Ukrainian Alps.',
    image: 'https://source.unsplash.com/1600x900/?hiking,trail',
  },
  {
    title: 'Starry Night Adventure',
    subtitle: 'Experience nature under a blanket of stars.',
    image: 'https://source.unsplash.com/1600x900/?night,stars,mountain',
  },
];

const hotTours = [
  {
    title: 'The Mysteries of Skolivski Beskydy',
    date: '05.10 - 07.12',
    img: 'https://source.unsplash.com/100x100/?forest,road',
  },
  {
    title: 'Incredible Borzhava: through and through',
    date: '26.09 - 28.12',
    img: 'https://source.unsplash.com/100x100/?mountain,hiking',
  },
  {
    title: 'The Peaks of Lviv Region: Pikuy Mountain',
    date: '08.10 - 16.10',
    img: 'https://source.unsplash.com/100x100/?ukraine,mountains',
  },
];

export default function HomePage() {
  return (
    <Box sx={{ position: 'relative', height: '100vh', width: '100%', color: '#fff' }}>
     <Swiper
  loop
  autoplay={{ delay: 3000 }}
  navigation
  modules={[Autoplay, Navigation]}
>

        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <Box
              sx={{
                height: '100vh',
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                px: 8,
              }}
            >
              <Box sx={{ maxWidth: 600 }}>
                <Typography variant="overline" sx={{ letterSpacing: 2 }}>
                  UKRAINE
                </Typography>
                <Typography variant="h2" fontWeight={700}>
                  {slide.title}
                </Typography>
                <Typography variant="subtitle1" sx={{ my: 2 }}>
                  {slide.subtitle}
                </Typography>
                <Button variant="contained" color="warning">
                  Explore
                </Button>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Hot Tours Panel */}
      <Paper
        elevation={10}
        sx={{
          position: 'absolute',
          top: '10%',
          right: '3%',
          width: 320,
          borderRadius: 4,
          p: 2,
          bgcolor: 'rgba(0, 0, 0, 0.7)',
          color: 'white',
        }}
      >
        <Typography variant="h6" gutterBottom>
          Hot Tours
        </Typography>
        <List>
          {hotTours.map((tour, idx) => (
            <ListItem key={idx} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  variant="rounded"
                  src={tour.img}
                  sx={{ width: 60, height: 60, mr: 1 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={tour.title}
                secondary={`📅 ${tour.date}`}
                primaryTypographyProps={{ sx: { color: 'white', fontWeight: 500 } }}
                secondaryTypographyProps={{ sx: { color: '#ccc' } }}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}
