import { useRef } from "react";

import Header from "components/Header/Header";
import Hero from "components/Home/Hero";
import MostPicked from "components/Home/MostPicked";

import dataLandingPage from "json/landingPage.json";
import Hotels from "components/Home/Hotels";

export default function LandingPage() {
  const refMostPicked = useRef(null);

  return (
    <>
      <Header />
      <Hero data={dataLandingPage.hero} refMostPicked={refMostPicked} />
      <MostPicked
        data={dataLandingPage.mostPicked}
        refMostPicked={refMostPicked}
      />
      <Hotels data={dataLandingPage.hotels} />
    </>
  );
}
