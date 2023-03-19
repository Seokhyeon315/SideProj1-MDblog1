import "@/styles/globals.css";
import Layout from "../components/layout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (<>
    <Head>
      <title>SCIFIT</title>
      <meta name="description" content="Best fitness and health information providing website in the world." />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="" />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>

  </>

  );
}
