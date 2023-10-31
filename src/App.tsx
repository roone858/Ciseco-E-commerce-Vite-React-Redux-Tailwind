import Carousel from "./component/carousel/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarComponent from "./layout/navbar/Navbar";
import DiscoverSection from "./component/discoverSection/DiscoverSection";
import ArrivalsSection from "./component/arrivalsSection/ArrivalsSection";

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
