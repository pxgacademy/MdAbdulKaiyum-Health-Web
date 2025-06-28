"use client";

import "@/custom-css/slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const SliderHomePage = () => {
  return (
    <section className="pt-24">
      <img src="/slider/banner.jpg" />
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={5000}
        stopOnHover={true}
        showThumbs={false}
        showStatus={false}
      >
        <div>
          <img src="/slider/slider-img-1.jpg" />
        </div>
        <div>
          <img src="/slider/slider-img-2.jpg" />
        </div>
        <div>
          <img src="/slider/slider-img-3.jpg" />
        </div>
      </Carousel>
    </section>
  );
};

export default SliderHomePage;
