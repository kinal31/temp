import React from "react";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import { sareePage1 } from "../Data/Saree/page1";
import { dressPage1 } from "../Data/dress/page1";
import { gounsPage1 } from "../Data/Gouns/gouns";
import { kurtaPage1 } from "../Data/Kurta/kurta";
import { mens_kurta } from "../Data/Men/men_kurta";
import { shirt } from "../Data/Men/mens_shirt";
import { menjacket } from "../Data/Men/men_jacket";
import { lengha_page1 } from "../Data/Women/LenghaCholi";
import HomepageSection from "./HomepageSection";

const Homepage = () => {
  

  return (
    <div className="">

      <HomeCarousel images={homeCarouselData} />


      <div className="space-y-10 py-20">

        <div className="">
          <HomepageSection />
        </div>

        <HomeProductSection data={mens_kurta} section={"Men's Kurta"} />

        <HomeProductSection data={shirt} section={"Men's Shirt"} />

        <HomeProductSection data={lengha_page1} section={"Lengha Choli"} />

        <HomeProductSection data={sareePage1} section={"Saree"} />

        <HomeProductSection data={dressPage1} section={"Dress"} />

        <HomeProductSection data={menjacket} section={"Men's Jacket"} />

        <HomeProductSection data={gounsPage1} section={"Women's Gouns"} />

        <HomeProductSection data={kurtaPage1} section={"Women's Kurtas"} />
      </div>

      
    </div>
  );
};

export default Homepage;