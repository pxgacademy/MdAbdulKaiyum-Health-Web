import SectionContainer from "@/components/SectionContainer";
import HealthyLifestyleLeft from "./HealthyLifestyleLeft";
import HealthyLifestyleRight from "./HealthyLifestyleRight";
import SectionTitle from "@/components/SectionTitle";

const HealthyLifestyle = () => {
  return (
    <SectionContainer>
      <SectionTitle>
        স্বাস্থ্যকর লাইফস্টাইল
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          fill="currentColor"
          className="w-10 h-10 text-blue-600"
        >
          <path d="M435-279h90v-156h156v-90H525v-156h-90v156H279v90h156v156ZM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Z"></path>
        </svg>
      </SectionTitle>

      <div className="mt-8 grid md:grid-cols-2 gap-8 md:gap-0">
        <HealthyLifestyleLeft />
        <HealthyLifestyleRight />
      </div>
    </SectionContainer>
  );
};

export default HealthyLifestyle;
