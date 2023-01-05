import { createTheme } from '@mui/material/styles';
import '../styles/globals.css'
import { ThemeWrapper } from '../src/Theme/theme';
import { appWithTranslation } from 'next-i18next';
import nextI18nextConfig from '../next-i18next.config';
import localFont from '@next/font/local'

const ShabnamFont = localFont({
  src: [
    {
      path: "../assets/fonts/Shabnam.woff",
    },
    {
      path: "../assets/fonts/Shabnam.ttf",

    },
    {
      path: "../assets/fonts/Shabnam.eot",
    },
  ],
})
const App = ({ Component, pageProps }) => {
  return <main className={ShabnamFont.className}>
    <ThemeWrapper>
      <Component {...pageProps} />
    </ThemeWrapper>
  </main>

}

export default appWithTranslation(App, nextI18nextConfig)