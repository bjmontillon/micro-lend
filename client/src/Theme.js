import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#e91e63',
    },
   text: {
     primary: '#000',
     secondary: '#212121',
   }
  },
  typography: {
    fontFamily: 'var(--font-spartan)',
    h1: {
      fontSize: 16,
      fontWeight: 400
    },
    body1: {
      fontSize: 13,
      fontWight: 500
    },
    body2: {
      fontSize: 10,
      fontWeight: 400,
    },
    button: {
      fontSize: 10,
      fontWeight: 600,
      fontFamily: 'var(--font-spartan)',
    }
    
   
  }
});

export default theme;