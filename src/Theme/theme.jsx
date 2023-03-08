import { createTheme, ThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import React from 'react';
import { ThemeProvider as TProvider, createGlobalStyle } from "styled-components"
import px2vw from 'src/utils/px2vw';
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});
// import font from "../../assets/fonts/Shabnam.woff"
const getDesignTokens = (mode) => ({
  direction: 'rtl',
  palette: {
    mode,
    ...(mode === "light" ?
      {
        primary: {
          main: "#3563E9",
          light: "#F6F7F9",
          bgWhite: "##FFFFFF",
          secondary: "#c3d4e966"
        },
        text: {
          primary: "#06152b",
          secondary: "#90A3BF"
        }
      } : {
        primary: {
          main: "#3a36db",
          light: "#050f1e",
          bgLight: "##06152b",
          secondary: "#90A3BF"
        }, text: {
          text: {
            primary: "#f6f6f7",
            secondary: "#90A3BF"
          }
        }
      }),
  },
  typography: {
    fontFamily: "Shabnam,sans-serif",
  },
  components: {
    TextField: {
      borderRadius: "15px",
    }
  }
});
const colorStyledComponents = {
  primary: "#3563E9",
  secondary: "#54A6FF",
  light: "#F6F7F9",
  bgWhite: "#fff",
  borderColor: "#C3D4E9",
  text: {
    primary: "#06152b",
    secondary: "#90A3BF",
    white: "#fff"
  },
  borderColor: "#e0e7ec",
  borderRadius: "15px",
  borderRadiusSmall: "10px",
  iconSize: "20px",
  status: {
    success: "#44ddab",
    successBg: "#d1f7ea",
    error: "#ea3a3d",
    errorBg: "#fbd8d8",
    info: "#99b2c6",
    infoBg: "#d9e1e7"
  }
}
export const ThemeWrapper = ({ children }) => {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );
  const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  /* body{
    font-family: "Shabnam";
  } */
  a{
    text-decoration: none;
    color:${props => props.theme.text.secondary};
  }
  li{
    list-style:none;
  }
  :root {
      font-size: ${px2vw(28)};

      @media (min-width: 768px) {
        font-size: ${px2vw(18)};
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(16)};
      }
    }
`;
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <TProvider theme={colorStyledComponents}>
          <Global />
          {children}
        </TProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}