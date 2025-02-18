"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

export const useSliderLogic = () => {
  const [page, setPage] = useState(1);
  const [visibleSlides, setVisibleSlides] = useState(4);
  const containerRef = useRef<HTMLDivElement>(null);

  // Обновляем количество видимых слайдов в зависимости от ширины экрана
  useEffect(() => {
    const updateVisibleSlides = () => {
      const width = window.innerWidth;
      setVisibleSlides(width <= 640 ? 1 : width <= 1024 ? 3 : 4);
    };

    window.addEventListener("resize", updateVisibleSlides);
    updateVisibleSlides();

    return () => window.removeEventListener("resize", updateVisibleSlides);
  }, []);

  // Логика перетаскивания слайдов
  useEffect(() => {
    const container = containerRef.current;

    const slides = container!.children;
    const slideWidth = slides[0].clientWidth + 16;
    const maxOffset = -(slides.length - visibleSlides) * slideWidth;

    Draggable.create(container, {
      type: "x",
      inertia: true,
      bounds: { minX: maxOffset, maxX: 0 },
      edgeResistance: 0.85,
      onDragEnd: function () {
        const closestIndex = Math.round(this.x / slideWidth);
        const currentIndex = Math.max(
          Math.min(-closestIndex, slides.length - visibleSlides),
          0
        );

        gsap.to(container, {
          x: currentIndex * -slideWidth,
          duration: 0.5,
          ease: "power2.out",
        });
        setPage(currentIndex + 1);
      },
    });
  }, [visibleSlides]);

  // Переход к слайду
  const goToSlide = (pageNumber: number) => {
    const container = containerRef.current;
    if (!container) return;

    const slides = container.children;
    const slideWidth = slides[0].clientWidth + 16;
    const offset = (pageNumber - 1) * -slideWidth;

    gsap.to(container, { x: offset, duration: 0.3, ease: "power2.out" });
    setPage(pageNumber);
  };

  return { page, containerRef, goToSlide };
};
