// src/components/Logo.jsx
import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Box
      component={Link}
      width="fit-content"
      to="/"
      sx={{
        textDecoration: "none",
        color: "inherit",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start", // left aligned
        "&:hover": {
          textDecoration: "none", // remove underline
          color: "inherit",        // keep same color
        },
      }}
    >
      {/* Top Line */}
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          fontSize: "1.5rem",
          lineHeight: 1.2,
        }}
      >
        Swa Surajya
      </Typography>

      {/* Divider */}
      <Divider
        sx={{
          width: "100%",
          // bgcolor: "#0cafb4ef", // orange
          background: "linear-gradient(90deg, #0cafb4ef 0%, #ff9800 100%)",
          height: "2px",
          my: 0.5,
        }}
      />

      {/* Bottom Line */}
      <Typography
        variant="body2"
        sx={{
          fontSize: "0.9rem",
          whiteSpace: "nowrap",
        }}
      >
        Panchkroshi Shikshan Prasaran Mandal
      </Typography>
    </Box>
  );
}
