"use client";

import React from "react";
import { useSliderLogic } from "@/src/features/slider/model/sliderLogic";
import { Pagination } from "@/src/features/slider/ui/pagination/pagination";
import { Slide } from "@/src/features/slider/ui/slide/slide";
import { sliderData } from "@/src/features/slider/model/sliderData";

export const Slider = () => {
  const { page, containerRef, goToSlide } = useSliderLogic();

  return (
    <div className="w-full mt-8 lg:mt-[21px]">
      <Pagination
        pagesCount={sliderData.length}
        page={page}
        goToSlide={goToSlide}
      />
      <div className="relative w-full overflow-hidden">
        <div
          ref={containerRef}
          className="flex gap-4 cursor-grab will-change-transform"
        >
          {sliderData.map((el) => (
            <Slide
              key={el.title}
              image={el.image}
              title={el.title}
              text={el.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
