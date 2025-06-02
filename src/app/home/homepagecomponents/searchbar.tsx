'use client';

import React, { useState, useRef } from 'react';
import {
  Box,
  TextField,
  IconButton,
  Paper,
  Popper,
  ClickAwayListener,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import HotelIcon from '@mui/icons-material/Hotel';

const categories = [
  { label: 'Restaurants', icon: <RestaurantIcon /> },
  { label: 'Hotels', icon: <HotelIcon /> },
  { label: 'Delivery', icon: <LocalShippingIcon /> },
  { label: 'Auto Repair', icon: <HomeRepairServiceIcon /> },
];

const locations = [
  { label: 'Current Location', icon: <LocationOnIcon /> },
  { label: 'San Francisco, CA', icon: <AccessTimeIcon /> },
  { label: 'Lake Buena Vista, FL', icon: <AccessTimeIcon /> },
];

export default function SearchBarWithSuggestions() {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [queryOpen, setQueryOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const queryRef = useRef(null);
  const locationRef = useRef(null);

  const handleSearch = () => {
    console.log('Searching for:', { query, location });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        borderRadius: 1,
        boxShadow: 3,
        overflow: 'hidden',
        maxWidth: 700,
        bgcolor: 'white',
        height: 50,
      }}
    >
      {/* Query Field */}
      <ClickAwayListener onClickAway={() => setQueryOpen(false)}>
        <Box sx={{ flex: 2, borderRight: '1px solid #ddd', position: 'relative' }}>
          <TextField
            fullWidth
            placeholder="things to do, nail salons, plumber"
            variant="standard"
            inputRef={queryRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setQueryOpen(true)}
            InputProps={{
              disableUnderline: true,
              sx: { px: 2, py: 1.5 },
            }}
          />
          <Popper open={queryOpen} anchorEl={queryRef.current} placement="bottom-start" style={{ zIndex: 1200 }}>
            <Paper sx={{ mt: 1, width: 300 }}>
              <List>
                {categories.map((item) => (
                  <ListItem
                    key={item.label}
                    button
                    onClick={() => {
                      setQuery(item.label);
                      setQueryOpen(false);
                    }}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.label} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Popper>
        </Box>
      </ClickAwayListener>

      {/* Location Field */}
      <ClickAwayListener onClickAway={() => setLocationOpen(false)}>
        <Box sx={{ flex: 1.5, borderRight: '1px solid #ddd', position: 'relative' }}>
          <TextField
            fullWidth
            placeholder="address, neighborhood, city"
            variant="standard"
            inputRef={locationRef}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onFocus={() => setLocationOpen(true)}
            InputProps={{
              disableUnderline: true,
              sx: { px: 2, py: 1.5 },
            }}
          />
          <Popper open={locationOpen} anchorEl={locationRef.current} placement="bottom-start" style={{ zIndex: 1200 }}>
            <Paper sx={{ mt: 1, width: 300 }}>
              <List>
                {locations.map((item) => (
                  <ListItem
                    key={item.label}
                    button
                    onClick={() => {
                      setLocation(item.label);
                      setLocationOpen(false);
                    }}
                  >
                    <ListItemIcon  sx={{
                  color: item.label === 'Current Location' ? 'primary.main' : 'inherit',
                }}> {item.icon}</ListItemIcon>
                    <ListItemText primary={item.label}  sx={{
                    color: item.label === 'Current Location' ? 'primary.main' : 'text.primary',
                    fontWeight: item.label === 'Current Location' ? 500 : 400,
                  }} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Popper>
        </Box>
      </ClickAwayListener>

      {/* Search Button */}
    <Box sx={{ bgcolor: 'primary.main', p: 1 }}>
      <IconButton onClick={handleSearch} sx={{ color: 'white' }}>
        <SearchIcon />
      </IconButton>
    </Box>

    </Box>
  );
}
