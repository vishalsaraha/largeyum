import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';




export default function SignIn() {
  return (
    <Stack spacing={2} direction="row">
    <Button 
            variant="outlined" 
            sx={{ 
                color: 'white',
                borderColor: 'rgba(255, 255, 255, 0.5)',
                fontWeight: 600,
                textTransform: 'none',
                backgroundColor: 'transparent',
                '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.28)',
                borderColor: 'white',
                }
            }}
            >
            Log In
            </Button>

            <Button 
            variant="contained" 
            sx={{ 
               
                textTransform: 'none',
                fontWeight: 600,
                '&:hover': {
                bgcolor: 'primary',
                }
            }}
            >
            Sign Up
            </Button>

      
    </Stack>
  );
}
