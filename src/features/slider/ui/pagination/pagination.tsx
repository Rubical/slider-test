import React from "react";

interface PaginationProps {
  pagesCount: number;
  page: number;
  goToSlide: (pageNumber: number) => void;
}

export const Pagination = ({
  pagesCount,
  page,
  goToSlide,
}: PaginationProps) => {
  const pageNumbers = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <div className="flex lg:hidden mb-6 gap-2">
      {pageNumbers.map((pageNumber) => {
        const isActive = pageNumber === page;
        return (
          <button
            key={pageNumber}
            onClick={() => goToSlide(pageNumber)}
            className={`relative h-2 rounded-full transition-all duration-300 ${
              isActive ? "w-10" : "w-2"
            } bg-[#cccccc]`}
          >
            {isActive && (
              <span className="absolute right-0 top-0 h-full w-1/2 bg-[#1c1c1c] rounded-[10px] transition-all duration-300 ease-in-out opacity-100 -translate-x-5" />
            )}
          </button>
        );
      })}
    </div>
  );
};
