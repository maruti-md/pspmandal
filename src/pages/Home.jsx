// src/pages/Home.jsx
import React from "react";
import { Box } from "@mui/material";
import HomeHeroSection from "../components/HomeHeroSection";

export default function Home() {
  return (
    <Box sx={{ width: { xs: '100%', sm: '100%', md: '100%' } }}>
      {/* Hero + Recent Posts Section */}
      <HomeHeroSection />

      {/* Other content sections can go here */}
      {/* Example: About Section, Programs Section, etc. */}

    </Box>
  );
}
