import '../styles/globals.css';
import '../styles/tailwind.css';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'next-themes';
import * as React from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default MyApp;
