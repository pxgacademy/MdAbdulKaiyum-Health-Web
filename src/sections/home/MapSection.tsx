import LocationMap from "@/components/LocationMap";
import SectionContainer from "@/components/SectionContainer";

const MapSection = () => {
  return (
    <SectionContainer className="p-6 border">
      <h2 className="text-2xl font-bold">আমাদের লোকেশন</h2>
      <LocationMap />
    </SectionContainer>
  );
};

export default MapSection;
