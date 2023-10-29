import image1 from "../../assets/hero-right.webp";
import image2 from "../../assets/hero-right-2.webp";
import image3 from "../../assets/hero-right-3.webp";
import Carousel from "react-bootstrap/Carousel";
import "./carousel.css";

function UncontrolledExample() {
  return (
    <Carousel slide={true}>
      <Carousel.Item className="carousel-item">
        <ItemContent image={image1} />
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <ItemContent image={image2} />
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <ItemContent image={image3} />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;

const ItemContent = ({ image }: { image: string }) => {
  return (
    <div
      className="relative"
      style={{ height: "600px", padding: "176px 40px" }}
    >
      <div className=" text relative w-75">
        <div className="">
          <span
            className="block display-6 fw-bolder  "
            style={{ color: "#334155", fontSize: 20 }}
          >
            In this season, find the best 🔥
          </span>
          <h2 className="fw-bolder relative  mt-4 ">
            Exclusive collection for everyone
          </h2>
        </div>
        <a
          className="btn btn-dark rounded-5   px-5 py-3 mt-5"
          href="/"
          
        >
          <span className="me-2">Explore now</span>
          <span>
            <svg
              width="18px"
              height="18px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke=""
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11ZM11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.125 20 15.078 19.2635 16.6177 18.0319L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L18.0319 16.6177C19.2635 15.078 20 13.125 20 11C20 6.02944 15.9706 2 11 2Z"
                  fill="#ffffff"
                ></path>{" "}
              </g>
            </svg>
          </span>
        </a>
      </div>
      <div className="image-container mt-10  w-50">
        <img
          alt="Exclusive collection for everyone"
          className=" relative  h-100  "
          sizes="(max-width: 768px) 100vw, 50vw"
          src={image}
        />
      </div>
    </div>
  );
};
