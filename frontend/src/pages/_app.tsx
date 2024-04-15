// src/pages/_app.tsx
import type { AppProps } from 'next/app';
import '../../src/globals.css';  // Path to your global CSS file, which should include Tailwind CSS imports

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;




