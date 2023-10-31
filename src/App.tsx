import Carousel from "./component/carousel/Carousel";
import "./App.css";
import NavbarComponent from "./layout/navbar copy/Navbar";
import DiscoverSection from "./component/discoverSection/DiscoverSection";
import ArrivalsSection from "./component/arrivalsSection/ArrivalsSection";
// import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <div className="light">
        <NavbarComponent />
        <Carousel />
        <DiscoverSection />
        <ArrivalsSection />
      </div>
    </>
  );
}

export default App;
