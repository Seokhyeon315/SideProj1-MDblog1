import Head from 'next/head';
import Header from "../components/Header";

export default function Home() {
  return <>
    <Head>
      <title>SCIFIT</title>
      <meta name="description" content="Best workout information blog for beginners" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />
    <div>this is body</div>
  </>;
}
