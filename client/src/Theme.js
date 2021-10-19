import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: 'green'
        },
      },
    },

  },
  palette: {
    primary: {
      main: '#6a1b1a',
    },
    secondary: {
      main: '#e91e63',
    },
  },
});

export default theme;