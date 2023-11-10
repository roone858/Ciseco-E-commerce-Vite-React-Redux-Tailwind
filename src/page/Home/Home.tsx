
import NavbarComponent from "../../layout/navbar copy/Navbar";
import DiscoverSection from "../../component/Sections/discoverSection/DiscoverSection";
import ArrivalsSection from "../../component/Sections/arrivalsSection/ArrivalsSection";
import FeaturesSection from "../../component/Sections/featuresSection/FeaturesSection";
import PromoOne from "../../component/promoOne/PromoOne";
import CategoriesSection from "../../component/Sections/categoriesSection/CategoriesSection";
import PromoTow from "../../component/promoTow/PromoTow";
import CollectionsSections from "../../component/Sections/collectionsSection/CollectionsSections";
import DepartmentSection from "../../component/Sections/depatrmentSection/DepartmentSection";
import PromoThree from "../../component/promoThree/PromoThree";
import TrendingSection from "../../component/Sections/trendingSection/TrendingSection";
import BlogsSection from "../../component/Sections/BlogsSection/BlogsSection";
import ClientSection from "../../component/Sections/clientSection/ClientSection";
import Footer from "../../layout/footer/Footer";
import Carousel from "../../component/carousel/Carousel";

const Home = () => {
  return (
    <>
      <div className="w-full h-20"></div>
      <NavbarComponent />
      <Carousel />
      <DiscoverSection />

      <div className="  relative px-6 md:px-8 lg:px-12 mt-24  lg:mt-32">
        <ArrivalsSection />
        <FeaturesSection />
        <PromoOne />
        <CategoriesSection />
        <PromoTow />
        <CollectionsSections />
        <DepartmentSection />
        <PromoThree />
        <TrendingSection />
        <BlogsSection />
        <ClientSection />
        <Footer />
      </div>
    </>
  );
};

export default Home;
