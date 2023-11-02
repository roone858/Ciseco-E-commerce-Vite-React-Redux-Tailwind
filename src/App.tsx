import Carousel from "./component/carousel/Carousel";
import "./App.css";
import NavbarComponent from "./layout/navbar copy/Navbar";
import DiscoverSection from "./component/discoverSection/DiscoverSection";
import ArrivalsSection from "./component/arrivalsSection/ArrivalsSection";

import PromoOne from "./component/promoOne/PromoOne";
import FeaturesSection from "./component/featuresSection/FeaturesSection";
import CategoriesSection from "./component/categoriesSection/CategoriesSection";
import PromoTow from "./component/promoTow/PromoTow";
import CollectionsSections from "./component/collectionsSection/CollectionsSections";
import DepartmentSection from "./component/depatrmentSection/DepartmentSection";
import PromoThree from "./component/promoThree/PromoThree";
import TrendingSection from "./component/trendingSection/TrendingSection";
import BlogsSection from "./component/BlogsSection/BlogsSection";
// import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <div className="light ">
        <NavbarComponent />
        <Carousel />
        <div className=" relative  my-24 px-10 lg:my-32">
          <DiscoverSection />
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
        </div>
      </div>
    </>
  );
}

export default App;
