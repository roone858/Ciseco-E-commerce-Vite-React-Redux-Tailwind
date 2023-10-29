import Carousel from "./component/carousel/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarComponent from "./layout/navbar/Navbar";

function App() {
  return (
    <>
      <NavbarComponent />
      <Carousel />
    </>
  );
}

export default App;
