import React from 'react';
import { Grid, Paper, Typography, Button, Box } from '@mui/material';

const ErrorPage = () => {
    return (
        <Grid
          container
          spacing={0}
          direction='column'
          alignItems='center'
          style={{ minHeight: '100vh' }}
        >
          <Paper
            elevation={12}
            sx={{
              padding: '20px',
              borderRadius: '15px',
              width: '60vw',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Typography>Whoops! It seems this page does not exist...</Typography>
          </Paper>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: '20px',
            }}
          >
            <Button variant='contained' href='/'>
              Back to Posts Page
            </Button>
          </Box>
        </Grid>
      );
}

export default ErrorPage