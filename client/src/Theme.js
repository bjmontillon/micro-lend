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
    fontFamily: 'var(--font-spartan)',
    fontSize: 11,
  }
});

export default theme;