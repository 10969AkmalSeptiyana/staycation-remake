import BreadCrumb from "components/ui/BreadCrumb";

export default function PageDetailTitle({ data, breadcrumb }) {
  return (
    <section className="container spacing-sm">
      <div className="row align-items-center">
        <div className="col-12 col-md">
          <BreadCrumb data={breadcrumb} />
        </div>
        <div className="col-12 col-md-auto text-center">
          <h1 className="fw-bold">{data.name}</h1>
          <span className="text-gray-400 fw-light">
            {data.city}, {data.country}
          </span>
        </div>
        <div className="col"></div>
      </div>
    </section>
  );
}
