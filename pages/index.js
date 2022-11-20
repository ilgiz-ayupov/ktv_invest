import Head from "next/head";

import Header from "../layout/Header";
import Main from "../layout/Main";
import Footer from "../layout/Footer";

export default function Home() {
  return (
    <div className="wrapper">
      <Head>
        <title>KTV Invest | Home</title>
        <meta name="description" content="KTV Invest | Home" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
