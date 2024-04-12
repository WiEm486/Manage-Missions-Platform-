import React from "react";
import { AppHeader } from "../components/AppHeader";
import "../App.css";
import { About } from "../components/About";

import { Hero } from "../components/Hero";

import { Contact } from "../components/Contact";
import { AppFooter } from "../components/AppFooter";

/* import { CssBaseline, Switch, ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";
 */
export const Home = () => {
/*   const [darkMode, setDarkMode] = useState(false);
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  }); */
  return (
    <div>
    {/*   <ThemeProvider theme={darkTheme}>
        <CssBaseline></CssBaseline> */}
        <div className="App">
          <header id="header">
            <AppHeader></AppHeader>
          </header>

          <Hero></Hero>
          <About></About>

          <Contact></Contact>
          <AppFooter></AppFooter>
        
        </div>
      {/* </ThemeProvider> */}
    </div>
  );
};
