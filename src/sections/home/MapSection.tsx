import LocationMap from "@/components/LocationMap";
import SectionContainer from "@/components/SectionContainer";

const MapSection = () => {
  return (
    <>
      <div className="mt-10" />
      <SectionContainer className="border border-red-600">
        <LocationMap />
      </SectionContainer>
    </>
  );
};

export default MapSection;
