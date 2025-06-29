"use client";

import Button from "@/components/ui/Button";
import { Bookmark } from "lucide-react";

const BookAppointment = () => {
  return (
    <section className="mt-20 relative w-full max-h-60 md:max-h-96 overflow-hidden flex items-center justify-center">
      <img
        src="/bg_banner.jpg"
        alt="banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute w-full h-full bg-black-55 hover:bg-black/60 backdrop-blur-xs flex flex-col justify-center items-center transition-colors duration-200 cursor-default px-4 text-center">
        <h3 className="text-xl md:text-3xl font-bold mb-4 text-white">
          চিকিৎসার জন্য নাম লেখাতে আজ‌ই অ্যাপয়েন্টমেন্ট বুক করুন
        </h3>
        <Button className="min-w-48 mt-3 md:mt-5 lg:mt-0 flex items-center gap-x-2 hover:bg-red-500 hover:scale-110">
          <Bookmark /> Book Appointment
        </Button>
      </div>
    </section>
  );
};

export default BookAppointment;
