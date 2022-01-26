import palette from "./palette";
import getTheme from "./muiTheme";

export default function themeLoader(mode) {

    let modemui = null
  
    if (mode != 'dark' && mode != 'light') {
      const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
      mode = darkThemeMq.matches ? 'dark' : 'light'
    }
  
    if (mode == 'dark') {
      document.body.style.backgroundColor = palette.background.dark;
      document.body.style.color = palette.textColor.dark;
      modemui = getTheme('dark')
    }
    else {
      document.body.style.backgroundColor = palette.background.light;
      document.body.style.color = palette.textColor.light;
      modemui = getTheme('light')
    }
  
    return modemui
  }