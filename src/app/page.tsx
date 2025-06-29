"use client";

import AboutUs from "@/sections/home/AboutUs";
import AppointmentAd from "@/sections/home/AppointmentAd";
import BookAppointment from "@/sections/home/BookAppointment";
import HappyHistory from "@/sections/home/happyHistory/HappyHistory";
import HealthyLifestyle from "@/sections/home/healthyLifestyle/HealthyLifestyle";
import OurServices from "@/sections/home/ourServices/OurServices";
import SearchUs from "@/sections/home/SearchUs";
import SliderHomePage from "@/sections/home/SliderHomePage";
import VideoSection from "@/sections/home/videoSection/VideoSection";

export default function Home() {
  return (
    <main>
      <SliderHomePage />
      <HealthyLifestyle />
      <AppointmentAd />
      <OurServices />
      <VideoSection />
      <HappyHistory />
      <AboutUs />
      <BookAppointment />
      <SearchUs />

      <div className="py-40" />
    </main>
  );
}
