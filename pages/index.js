import Layout from "../components/Layout";
import Preloader from "../components/Preloader";
import MobileMenu from "../components/MobileMenu";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import BlogHome from "../components/BlogHome";
import CTAThree from "../components/CTAThree";
import Contact from "../components/Contact";
import Services from "../components/Services";
import CTAOne from "../components/CTAOne";
import FunFact from "../components/FunFact";
import CTATwo from "../components/CTATwo";
import Team from "../components/Team";
import AiGift from "../components/AiGift";
import VideoOne from "../components/VideoOne";
import AppScreen from "../components/AppScreen";
import FAQ from "../components/FAQ";
import NotraderModel from "../components/NotraderModel";
import Testimonials from "../components/Testimonials";

const HomePage = () => (
  <div>
    <Preloader />

    <Layout pageTitle="Apiton | Home Page">
      <Header
        btnClass="main-nav__btn"
        extraClassName="site-header-one__fixed-top"
      />
      <MobileMenu />
      <Banner />
      <Testimonials />
      <CTATwo />
      <NotraderModel />
      <AiGift />
      <Footer />
    </Layout>
  </div>
);

export default HomePage;
