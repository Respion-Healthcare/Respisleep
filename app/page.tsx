import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Categories from "./components/categories/Categories";
import Products from "./components/products/Products";
import Accessories from "./components/accessories/Accessories";
import Features from "./components/features/Features";
import CTA from "./components/cta/CTA";
import Footer from "./components/footer/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Products />
      <Accessories />
      <Features />
      <CTA />
      <Footer />
    </>
  );
}