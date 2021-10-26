import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6a1b1a',
    },
    secondary: {
      main: '#e91e63',
    },
   text: {
     primary: '#212121',
     secondary: '#212121',
   }
  },
  typography: {
    subtitle1: {
      fontSize: '2'
    },
    fontFamily: 'var(--font-spartan)',
   
  }
});

export default theme;