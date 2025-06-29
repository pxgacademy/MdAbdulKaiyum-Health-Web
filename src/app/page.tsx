"use client";

import AppointmentAd from "@/sections/home/AppointmentAd";
import HealthyLifestyle from "@/sections/home/healthyLifestyle/HealthyLifestyle";
import OurServices from "@/sections/home/ourServices/OurServices";
import SliderHomePage from "@/sections/home/SliderHomePage";

export default function Home() {
  return (
    <main>
      <SliderHomePage />
      <HealthyLifestyle />
      <AppointmentAd />
      <OurServices />

      <div className="py-40" />
    </main>
  );
}
