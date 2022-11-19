import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="wrapper">
      <Header />

      <Main />

      <Footer />
    </div>
  );
}
