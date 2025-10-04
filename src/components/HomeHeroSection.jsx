// src/components/HomeHeroSection.jsx
import React from 'react';
import { Grid, Box } from '@mui/material';
import HeroSlider from './HeroSlider';
import RecentPosts from './RecentPosts';

export default function HomeHeroSection() {
  return (
    <Box
      sx={{
        bgcolor: "linear-gradient(to right, #003f47, #145858)",
        py: 0,
        px: { xs: 2, md: 3 },
      }}
    >
      <Grid container spacing={4} columns={12}>
        <Grid
          item
          size={{ xs: 12, sm: 8, md: 9 }}
        >
          <HeroSlider />
        </Grid>
        <Grid
          item
          size={{ xs: 12, sm: 4, md: 3 }}
        >
          <RecentPosts />
        </Grid>
      </Grid>
    </Box>
  );
}
