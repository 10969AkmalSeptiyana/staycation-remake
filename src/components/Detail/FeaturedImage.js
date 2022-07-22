export default function FeaturedImage({ data }) {
  return (
    <section className="container" style={{ marginBottom: 0 }}>
      <div className="featured-grid">
        {data.map((item, index) => {
          return (
            <div key={item._id} className={`item-${index}`}>
              <div className="card h-100">
                <figure className="img-wrapper">
                  <img src={item.url} alt={item._id} className="img-cover" />
                </figure>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
