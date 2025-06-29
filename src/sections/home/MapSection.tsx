"use client";

import LocationMap from "@/components/LocationMap";
import SectionContainer from "@/components/SectionContainer";

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
