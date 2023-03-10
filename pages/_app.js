
import '../styles/globals.css'
import { ThemeWrapper } from '../src/Theme/theme';
import { appWithTranslation } from 'next-i18next';
import nextI18nextConfig from '../next-i18next.config';
import { AnimatePresence } from 'framer-motion';

import { useState, useEffect } from "react"
import { useRouter } from 'next/router';
import Loading from '@/src/components/Loading';

const LoadingHandler = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleStart = (url) => (url !== router.asPath) && setLoading(true);
    const handleComplete = (url) => (url === router.asPath) && setTimeout(() => { setLoading(false) }, 5000);

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  })
  return loading && <Loading />
}

const App = ({ Component, pageProps }) => {
  return (
      <ThemeWrapper>
        <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
          <LoadingHandler />
          <Component {...pageProps} />
        </AnimatePresence>
      </ThemeWrapper>
  )

}

export default appWithTranslation(App, nextI18nextConfig)

      {/* <style jsx global>{`
        :root {
          /* ... */
          // --cooper-font: ${ShabnamFont.style.fontFamily};
        }
      // `}</style> */}