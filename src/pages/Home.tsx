/** @format */

import Banner from "../layout/Banner";
import Blog from "../layout/Blog";
import Header from "../layout/Header";
import Product from "../layout/Product/ProductList";
import Slider from "../layout/Slider";
import Footer from "../layout/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Product />
      <Slider />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
