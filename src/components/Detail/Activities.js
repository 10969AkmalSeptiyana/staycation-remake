import Button from "components/ui/Button";

export default function Activities({ data }) {
  if (data.length === 0) return null;
  return (
    <section className="container">
      <h4 className="mb-3 fw-medium">Treasure to Choose</h4>
      <div className="custom-grid">
        {data.map((item) => {
          return (
            <div className="item" key={item._id}>
              <div className="card">
                {item.isPopular && (
                  <div className="tag">
                    Popular <span className="fw-light">Choice</span>
                  </div>
                )}
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
                    className="stretched-link d-block text-gray-800"
                  >
                    <h5>{item.name}</h5>
                  </Button>
                  <span className="text-gray-500">{item.type}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
