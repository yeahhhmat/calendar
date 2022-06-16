import type {AppProps} from 'next/app';
import '../lib/css/base.css';

function App({Component, pageProps}: AppProps) {
  return (
    <Component {...pageProps} />
  );
}

export default App;
