import { createTheme, Card, Typography, Divider, } from '@mui/material';
import styled from '@emotion/styled';


const theme = createTheme({
  palette: {
    primary: {
      main: '#133a44',
    },
    secondary: {
      main: '#b8d9d6',
    },
    grey: {
        main: '#808080',
    },
    orange: {
      main: '#ef8450',
    },
    pale: {
        main: '#f8fdfc',
    },
    dark: {
      main: '#132C3B',
    }
  }, 
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
})

export default theme;

export const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '1rem',
  height: '100%',
  position: 'relative',
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    transition: '0.3s',
  },
}));

export const StyledDivider = styled(Divider)(({ theme }) => ({
  alignItems: 'center',
  backgroundColor: theme.palette.primary.main,
  width: '100%',
  marginTop: '5px',
}));

export const GreyTypography = styled(Typography)(({ theme }) => ({  
  color: theme.palette.grey.main,   
}));