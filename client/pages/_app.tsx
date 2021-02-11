import { GlobalStyle } from "../styles/globals";
import Helmet from "react-helmet";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
