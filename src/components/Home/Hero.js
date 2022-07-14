import ImageHero from "assets/images/banner.png";
import Button from "components/ui/Button";

export default function Hero({ refMostPicked }) {
  function showMostPicked() {
    window.scrollTo({
      top: refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <section className="container">
      <div className="row align-items-center justify-content-between">
        <div className="col-auto" style={{ width: 530 }}>
          <h1 className="hero-title fw-bold line-height-1 mb-3">
            Start Next Vacation <br /> and spend the night
          </h1>
          <p
            className="mb-4 fw-light text-gray-500"
            style={{ maxWidth: 483, lineHeight: "170%" }}
          >
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <Button
            className="btn text-white"
            hasShadow
            isPrimary
            style={{ padding: "12px 40px", fontSize: 18 }}
            onClick={showMostPicked}
          >
            Show Me Now
          </Button>

          <div className="hero-info d-flex align-items-center rounded-3">
            <div className="col-auto">
              <img
                width="36"
                height="36"
                src="/images/treasure.svg"
                alt="Treasure"
              />
              <h6 className="mt-2">
                862 <span className="text-gray-500 fw-light">treasure</span>
              </h6>
            </div>
            <div className="border"></div>
            <div className="col-auto">
              <img
                width="36"
                height="36"
                src="/images/travelers.svg"
                alt="Travelers"
              />
              <h6 className="mt-2">
                80,409 <span className="text-gray-500 fw-light">travelers</span>
              </h6>
            </div>
            <div className="border"></div>
            <div className="col-auto">
              <img
                width="36"
                height="36"
                src="/images/cities.svg"
                alt="Cities"
              />
              <h6 className="mt-2">
                1,492 <span className="text-gray-500 fw-light">cities</span>
              </h6>
            </div>
          </div>
        </div>

        <div className="banner col-auto">
          <img src={ImageHero} alt="house with pool" className="img-fluid" />
        </div>
      </div>
    </section>
  );
}
