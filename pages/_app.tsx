import { SWRConfig } from 'swr';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
