import LocationMap from "@/components/LocationMap";
import SectionContainer from "@/components/SectionContainer";

const MapSection = () => {
  return (
    <SectionContainer className="border border-red-600">
      <LocationMap />
    </SectionContainer>
  );
};

export default MapSection;
