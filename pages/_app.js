import '../styles/globals.css'
import '../styles/App.css'
import '../styles/counters.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


export default function App({ Component, pageProps }) {

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

  return <Component {...pageProps} />
  
}
