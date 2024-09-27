import MainHeader from "../components/MainHeader";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Banner from "../components/Banner";
import CategoryAndCarousel from "../components/CategoryAndCarousel";
import FlashSales from "../components/FlashSales";
import BrowseCategory from "../components/BrowseCategory";
import BestSellingProduct from "../components/BestSellingProduct";
import OurProducts from "../components/OurProducts";
import FeaturedProduct from "../components/FeaturedProduct";
const HomePage = () => {
  return (
    <>
      <MainHeader />
      <div className="pt-10 pb-20 md:pt-16 md:pb-28 lg:pt-20 lg:pb-36 flex flex-col items-center justify-center">
        <CategoryAndCarousel />

        <FlashSales />

        <BrowseCategory />

        <BestSellingProduct />

        <Banner />

        <OurProducts />

        <FeaturedProduct />

        <div className="w-11/12 lg:w-10/12 mx-auto">
          <Features />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
