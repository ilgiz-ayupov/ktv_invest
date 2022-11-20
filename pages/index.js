import Head from "next/head";

import Header from "../layout/Header";
import Footer from "../layout/Footer";
import SectionTop from "../components/SectionTop";
import InvestorsSection from "../components/InvestorsSection";
import OffersSection from "../components/OffersSection/";
import ConsultationForm from "../components/ConsultationForm";
import RealEstateSection from "../components/RealEstateSection";
import SeaViewSection from "../components/SeaViewSection";
import DiscountSection from "../components/DiscountSection";
import BlogSection from "../components/BlogSection";
import VideoSection from "../components/VideoSection";

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
        <RealEstateSection />
        <SeaViewSection />
        <DiscountSection />
        <BlogSection />
        <VideoSection />
      </main>
      <Footer />
    </div>
  );
}
