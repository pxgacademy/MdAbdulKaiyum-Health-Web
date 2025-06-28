"use client";
import SectionContainer from "@/components/SectionContainer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { histories } from "./demoData";
import SectionTitle from "@/components/SectionTitle";

const HappyHistory = () => {
  return (
    <SectionContainer>
      <SectionTitle>সুখী হওয়ার গল্প</SectionTitle>
      <Swiper className="mt-8 shadow-lg">
        {histories?.map((history, i) => (
          <SwiperSlide key={i}>
            <div className="min-h-80 flex flex-col items-center justify-center text-center p-8 bg-base-200 rounded-2xl">
              <p className="italic font-bangla font-semibold text-lg">
                {history.content}
              </p>
              <img
                src={history.image}
                alt={history.name}
                className="size-12 object-cover rounded-full mt-3 mb-1.5"
              />
              <p className="text-base">{history.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionContainer>
  );
};

export default HappyHistory;
