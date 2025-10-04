// src/pages/Home.jsx
import React from "react";
import { Box } from "@mui/material";
import HomeHeroSection from "../components/HomeHeroSection";

export default function Home() {
  return (
    <Box>
      {/* Hero + Recent Posts Section */}
      <HomeHeroSection />

      {/* Other content sections can go here */}
      {/* Example: About Section, Programs Section, etc. */}

    </Box>
  );
}
