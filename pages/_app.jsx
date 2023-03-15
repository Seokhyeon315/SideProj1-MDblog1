import "@/styles/globals.css";
import Layout from "../components/layout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (<>
    <Head>
      <title>SCIFIT</title>
      <meta name="description" content="Best workout information blog for beginners" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>

  );
}