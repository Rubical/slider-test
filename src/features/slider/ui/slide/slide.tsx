import React from "react";
import Image, { StaticImageData } from "next/image";

interface SlideProps {
  image: StaticImageData;
  title: string;
  text: string;
}

export const Slide = React.memo(({ image, title, text }: SlideProps) => {
  return (
    <div className="w-full lg:w-[calc(33.3%-11px)] xl:w-[calc(25%-12px)] h-[212px] lg:h-[256px] shrink-0 bg-[#f0f0f0] p-4 lg:p-6 flex flex-col justify-between rounded-lg">
      <div className="lg:h-full flex flex-row lg:flex-col lg:justify-between gap-6 lg:gap-0 ">
        <Image
          src={image}
          alt="Img"
          className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px]"
        />
        <h3 className="text-2xl leading-7 lg:text-[32px] lg:leading-9">
          {title}
        </h3>
      </div>
      <h4 className="flex lg:hidden text-[14px]">{text}</h4>
    </div>
  );
});
