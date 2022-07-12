import { ReactComponent as IconLocation } from "assets/images/location.svg";
import Button from "components/ui/Button";

export default function MostPicked({ data }) {
  return (
    <section className="container">
      <h4 className="mb-3">Most Picked</h4>
      <div className="container-grid">
        {data.map((item) => {
          return (
            <div className="item" key={item._id}>
              <div className="card">
                <div className="tag">
                  ${item.price}{" "}
                  <span className="fw-light">per {item.unit}</span>
                </div>
                <figure className="img-wrapper">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="img-cover"
                  />
                </figure>

                <div className="meta-wrapper">
                  <Button
                    type="link"
                    href={`/properties/${item._id}`}
                    className="stretched-link d-block text-gray-500"
                  >
                    <h5>{item.name}</h5>
                  </Button>
                  <div className="flex align-items-center">
                    <IconLocation style={{ marginRight: 6 }} />
                    <span className="fw-light text-gray-500">
                      {item.city}, {item.country}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
