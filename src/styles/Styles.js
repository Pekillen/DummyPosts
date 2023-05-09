import { createTheme } from '@mui/material';

const Colors = {
    primary: '#67A3D9',
    secondary: '#FFC0CB',
    dark: '#0671B7',
    pale: '#F6D2E0',
    }

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary
    },
    secondary: {
      main: Colors.secondary
    },
    dark: {
        main: Colors.dark
    },
    pale: {
        main: Colors.pale
    }
  }, 
})

export default theme;