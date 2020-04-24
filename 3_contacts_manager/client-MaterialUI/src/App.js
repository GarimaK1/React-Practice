import React from 'react';
import NavBar from "./components/layout/Navbar";
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import pink from '@material-ui/core/colors/pink';

const myTheme = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: pink,
  },
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontSize: 14
  }
});

const theme = responsiveFontSizes(myTheme);

const App = () => {
  return (
      <ThemeProvider theme={theme}>
        <NavBar />
      </ThemeProvider>
  );
}

export default App;
