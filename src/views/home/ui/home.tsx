import React from "react";
import { Slider } from "@/src/features/slider";

export const Home = () => {
  return (
    <main className="px-4">
      <div className="flex flex-col lg:flex-row h-[79px] lg:h-[68px] lg:items-center lg:border-b border-[#d1d1d1] pt-[7px] lg:pt-0">
        <h2 className="lg:mr-[386px] pb-2 lg:pb-0 text-[26px] leading-[28px] lg:text-[40px] lg:leading-[44px] text-primary border-b border-[#d1d1d1] lg:border-0">
          1.0
        </h2>
        <h2 className="text-[26px] leading-[28px] lg:text-[40px] lg:leading-[44px] pt-2 lg:pt-0 text-primary">
          Наши услуги
        </h2>
      </div>
      <Slider />
    </main>
  );
};
