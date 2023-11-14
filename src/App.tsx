import "./App.css";
import AboutPage from "./page/AboutPage/AboutPage";
import ContactPage from "./page/ContactPage/ContactPage";
import Home from "./page/Home/Home";

// import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <div data-theme="light" className="light overflow-hidden ">
        <ContactPage />
      </div>
    </>
  );
}

export default App;
