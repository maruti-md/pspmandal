// src/components/RecentPosts.jsx
import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';

const posts = [
    {
        title: "Bridging the Gap in Education with STEM!",
        image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=100&q=80"
    },
    {
        title: "Kaushalya Yatra (Skill Education Tour) 2023",
        image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=100&q=80"
    },
    {
        title: "Annual Sports Day Celebration",
        image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=100&q=80"
    },
];

export default function RecentPosts() {
  return (
    <Box sx={{ bgcolor: "#27282890", py: 4, px: 1, borderRadius: 2, 
        boxShadow:"0 1px 4px 0 rgba(255, 246, 235, 0.51), 0 3px 1px 0 rgba(0, 0, 0, 0.66)",
     }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold", color: "#ffffffff", textAlign: "center" }}>
        Recent Posts
      </Typography>
      {posts.map((post, idx) => (
        <Card key={idx} 
        sx={{ 
        height: 100, 
        // width: "100%",
         width:{ xs: '90%', sm: '100%', md: '100%' },
        display: "flex", 
        placeSelf: "center",
        mb: 2, 
        boxShadow: 3, 
        borderRadius: 2,
        cursor: "pointer",
        ":hover": { 
            md: {
              boxShadow: 6, 
              transform: "scale(1.1)",
            }
        }
        }}>
          <CardMedia component="img" sx={{ width: 80 }} image={post.image} alt={post.title} />
          <CardContent sx={{ p: 1, 
            bgcolor: "#034e3cff",
             width:{ xs: '100%', sm: '100%', md: '100%' }, }}>
            <Typography variant="body2" sx={{ fontWeight: "500", color: "#ffffffff" }}>
              {post.title}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
