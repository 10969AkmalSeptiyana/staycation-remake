import { ReactComponent as IconLocation } from "assets/images/location.svg";
import Button from "components/ui/Button";

export default function Categories({ data }) {
  return data.map((category) => {
    if (category.items.length === 0) return null;

    return (
      <section className="container" key={category._id}>
        <h4 className="mb-3 fw-medium">{category.name}</h4>
        <div className="custom-grid">
          {category.items.map((item) => {
            return (
              <div className="item column-3 row-1" key={item._id}>
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
  });
}
