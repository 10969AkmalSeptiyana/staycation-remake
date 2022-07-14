import { useRef } from "react";

import Header from "components/Header/Header";
import Hero from "components/Home/Hero";
import MostPicked from "components/Home/MostPicked";

import Hotels from "components/Home/Hotels";
import Categories from "components/Categories/Categories";

import dataLandingPage from "json/landingPage.json";

export default function LandingPage() {
  const refMostPicked = useRef(null);

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
      </main>
    </>
  );
}
