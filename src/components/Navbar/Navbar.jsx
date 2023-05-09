import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Grid, Paper, Typography, Box} from '@mui/material';
import theme from '../../styles/Styles';

export default function Navbar() {

  return ( 
       <Grid container justifyContent="center" alignItems="center" sx={{ bgcolor: '#133a44', marginBottom: '1.5rem', borderBottomLeftRadius: '1rem', borderBottomRightRadius: '1rem', }} >   
        <Box style={{ padding: '1rem', width: ' 60vw'}}  > 
          <Link to='/' style={{ textDecoration: 'none' }}>
            <Typography variant='h4' align="center" marginBottom={2} sx={{ color: "#b8d9d6" }}> Dummy Posts</Typography>    
          </Link>
        </Box>            
      </Grid>     
    
  );
}