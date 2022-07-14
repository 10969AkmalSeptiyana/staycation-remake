import Button from "components/ui/Button";

export default function Hotels({ data }) {
  return (
    <section className="hotels">
      <div className="container">
        <h4 className="mb-3 text-center">Hotels with large living room</h4>
        <div className="hotels-grid">
          {data.map((item, index) => {
            return (
              <div className={`item-${index}`} key={item._id}>
                <div className="card card-featured">
                  <div className="star"></div>
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
                      className="stretched-link d-block fw-normal"
                      href={`/properties/`}
                    >
                      <h5>{item.name}</h5>
                    </Button>
                    <span className="fw-light">
                      {item.city} {item.country}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
