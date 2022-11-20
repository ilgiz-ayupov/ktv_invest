import Head from "next/head";

import Header from "../layout/Header";
import Footer from "../layout/Footer";
import SectionTop from "../components/SectionTop";
import InvestorsSection from "../components/InvestorsSection";
import OffersSection from "../components/OffersSection/";
import ConsultationForm from "../components/ConsultationForm";

export default function Home() {
  return (
    <div className="wrapper">
      <Head>
        <title>KTV Invest | Home</title>
        <meta name="description" content="KTV Invest | Home" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header />
      <main>
        <SectionTop />
        <InvestorsSection />
        <OffersSection />
        <ConsultationForm />
      </main>
      <Footer />
    </div>
  );
}
