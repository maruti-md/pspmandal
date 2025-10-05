// src/components/Footer.jsx
import React from "react";
import { Box, Container, Grid, Typography, Link, IconButton, Divider } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import Logo from "./Logo";

export default function Footer() {
  return (
    <Box component="footer" 
    sx={{ 
        bgcolor: "#1e1e1e", 
        color: "white", 
        mt: 6, 
        pt: 6
        }}
        >
      <Container maxWidth="lg">
        <Grid container spacing={7}>
          {/* About Section */}
          <Grid item xs={12} md={4}>
            <Logo />
          </Grid>
<Divider orientation="vertical" flexItem sx={{ borderColor: "gray", display: { xs: 'none', md: 'block' } }} />
          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: "600", color: "#ffffffff", fontSize: "1.5rem" }}>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1, fontSize: "1.1rem" }}>
              <Link href="/" underline="none" color="inherit">&gt; Home</Link>
              <Link href="/about" underline="none" color="inherit">&gt; About</Link>
              <Link href="/projects" underline="none" color="inherit">&gt; Projects</Link>
              <Link href="/events" underline="none" color="inherit">&gt; Events</Link>
              <Link href="/donate" underline="none" color="inherit">&gt; Donate</Link>
              <Link href="/contact" underline="none" color="inherit">&gt; Contact</Link>
            </Box>
          </Grid>
<Divider orientation="vertical" flexItem sx={{ borderColor: "gray", display: { xs: 'none', md: 'block' } }} />
          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: "600", color: "#ffffffff", fontSize: "1.5rem" }}>
              Contact Us
            </Typography>
            <Typography variant="body2">123 Mandal Street, Pune, India</Typography>
            <Typography variant="body2">Email: info@pspmandal.org</Typography>
            <Typography variant="body2">Phone: +91 9876543210</Typography>
          </Grid>
<Divider orientation="vertical" flexItem sx={{ borderColor: "gray", display: { xs: 'none', md: 'block' } }} />

          {/* Social Media */}
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: "600", color: "#ffffffff", fontSize: "1.5rem" }}>
              Follow Us
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton href="#" target="_blank" sx={{ color: "white", "&:hover": { color: "#1877f2" } }}>
                <Facebook />
              </IconButton>
              <IconButton href="#" target="_blank" sx={{ color: "white", "&:hover": { color: "#1da1f2" } }}>
                <Twitter />
              </IconButton>
              <IconButton href="#" target="_blank" sx={{ color: "white", "&:hover": { color: "#e4405f" } }}>
                <Instagram />
              </IconButton>
              <IconButton href="#" target="_blank" sx={{ color: "white", "&:hover": { color: "#0077b5" } }}>
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ bgcolor: "gray", my: 3 }} />

        <Box sx={{ textAlign: "center", pb: 2 }}>
          <Typography variant="body2" sx={{ color: "gray" }}>
            © {new Date().getFullYear()} PSP Mandal. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
