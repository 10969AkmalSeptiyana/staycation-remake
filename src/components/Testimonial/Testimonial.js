import Button from "components/ui/Button";
import Star from "components/ui/Star";

export default function Testimonial({ data }) {
  return (
    <section className="container">
      <div
        className="row align-items-center justify-content-center"
        style={{ gap: 57 }}
      >
        <div className="col-auto">
          <div className="testimonial-hero">
            <img src={data.imageUrl} alt="Testimonial" />
          </div>
        </div>

        <div className="col-auto">
          <h4 style={{ marginBottom: 40 }}>{data.name}</h4>
          <Star value={data.rate} width={35} height={35} spacing={4} />
          <h5
            className="h2 fw-light line-height-2 my-3"
            style={{ maxWidth: 595 }}
          >
            {data.content}
          </h5>
          <span className="text-gray-500 fw-light">
            {data.familyName}, {data.familyOccupation}
          </span>

          <div>
            <Button
              className="btn text-white"
              style={{ marginTop: 40, padding: "10px 30px" }}
              hasShadow
              isPrimary
              type="link"
              href={`/testimonial/${data._id}`}
            >
              Read Their Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
