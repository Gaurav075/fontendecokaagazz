
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/shop/Hero";
import Services from "../components/shop/Services";


const Shop = () => {
  return (
    <div className="min-h-screen bg-kaagazz-background">
      <Header />
      <Hero/>
      <Services/>
      <Footer />
    </div>
  );
};

export default Shop;