import { createTheme, ThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import React from 'react';
import { ThemeProvider as TProvider } from "styled-components"
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

const getDesignTokens = (mode) => ({
  direction: 'rtl',
  palette: {
    mode,
    ...(mode === "light" ?
      {
        primary: {
          main: "#3a36db",
          light: "#f1f4fa",
          bgLight: "##fefefe",
          secondary: "#809fb8"
        },
        text: {
          primary: "#06152b",
          secondary: "#809fb8"
        }
      } : {
        primary: {
          main: "#3a36db",
          light: "#050f1e",
          bgLight: "##06152b",
          secondary: "#314355"
        }, text: {
          text: {
            primary: "#f6f6f7",
            secondary: "#314355"
          }
        }
      }),
  },
  typography: {
    fontFamily:
      [
        'Shabnam',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),

  },
  components:{
    TextField:{
      borderRadius:"15px"
    }
  }
});
const colorStyledComponents = {
  main: "#3a36db",
  light: "#f1f4fa",
  bgLight: "#fefefe",
  text: {
    primary: "#06152b",
    secondary: "#809fb8"
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
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <TProvider theme={colorStyledComponents}>
          {children}
        </TProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}