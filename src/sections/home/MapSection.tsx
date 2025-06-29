"use client";

import SectionContainer from "@/components/SectionContainer";
import dynamic from "next/dynamic";

const LocationMap = dynamic(() => import("../../components/LocationMap"), {
  ssr: false,
});

const MapSection = () => {
  return (
    <>
      <div className="mt-10" />
      <SectionContainer>
        <LocationMap />
      </SectionContainer>
    </>
  );
};

export default MapSection;
