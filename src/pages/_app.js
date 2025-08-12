import '../styles/globals.css';
import { LanguageProvider } from '../i18n/i18n';

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}
