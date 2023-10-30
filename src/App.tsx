import Carousel from "./component/carousel/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarComponent from "./layout/navbar/Navbar";
import SwiperGlide, {
  NextNavigationButton,
  PrevNavigationButton,
} from "./component/swiper/SwiperGlide";
import { useRef } from "react";


function App() {
  const swiperRef = useRef(null);

  const handleSwiper = (swiper:any) => {
    swiperRef.current = swiper;
  };
  return (
    <>
      <NavbarComponent />
      <Carousel />
      <div className=" ps-5 overflow-hidden " style={{ margin: "8rem 0rem" }}>
        <div className="header d-flex justify-content-between align-items-center pe-5 mb-5  ">
          <h2 style={{ color: "#111827", fontSize: "36px", fontWeight: 600 }}>
            Discover more.{" "}
            <span style={{ color: "#6b7280" }}>
              Good things are waiting for you
            </span>
          </h2>
          <div className="navigation-buttons d-flex gap-4 ">
            <PrevNavigationButton swiperRef={swiperRef} />
            <NextNavigationButton swiperRef={swiperRef} />
          </div>
        </div>

        <div style={{ minWidth: "1400px" }}>
          <SwiperGlide  handleSwiper={handleSwiper} />
        </div>
      </div>
    </>
  );
}

export default App;
