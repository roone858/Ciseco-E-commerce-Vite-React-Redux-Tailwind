import DiscoverSection from "../../components/Sections/DiscoverSection";
import ArrivalsSection from "../../components/Sections/ArrivalsSection";
import FeaturesSection from "../../components/Sections/FeaturesSection";
import PromoOne from "../../components/Promos/promoOne/PromoOne";
import CategoriesSection from "../../components/Sections/CategoriesSection";
import PromoTow from "../../components/Promos/promoTow/PromoTow";
import CollectionsSections from "../../components/Sections/CollectionsSection";
import DepartmentSection from "../../components/Sections/DepatrmentSection";
import PromoThree from "../../components/Promos/promoThree/PromoThree";
import TrendingSection from "../../components/Sections/TrendingSection";
import BlogsSection from "../../components/Sections/BlogsSection";
import ClientSection from "../../components/Sections/ClientSection";
import Carousel from "../../components/Sliders/Carousel";

const Home = () => {
  return (
    <>
      <div className="w-full h-20"></div>

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
      </div>
    </>
  );
};

export default Home;
