// pages/_app.tsx
import { AppProps } from 'next/app';
import { NavBarProvider } from '../context/NavBarContext';
import '../styles/globals.css'; // Import global styles

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NavBarProvider>
      <Component {...pageProps} />
    </NavBarProvider>
  );
}

export default MyApp;
