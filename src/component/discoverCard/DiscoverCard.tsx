import "./discoverCard.css";
const DiscoverCard = ({ color, image }: { color: string; image: string }) => {
  return (
    <div className="me-3">
      <a
        className=" discover-card d-block position-relative rounded-4 overflow-hidden "
        href="/collection"
        style={{
          minWidth: "410px",
          height: "240px",
          textDecoration: "none",
          backgroundColor: color,
        }}
      >
        <div className="d-flex position-relative h-100 p-4">
          <div className="   d-flex flex-column justify-content-between   ">
            <div className="max-w-xs">
              <span
                style={{ fontSize: "0.875rem", color: "rgb(51 65 85)" }}
                className="d-block mb-2 fw-lighter    "
              >
                Explore new arrivals
              </span>
              <h2
                style={{
                  color: "#0f172a",
                  fontSize: "24px",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                Shop the latest <br /> from top brands
              </h2>
            </div>

            <div>
              <button
                style={{ color: "#334155", fontSize: "14px" }}
                className="btn rounded-5  bottom-0  py-3 px-4 bg-white d-inline-block "
              >
                Show me all
              </button>
            </div>
          </div>
          <span className="hove-bg"></span>
          <div className="position-absolute end-0 h-100 top-0  p-4 ">
            <img
              alt="product"
              src={image}
              className="h-100 img-fluid position-relative  "
              style={{ color: "transparent", objectFit: "contain" }}
            />
          </div>
        </div>
      </a>
    </div>
  );
};

export default DiscoverCard;
