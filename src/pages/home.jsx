import React from "react";
import { Redes } from "../components/redes/component";
import TopBanner from "../components/top-bar-banner";
import Carousel from "../components/carousel";
import Footer from "../components/footer"
import Style from "./style";

export function Home() {
  return (
    <Style>
      <div className="Home">
        <TopBanner />
        <Carousel />
        <Redes />
        <Footer />
      </div>
    </Style>
  );
}
