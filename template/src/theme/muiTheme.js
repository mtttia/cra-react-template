import { createTheme } from '@mui/material/styles';
import palette from './palette';

export default function getTheme(mode) {
  return mode == 'light' ? lightTheme : darkTheme
}

console.log('palette', palette)

export let lightTheme = createTheme({
  palette: {
    mode:'light',
    primary: {
      main: palette.primary.light,
    },
    secondary: {
      main: palette.secondary.light,
    },
    accent: {
      main: palette.accent.light
    },
    background: {
      main: palette.background.light
    },
    red: {
      main: palette.red.light
    },
    whiteBox: {
      main: palette.whiteBox.light
    },
    textColor: {
      main: palette.textColor.light
    },
    boxShadow: {
      main: palette.boxShadow.light
    },
    footerBackGround: {
      main: palette.footerBackGround.light
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography:{
    color: palette.textColor.dark
  }
});


export let darkTheme = createTheme({
  palette: {
    mode:'dark',
    primary: {
      main: palette.primary.dark,
    },
    secondary: {
      main: palette.secondary.dark,
    },
    accent: {
      main: palette.accent.dark
    },
    background: {
      main: palette.background.dark
    },
    red: {
      main: palette.red.dark
    },
    whiteBox: {
      main: palette.whiteBox.dark
    },
    textColor: {
      main: palette.textColor.dark
    },
    boxShadow: {
      main: palette.boxShadow.dark
    },
    footerBackGround: {
      main: palette.footerBackGround.dark
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },

  typography:{
    color: palette.textColor.dark
  },
});