import React, { useEffect, useState } from "react";
import "./Dark.css";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";
import Brightness4 from '@mui/icons-material/Brightness4';
import logoNormal from "../../assets/images/logomedio.svg";
import logoBranca from "../../assets/images/logopretomedio.svg";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function Dark() {

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, [])

  const themeToggler = () => {

    let imgInicial = document.getElementById('img-inicial')

    if (theme === 'light') {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
      if (window.document.location.pathname === '/') {
        imgInicial.setAttribute('src', logoBranca)
      }
    } else {
      setTheme('light')
      localStorage.setItem('theme', 'light')
      if (window.document.location.pathname === '/') {
        imgInicial.setAttribute('src', logoNormal)
      }
    }
  };



  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>

        <button icon="TiAdjustContrast" onClick={() => themeToggler()}>
          <Brightness4 />
        </button>

      </StyledApp>
    </ThemeProvider>
  );
}

export default Dark;