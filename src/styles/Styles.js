import { createTheme } from '@mui/material';


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