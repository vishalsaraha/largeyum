'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import SearchBar from './homepagecomponents/searchbar';
import Slider from './homepagecomponents/slider';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import DropdownButtons from './homepagecomponents/dropdownbtn';


export default function Types() {
  
   // Dropdown menu state
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
 const router = useRouter();

  const handleGoBusiness = () => {
    router.push('/business');
  };

  return (
    <Box sx={{ width: '100%', backgroundColor: '#ffffff'}}>
      <Box sx={{
         width: '100%',
          height: '180px', 
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 10, 
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.77), rgba(0,0,0,0))'}}> 
            
      <Grid container spacing={2} sx={{padding: 3}}>
        <Grid size={1}>
      <Image
      src="/Largeyum.png"
      width={90}
      height={50}
      alt="Picture of the author"
    />
     
        </Grid>
        <Grid size={5}>
       
        <SearchBar/>
    
        </Grid>
        <Grid size={4}>
        <Box display="flex" alignItems="center" gap={5}>
            <Button
              id="yum-button"
              aria-controls={open ? 'yum-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              sx={{ color: 'white', textTransform: 'none',fontWeight: 'bold'}}
            >
              Yum for Business
            </Button>
            <Menu
              id="yum-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'yum-button',
              }}>


              {/* onClick={handleClose} */}
              
              <MenuItem onClick={handleGoBusiness}><AddBusinessIcon sx={{ mr: 1 }}/> Add a Business</MenuItem>
             
              <MenuItem ><VpnLockIcon sx={{ mr: 1 }}/>Claim your business for free</MenuItem>
              <MenuItem ><AccountBoxIcon sx={{ mr: 1 }}/>Log in to Business Account</MenuItem>
             
              <MenuItem
              sx={{mt: 3, borderTop: 2}}><WorkspacePremiumIcon sx={{ mr: 1 }}/>Explore the Business Version </MenuItem>
            </Menu>
            <Button
                    sx={{
                      color: 'white',
                      textTransform: 'none',
                      px: 1,
                      py: 1,
                      height: 40,
                      fontWeight: 'bold'
                    }}
                  >
                    
                    Write a Review
                  </Button>
                  <Button
                    sx={{
                      color: 'white',
                      textTransform: 'none',
                      px: 1,
                      py: 1,
                      height: 40,
                      fontWeight: 'bold'
                    }}
                  >
                  Start a Project
                  </Button>
                  <main style={{ padding: '20px' }}>
      <h1>🏠 Welcome to Home Page</h1>
      <p>Click below to view all employees:</p>
      <Link href="./homepagecomponents/business1">
        <button>📋 View Employees</button>
      </Link>
    </main>
              </Box>
        </Grid>
        
          <Grid size={2}>
      
      
        </Grid>
        
      </Grid>
       <Grid container spacing={1}>
        <Grid size={2}>
        {/* empty */}

        </Grid>
         <Grid size={8}>
       <DropdownButtons/>

        </Grid>
      <Grid size={2}>
       {/* empty */}

        </Grid>
     
        
      </Grid>
    </Box>
     <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid size={12}>
        <Slider/>

        </Grid>
     
        
      </Grid>
    </Box>
    </Box>
  );
  
  
}
