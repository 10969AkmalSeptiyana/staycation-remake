import { useEffect, useRef } from "react";

import Header from "components/Header/Header";
import Hero from "components/Home/Hero";
import MostPicked from "components/Home/MostPicked";

import Hotels from "components/Home/Hotels";
import Categories from "components/Categories/Categories";
import Testimonial from "components/Testimonial/Testimonial";
import Footer from "components/Footer/Footer";

import dataLandingPage from "json/landingPage.json";

export default function LandingPage() {
  const refMostPicked = useRef(null);
  useEffect(() => {
    document.title = "Home Page | Staycation.";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero data={dataLandingPage.hero} refMostPicked={refMostPicked} />
        <MostPicked
          data={dataLandingPage.mostPicked}
          refMostPicked={refMostPicked}
        />
        <Hotels data={dataLandingPage.hotels} />
        <Categories data={dataLandingPage.categories} />
        <Testimonial data={dataLandingPage.testimonial} />
      </main>
      <Footer />
    </>
  );
}
