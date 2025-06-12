import DiscoverSection from "../../Component/Sections/DiscoverSection";
import ArrivalsSection from "../../Component/Sections/ArrivalsSection";
import FeaturesSection from "../../Component/Sections/FeaturesSection";
import PromoOne from "../../Component/Promos/promoOne/PromoOne";
import CategoriesSection from "../../Component/Sections/CategoriesSection";
import PromoTow from "../../Component/Promos/promoTow/PromoTow";
import CollectionsSections from "../../Component/Sections/CollectionsSection";
import DepartmentSection from "../../Component/Sections/DepatrmentSection";
import PromoThree from "../../Component/Promos/promoThree/PromoThree";
import TrendingSection from "../../Component/Sections/TrendingSection";
import BlogsSection from "../../Component/Sections/BlogsSection";
import ClientSection from "../../Component/Sections/ClientSection";
import Carousel from "../../Component/Sliders/Carousel";

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
