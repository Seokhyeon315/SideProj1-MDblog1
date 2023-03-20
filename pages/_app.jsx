import "@/styles/globals.css";
import Layout from "../components/layout";
import Head from "next/head";
// import Script from 'next/script';


export default function App({ Component, pageProps }) {
  return (<>
    <Head>
      <title>SCIFIT</title>
      <meta name="description" content="Best fitness and health blog with scientific information providing website in the world." />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {/* <Script id="Adsense-id" data-ad-client="ca-pub-2381368326726370" async strategy="afterInteractive" onError={(e) => { console.error('Script failed to load', e); }} src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" crossorigin="anonymous" /> */}
    <Layout>
      <Component {...pageProps} />
    </Layout>

  </>

  );
}


{/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2381368326726370"
        crossorigin="anonymous"></script> */}
