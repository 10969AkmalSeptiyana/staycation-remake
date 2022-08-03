import { InputText } from "components/ui/Form";

export default function BookingInformation({
  data,
  ItemDetails,
  checkout,
  onChange,
}) {
  return (
    <div className="container" style={{ marginBottom: 30 }}>
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-5 border-right checkout-left">
          <div className="card">
            <figure className="img-wrapper" style={{ height: 270 }}>
              <img
                src={ItemDetails.imageUrls[0].url}
                alt={ItemDetails.name}
                className="img-cover"
              />
            </figure>
            <div className="row align-items-center">
              <div className="col">
                <div className="meta-wrapper">
                  <h5>{ItemDetails.title}</h5>
                  <span className="text-gray-500">
                    {ItemDetails.city}, {ItemDetails.country}
                  </span>
                </div>
              </div>
              <div className="col-auto">
                <span>
                  ${+checkout.duration * ItemDetails.price} USD
                  <span className="text-gray-500"> per </span>
                  {checkout.duration} {ItemDetails.unit}
                  {+checkout.duration > 1 ? "s" : ""}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-5 checkout-right">
          <label htmlFor="firstName">First Name</label>
          <InputText
            id="firstName"
            name="firstName"
            value={data.firstName}
            onChange={onChange}
          />

          <label htmlFor="lastName">Last Name</label>
          <InputText
            id="lastName"
            name="lastName"
            value={data.lastName}
            onChange={onChange}
          />

          <label htmlFor="email">Email Address</label>
          <InputText
            id="email"
            name="email"
            value={data.email}
            onChange={onChange}
          />

          <label htmlFor="phone">Phone Number</label>
          <InputText
            id="phone"
            name="phone"
            value={data.phone}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
}
