'use client';

import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';

const slides = [
  {
    image: '/hotel-slide1.jpg',
    heading: 'Sleep like royalty',
    buttonText: 'Book Hotels',
    buttonIcon: '🏨',
  },
  {
    image: '/carwash-slide2.jpg',
    heading: 'Shine that turns heads',
    buttonText: 'Auto Detailing',
    buttonIcon: '✨',
  },
  {
    image: '/BBQ-slide3.jpg',
    heading: 'Where the smoke meets the flavor',
    buttonText: 'Find BBQ Spots',
    buttonIcon: '🍖',
  },
];

export default function Slider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      {slides.map((slide, i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: i === index ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            zIndex: i === index ? 1 : 0,
          }}
        >
          <Image
            src={slide.image}
            alt={`Slide ${i}`}
            layout="fill"
            objectFit="cover"
            quality={100}
            priority={i === 0}
          />
        </Box>
      ))}

      {/* Text Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: '40%',
          left: '5%',
          zIndex: 2,
          color: 'white',
          maxWidth: '400px',
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2, lineHeight: 1.2 }}>
          {slides[index].heading}
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: slides[index],
            color: 'white',
            textTransform: 'none',
            fontSize: '1rem',
            px: 3,
            py: 1,
            borderRadius: '8px',
          }}
        >
          <Box component="span" sx={{ mr: 1 }}>{slides[index].buttonIcon}</Box>
          {slides[index].buttonText}
        </Button>
      </Box>

      {/* Bottom Photo Attribution */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '10px',
          left: '20px',
          zIndex: 2,
          color: 'white',
          fontSize: '0.9rem',
        }}
      >
        <Typography>
          <strong>Clean Green Mobile</strong><br />
          Photo by <strong>Unsplash</strong>
        </Typography>
      </Box>
    </Box>
  );
}
