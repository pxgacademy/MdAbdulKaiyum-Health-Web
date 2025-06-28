import AppointmentAd from "@/sections/home/AppointmentAd";
import HealthyLifestyle from "@/sections/home/healthyLifestyle/HealthyLifestyle";
import SliderHomePage from "@/sections/home/SliderHomePage";

export default function Home() {
  return (
    <main>
      <SliderHomePage />
      <HealthyLifestyle />
      <AppointmentAd />
      <div className="py-40" />
    </main>
  );
}
