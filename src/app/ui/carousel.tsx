"use client";

import { useState } from "react";
import clsx from "clsx";
import Quote from "./quote";

interface QuoteProps {
  paragraphs: string[];
  name: string;
}

interface CarouselProps {
  quotes: QuoteProps[];
}

export default function Carousel({ quotes }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSetIndex = (index: number) => {
    console.log("Index:", index);
    setCurrentIndex(index);
  };

  return (
    <div className="w-full flex items-center overflow-hidden">
      <div className="relative flex items-center justify-center w-full">
        <div
          className="flex w-full max-w-[850px] transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {quotes.map((quote, i) => (
            <div
              key={i}
              className={clsx(
                "flex-shrink-0 flex content-center w-full max-w-[850px] transition-all duration-500 ease-in-out",
                i === currentIndex
                  ? "opacity-100 scale-100"
                  : "opacity-25 scale-95 cursor-pointer blur-[2px]"
              )}
              onClick={() => handleSetIndex(i)}
            >
              <Quote {...quote} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
