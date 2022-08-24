import { createTheme } from '@mui/material';

export default createTheme({
  palette: {
    primary: {
      main: '#ab003c',
      light: 'skyblue',
    },
    secondary: {
      main: '#2a3eb1',
    },
    otherColor: {
      main: '#ffee33',
    },
  },
  typography: {
    headlineoswald: {
      fontsize: 22,
    },
    bodynunito: {
      fontsize: 18,
    },
    subbodynunito: {
      fontsize: 18,
    },
    allVariants: {
      fontFamily: 'Alumni Sans Pinstripe, sans-serif',
    },
  },
});
