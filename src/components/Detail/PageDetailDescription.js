import parse from "html-react-parser";

export default function PageDetailDescription({ data }) {
  return (
    <main>
      <h4>About the place</h4>
      {parse(data.description)}
      <div className="row">
        {data.features.map((feature) => {
          return (
            <div
              key={feature._id}
              className="col-auto col-sm-3"
              style={{ marginBottom: 20 }}
            >
              <img
                width="38"
                className="d-block mb-2"
                src={feature.imageUrl}
                alt={feature.name}
              />
              <span>{feature.qty}</span>{" "}
              <span className="text-gray-500 fw-light">{feature.name}</span>
            </div>
          );
        })}
      </div>
    </main>
  );
}
