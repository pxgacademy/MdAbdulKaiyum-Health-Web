import { Bookmark } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionContainer from "@/components/SectionContainer";

const AppointmentAd = () => {
  return (
    <SectionContainer className="shadow-lg rounded-2xl">
      <div className="lg:flex items-center justify-between px-4 sm:px-6 md:p-8 py-6">
        <div className="font-bangla">
          <h3 className="text-3xl md:text-4xl pb-2">
            চিকিৎসার জন্য আজ‌ই অ্যাপয়েন্টমেন্ট বুক করুন
          </h3>
          <p className="text-lg">
            • ঔষধ মুক্ত জীবন সুস্থ জীবন, আর এর জন্য প্রয়োজন স্বাস্থ্যকর লাইফ
            স্টাইল।
          </p>
        </div>

        <Button className="min-w-48 mt-5 lg:mt-0 flex items-center gap-x-2 hover:bg-red-500 hover:scale-110">
          <Bookmark /> Book Appointment
        </Button>
      </div>
    </SectionContainer>
  );
};

export default AppointmentAd;
