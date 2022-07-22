import { useEffect } from "react";

import Header from "components/Header/Header";
import PageDetailTitle from "components/Detail/PageDetailTitle";
import FeaturedImage from "components/Detail/FeaturedImage";
import PageDetailDescription from "components/Detail/PageDetailDescription";
import Activities from "components/Detail/Activities";
import Testimonial from "components/Testimonial/Testimonial";
import Footer from "components/Footer/Footer";

import dataItemsDetail from "json/itemsDetail.json";
import BookingForm from "components/Detail/BookingForm";

export default function DetailsPage() {
  useEffect(() => {
    document.title = "Details Page | Staycation.";
    window.scrollTo(0, 0);
  }, []);

  const breadcrumb = [
    { pageTitle: "Home", pageHref: "/" },
    { pageTitle: "Hotel Details", pageHref: "" },
  ];

  return (
    <>
      <Header />
      <PageDetailTitle data={dataItemsDetail} breadcrumb={breadcrumb} />
      <FeaturedImage data={dataItemsDetail.imageUrls} />
      <section className="container" style={{ marginTop: 30 }}>
        <div className="row">
          <div className="col-auto col-lg-7 pe-5">
            <PageDetailDescription data={dataItemsDetail} />
          </div>
          <div className="col-12 col-lg-5">
            <BookingForm itemDetails={dataItemsDetail} />
          </div>
        </div>
      </section>
      <Activities data={dataItemsDetail.activities} />
      <Testimonial data={dataItemsDetail.testimonial} />
      <Footer />
    </>
  );
}
