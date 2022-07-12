import Header from "components/Header/Header";
import Hero from "components/Home/Hero";
import MostPicked from "components/Home/MostPicked";

import dataLandingPage from "json/landingPage.json";

export default function LandingPage() {
  return (
    <>
      <Header />
      <Hero data={dataLandingPage.hero} />
      <MostPicked data={dataLandingPage.mostPicked} />
    </>
  );
}
