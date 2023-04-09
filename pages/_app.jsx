import "@/styles/globals.css";
import Layout from "../components/layout";
import Head from "next/head";
import { useRouter } from "next/router";


export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (<>
    <Head>
      <title>SCIFIT</title>
      <meta name="description" content="Best fitness and health information providing website with beginner friendly contents based on scientific sources." />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Layout>
      <Component {...pageProps} currentUrl={router.asPath} />
    </Layout>

  </>

  );
}



