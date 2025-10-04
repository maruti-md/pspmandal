// src/components/HeroSlider.jsx
import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
    // { image: "/images/slide1.jpg", caption: "Empowering Rural Education" },
    // { image: "/images/slide2.jpg", caption: "Bridging the Gap with STEM" },
    // { image: "/images/slide3.jpg", caption: "Kaushalya Yatra: Skill Development" },
    // { image: "/images/school1.jpg", caption: "Modern Classrooms for Every Child" },
    // { image: "/images/school2.jpg", caption: "Interactive Learning Spaces" },
    // { image: "/images/school3.jpg", caption: "Dedicated Teachers at Work" },
    { image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80", caption: "Students Engaged in Learning" },
    { image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80", caption: "School Library Resources" },
    { image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80", caption: "Outdoor Activities at School" },
    { image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80", caption: "Collaborative Classroom Projects" },
];

export default function HeroSlider() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Box sx={{ width: "100%", height: "90%", overflow: "hidden", borderRadius: 2 }}>
      <Slider {...settings}>
        {slides.map((slide, idx) => (
          <Box key={idx} sx={{ position: "relative" }}>
            <img src={slide.image} alt={slide.caption} style={{ width: "100%", height: "500px", objectFit: "cover" }} />
            <Box
              sx={{
                position: "absolute",
                bottom: 40,
                left: 40,
                background: "rgba(0,0,0,0.5)",
                borderRadius: 1,
              }}
            >
              <Typography variant="h5" sx={{ color: "white", fontWeight: "bold" }}>
                {slide.caption}
              </Typography>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
